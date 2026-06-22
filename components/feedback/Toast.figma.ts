// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=136-131
// source=components/feedback/Toast.jsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const message = instance.getString('Message')
const tone = instance.getEnum('Tone', { 'Info': 'info', 'Success': 'success', 'Warning': 'warning', 'Danger': 'danger' })

export default {
  example: figma.code`<Toast tone="${tone}" title="${title}" message="${message}" />`,
  imports: ['import { Toast } from "./Toast.jsx"'],
  id: 'toast',
  metadata: { nestable: true }
}
