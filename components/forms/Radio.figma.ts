// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=105-68
// source=components/forms/Radio.jsx
// component=Radio
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const description = instance.getString('Description')
const selection = instance.getEnum('Selection', { 'Unselected': 'unselected', 'Selected': 'selected' })
const state = instance.getEnum('State', { 'Default': 'default', 'Focused': 'focused', 'Disabled': 'disabled' })

export default {
  example: figma.code`<Radio label="${label}" description="${description}" ${selection === 'selected' ? 'defaultChecked' : ''} ${state === 'disabled' ? 'disabled' : ''} />`,
  imports: ['import { Radio } from "./Radio.jsx"'],
  id: 'radio',
  metadata: { nestable: true }
}
