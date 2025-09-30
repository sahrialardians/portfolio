import Link from "next/link"
import { Highlighter } from "@/components/ui/highlighter"
import { Article } from "@/types/article"

export function Articles({ articles }: { articles: Article[] }) {
    return (
        <section id="articles" className="space-y-2">
            <h2 className="text-pretty text-xl font-semibold mb-4">
                <Highlighter action="underline" color="#FF9800">
                    Articles
                </Highlighter>
            </h2>

            <ul>
                {articles.map((article) => (
                    <li key={article.id} className="px-0 py-1 hover:cursor-pointer">
                        <Link href={`/articles/${article.slug}`} className="font-medium" aria-label={`Read: ${article.title}`}>
                        {article.title}
                        </Link>
                        <p className="text-muted-foreground">{article.excerpt}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
