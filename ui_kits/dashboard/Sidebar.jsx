// Atlas Dashboard — left navigation rail.
(function () {
  const { Avatar, Badge } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;

  const NAV = [
    { id: "dashboard", label: "Dashboard", icon: "grid" },
    { id: "customers", label: "Customers", icon: "users", badge: "12" },
    { id: "analytics", label: "Analytics", icon: "chart" },
    { id: "billing", label: "Billing", icon: "creditCard" },
    { id: "settings", label: "Settings", icon: "settings" },
  ];

  function Sidebar({ active, onNavigate }) {
    return (
      <aside style={{
        width: 248, flex: "none", display: "flex", flexDirection: "column",
        background: "var(--color-surface-default)", borderRight: "1px solid var(--color-border-subtle)",
        height: "100%", boxSizing: "border-box",
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "20px 20px 18px" }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--color-action-primary-bg-default)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16, letterSpacing: "-0.04em" }}>A</div>
          <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>Atlas</div>
          <Badge tone="neutral" size="sm" style={{ marginLeft: "auto" }}>Pro</Badge>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: "4px 12px", flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)", padding: "10px 10px 6px" }}>Workspace</div>
          {NAV.map((n) => {
            const on = active === n.id;
            return (
              <button key={n.id} onClick={() => onNavigate(n.id)} style={{
                display: "flex", alignItems: "center", gap: 11, padding: "9px 10px", border: "none", cursor: "pointer",
                borderRadius: 8, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, textAlign: "left",
                background: on ? "var(--color-surface-selected)" : "transparent",
                color: on ? "var(--color-text-brand)" : "var(--color-text-secondary)",
                transition: "background 120ms, color 120ms",
              }}>
                <Icon name={n.icon} size={18} />
                <span>{n.label}</span>
                {n.badge && <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: on ? "var(--color-text-brand)" : "var(--color-text-muted)", background: on ? "var(--color-surface-brand)" : "var(--color-surface-sunken)", borderRadius: 999, padding: "1px 7px" }}>{n.badge}</span>}
              </button>
            );
          })}
        </nav>

        {/* Upsell */}
        <div style={{ margin: "0 16px 12px", padding: 14, borderRadius: 12, background: "var(--color-surface-ai)", border: "1px solid var(--color-border-subtle)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--color-text-ai)", fontSize: 13, fontWeight: 600 }}>
            <Icon name="sparkles" size={15} /> Atlas AI
          </div>
          <div style={{ fontSize: 12.5, color: "var(--color-text-muted)", marginTop: 4, lineHeight: 1.45 }}>Summarize accounts and draft replies automatically.</div>
        </div>

        {/* User */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderTop: "1px solid var(--color-border-subtle)" }}>
          <Avatar name="Ada Lovelace" size="sm" status="online" />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Ada Lovelace</div>
            <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>ada@atlas.io</div>
          </div>
        </div>
      </aside>
    );
  }
  window.Sidebar = Sidebar;
})();
