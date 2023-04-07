import type { XYCoord } from 'dnd-core'
import type { DropTargetMonitor } from 'react-dnd'
import type { DragObjectType } from '../common/types'
import { ELEMENT_ADDRESS_DROPPED } from '../common/constants'

export const DragDropCounting = (
  field: DragObjectType,
  monitor: DropTargetMonitor,
  DroppedRef: {
    current: HTMLDivElement | null
  },
  index: number,
  moveCard: (dragIndex: number, hoverIndex: number) => void,
) => {
  if (field.elementAddress !== ELEMENT_ADDRESS_DROPPED) return

  if (!DroppedRef.current) return

  const dragIndex = field.index

  const hoverIndex = index

  if (dragIndex === hoverIndex) return

  const hoverBoundingRect = DroppedRef.current?.getBoundingClientRect()

  const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

  const clientOffset = monitor.getClientOffset()

  const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

  if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return

  if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

  moveCard(dragIndex, hoverIndex)

  field.index = hoverIndex
}
