// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=101-305
// source=components/forms/IconButton.jsx
// component=IconButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', { 'Ghost': 'ghost', 'Solid': 'solid', 'Outline': 'outline' })
const size = instance.getEnum('Size', { 'Small': 'sm', 'Medium': 'md', 'Large': 'lg' })

export default {
  example: figma.code`<IconButton label="${label}" variant="${variant}" size="${size}" />`,
  imports: ['import { IconButton } from "./IconButton.jsx"'],
  id: 'icon-button',
  metadata: { nestable: true }
}
