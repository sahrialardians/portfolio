import Link from "next/link"
import Image from "next/image"
import { Highlighter } from "./ui/highlighter"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Project } from "@/types/project"

export function Projects({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="space-y-2">
            <div className="flex items-center justify-between mb-5">
                <h2 id="projects-heading" className="text-pretty text-xl font-semibold">
                    <Highlighter action="underline" color="#FF9800">
                        Projects
                    </Highlighter>
                </h2>
            </div>

            <ScrollArea className="w-full overflow-x-auto">
                <div className="flex gap-4 items-start">
                    {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="block w-[210px] md:w-[240px] shrink-0 rounded-xl pb-2">
                        <div>
                            <div className="rounded-lg bg-muted">
                                <Image
                                    src={project.image_url}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="object-cover rounded-lg border"
                                    loading="lazy"
                                />
                            </div>
                            <p className="font-medium hover:underline text-foreground mt-3">
                                {project.title}
                            </p>
                            <p className="text-muted-foreground mt-1">
                                {project.excerpt}
                            </p>
                        </div>
                    </Link>
                    ))}
                </div>
            </ScrollArea>
        </section>
    )
}
