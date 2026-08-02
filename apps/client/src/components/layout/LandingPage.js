import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function LandingPage() {
    return (_jsxs("div", { style: {
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            backgroundColor: "var(--color-bg)",
            fontFamily: "var(--font-mono)",
        }, children: [_jsx("p", { style: {
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                }, children: "amra kara?" }), _jsxs("h1", { style: {
                    fontSize: "clamp(3rem, 10vw, 5.5rem)",
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: "-0.02em",
                    animation: "glitch 3s ease-in-out infinite",
                    textShadow: "0 0 20px color-mix(in srgb, #E53935 60%, transparent), 0 0 60px color-mix(in srgb, #E53935 20%, transparent)",
                }, children: [_jsx("span", { style: { color: "var(--color-primary)" }, children: "#" }), _jsx("span", { style: { color: "var(--color-text)" }, children: "JUMCA" })] }), _jsxs("p", { style: {
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--color-text-secondary)",
                    margin: 0,
                }, children: ["huhh hahh, ", _jsx("span", { style: { color: "var(--color-primary)" }, children: "huhh hahh" })] }), _jsxs("div", { style: {
                    marginTop: "2rem",
                    padding: "0.5rem 1rem",
                    border: "1px solid var(--color-border2)",
                    borderRadius: "0.25rem",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                }, children: [_jsx("span", { style: {
                            display: "inline-block",
                            width: "0.375rem",
                            height: "0.375rem",
                            borderRadius: "9999px",
                            background: "var(--color-success)",
                        } }), "Dev server running"] })] }));
}
export default LandingPage;
