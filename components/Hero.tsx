import Link from "next/link"

export function Hero() {
    return (
        <section id="hero" className="px-6 md:px-0">
            <p className="text-md text-muted-foreground">Hi, I'm</p>
            <h1 className="text-pretty text-xl font-semibold">
                Sahrial Ardians
            </h1>
            <p className="text-muted-foreground mt-4">
                Building somethings app for solve problem the peoples.
                And sharing on youtube videos about building.
            </p>
            <p className="text-muted-foreground mt-2">
                <span>Find me on </span>
                <Link href="https://x.com/sahrialardians" className="underline underline-offset-4 text-foreground">
                    X
                </Link>
                <span className="px-1">and</span>
                <Link href="https://youtube.com/sahrialardians" className="underline underline-offset-4 text-foreground">
                    YouTube
                </Link>
            </p>
        </section>
    )
}
