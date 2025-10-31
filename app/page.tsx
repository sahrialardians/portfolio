import { Hero } from "@/components/Hero"
import { Highlighter } from "@/components/ui/highlighter"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { ProjectItems } from "@/components/ProjectItems"
import { ArticleItems } from "@/components/ArticleItems"
import { getAllProjects } from "@/lib/projects"
import { getAllArticles } from "@/lib/articles"

export default async function Page() {
  const projects = await getAllProjects()
  const articles = await getAllArticles()

  return (
    <main className="space-y-6">
      <Hero />

      {/* Article section */}
      <div className="space-y-6 bg-white rounded-tl-xl rounded-tr-xl p-6">
        <section id="projects" className="space-y-2">
          <div className="flex items-center justify-between mb-5">
              <h2 id="projects-heading" className="text-pretty text-xl font-semibold">
                  <Highlighter action="underline" color="#FF9800">
                      Projects
                  </Highlighter>
              </h2>
          </div>

          <ScrollArea className="w-full overflow-x-auto">
              <div className="flex gap-4 items-start">
                  {projects.map((project) => (
                    <ProjectItems key={project.id} project={project} />
                  ))}
              </div>
          </ScrollArea>
        </section>

        {/* Article section */}
        <section id="articles" className="space-y-2">
            <h2 className="text-pretty text-xl font-semibold mb-4">
                <Highlighter action="underline" color="#FF9800">
                    Articles
                </Highlighter>
            </h2>

            <ul>
                {articles.map((article) => (
                  <ArticleItems key={article.id} article={article} />
                ))}
            </ul>
        </section>
      </div>
    </main>
  )
}
