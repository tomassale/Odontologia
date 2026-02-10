import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Consultorio Odontológico",
  description: "Consultorio de Odontología - Atención lunes a viernes 9 a 18 hs",
  keywords: ["Dentista", "Zona Oeste", "Tablada", "Consultorio"],
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
