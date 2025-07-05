import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export interface DirectionAwareHoverProps {
	imageUrl?: string;
	children: React.ReactNode;
	childrenClassName?: string;
	imageClassName?: string;
	className?: string;
}

export const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
	imageUrl,
	children,
	childrenClassName,
	imageClassName,
	className,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [direction, setDirection] = useState<
		"top" | "bottom" | "left" | "right" | null
	>(null);

	const handleMouseEnter = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!ref.current) return;

		const direction = getDirection(event, ref.current);
		setDirection(direction);
	};

	const handleMouseLeave = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!ref.current) return;

		const direction = getDirection(event, ref.current);
		setDirection(direction);
	};

	const getDirection = (
		ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
		obj: HTMLElement
	) => {
		const { width: w, height: h, left, top } = obj.getBoundingClientRect();
		const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
		const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
		const d = Math.atan2(y, x) / 1.57;
		const t = Math.round(d);
		return t === 1 ? "bottom" : t === -1 ? "top" : t === 0 ? "right" : "left";
	};

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={ref}
			className={cn("group relative overflow-hidden", className)}>
			<AnimatePresence mode="wait">
				<motion.div
					className="relative h-full w-full"
					initial="initial"
					whileHover="animate"
					exit="exit">
					{imageUrl && (
						<motion.img
							src={imageUrl}
							alt=""
							className={cn(
								"h-full w-full scale-[1.15] object-cover",
								imageClassName
							)}
						/>
					)}
					<motion.div
						variants={{
							initial: {
								x:
									direction === "left"
										? "-100%"
										: direction === "right"
										? "100%"
										: "0%",
								y:
									direction === "top"
										? "-100%"
										: direction === "bottom"
										? "100%"
										: "0%",
								opacity: 0,
							},
							animate: {
								x: "0%",
								y: "0%",
								opacity: 1,
							},
							exit: {
								x:
									direction === "left"
										? "-100%"
										: direction === "right"
										? "100%"
										: "0%",
								y:
									direction === "top"
										? "-100%"
										: direction === "bottom"
										? "100%"
										: "0%",
								opacity: 0,
							},
						}}
						className={cn(
							"absolute inset-0 z-10 flex h-full w-full items-end bg-black bg-opacity-40 px-4 py-4",
							childrenClassName
						)}
						transition={{ duration: 0.2, ease: "easeOut" }}>
						{children}
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};
