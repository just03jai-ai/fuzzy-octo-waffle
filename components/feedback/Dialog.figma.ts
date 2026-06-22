// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=142-188
// source=components/feedback/Dialog.jsx
// component=Dialog
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
const body = instance.getString('Body')
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg', 'XLarge': 'xl' })
const align = instance.getEnum('Align', { 'Center': 'center', 'Top': 'top' })
const showClose = instance.getBoolean('Close')

export default {
  example: figma.code`<Dialog open title="${title}" description="${description}" size="${size}" align="${align}" showClose={${showClose}}>${body}</Dialog>`,
  imports: ['import { Dialog } from "./Dialog.jsx"'],
  id: 'dialog',
  metadata: { nestable: false }
}
