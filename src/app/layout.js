
import "./globals.css";



export const metadata = {
  title: "Agência Digital",
  description: "Agencia de Branding e design digital ficticia, desenvolvida através dos cursos da DevMedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
