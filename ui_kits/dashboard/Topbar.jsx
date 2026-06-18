// Atlas Dashboard — top bar with title, search, actions.
(function () {
  const { Input, IconButton, Button, Dropdown, Avatar } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;

  const TITLES = {
    dashboard: "Dashboard",
    customers: "Customers",
    analytics: "Analytics",
    billing: "Billing",
    settings: "Settings",
  };

  function Topbar({ active, dark, onToggleTheme, onNew, onToast }) {
    return (
      <header style={{
        display: "flex", alignItems: "center", gap: 16, padding: "14px 24px",
        borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-surface-default)",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>{TITLES[active]}</h1>
        </div>
        <div style={{ marginLeft: "auto", width: 280 }}>
          <Input placeholder="Search…" iconLeading={<Icon name="search" size={18} />} />
        </div>
        <IconButton variant="ghost" label="Toggle theme" onClick={onToggleTheme}>
          <Icon name={dark ? "sun" : "moon"} size={20} />
        </IconButton>
        <IconButton variant="ghost" label="Notifications" onClick={() => onToast()}>
          <Icon name="bell" size={20} />
        </IconButton>
        <Button iconLeading={<Icon name="plus" size={18} />} onClick={onNew}>New</Button>
        <Dropdown
          align="end"
          trigger={<button style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0, borderRadius: 999 }} aria-label="Account"><Avatar name="Ada Lovelace" size="md" /></button>}
          items={[
            { type: "label", label: "ada@atlas.io" },
            { label: "Profile" },
            { label: "Workspace settings" },
            { type: "separator" },
            { label: "Sign out", danger: true, icon: <Icon name="logout" size={16} /> },
          ]}
        />
      </header>
    );
  }
  window.Topbar = Topbar;
})();
