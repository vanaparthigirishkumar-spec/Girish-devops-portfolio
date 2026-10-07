import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANAPARTHI GIRISH KUMAR — DevOps Support | Cloud & CI/CD",
  description:
    "Portfolio of Vanaparthi Girish Kumar, DevOps Support professional focused on cloud, CI/CD, containers, Kubernetes, infrastructure as code, GitOps, observability, and AI/ML.",
};

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}