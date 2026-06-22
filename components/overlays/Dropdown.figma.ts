// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=151-175
// source=components/overlays/Dropdown.jsx
// component=Dropdown
import figma from 'figma'
const instance = figma.selectedInstance

const trigger = instance.getString('Trigger')
const item1 = instance.getString('Item 1')
const item2 = instance.getString('Item 2')
const item3 = instance.getString('Item 3')
const item4 = instance.getString('Item 4')
const align = instance.getEnum('Align', { 'Start': 'start', 'End': 'end' })
const side = instance.getEnum('Side', { 'Bottom': 'bottom', 'Top': 'top' })
const content = instance.getEnum('Content', { 'Basic': 'basic', 'Rich': 'rich' })

export default {
  example: figma.code`<Dropdown align="${align}" side="${side}" trigger={<button type="button">${trigger}</button>} items={content === 'rich' ? [{ type: 'label', label: 'Project' }, { label: item1, shortcut: '⌘E' }, { label: item2, shortcut: '⌘D' }, { type: 'separator' }, { label: item3 }, { label: item4, danger: true }] : [{ label: item1 }, { label: item2 }, { label: item3, disabled: true }]} />`,
  imports: ['import { Dropdown } from "./Dropdown.jsx"'],
  id: 'dropdown',
  metadata: { nestable: true }
}
