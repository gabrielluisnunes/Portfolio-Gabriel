import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/gabrielluisnunes"),
  title: "Gabriel Luis Parede Nunes | Desenvolvedor Full Stack & Engenheiro de Software",
  description: "Portfólio profissional de Gabriel Luis Parede Nunes. Desenvolvedor Full Stack formado em ADS e em formação em Engenharia de Software, especializado em React, Next.js, Node.js, C# (.NET) e Angular.",
  keywords: ["Gabriel Luis Parede Nunes", "Desenvolvedor Full Stack", "Engenheiro de Software", "Next.js", "React", "TypeScript", "Node.js", "C# .NET", "Foz do Iguaçu", "Paraná"],
  authors: [{ name: "Gabriel Luis Parede Nunes" }],
  creator: "Gabriel Luis Parede Nunes",
  openGraph: {
    title: "Gabriel Luis Parede Nunes | Desenvolvedor Full Stack & Engenheiro de Software",
    description: "Portfólio profissional de Gabriel Luis Parede Nunes. Desenvolvedor Full Stack formado em ADS e em formação em Engenharia de Software, especializado em React, Next.js, Node.js, C# (.NET) e Angular.",
    url: "https://github.com/gabrielluisnunes",
    siteName: "Gabriel Nunes Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Gabriel Luis Parede Nunes",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Luis Parede Nunes | Desenvolvedor Full Stack & Engenheiro de Software",
    description: "Portfólio profissional de Gabriel Luis Parede Nunes. Desenvolvedor Full Stack formado em ADS e em formação em Engenharia de Software, especializado em React, Next.js, Node.js, C# (.NET) e Angular.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[#030303] text-[#f5f5f7]`}>
        {children}
      </body>
    </html>
  );
}
