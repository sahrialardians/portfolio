import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Articles } from "@/components/Articles"
import { projects } from "@/data/project"
import { articles } from "@/data/article"

export default function Page() {
  return (
    <main className="space-y-6">
      <Hero />

      <div className="space-y-6 bg-white rounded-tl-xl rounded-tr-xl p-6">
        <Projects projects={projects} />
        <Articles articles={articles} />
      </div>
    </main>
  )
}
