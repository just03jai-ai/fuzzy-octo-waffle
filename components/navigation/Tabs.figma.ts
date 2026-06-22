// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=149-267
// source=components/navigation/Tabs.jsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

const tab1 = instance.getString('Tab 1')
const tab2 = instance.getString('Tab 2')
const tab3 = instance.getString('Tab 3')
const badge1 = instance.getString('Badge 1')
const badge2 = instance.getString('Badge 2')
const variant = instance.getEnum('Style', { 'Line': 'line', 'Pill': 'pill' })
const active = instance.getEnum('Active', { '1': 'one', '2': 'two' })
const badges = instance.getBoolean('Badges')

export default {
  example: figma.code`<Tabs variant="${variant}" value="${active}" items={[{ value: 'one', label: tab1, badge: badges ? badge1 : undefined }, { value: 'two', label: tab2, badge: badges ? badge2 : undefined }, { value: 'three', label: tab3, disabled: true }]} />`,
  imports: ['import { Tabs } from "./Tabs.jsx"'],
  id: 'tabs',
  metadata: { nestable: true }
}
