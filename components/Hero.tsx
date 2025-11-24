import { getProfile, getSortedSocialLinks } from "@/lib/profile"
import Link from "next/link"

export async function Hero() {
    const profile = await getProfile();
    const socialLinks = getSortedSocialLinks(profile.social_links, [1, 2]);

    return (
        <section id="hero" className="px-6 md:px-0">
            <p className="text-md text-muted-foreground">Hi, I'm</p>
            <h1 className="text-pretty text-xl font-semibold">
                { profile.fullname }
            </h1>
            <p className="text-muted-foreground mt-4">
                { profile.bio }
            </p>
            <p className="text-muted-foreground mt-2">
                <span>Find me on </span>
                {socialLinks.map((social, idx) => (
                    <span key={social.sort_order}>
                        <Link href={social.url} className="underline underline-offset-4 text-foreground">
                            {social.platform}
                        </Link>
                        {idx === 0 && socialLinks.length > 1 ? " and " : ""}
                    </span>
                ))}
            </p>
        </section>
    )
}
