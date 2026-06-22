// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=121-47
// source=components/data-display/Tag.jsx
// component=Tag
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const removable = instance.getBoolean('Removable')

export default {
  example: figma.code`<Tag ${removable ? 'onRemove={() => {}}' : ''}>${label}</Tag>`,
  imports: ['import { Tag } from "./Tag.jsx"'],
  id: 'tag',
  metadata: { nestable: true }
}
