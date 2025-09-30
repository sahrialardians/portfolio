import type { Article } from "@/types/article"

export const articles: Article[] = [
    {
        id: "auth-clerk",
        slug: "auth-clerk",
        title: "Authentication with Clerk Auth",
        excerpt: "Shipping authentication should be boring—in the best possible way.",
        reading_time: "7 min read",
        tags: ["Next.js", "Auth", "Best Practices"],
        image_url: "/thumbnail.jpg",
        body: (
        <>
            <p className="text-pretty text-muted-foreground">
            Shipping authentication should be boring—in the best possible way. This
            guide shows the exact steps and patterns I use to implement account
            creation, sign in, and session management with a clean UX and minimal
            code.
            </p>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">
            What great auth feels like
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Fast: no page reloads, optimistic UI where it makes sense.</li>
            <li>
                Clear errors: you always know what went wrong and what to do next.
            </li>
            <li>
                Secure defaults: rate limiting, safe password rules, and
                device-aware sessions.
            </li>
            </ul>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">UX principles</h2>
            <p className="mt-2 text-muted-foreground">
            Ask for the smallest set of fields, use progressive disclosure for
            advanced options, and phrase errors in human language. Keep the form
            layout single-column and predictable on mobile.
            </p>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">Implementation notes</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>
                Use server components for protected pages; avoid auth checks in
                useEffect.
            </li>
            <li>
                Persist session via secure cookies; prefer short access tokens with
                refresh.
            </li>
            <li>
                Make “forgot password” frictionless—confirmation first, email later.
            </li>
            </ul>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">Final thoughts</h2>
            <p className="mt-2 text-muted-foreground">
            Start simple with email/password. Add social sign-in only when you
            understand your users’ preferred flows and have the analytics to
            justify it.
            </p>
        </>
        ),
        created_at: new Date().toISOString(),
        published_at: "2025-08-21",
    },
    {
        id: "integrate-dodopayment-for-your-saas-app",
        slug: "integrate-dodopayment-for-your-saas-app",
        title: "Integrate DodoPayment For Your SaaS App",
        excerpt: "Payments are more than a checkout button. You’ll need clear pricing, durable webhooks, and a support-friendly admin.",
        reading_time: "6 min read",
        tags: ["Payments", "SaaS", "Next.js"],
        image_url: "/article-2.webp",
        body: (
        <>
            <p className="text-pretty text-muted-foreground">
            Payments are more than a checkout button. You’ll need clear pricing,
            durable webhooks, and a support-friendly admin. Here’s how I structure
            the core pieces to launch fast while keeping room to grow.
            </p>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">Plan your model</h2>
            <p className="mt-2 text-muted-foreground">
            Keep it to three plans: Free, Pro, and Business. Limit differences to
            seats, limits, and support. Align the UI language on both marketing and
            product to reduce confusion.
            </p>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">Critical flows</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Trial start and end—including in-product prompts and emails.</li>
            <li>
                Upgrade/downgrade with proration previews before confirming.
            </li>
            <li>Invoice emails with links to a lightweight billing portal.</li>
            </ul>

            <h2 className="mt-4 text-lg md:text-xl font-semibold">Operations</h2>
            <p className="mt-2 text-muted-foreground">
            Webhooks must be idempotent and logged. Build a tiny “Payments” admin
            page showing subscription state, invoices, and the last ten webhook
            events to help support resolve issues in minutes.
            </p>
        </>
        ),
        created_at: new Date().toISOString(),
        published_at: "2025-08-21",
    },
]
