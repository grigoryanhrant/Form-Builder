import type { DropTargetMonitor } from 'react-dnd'
import type { FC, ReactElement } from 'react'
import type { StoreElementProps } from '@store/slices/fields/types'
import type { ElementFullProps } from '@common/types'
import { useCallback, useEffect, useRef, useState } from 'react'
import { addField, updateFields } from '@store/slices/fields/fields'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import { compareObjects } from '@helpers/compareObjects'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { DroppedElementMain } from '../DroppedElement/DroppedElementMain'
import { ELEMENT_ADDRESS_DROPPED, ELEMENT_ADDRESS_FORM } from '@common/constants'
import { DropZone, Main, Wrapper } from './PlaygroundArena.styled'

export const PlaygroundArena: FC = (): ReactElement => {
  const dispatch = useAppDispatch()

  const { fields } = useAppSelector((state) => state.fieldsSlices)

  const [cards, setCards] = useState(fields)

  const myElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setCards(fields)
  }, [fields])

  useEffect(() => {
    if (myElement && myElement.current) {
      myElement.current.addEventListener('mouseleave', mouseLeaveUpdateHandler, true)
    }

    return () => {
      if (myElement && myElement.current) {
        myElement.current.removeEventListener('mouseleave', mouseLeaveUpdateHandler, true)
      }
    }
  }, [cards, fields])

  const mouseLeaveUpdateHandler = () => {
    if (!compareObjects(cards, fields)) {
      dispatch(updateFields(cards))
    }
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'element',
    drop: (field: ElementFullProps) => {
      if (field.elementAddress !== ELEMENT_ADDRESS_FORM) return

      dispatch(
        addField({
          type: field.type,
          name: field.name,
          description: field.description,
          descriptionForInput: field.descriptionForInput,
          placeholder: field.placeholder,
          required: field.required,
          editMode: false,
        }),
      )
    },

    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      dropHere: monitor.isOver(),
    }),
  }))

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: StoreElementProps[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as StoreElementProps],
          ],
        }),
      )
    },
    [cards],
  )

  type DroppedElementOmittedProps = Omit<StoreElementProps, 'drop_id' | 'selectFields'>

  const fieldsRenderCallback = useCallback(
    (
      {
        id,
        type,
        name,
        description,
        descriptionForInput,
        placeholder,
        required,
        editMode,
      }: DroppedElementOmittedProps,
      index: number,
    ) => {
      return (
        <DroppedElementMain
          key={id}
          id={id}
          index={index}
          moveCard={moveCard}
          elementAddress={ELEMENT_ADDRESS_DROPPED}
          type={type}
          name={name}
          description={description}
          descriptionForInput={descriptionForInput}
          placeholder={placeholder}
          editMode={editMode}
          required={required}
        />
      )
    },
    [],
  )

  return (
    <Main ref={myElement}>
      <Wrapper ref={drop} isOver={isOver}>
        {cards.map((card, i) => fieldsRenderCallback(card, i))}

        {isOver && <DropZone>DROP THE ELEMENT HERE</DropZone>}
      </Wrapper>
    </Main>
  )
}
