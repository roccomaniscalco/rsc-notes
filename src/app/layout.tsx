import "@/globals.css";

export const metadata = {
  title: "RSC Todo App",
  description: "Create Todos with Next 13 pp router and server actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body className={`bg-slate-950 text-slate-300`}>{children}</body>
    </html>
  );
}
