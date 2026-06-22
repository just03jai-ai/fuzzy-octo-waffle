// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=97-149
// source=components/forms/Button.jsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg' })
const loading = instance.getBoolean('Loading')

export default {
  example: figma.code`<Button variant="primary" size="${size}" ${loading ? 'loading' : ''}>${label}</Button>`,
  imports: ['import { Button } from "./Button.jsx"'],
  id: 'button',
  metadata: { nestable: true }
}
