Surface container for grouped content. Compose with subcomponents or pass children + `padding`.

```jsx
<Card elevation="raised">
  <Card.Header title="Pro plan" subtitle="Billed monthly" action={<Badge tone="brand">Popular</Badge>} />
  <Card.Body>Everything in Starter plus advanced analytics.</Card.Body>
  <Card.Footer><Button size="sm" fullWidth>Upgrade</Button></Card.Footer>
</Card>
```

`elevation`: `flat|raised|elevated`. `interactive` adds hover-lift + focus ring. Subcomponents: `Card.Header` (title/subtitle/action), `Card.Body`, `Card.Footer`, `Card.Media`.
