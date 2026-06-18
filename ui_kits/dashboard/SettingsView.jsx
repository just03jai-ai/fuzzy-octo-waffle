// Atlas Dashboard — Settings: profile, preferences, security.
(function () {
  const { Card, Input, Select, Switch, Button, Avatar, Tabs, Alert, Badge } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;

  function Section({ title, desc, children }) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 28, padding: "24px 0", borderTop: "1px solid var(--color-border-subtle)" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>{title}</div>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 520 }}>{children}</div>
      </div>
    );
  }

  function SettingsView() {
    const [tab, setTab] = React.useState("profile");
    return (
      <Card elevation="raised">
        <div style={{ padding: "8px 24px 0" }}>
          <Tabs variant="line" value={tab} onChange={setTab} items={[
            { value: "profile", label: "Profile" },
            { value: "preferences", label: "Preferences" },
            { value: "security", label: "Security" },
          ]} />
        </div>

        <div style={{ padding: "4px 24px 24px" }}>
          {tab === "profile" && (
            <React.Fragment>
              <Section title="Photo" desc="This will be displayed on your profile.">
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Avatar name="Ada Lovelace" size="xl" />
                  <Button variant="secondary" size="sm">Upload new</Button>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </Section>
              <Section title="Personal info" desc="Update your name and contact details.">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Input label="First name" defaultValue="Ada" />
                  <Input label="Last name" defaultValue="Lovelace" />
                </div>
                <Input label="Email" type="email" defaultValue="ada@atlas.io" iconLeading={<Icon name="search" size={16} />} />
                <Select label="Timezone" defaultValue="gmt" options={[
                  { label: "GMT (London)", value: "gmt" },
                  { label: "EST (New York)", value: "est" },
                  { label: "PST (San Francisco)", value: "pst" },
                ]} />
              </Section>
            </React.Fragment>
          )}

          {tab === "preferences" && (
            <Section title="Notifications" desc="Choose what you want to hear about.">
              <Switch defaultChecked label="Weekly digest" description="A summary of account activity every Monday." />
              <Switch defaultChecked label="Product updates" description="New features and improvements." />
              <Switch label="Mentions" description="When a teammate @mentions you." />
              <Switch label="Marketing emails" description="Tips, offers and case studies." />
            </Section>
          )}

          {tab === "security" && (
            <React.Fragment>
              <div style={{ paddingTop: 20 }}>
                <Alert tone="warning" title="Two-factor authentication is off">Protect your account by requiring a code at sign-in.</Alert>
              </div>
              <Section title="Password" desc="Use a strong, unique password.">
                <Input label="Current password" type="password" defaultValue="hunter22" />
                <Input label="New password" type="password" helperText="At least 12 characters." />
                <div><Button>Update password</Button></div>
              </Section>
              <Section title="Sessions" desc="Devices currently signed in.">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", border: "1px solid var(--color-border-subtle)", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>MacBook Pro · London</div>
                    <div style={{ fontSize: 12.5, color: "var(--color-text-muted)" }}>Chrome · Active now</div>
                  </div>
                  <Badge tone="success" dot>This device</Badge>
                </div>
              </Section>
            </React.Fragment>
          )}
        </div>
      </Card>
    );
  }
  window.SettingsView = SettingsView;
})();
