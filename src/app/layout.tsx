import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links: {
    text: string;
    url: string;
  }[] = [
    { text: "Home", url: "/" },
    { text: "Admin", url: "/admin" },
    { text: "Поля", url: "/admin/fields" },
  ];

  return (
    <html lang="ru">
      <body className="max-w-4xl mx-auto p-4">
        <nav className="flex gap-2">
          {links.map((link) => (
            <Link href={link.url} key={link.url}>
              {link.text}
            </Link>
          ))}
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
