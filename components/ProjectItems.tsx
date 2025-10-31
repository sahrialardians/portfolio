import Link from "next/link"
import Image from "next/image"
import { Project } from "@/types/project"

export function ProjectItems({ project }: { project: Project }) {
    return (
        <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="block w-[210px] md:w-[240px] shrink-0 rounded-xl pb-2">
            <div>
                <div className="rounded-lg bg-muted">
                    {project.image_url ? (
                        <Image
                            src={project.image_url}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="object-cover rounded-lg border"
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = "/thumbnail.jpg" // fallback image
                            }}
                        />
                        ) : (
                        // fallback jika tidak ada image sama sekali
                        <Image
                            src="/thumbnail.jpg"
                            alt={`${project.title} thumbnail`}
                            width={500}
                            height={300}
                            className="object-cover rounded-lg border"
                            loading="lazy"
                        />
                    )}
                </div>
                <p className="font-medium hover:underline text-foreground mt-3">
                    {project.title}
                </p>
                <p className="text-muted-foreground mt-1">
                    {project.excerpt}
                </p>
            </div>
        </Link>
    )
}
