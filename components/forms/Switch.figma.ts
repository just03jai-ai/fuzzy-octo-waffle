// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=107-164
// source=components/forms/Switch.jsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const description = instance.getString('Description')
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg' })
const selection = instance.getEnum('Selection', { 'Off': 'off', 'On': 'on' })
const state = instance.getEnum('State', { 'Default': 'default', 'Focused': 'focused', 'Disabled': 'disabled' })

export default {
  example: figma.code`<Switch label="${label}" description="${description}" size="${size}" ${selection === 'on' ? 'defaultChecked' : ''} ${state === 'disabled' ? 'disabled' : ''} />`,
  imports: ['import { Switch } from "./Switch.jsx"'],
  id: 'switch',
  metadata: { nestable: true }
}
