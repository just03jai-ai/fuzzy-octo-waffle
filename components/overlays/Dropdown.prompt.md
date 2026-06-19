Click-triggered menu with outside-click / Escape dismissal. Pass a `trigger` + `items`.

```jsx
<Dropdown
  align="end"
  trigger={<Button variant="secondary">Options</Button>}
  items={[
    { type: "label", label: "Actions" },
    { label: "Edit", icon: <Edit />, shortcut: "⌘E", onSelect: edit },
    { type: "separator" },
    { label: "Delete", icon: <Trash />, danger: true },
  ]}
/>
```

Item kinds: `{label,icon?,shortcut?,danger?,disabled?,onSelect?}` · `{type:"separator"}` · `{type:"label",label}`. `align` `start|end`, `side` `top|bottom`.
