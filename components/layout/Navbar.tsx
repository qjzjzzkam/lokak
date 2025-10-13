"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
	{ name: "About", href: "/about" },
	{ name: "Summit", href: "/summit" },
	{ name: "Hackathon", href: "/hackathon" },
	{ name: "Sponsorship", href: "/sponsorship" },
	{ name: "Legacy & Impact", href: "/legacy-impact" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className="fixed top-6 left-1/2 z-[60] -translate-x-1/2 bg-white text-black rounded-2xl shadow-xl px-16 py-3 flex items-center justify-between max-w-7xl w-[99vw] border border-neutral-200"
			style={{
				backdropFilter: "blur(16px)",
				boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
			}}
		>
			<div className="flex items-center gap-3">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/images/logo.png"
						alt="Lokaksema"
						width={96}
						height={24}
						className="h-6 w-auto"
					/>
					<span className="hidden sm:inline font-semibold tracking-tight">
						Lokaksema 2026
					</span>
				</Link>
			</div>
			<div className="hidden lg:flex items-center gap-7 text-sm">
				{NAV.map((item) => (
					<motion.div
						key={item.name}
						whileHover={{
							scale: 1.12,
							color: "#8b5cf6",
							backgroundColor: "rgba(139,92,246,0.08)",
						}}
						transition={{ type: "spring", stiffness: 400, damping: 22 }}
						style={{ borderRadius: "0.5rem" }}
					>
						<Link
							href={item.href}
							className="px-2 py-1 transition-colors"
						>
							{item.name}
						</Link>
					</motion.div>
				))}
				<motion.div
					whileHover={{
						scale: 1.08,
						boxShadow: "0 2px 12px rgba(139,92,246,0.18)",
					}}
					transition={{ type: "spring", stiffness: 400, damping: 22 }}
					style={{ borderRadius: "0.5rem" }}
				>
					<Link
						href="/register"
						className="rounded-lg bg-black text-white px-3 py-2 font-medium hover:bg-neutral-800 transition"
					>
						Register
					</Link>
				</motion.div>
			</div>
			{/* Mobile menu button */}
			<button
				aria-label="Open menu"
				className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-100"
				onClick={() => setOpen((v) => !v)}
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
					<path
						d="M3 6h18M3 12h18M3 18h18"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
				</svg>
			</button>
			{/* Mobile panel */}
			{open && (
				<div className="absolute top-full left-0 w-full rounded-b-2xl border-t border-neutral-200 bg-white shadow-lg">
					<div className="mx-auto max-w-3xl px-4 py-4">
						<div className="grid gap-2 text-sm">
							{NAV.map((item) => (
								<motion.div
									key={item.name}
									whileHover={{
										scale: 1.08,
										color: "#8b5cf6",
										backgroundColor: "rgba(139,92,246,0.08)",
									}}
									transition={{ type: "spring", stiffness: 400, damping: 22 }}
									style={{ borderRadius: "0.5rem" }}
								>
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										className="rounded-md px-2 py-2 transition-colors"
									>
										{item.name}
									</Link>
								</motion.div>
							))}
							<motion.div
								whileHover={{
									scale: 1.08,
									boxShadow: "0 2px 12px rgba(139,92,246,0.18)",
								}}
								transition={{ type: "spring", stiffness: 400, damping: 22 }}
								style={{ borderRadius: "0.5rem" }}
							>
								<Link
									href="/register"
									onClick={() => setOpen(false)}
									className="mt-2 inline-flex rounded-md bg-black text-white px-3 py-2 font-medium hover:bg-neutral-800 transition"
								>
									Register
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
