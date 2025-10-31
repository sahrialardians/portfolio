import { Project } from "@/types/project";
import { supabase } from "./supabase";

export async function getAllProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*');

    if (error) {
        console.error('Error fetching projects:', error.message);
        throw error;
    }

    return data;
}

export async function getProjectBySlug(slug: string) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error(`Error fetching project with slug ${slug}:`, error.message);
        throw error;
    }

    return data as Project;
}