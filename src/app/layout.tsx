

import "./globals.css"; // Import des styles globaux

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <html lang="fr">
    <body className="bg-gray-50">{children}</body>
    </html>
);
}
