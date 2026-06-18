Data-driven table with client-side sorting, custom cell renderers, striping and density.

```jsx
<Table
  columns={[
    { key: "name", header: "Account", sortable: true },
    { key: "status", header: "Status", render: (v) => <Badge tone="success" dot>{v}</Badge> },
    { key: "mrr", header: "MRR", align: "right", sortable: true, render: (v) => "$" + v.toLocaleString() },
  ]}
  data={rows} hover striped
/>
```

`columns[]`: `{ key, header, align?, sortable?, width?, render? }`. Props: `striped`, `hover`, `compact`, `rowKey`, `onRowClick`. Right-align numerics; they render with tabular figures.
