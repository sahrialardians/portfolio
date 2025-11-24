export type SocialLinks = {
    platform: string,
    url: string,
    sort_order: number
}

export type Profile = {
    fullname: string,
    email: string,
    bio: string,
    avatar_url: string,
    social_links: SocialLinks[]
}