import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsDone } from "../data/projectsDone";
import { useInView } from "../hooks/useInView";
import type { ThemeProps } from "../types";

function Projects({ isDark }: ThemeProps): React.JSX.Element {
    const [ref, inView] = useInView(0.1);

    return (
        <section
            id="projects"
            ref={ref}
            className={`relative px-6 md:px-10 py-32 reveal ${inView ? "in" : ""}`}
        >
        <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
                <h2 className="font-display text-4xl md:text-5xl">
                Things I've <span className="text-gradient">shipped</span>.
                </h2>
            </div>
            <p className="max-w-sm text-sm opacity-70">
                A handful of recent projects spanning design systems, realtime
                tools, and edge-rendered commerce.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
            {projectsDone.map((p, i) => (
                <ProjectCard isDark={isDark} key={p.id} project={p} index={i} />
            ))}
            </div>
        </div>
        </section>
    );
}

export default Projects;