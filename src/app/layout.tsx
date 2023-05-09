import "@/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-slate-950 text-slate-300`}>
        {children}
      </body>
    </html>
  );
}
