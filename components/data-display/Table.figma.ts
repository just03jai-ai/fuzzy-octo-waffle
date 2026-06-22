// url=https://www.figma.com/design/1sDGtO7k7eCxT9vbnRZeeq/Global-UI--Industry-Wide-?node-id=128-979
// source=components/data-display/Table.jsx
// component=Table
import figma from 'figma'
const instance = figma.selectedInstance

const striped = instance.getBoolean('Striped')
const compact = instance.getBoolean('Compact')

export default {
  example: figma.code`<Table compact={${compact}} striped={${striped}} columns={[{ key: 'name', header: 'Name' }, { key: 'status', header: 'Status' }]} data={[{ id: 1, name: 'Acme', status: 'Active' }]} />`,
  imports: ['import { Table } from "./Table.jsx"'],
  id: 'table',
  metadata: { nestable: true }
}
