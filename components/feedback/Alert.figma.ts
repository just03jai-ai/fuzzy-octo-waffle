// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=133-171
// source=components/feedback/Alert.jsx
// component=Alert
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const message = instance.getString('Message')
const tone = instance.getEnum('Tone', { 'Info': 'info', 'Success': 'success', 'Warning': 'warning', 'Danger': 'danger' })
const dismissible = instance.getBoolean('Dismissible')

export default {
  example: figma.code`<Alert tone="${tone}" title="${title}" ${dismissible ? 'onClose={() => {}}' : ''}>${message}</Alert>`,
  imports: ['import { Alert } from "./Alert.jsx"'],
  id: 'alert',
  metadata: { nestable: true }
}
