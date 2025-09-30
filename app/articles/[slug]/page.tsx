import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { NewsletterForm } from "@/components/NewsletterForm"
import { articles } from "@/data/article"

function getArticle(slug: string) {
    return articles.find((a) => a.slug === slug)
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const article = getArticle(slug)

    if (!article) return notFound()

    return (
        <main className="bg-white rounded-t-xl p-6">
            {/* Back link */}
            <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline">
                ← Back to home
            </Link>

            {/* Title & Subtitle */}
            <h1 className="mt-4 text-balance text-xl font-semibold md:text-2xl">
                {article.title}
            </h1>
            {article.excerpt && (
                <p className="text-muted-foreground">{article.excerpt}</p>
            )}

            {/* Meta info */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <time dateTime={article.published_at}>{article.published_at}</time>
                <span aria-hidden="true">•</span>
                <span>{article.reading_time}</span>
                <span aria-hidden="true">•</span>
                <div className="flex flex-wrap gap-1">
                {article.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                    {t}
                    </Badge>
                ))}
                </div>
            </div>

            <Separator className="my-6" />

            {/* Body */}
            <article className="prose prose-neutral max-w-none dark:prose-invert">
                <div className="mb-6">
                    <Image
                        src={article.image_url}
                        alt="Illustration"
                        width={800}
                        height={360}
                        className="w-full rounded-md border"
                    />
                </div>
                {article.body}
            </article>

            {/* Newsletter CTA */}
            <section aria-labelledby="newsletter-cta" className="mt-8">
                <Card className="shadow-none rounded-lg">
                <CardContent>
                    <div className="mx-auto max-w-xl text-center">
                    <h2
                        id="newsletter-cta"
                        className="text-xl font-bold tracking-tight md:text-2xl"
                    >
                        Let's Conneted
                    </h2>
                    <p className="text-pretty text-muted-foreground">
                        Subscribe for newsletter updates.
                    </p>

                    <div className="mt-5">
                        <NewsletterForm align="center" fullWidth={true} />
                    </div>

                    <p className="mt-4 text-xs text-muted-foreground">
                        Unsubscribe at any time.
                    </p>
                    </div>
                </CardContent>
                </Card>
            </section>
        </main>
    )
}
