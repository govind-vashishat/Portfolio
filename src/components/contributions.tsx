"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  { ssr: false, loading: () => <div className="h-[112px]" /> },
);

export function Contributions() {
  return (
    <div className="thin-scroll overflow-x-auto pb-1">
      <GitHubCalendar
        username="govind-vashishat"
        colorScheme="dark"
        blockSize={11}
        blockMargin={4}
        fontSize={12}
        theme={{
          dark: ["#0d0d0d", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        style={{ color: "var(--muted)" }}
      />
    </div>
  );
}
