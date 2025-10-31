import Link from "next/link"
import { Article } from "@/types/article"

export function ArticleItems({ article }: { article: Article }) {
    return (
        <li key={article.id} className="px-0 py-1 hover:cursor-pointer">
            <Link href={`/articles/${article.slug}`} className="font-medium" aria-label={`Read: ${article.title}`}>
                {article.title}
            </Link>
            <p className="text-muted-foreground">{article.excerpt}</p>
        </li>
    )
}
