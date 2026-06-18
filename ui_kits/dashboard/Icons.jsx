// Atlas — shared icon set (Lucide-style 24px stroke icons) for the UI kits.
// Attaches an `Icon` component to window so all kit scripts can use it.
(function () {
  const S = (paths) => (props) =>
    React.createElement(
      "svg",
      Object.assign({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
      paths.map((d, i) => React.createElement("path", { key: i, d }))
    );
  const raw = (children) => (props) =>
    React.createElement("svg", Object.assign({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props), children);

  const ICONS = {
    grid: S(["M3 3h7v7H3z", "M14 3h7v7h-7z", "M14 14h7v7h-7z", "M3 14h7v7H3z"]),
    users: (p) => raw([
      React.createElement("path", { key: 1, d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      React.createElement("circle", { key: 2, cx: 9, cy: 7, r: 4 }),
      React.createElement("path", { key: 3, d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
      React.createElement("path", { key: 4, d: "M16 3.13a4 4 0 0 1 0 7.75" }),
    ])(p),
    chart: (p) => raw([
      React.createElement("line", { key: 1, x1: 18, y1: 20, x2: 18, y2: 10 }),
      React.createElement("line", { key: 2, x1: 12, y1: 20, x2: 12, y2: 4 }),
      React.createElement("line", { key: 3, x1: 6, y1: 20, x2: 6, y2: 14 }),
    ])(p),
    card: (p) => raw([
      React.createElement("rect", { key: 1, x: 1, y: 4, width: 22, height: 16, rx: 2 }),
      React.createElement("line", { key: 2, x1: 1, y1: 10, x2: 23, y2: 10 }),
    ])(p),
    settings: (p) => raw([
      React.createElement("circle", { key: 1, cx: 12, cy: 12, r: 3 }),
      React.createElement("path", { key: 2, d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" }),
    ])(p),
    search: (p) => raw([
      React.createElement("circle", { key: 1, cx: 11, cy: 11, r: 8 }),
      React.createElement("line", { key: 2, x1: 21, y1: 21, x2: 16.65, y2: 16.65 }),
    ])(p),
    bell: S(["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M13.73 21a2 2 0 0 1-3.46 0"]),
    plus: (p) => raw([
      React.createElement("line", { key: 1, x1: 12, y1: 5, x2: 12, y2: 19 }),
      React.createElement("line", { key: 2, x1: 5, y1: 12, x2: 19, y2: 12 }),
    ])(p),
    chevronDown: S(["M6 9l6 6 6-6"]),
    arrowUp: S(["M12 19V5", "M5 12l7-7 7 7"]),
    arrowDown: S(["M12 5v14", "M19 12l-7 7-7-7"]),
    logout: S(["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"]),
    filter: S(["M22 3H2l8 9.46V19l4 2v-8.54L22 3z"]),
    download: S(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"]),
    sparkles: S(["M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18l-1.9-5.4L4 10.7l6.1-1.9z"]),
    check: S(["M20 6L9 17l-5-5"]),
    creditCard: (p) => raw([
      React.createElement("rect", { key: 1, x: 1, y: 4, width: 22, height: 16, rx: 2 }),
      React.createElement("line", { key: 2, x1: 1, y1: 10, x2: 23, y2: 10 }),
    ])(p),
    folder: S(["M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"]),
    moon: S(["M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"]),
    sun: (p) => raw([
      React.createElement("circle", { key: 1, cx: 12, cy: 12, r: 5 }),
      React.createElement("path", { key: 2, d: "M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" }),
    ])(p),
  };

  function Icon({ name, size = 20, ...rest }) {
    const C = ICONS[name] || ICONS.grid;
    return React.createElement(C, Object.assign({ width: size, height: size }, rest));
  }
  window.Icon = Icon;
})();
