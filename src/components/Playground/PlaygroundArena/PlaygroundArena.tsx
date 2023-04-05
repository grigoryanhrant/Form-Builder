import type { DropTargetMonitor } from 'react-dnd'
import type { IElement } from '@store/slices/fields/types'
import type { FC, ReactElement } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { addField, updateFields } from '@store/slices/fields/fields'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import { compareObjects } from '@helpers/compareObjects'
import { useAppSelector, useAppDispatch } from '@store/hooks'
import { DroppedElementMain } from '../DroppedElement/DroppedElementMain'
import { ELEMENT_ADDRESS_DROPPED, ELEMENT_ADDRESS_FORM } from '@global/constants'
import { DropZone, Main, Wrapper } from './PlaygroundArena.styled'

interface IPlaygroundArenaDropItem {
  elementAddress: string
  type: string
  name: string
  description: string
  descriptionForInput?: string
  placeholder: string
  required?: boolean
}

export const PlaygroundArena: FC = (): ReactElement => {
  const dispatch = useAppDispatch()

  const { fields } = useAppSelector((state) => state.fieldsSlices)

  const [cards, setCards] = useState(fields)

  const myElement = useRef<HTMLDivElement>(null)

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
    drop: (item: IPlaygroundArenaDropItem) => {
      if (item.elementAddress !== ELEMENT_ADDRESS_FORM) return

      dispatch(
        addField({
          type: item.type,
          name: item.name,
          description: item.description,
          descriptionForInput: item.descriptionForInput,
          placeholder: item.placeholder,
          required: item.required,
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
      setCards((prevCards: IElement[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as IElement],
          ],
        }),
      )
    },
    [cards],
  )

  const fieldsRenderCallback = useCallback((item: IElement, index: number) => {
    return (
      <DroppedElementMain
        key={item.id}
        id={item.id}
        index={index}
        moveCard={moveCard}
        elementAddress={ELEMENT_ADDRESS_DROPPED}
        type={item.type}
        name={item.name}
        description={item.description}
        descriptionForInput={item.descriptionForInput}
        placeholder={item.placeholder}
        editMode={item.editMode}
      />
    )
  }, [])

  return (
    <Main ref={myElement}>
      <Wrapper ref={drop} isOver={isOver}>
        {cards.map((card, i) => fieldsRenderCallback(card, i))}

        {isOver && <DropZone>DROP THE ELEMENT HERE</DropZone>}
      </Wrapper>
    </Main>
  )
}
