import { ReactNode } from "react"

export type Article = {
    id: string,
    title: string,
    excerpt: string,
    reading_time: string,
    slug: string,
    tags: string[],
    image_url: string,
    body: ReactNode,
    created_at: string,
    published_at: string
}