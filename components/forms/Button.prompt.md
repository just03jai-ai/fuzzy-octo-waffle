Use for the primary action on a screen — one prominent `primary` per view, the rest `secondary`/`ghost`.

```jsx
<Button variant="primary" iconLeading={<Plus />}>Create account</Button>
<Button variant="secondary" size="sm">Export</Button>
<Button variant="destructive" loading>Deleting</Button>
```

Variants: `primary` · `secondary` · `ghost` · `destructive` · `link`. Sizes `sm|md|lg`. Props: `fullWidth`, `loading` (spinner + disabled), `iconLeading`/`iconTrailing` (ReactNode), `as="a"` for links. Always sentence-case, verb-first labels.
