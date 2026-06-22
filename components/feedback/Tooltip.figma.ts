// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=138-67
// source=components/feedback/Tooltip.jsx
// component=Tooltip
import figma from 'figma'
const instance = figma.selectedInstance

const content = instance.getString('Content')
const side = instance.getEnum('Side', { 'Top': 'top', 'Bottom': 'bottom', 'Left': 'left', 'Right': 'right' })

export default {
  example: figma.code`<Tooltip content="${content}" side="${side}"><button type="button">Trigger</button></Tooltip>`,
  imports: ['import { Tooltip } from "./Tooltip.jsx"'],
  id: 'tooltip',
  metadata: { nestable: true }
}
