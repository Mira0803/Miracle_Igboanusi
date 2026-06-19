import React from "react";
import { useState } from "react";
import type { ProjectCardProps } from "../types/index";

export function ProjectCard({ project, index }: ProjectCardProps): React.JSX.Element {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative rounded-3xl p-8 transition-all duration-500"
            style={{
                background: "rgba(127,127,127,0.06)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(127,127,127,0.15)",
                transform: hover ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hover
                ? "0 30px 60px -20px rgba(99,102,241,0.35)"
                : "0 10px 30px -20px rgba(0,0,0,0.4)",
                animationDelay: `${index * 80}ms`,
            }}
        >

            <div
                className="absolute inset-x-8 -top-px h-px transition-opacity duration-500"
                style={{ background: project.accent, opacity: hover ? 1 : 0.4 }}
            />

            <div
                className="w-full h-50     rounded-2xl mb-6 relative overflow-hidden "
                style={{ background: project.accent }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: hover ? "scale(1.05)" : "scale(1)" }}
                />
                <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-white/80">
                    0{index + 1} / {project.title}
                </div>
            </div>

            <h3 className="font-display text-2xl mb-2">{project.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed mb-5">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((t) => (
                <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                    background: "rgba(127,127,127,0.1)",
                    border: "1px solid rgba(127,127,127,0.2)",
                    }}
                >
                    {t}
                </span>
                ))}
            </div>

            <div
                className="flex gap-3 transition-all duration-500"
                style={{
                opacity: hover ? 1 : 0,
                transform: hover ? "translateY(0)" : "translateY(8px)",
                }}
            >
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium px-4 py-2 rounded-full text-white"
                    style={{ background: project.accent }}
                >
                    Live demo
                </a>

                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium px-4 py-2 rounded-full"
                    style={{
                        background: "rgba(127,127,127,0.08)",
                        border: "1px solid rgba(127,127,127,0.2)",
                }}
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}