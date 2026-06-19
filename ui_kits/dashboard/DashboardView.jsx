// Atlas Dashboard — main overview: KPI tiles, revenue chart, recent table.
(function () {
  const { Card, Badge, Avatar, Table, Tabs, Button } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;

  const KPIS = [
    { label: "Monthly recurring revenue", value: "$48.2k", delta: "+12.4%", up: true },
    { label: "Active customers", value: "2,318", delta: "+4.1%", up: true },
    { label: "Net churn", value: "1.8%", delta: "-0.6%", up: true },
    { label: "Avg. NPS", value: "62", delta: "-3", up: false },
  ];

  // simple area chart from data
  const DATA = [22, 30, 26, 38, 34, 46, 42, 55, 60, 58, 72, 80];
  function Chart() {
    const w = 640, h = 180, pad = 8;
    const max = Math.max(...DATA), min = Math.min(...DATA);
    const x = (i) => pad + (i * (w - pad * 2)) / (DATA.length - 1);
    const y = (v) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    const line = DATA.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    const area = `${line} L${x(DATA.length - 1)} ${h} L${x(0)} ${h} Z`;
    return (
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{ display: "block" }}>
        <defs>
          <linearGradient id="atl-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-500)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#atl-area)" />
        <path d={line} fill="none" stroke="var(--color-brand-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  const rows = [
    { id: 1, name: "Northwind Co.", owner: "Ada Lovelace", plan: "Enterprise", status: "Active", mrr: 4200 },
    { id: 2, name: "Initech", owner: "Grace Hopper", plan: "Pro", status: "Active", mrr: 2800 },
    { id: 3, name: "Umbrella Inc.", owner: "Alan Turing", plan: "Pro", status: "Trial", mrr: 0 },
    { id: 4, name: "Hooli", owner: "Edsger Dijkstra", plan: "Starter", status: "Active", mrr: 900 },
    { id: 5, name: "Pied Piper", owner: "Linus Torvalds", plan: "Pro", status: "Past due", mrr: 2800 },
  ];
  const cols = [
    { key: "name", header: "Account", sortable: true, render: (v) => <span style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{v}</span> },
    { key: "owner", header: "Owner", render: (v) => <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={v} size="xs" />{v}</span> },
    { key: "plan", header: "Plan" },
    { key: "status", header: "Status", render: (v) => {
      const tone = v === "Active" ? "success" : v === "Trial" ? "info" : "danger";
      return <Badge tone={tone} dot>{v}</Badge>;
    } },
    { key: "mrr", header: "MRR", align: "right", sortable: true, render: (v) => v ? "$" + v.toLocaleString() : "—" },
  ];

  function KpiTile({ k }) {
    return (
      <Card padding="md" elevation="raised">
        <div style={{ fontSize: 13, color: "var(--color-text-muted)", fontWeight: 500 }}>{k.label}</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginTop: 8 }}>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-primary)", lineHeight: 1 }}>{k.value}</div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 2, fontSize: 12.5, fontWeight: 600, color: k.up ? "var(--color-text-success)" : "var(--color-text-danger)" }}>
            <Icon name={k.up ? "arrowUp" : "arrowDown"} size={14} />{k.delta}
          </span>
        </div>
      </Card>
    );
  }

  function DashboardView() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {KPIS.map((k) => <KpiTile key={k.label} k={k} />)}
        </div>

        <Card elevation="raised">
          <Card.Header
            title="Revenue"
            subtitle="Last 12 months"
            action={<Tabs variant="pill" defaultValue="12m" items={[{ value: "30d", label: "30d" }, { value: "6m", label: "6m" }, { value: "12m", label: "12m" }]} />}
          />
          <div style={{ padding: "8px 12px 16px" }}><Chart /></div>
        </Card>

        <Card elevation="raised">
          <Card.Header
            title="Recent accounts"
            action={<Button variant="secondary" size="sm" iconLeading={<Icon name="download" size={16} />}>Export</Button>}
          />
          <div style={{ padding: "4px 16px 16px" }}>
            <Table columns={cols} data={rows} hover />
          </div>
        </Card>
      </div>
    );
  }
  window.DashboardView = DashboardView;
})();
