// Atlas Dashboard — app shell: routing, theme, "new" dialog, toasts.
(function () {
  const DS = window.AtlasDesignSystem_221c8f;
  const { ToastProvider, useToast, Dialog, Button, Input, Select, Card, Badge, Table } = DS;
  const Icon = window.Icon;

  function BillingView() {
    const invoices = [
      { id: "INV-1042", date: "Jun 1, 2026", amount: 4200, status: "Paid" },
      { id: "INV-1041", date: "May 1, 2026", amount: 4200, status: "Paid" },
      { id: "INV-1040", date: "Apr 1, 2026", amount: 3800, status: "Paid" },
    ];
    const cols = [
      { key: "id", header: "Invoice", render: (v) => <span style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{v}</span> },
      { key: "date", header: "Date" },
      { key: "amount", header: "Amount", align: "right", render: (v) => "$" + v.toLocaleString() },
      { key: "status", header: "Status", render: (v) => <Badge tone="success" dot>{v}</Badge> },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card elevation="raised">
          <Card.Header title="Current plan" subtitle="Enterprise · billed monthly" action={<Badge tone="brand">Active</Badge>} />
          <Card.Body>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>$4,200</span>
              <span style={{ color: "var(--color-text-muted)" }}>/ month · renews Jul 1</span>
            </div>
          </Card.Body>
          <Card.Footer><Button variant="secondary">Change plan</Button><Button variant="ghost">Cancel</Button></Card.Footer>
        </Card>
        <Card elevation="raised">
          <Card.Header title="Invoices" />
          <div style={{ padding: "4px 16px 16px" }}><Table columns={cols} data={invoices} hover /></div>
        </Card>
      </div>
    );
  }

  function NewDialog({ open, onClose }) {
    const { toast } = useToast();
    return (
      <Dialog
        open={open}
        onClose={onClose}
        title="New account"
        description="Add a customer account to your workspace."
        footer={<React.Fragment>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={() => { onClose(); toast({ tone: "success", title: "Account created", message: "Northwind Co. was added." }); }}>Create account</Button>
        </React.Fragment>}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Input label="Account name" placeholder="Acme Inc." required />
          <Input label="Primary contact" type="email" placeholder="owner@acme.com" />
          <Select label="Plan" placeholder="Select a plan" options={[
            { label: "Starter", value: "starter" },
            { label: "Pro", value: "pro" },
            { label: "Enterprise", value: "enterprise" },
          ]} />
        </div>
      </Dialog>
    );
  }

  function Shell() {
    const [active, setActive] = React.useState("dashboard");
    const [dark, setDark] = React.useState(false);
    const [dialog, setDialog] = React.useState(false);
    const { toast } = useToast();

    React.useEffect(() => {
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }, [dark]);

    const view = {
      dashboard: window.DashboardView,
      analytics: window.DashboardView,
      customers: window.CustomersView,
      settings: window.SettingsView,
      billing: BillingView,
    }[active];

    return (
      <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "var(--color-background-app)" }}>
        <window.Sidebar active={active} onNavigate={setActive} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <window.Topbar
            active={active}
            dark={dark}
            onToggleTheme={() => setDark((d) => !d)}
            onNew={() => setDialog(true)}
            onToast={() => toast({ tone: "info", title: "All caught up", message: "No new notifications." })}
          />
          <main style={{ flex: 1, overflowY: "auto", padding: 24 }}>
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
              {view ? React.createElement(view) : null}
            </div>
          </main>
        </div>
        <NewDialog open={dialog} onClose={() => setDialog(false)} />
      </div>
    );
  }

  function App() {
    return (
      <ToastProvider position="bottom-right">
        <Shell />
      </ToastProvider>
    );
  }
  window.DashboardApp = App;
})();
