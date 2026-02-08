"use client";

import { useEffect, useRef, useState } from "react";

interface Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseX: number;
    baseY: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<Dot[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef<number | undefined>(undefined);
    const [isMobile, setIsMobile] = useState(false);
    const lastWidth = useRef(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const initDots = () => {
            const spacing = window.innerWidth < 768 ? 45 : 35;
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            dotsRef.current = [];

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing + (Math.random() - 0.5) * 10;
                    const y = j * spacing + (Math.random() - 0.5) * 10;

                    dotsRef.current.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                        size: Math.random() * 1.5 + 1,
                    });
                }
            }
        };

        const resizeCanvas = () => {
            // On mobile, browser address bar triggers resize. 
            // Only re-init if width changes significantly to prevent flickering.
            const widthChanged = Math.abs(window.innerWidth - lastWidth.current) > 50;

            if (widthChanged || lastWidth.current === 0) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                lastWidth.current = window.innerWidth;
                initDots();
                checkMobile();
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const updateMousePosition = (x: number, y: number) => {
            mouseRef.current = { x, y };
        };

        const handleMouseMove = (e: MouseEvent) => {
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        const handleTouchEnd = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("touchcancel", handleTouchEnd);

        const animate = () => {
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const interactionRadius = window.innerWidth < 768 ? 100 : 150;

            dotsRef.current.forEach((dot) => {
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < interactionRadius) {
                    const force = (1 - distance / interactionRadius) * 2;
                    const angle = Math.atan2(dy, dx);
                    dot.vx -= Math.cos(angle) * force;
                    dot.vy -= Math.sin(angle) * force;
                }

                const springX = (dot.baseX - dot.x) * 0.05;
                const springY = (dot.baseY - dot.y) * 0.05;
                dot.vx += springX;
                dot.vy += springY;

                dot.x += dot.vx;
                dot.y += dot.vy;
                dot.vx *= 0.9;
                dot.vy *= 0.9;

                ctx.fillStyle = "#1e40af";
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();
            });

            const connectionDistance = window.innerWidth < 768 ? 80 : 100;
            dotsRef.current.forEach((d1, i) => {
                dotsRef.current.slice(i + 1, i + 5).forEach((d2) => {
                    const dx = d1.x - d2.x;
                    const dy = d1.y - d2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.15;
                        ctx.strokeStyle = `rgba(30, 64, 175, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(d1.x, d1.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("touchcancel", handleTouchEnd);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
            style={{ background: "#000000" }}
        />
    );
}
