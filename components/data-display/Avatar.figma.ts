// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=118-135
// source=components/data-display/Avatar.jsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

const initials = instance.getString('Initials')
const size = instance.getEnum('Size', { 'XS': 'xs', 'SM': 'sm', 'MD': 'md', 'LG': 'lg', 'XL': 'xl' })
const shape = instance.getEnum('Shape', { 'Circle': 'circle', 'Square': 'square' })
const status = instance.getEnum('Status', { 'None': '', 'Online': 'online', 'Away': 'away', 'Busy': 'busy', 'Offline': 'offline' })

export default {
  example: figma.code`<Avatar name="${initials}" size="${size}" shape="${shape}" ${status ? `status="${status}"` : ''} />`,
  imports: ['import { Avatar } from "./Avatar.jsx"'],
  id: 'avatar',
  metadata: { nestable: true }
}
