export type SocialLinks = {
    platform: string,
    url: string,
    sort_order: number
}

export type Profile = {
    name: string,
    email: string,
    bio: string,
    avatar_url: string,
    social_links: SocialLinks[]
}