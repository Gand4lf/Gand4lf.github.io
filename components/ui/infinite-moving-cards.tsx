"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: React.ReactNode[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            setStart(true);
        }
    }

    const speedValue = speed === "fast" ? 10 : speed === "normal" ? 40 : 10;

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
                style={{
                    "--animation-duration": `${speedValue}s`,
                    animationDirection: direction === "left" ? "normal" : "reverse",
                } as React.CSSProperties}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="flex-shrink-0"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};