// Atlas Dashboard — Customers: searchable, filterable table.
(function () {
  const { Card, Table, Badge, Avatar, Input, Button, Tabs, Tag, IconButton, Dropdown } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;

  const ALL = [
    { id: 1, name: "Northwind Co.", owner: "Ada Lovelace", plan: "Enterprise", status: "Active", seats: 240, mrr: 4200 },
    { id: 2, name: "Initech", owner: "Grace Hopper", plan: "Pro", status: "Active", seats: 48, mrr: 2800 },
    { id: 3, name: "Umbrella Inc.", owner: "Alan Turing", plan: "Pro", status: "Trial", seats: 12, mrr: 0 },
    { id: 4, name: "Hooli", owner: "Edsger Dijkstra", plan: "Starter", status: "Active", seats: 9, mrr: 900 },
    { id: 5, name: "Pied Piper", owner: "Linus Torvalds", plan: "Pro", status: "Past due", seats: 22, mrr: 2800 },
    { id: 6, name: "Stark Industries", owner: "Katherine Johnson", plan: "Enterprise", status: "Active", seats: 510, mrr: 8800 },
    { id: 7, name: "Wayne Enterprises", owner: "Margaret Hamilton", plan: "Pro", status: "Active", seats: 60, mrr: 3200 },
    { id: 8, name: "Soylent Corp", owner: "Barbara Liskov", plan: "Starter", status: "Trial", seats: 4, mrr: 0 },
  ];

  function CustomersView() {
    const [q, setQ] = React.useState("");
    const [filter, setFilter] = React.useState("all");
    const data = ALL.filter((r) =>
      (filter === "all" || r.status.toLowerCase().replace(" ", "") === filter) &&
      (r.name.toLowerCase().includes(q.toLowerCase()) || r.owner.toLowerCase().includes(q.toLowerCase()))
    );

    const cols = [
      { key: "name", header: "Account", sortable: true, render: (v) => <span style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{v}</span> },
      { key: "owner", header: "Owner", render: (v) => <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={v} size="xs" />{v}</span> },
      { key: "plan", header: "Plan", render: (v) => <Tag>{v}</Tag> },
      { key: "status", header: "Status", render: (v) => {
        const tone = v === "Active" ? "success" : v === "Trial" ? "info" : "danger";
        return <Badge tone={tone} dot>{v}</Badge>;
      } },
      { key: "seats", header: "Seats", align: "right", sortable: true },
      { key: "mrr", header: "MRR", align: "right", sortable: true, render: (v) => v ? "$" + v.toLocaleString() : "—" },
      { key: "id", header: "", align: "right", render: () => (
        <Dropdown align="end" trigger={<IconButton size="sm" variant="ghost" label="Row actions"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg></IconButton>}
          items={[{ label: "View" }, { label: "Edit" }, { type: "separator" }, { label: "Delete", danger: true }]} />
      ) },
    ];

    return (
      <Card elevation="raised">
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 16px 12px", flexWrap: "wrap" }}>
          <div style={{ width: 260 }}>
            <Input placeholder="Search accounts…" iconLeading={<Icon name="search" size={18} />} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <Tabs variant="pill" value={filter} onChange={setFilter} items={[
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
            { value: "trial", label: "Trial" },
            { value: "pastdue", label: "Past due" },
          ]} />
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <Button variant="secondary" size="md" iconLeading={<Icon name="filter" size={16} />}>Filters</Button>
            <Button size="md" iconLeading={<Icon name="plus" size={18} />}>Add account</Button>
          </div>
        </div>
        <div style={{ padding: "0 16px 16px" }}>
          <Table columns={cols} data={data} hover />
        </div>
      </Card>
    );
  }
  window.CustomersView = CustomersView;
})();
