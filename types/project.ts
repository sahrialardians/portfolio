import { ReactNode } from "react"

export type ProjectResult = {
    label: string,
    value: string
}

export type Project = {
    id: string,
    title: string,
    excerpt: string,
    slug: string,
    tags: string[],
    repository_url: string,
    project_url: string,
    thumbnail_url: string,
    body: ReactNode,
    results: ProjectResult[],
    created_at: string,
    published_at: string
}