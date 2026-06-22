// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=145-175
// source=components/navigation/Breadcrumb.jsx
// component=Breadcrumb
import figma from 'figma'
const instance = figma.selectedInstance

const crumb1 = instance.getString('Crumb 1')
const crumb2 = instance.getString('Crumb 2')
const crumb3 = instance.getString('Crumb 3')
const crumb4 = instance.getString('Crumb 4')
const items = instance.getEnum('Items', { '2': 2, '3': 3, '4': 4 })

export default {
  example: figma.code`<Breadcrumb items={[{ label: crumb1, href: '#' }, { label: crumb2, href: '#' }, ${items >= 3 ? figma.code`{ label: crumb3, href: '#' },` : ''} ${items >= 4 ? figma.code`{ label: crumb4 }` : ''}]} />`,
  imports: ['import { Breadcrumb } from "./Breadcrumb.jsx"'],
  id: 'breadcrumb',
  metadata: { nestable: true }
}
