import { Profile } from "@/types/profile";
import { supabase } from "./supabase";

export async function getProfile() {
    const { data, error } = await supabase
        .from('users')
        .select(`
            name,
            email,
            bio,
            avatar_url,
            social_links (
                platform,
                url,
                sort_order
            )
        `)
        .single();

    if (error) {
        console.error('Error fetching profile:', error.message);
        throw error;
    }

    return data as unknown as Profile;
}

export function getSortedSocialLinks(
        socialLinks: { platform: string; url: string; sort_order: number }[],
        desiredOrder?: number[]
    ) 
{
    // Filter berdasarkan desiredOrder jika ada
    const filtered = desiredOrder
        ? socialLinks.filter((item) => desiredOrder.includes(item.sort_order))
        : socialLinks;

    // Urutkan dari angka kecil → besar
    return filtered.sort((a, b) => a.sort_order - b.sort_order);
}