import type { Identifier } from 'dnd-core'
import type { DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import type { DragObjectType } from '@common/types'
import type { FC, ReactElement } from 'react'
import { useRef, memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DroppedElement } from './DroppedElement'
import { DragDropCounting } from '@helpers/dragDropCounting'
import { ElementFullProps } from '@common/types'

export type DroppedElementMainProps = ElementFullProps & {
  moveCard: (dragIndex: number, hoverIndex: number) => void
  value?: string
  editMode?: boolean
}

export const DroppedElementMain: FC<DroppedElementMainProps> = memo(
  ({
    type,
    name,
    description,
    descriptionForInput,
    placeholder,
    required,
    value,
    id,
    index,
    elementAddress,
    moveCard,
    editMode,
  }): ReactElement => {
    const DroppedRef = useRef<HTMLDivElement>(null)

    const [{ handlerId }, drop] = useDrop<DragObjectType, void, { handlerId: Identifier | null }>({
      accept: 'dropped_element',

      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },

      hover(field: DragObjectType, monitor: DropTargetMonitor<DragObjectType, void>) {
        DragDropCounting(field, monitor, DroppedRef, index, moveCard)
      },
    })

    const [{ isDragging }, drag] = useDrag({
      type: 'dropped_element',
      item: { id, index, elementAddress },
      collect: (monitor: DragSourceMonitor<DragObjectType, DragObjectType>) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    drag(drop(DroppedRef))

    return (
      <DroppedElement
        isDragging={isDragging}
        DroppedRef={DroppedRef}
        handlerId={handlerId}
        id={id}
        type={type}
        name={name}
        description={description}
        descriptionForInput={descriptionForInput}
        placeholder={placeholder}
        required={required}
        value={value}
        editMode={editMode}
      />
    )
  },
)

DroppedElementMain.displayName = 'DroppedElementMain'
