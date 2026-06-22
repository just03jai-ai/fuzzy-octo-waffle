// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=115-128
// source=components/forms/Select.jsx
// component=Select
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const value = instance.getString('Value')
const helperText = instance.getString('Helper text')
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg' })
const state = instance.getEnum('State', { 'Placeholder': 'placeholder', 'Default': 'default', 'Focused': 'focused', 'Error': 'error', 'Disabled': 'disabled' })

export default {
  example: figma.code`<Select label="${label}" size="${size}" helperText="${helperText}" placeholder="Choose an option" ${state === 'error' ? 'error="Error message"' : ''} ${state === 'disabled' ? 'disabled' : ''} options={[{ label: value || 'Option', value: 'option' }]} />`,
  imports: ['import { Select } from "./Select.jsx"'],
  id: 'select',
  metadata: { nestable: true }
}
