// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=103-152
// source=components/forms/Checkbox.jsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const description = instance.getString('Description')
const selection = instance.getEnum('Selection', { 'Unchecked': 'unchecked', 'Checked': 'checked', 'Indeterminate': 'indeterminate' })
const state = instance.getEnum('State', { 'Default': 'default', 'Focused': 'focused', 'Error': 'error', 'Disabled': 'disabled' })

export default {
  example: figma.code`<Checkbox label="${label}" description="${description}" ${selection === 'checked' ? 'defaultChecked' : ''} ${selection === 'indeterminate' ? 'indeterminate' : ''} ${state === 'error' ? 'error' : ''} ${state === 'disabled' ? 'disabled' : ''} />`,
  imports: ['import { Checkbox } from "./Checkbox.jsx"'],
  id: 'checkbox',
  metadata: { nestable: true }
}
