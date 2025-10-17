import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FadeLayout({ children, isFading }: { children: React.ReactNode, isFading: boolean }) {
	const pathname = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 1 }}
				animate={{ opacity: isFading ? 0 : 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
