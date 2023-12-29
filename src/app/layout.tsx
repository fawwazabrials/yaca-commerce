import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "YACA",
	description: "Yet Another Commerce App is the best commerce app.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />

				<main className="px-8 py-2">{children}</main>
			</body>
		</html>
	);
}
