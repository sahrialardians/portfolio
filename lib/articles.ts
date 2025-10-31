import { supabase } from "./supabase";

export async function getAllArticles() {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(6);

    if (error) {
        console.error('Error fetching articles:', error.message);
        throw error;
    }

    return data;
}

export async function getArticleBySlug(slug: string) {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error(`Error fetching arcicle with slug ${slug}:`, error.message);
        throw error;
    }

    return data;
}