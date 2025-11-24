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
                {project.thumbnail_url ? (
                    <Image
                        src={project.thumbnail_url}
                        alt={project.title}
                        width={500}
                        height={327}
                        className="border rounded-lg"
                        loading="lazy"
                    />
                    ) : (
                    // fallback jika tidak ada image sama sekali
                    <Image
                        src="/thumbnail.jpg"
                        alt={`${project.title} thumbnail`}
                        width={500}
                        height={327}
                        className="object-cover rounded-lg border"
                        loading="lazy"
                    />
                )}
            </div>
        </Link>
    )
}
