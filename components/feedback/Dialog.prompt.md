Modal surface with scrim, Escape / backdrop dismissal and body scroll lock. Controlled.

```jsx
const [open, setOpen] = React.useState(false);
<Dialog open={open} onClose={() => setOpen(false)}
  title="Delete project?" description="This can't be undone." size="sm"
  footer={<>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
  </>}>
  You can't undo this action.
</Dialog>
```

Sizes `sm|md|lg|xl`. `align="top"` for forms. `closeOnBackdrop`, `showClose` default true.
