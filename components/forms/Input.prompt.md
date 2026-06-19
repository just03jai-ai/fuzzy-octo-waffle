Labelled text field with helper / error text and optional icon adornments; wires label + aria.

```jsx
<Input label="Email" type="email" placeholder="you@company.com"
       iconLeading={<Mail />} helperText="We'll never share it." />
<Input label="Password" type="password" error="Must be at least 12 characters." required />
```

Sizes `sm|md|lg`. Props: `error` (switches to error style + aria-invalid), `helperText`, `required`/`optional`, `iconLeading`/`iconTrailing`. Pair with Textarea and Select from the same group.
