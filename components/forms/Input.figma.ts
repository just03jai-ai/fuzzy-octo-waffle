// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=110-389
// source=components/forms/Input.jsx
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const placeholder = instance.getString('Placeholder')
const helperText = instance.getString('Helper text')
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg' })
const state = instance.getEnum('State', { 'Default': 'default', 'Focused': 'focused', 'Error': 'error', 'Disabled': 'disabled' })
const required = instance.getBoolean('Required')
const optional = instance.getBoolean('Optional')

export default {
  example: figma.code`<Input label="${label}" placeholder="${placeholder}" helperText="${helperText}" size="${size}" ${required ? 'required' : ''} ${optional ? 'optional' : ''} ${state === 'error' ? 'error="Error message"' : ''} ${state === 'disabled' ? 'disabled' : ''} />`,
  imports: ['import { Input } from "./Input.jsx"'],
  id: 'input',
  metadata: { nestable: true }
}
