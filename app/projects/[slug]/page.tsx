import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProjectBySlug } from "@/lib/projects"

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params 
    const project = await getProjectBySlug(slug)

    if (!project) return notFound()

    return (
        <main className="bg-white rounded-t-xl p-6">
            {/* Back link */}
            <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
            >
                ← Back to home
            </Link>

            {/* Title & Subtitle */}
            <h1 className="mt-4 text-balance text-xl font-semibold md:text-2xl">
                {project.title}
            </h1>
            {project.excerpt && (
                <p className="text-muted-foreground">{project.excerpt}</p>
            )}

            {/* Meta info */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Link
                        href={project.repository_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline">
                        Source
                    </Link>
                    <Link
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline">
                        Visit
                    </Link>

                    {/* Tags : Check is exist */}
                    {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {project.tags.map((tag: string) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>

            <Separator className="my-6" />

            <div>
                {/* Image: render image when available */}
                {project.thumbnail_url && (
                    <Image
                        src={project.thumbnail_url}
                        alt={project.title ?? "Illustration"}
                        width={800}
                        height={360}
                        className="mb-4 w-full rounded-md border"
                    />
                )}
                
                {/* @ts-ignore */}
                <div className="prose prose-zinc max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.body }} />
                </div>

                {/* Results: Check is exists */}
                {project.results?.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-lg md:text-xl font-semibold">Results</h2>
                        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {project.results.map((result: any) => (
                                <div key={result.label} className="rounded-md bg-secondary p-4">
                                    <p className="text-xs text-muted-foreground">{result.metric}</p>
                                    <p className="text-lg font-semibold">{result.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
