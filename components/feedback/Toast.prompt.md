Transient notifications. Wrap the app in `ToastProvider`, then call `useToast().toast(...)`.

```jsx
<ToastProvider position="bottom-right">
  <App />
</ToastProvider>

const { toast } = useToast();
toast({ tone: "success", title: "Changes saved", message: "Your settings were updated." });
```

`toast(opts)` → id. Options: `tone` (`info|success|warning|danger`), `title`, `message`, `duration` (ms, 0 = sticky). Positions: `top-right|bottom-right|bottom-center`. `Toast` is also exported for controlled use.
