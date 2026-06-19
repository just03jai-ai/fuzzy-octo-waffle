// Atlas Auth — sign-in / sign-up / 2FA flow on a split marketing panel.
(function () {
  const DS = window.AtlasDesignSystem_221c8f;
  const { Input, Button, Checkbox, Alert, Badge } = DS;

  const G = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.07H2.18a11 11 0 0 0 0 9.87l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 1.39 14.97.4 12 .4A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.3 9.14 4.75 12 4.75z"/>
    </svg>
  );
  const Mail = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>);
  const Lock = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);

  function Field(props) { return <Input {...props} />; }

  function AuthCard({ mode, setMode, onSignIn }) {
    if (mode === "2fa") {
      return (
        <div style={{ width: "100%", maxWidth: 380 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 6px", color: "var(--color-text-primary)" }}>Verify it's you</h1>
          <p style={{ margin: "0 0 24px", color: "var(--color-text-muted)", fontSize: 14.5 }}>Enter the 6-digit code from your authenticator app.</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {[0,1,2,3,4,5].map((i) => (
              <input key={i} maxLength={1} inputMode="numeric" defaultValue={i < 3 ? "•" : ""} style={{
                width: 48, height: 56, textAlign: "center", fontSize: 22, fontWeight: 600,
                border: "1px solid var(--color-border-default)", borderRadius: 10, background: "var(--color-surface-default)",
                color: "var(--color-text-primary)", outline: "none",
              }} />
            ))}
          </div>
          <Button fullWidth size="lg" onClick={onSignIn}>Verify &amp; continue</Button>
          <button onClick={() => setMode("signin")} style={{ marginTop: 16, background: "none", border: "none", color: "var(--color-text-link)", cursor: "pointer", fontSize: 14, fontFamily: "var(--font-sans)" }}>← Back to sign in</button>
        </div>
      );
    }
    const signup = mode === "signup";
    return (
      <div style={{ width: "100%", maxWidth: 380 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 6px", color: "var(--color-text-primary)" }}>{signup ? "Create your account" : "Welcome back"}</h1>
        <p style={{ margin: "0 0 24px", color: "var(--color-text-muted)", fontSize: 14.5 }}>
          {signup ? "Start your 14-day free trial — no card required." : "Sign in to your Atlas workspace."}
        </p>

        <Button variant="secondary" fullWidth size="lg" iconLeading={<G />}>Continue with Google</Button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--color-border-subtle)" }} />
          <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>or</span>
          <div style={{ flex: 1, height: 1, background: "var(--color-border-subtle)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {signup && <Field label="Full name" placeholder="Ada Lovelace" />}
          <Field label="Email" type="email" placeholder="you@company.com" iconLeading={<Mail />} />
          <Field label="Password" type="password" placeholder="••••••••" iconLeading={<Lock />} helperText={signup ? "At least 12 characters." : undefined} />
          {!signup && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Checkbox label="Remember me" defaultChecked />
              <a href="#" style={{ fontSize: 13.5, color: "var(--color-text-link)", textDecoration: "none" }}>Forgot password?</a>
            </div>
          )}
          <Button fullWidth size="lg" onClick={() => setMode("2fa")}>{signup ? "Create account" : "Sign in"}</Button>
        </div>

        <p style={{ marginTop: 22, fontSize: 14, color: "var(--color-text-muted)", textAlign: "center" }}>
          {signup ? "Already have an account? " : "New to Atlas? "}
          <button onClick={() => setMode(signup ? "signin" : "signup")} style={{ background: "none", border: "none", color: "var(--color-text-link)", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)" }}>
            {signup ? "Sign in" : "Create one"}
          </button>
        </p>
      </div>
    );
  }

  function AuthApp() {
    const [mode, setMode] = React.useState("signin");
    const [done, setDone] = React.useState(false);
    return (
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {/* Left: form */}
        <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column", padding: "40px 48px", background: "var(--color-surface-default)", overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--color-action-primary-bg-default)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>A</div>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>Atlas</span>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {done
              ? <div style={{ maxWidth: 380, width: "100%" }}><Alert tone="success" title="You're in!">Signed in to the Atlas workspace.</Alert></div>
              : <AuthCard mode={mode} setMode={setMode} onSignIn={() => setDone(true)} />}
          </div>
          <div style={{ fontSize: 12.5, color: "var(--color-text-muted)" }}>© 2026 Atlas, Inc. · Privacy · Terms</div>
        </div>

        {/* Right: brand panel */}
        <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 56px", background: "linear-gradient(160deg, var(--color-brand-700), var(--color-brand-900))", color: "#fff" }}>
          <Badge tone="brand" solid style={{ alignSelf: "flex-start", background: "rgba(255,255,255,.16)", color: "#fff" }}>Atlas Platform</Badge>
          <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "18px 0 14px", maxWidth: 460 }}>One design system. Every surface, shipped faster.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.82)", maxWidth: 440, margin: 0 }}>SaaS, mobile, dashboards and AI products — built on the same tokens, components and patterns.</p>
          <div style={{ display: "flex", gap: 28, marginTop: 36 }}>
            {[["263", "Components"], ["574", "Tokens"], ["AA", "Accessible"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.7)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  window.AuthApp = AuthApp;
})();
