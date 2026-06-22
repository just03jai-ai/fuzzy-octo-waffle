// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=125-175
// source=components/data-display/Card.jsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const subtitle = instance.getString('Subtitle')
const body = instance.getString('Body')
const elevation = instance.getEnum('Elevation', { 'Flat': 'flat', 'Raised': 'raised', 'Elevated': 'elevated' })
const interactive = instance.getBoolean('Interactive')

export default {
  example: figma.code`<Card elevation="${elevation}" ${interactive ? 'interactive' : ''}><Card.Header title="${title}" subtitle="${subtitle}" /><Card.Body>${body}</Card.Body></Card>`,
  imports: ['import { Card } from "./Card.jsx"'],
  id: 'card',
  metadata: { nestable: true }
}
