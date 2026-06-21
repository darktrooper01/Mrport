import { useState } from "react";
import React from "react";

const projects = [
  { id: 1, name: "Tempo Design System", year: "2024", cat: ["ui", "frontend"], type: "Design System", desc: "A full design system built from scratch in Figma and shipped as a React component library. Covers design tokens, 60+ components, and Storybook documentation.", tags: ["UI/UX", "React", "Figma", "Storybook", "TypeScript"], link: "https://your-project-1.com", github: "https://github.com/mahmoud/tempo" },
  { id: 2, name: "Koda SaaS Dashboard", year: "2024", cat: ["frontend"], type: "SaaS · Dashboard", desc: "Designed and built a data-heavy analytics dashboard for a Lagos-based logistics startup. Cut average task time by 40%.", tags: ["Frontend", "Next.js", "Figma", "Recharts"], link: "https://your-project-2.com" },
  { id: 3, name: "Cloudform Infrastructure", year: "2023", cat: ["cloud", "ui"], type: "Cloud · UI", desc: "Designed the UI and helped architect the deployment of a cloud resource management tool on AWS.", tags: ["Cloud", "AWS", "UI Design", "Docker", "Terraform"], link: "https://your-project-3.com" },
  { id: 4, name: "Prism UI Library", year: "2023", cat: ["opensource", "frontend"], type: "Open Source", desc: "Open-source headless React component library. 48 components, full keyboard navigation, and a composable API.", tags: ["Open Source", "React", "Radix UI", "Accessibility"], link: "https://your-project-4.com", github: "https://github.com/mahmoud/prism" },
  { id: 5, name: "Vela E-commerce Redesign", year: "2022", cat: ["ui", "frontend"], type: "E-Commerce · UX", desc: "Full UX audit and redesign of a Nigerian e-commerce platform. Conversion rate improved by 28%.", tags: ["UX Research", "UI Design", "React", "Figma"], link: "https://your-project-5.com" },
  { id: 6, name: "Orbis CI/CD Pipeline", year: "2022", cat: ["cloud"], type: "Cloud · DevOps", desc: "Automated CI/CD pipeline for a fintech startup. Reduced release time from 3 days to under 45 minutes.", tags: ["AWS", "CI/CD", "Docker", "Fintech"], link: "https://your-project-6.com" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "UI / UX", value: "ui" },
  { label: "Frontend", value: "frontend" },
  { label: "Cloud", value: "cloud" },
  { label: "Open Source", value: "opensource" },
];

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M2 10L10 2M4 2h6v6" />
  </svg>
);

export default function WorkPage() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter((p) =>
    active === "all" ? true : p.cat.includes(active)
  );

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.h1}>
          Selected <em style={styles.em}>Work</em>
        </h1>
        <p style={styles.subtitle}>
          Projects spanning UI design, frontend engineering, and cloud
          infrastructure — sometimes all three at once.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={styles.filterRow}>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              ...styles.filterBtn,
              ...(active === f.value ? styles.filterBtnActive : {}),
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div style={styles.list}>
        {filtered.map((p, i) => (
          <div key={p.id} style={styles.item}>
            <div style={styles.itemNum}>0{i + 1}</div>
            <div style={styles.itemMain}>
              <div style={styles.itemRow1}>
                <span style={styles.itemName}>{p.name}</span>
                <span style={styles.itemYear}>{p.year}</span>
              </div>
              <p style={styles.itemDesc}>{p.desc}</p>
              <div style={styles.tagRow}>
                {p.tags.map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <div style={styles.itemActions}>
              <span style={styles.itemType}>{p.type}</span>
              <a href={p.link} target="_blank" rel="noreferrer" style={styles.btnGhost}>
                View Project <ArrowIcon />
              </a>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" style={styles.btnOutline}>
                  GitHub <ArrowIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Fraunces', serif",
    maxWidth: 1020,
    margin: "0 auto",
    padding: "0 52px",
    color: "#141210",
  },
  header: {
    padding: "68px 0 52px",
    borderBottom: "1px solid rgba(20,18,16,0.10)",
  },
  h1: {
    fontFamily: "'Fraunces', serif",
    fontSize: 46,
    fontWeight: 400,
    letterSpacing: "-1.4px",
    marginBottom: 12,
    lineHeight: 1.05,
  },
  em: {
    fontStyle: "italic",
    color: "#c8502a",
  },
  subtitle: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 14,
    color: "#9a9590",
    fontWeight: 300,
    maxWidth: 500,
    lineHeight: 1.8,
  },
  filterRow: {
    display: "flex",
    borderBottom: "1px solid rgba(20,18,16,0.10)",
    overflowX: "auto",
  },
  filterBtn: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9a9590",
    padding: "14px 18px",
    cursor: "pointer",
    border: "none",
    background: "none",
    borderBottom: "2px solid transparent",
    marginBottom: -1,
    fontWeight: 500,
    transition: "all 0.2s",
    whiteSpace: "nowrap",
  },
  filterBtnActive: {
    color: "#c8502a",
    borderBottomColor: "#c8502a",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "52px 1fr auto",
    gap: 32,
    alignItems: "start",
    padding: "36px 0",
    borderTop: "1px solid rgba(20,18,16,0.10)",
  },
  itemNum: {
    fontFamily: "'Fraunces', serif",
    fontSize: 12,
    fontWeight: 300,
    color: "#9a9590",
    paddingTop: 3,
  },
  itemMain: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  itemRow1: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
    marginBottom: 8,
  },
  itemName: {
    fontFamily: "'Fraunces', serif",
    fontSize: 21,
    fontWeight: 400,
    letterSpacing: "-0.4px",
  },
  itemYear: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 11,
    color: "#9a9590",
    letterSpacing: "0.06em",
  },
  itemDesc: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 13,
    color: "#9a9590",
    lineHeight: 1.75,
    fontWeight: 300,
    marginBottom: 16,
    maxWidth: 460,
  },
  tagRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
  },
  tag: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 10,
    color: "#9a9590",
    padding: "4px 10px",
    border: "1px solid rgba(20,18,16,0.10)",
    letterSpacing: "0.05em",
  },
  itemActions: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "flex-end",
    paddingTop: 3,
  },
  itemType: {
    fontFamily: "'Geist', sans-serif",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9a9590",
    textAlign: "right",
    marginBottom: 4,
  },
  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "'Geist', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    padding: "9px 18px",
    cursor: "pointer",
    border: "1px solid rgba(20,18,16,0.10)",
    color: "#9a9590",
    textDecoration: "none",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
  },
  btnOutline: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "'Geist', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    padding: "9px 18px",
    cursor: "pointer",
    border: "1px solid rgba(20,18,16,0.20)",
    color: "#4a4744",
    textDecoration: "none",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
  },
};