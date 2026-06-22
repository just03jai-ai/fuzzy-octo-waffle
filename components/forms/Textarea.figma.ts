// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=113-76
// source=components/forms/Textarea.jsx
// component=Textarea
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const value = instance.getString('Value')
const helperText = instance.getString('Helper text')
const state = instance.getEnum('State', { 'Default': 'default', 'Focused': 'focused', 'Error': 'error', 'Disabled': 'disabled' })

export default {
  example: figma.code`<Textarea label="${label}" defaultValue="${value}" helperText="${helperText}" ${state === 'error' ? 'error="Error message"' : ''} ${state === 'disabled' ? 'disabled' : ''} />`,
  imports: ['import { Textarea } from "./Textarea.jsx"'],
  id: 'textarea',
  metadata: { nestable: true }
}
