// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=120-82
// source=components/data-display/Badge.jsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const tone = instance.getEnum('Tone', { 'Neutral': 'neutral', 'Brand': 'brand', 'Success': 'success', 'Warning': 'warning', 'Danger': 'danger', 'Info': 'info', 'AI': 'ai' })
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg' })
const showDot = instance.getBoolean('Show dot')

export default {
  example: figma.code`<Badge tone="${tone}" size="${size}" ${showDot ? 'dot' : ''}>${label}</Badge>`,
  imports: ['import { Badge } from "./Badge.jsx"'],
  id: 'badge',
  metadata: { nestable: true }
}
