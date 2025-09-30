import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "freshly",
    slug: "freshly",
    title: "Freshly",
    excerpt: "Expiry tracking that keeps your kitchen fresh—and your budget happier.",
    tags: ['app'],
    image_url: "/thumbnail.jpg",
    body: (
      <>
        <p className="text-pretty text-muted-foreground">
          Freshly is a minimal, fast expiry tracker for groceries. It helps
          families and meal-preppers reduce food waste with timely reminders
          and an interface you can learn in minutes.
        </p>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Problems</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Food waste from forgotten items hidden in the fridge.</li>
          <li>Inconsistent reminders in generic to-do apps.</li>
          <li>Slow apps with cluttered forms and too many steps.</li>
        </ul>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Solution</h2>
        <p className="mt-2 text-muted-foreground">
          Freshly focuses on the only two things you need: add an item in
          seconds and get reminded before it expires. Barcode scanning and
          smart defaults make entry effortless. A calm notification arrives
          with suggested actions—use, freeze, or discard—so you can decide
          quickly.
        </p>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Features</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
          <li>1-tap add with smart defaults</li>
          <li>Barcode scanning and product suggestions</li>
          <li>Auto-grouping by location (fridge, freezer, pantry)</li>
          <li>Gentle reminders with ‘snooze’ options</li>
          <li>Shared lists for households</li>
        </ul>
      </>
    ),
    results: [
      {
        label: "Household waste reduced",
        value: "28%",
      },
      {
        label: "Average time to add item",
        value: "3.1s",
      },
      {
        label: "Monthly active households",
        value: "1,200+",
      },
    ],
    created_at: new Date().toISOString(),
    published_at: "2025-08-21",
  },
  {
    id: "baby-namer",
    slug: "baby-namer",
    title: "Baby Namer",
    excerpt: "Find the perfect name for your baby with AI-powered suggestions.",
    tags: ['app'],
    image_url: "/thumbnail.jpg",
    body: (
      <>
        <p className="text-pretty text-muted-foreground">
          Baby Namer helps parents explore meaningful baby names powered by AI
          with cultural, historical, and linguistic context.
        </p>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Problems</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Too many generic baby name lists without personalization.</li>
          <li>Lack of cultural and linguistic context in suggestions.</li>
          <li>Time-consuming manual search through websites and books.</li>
        </ul>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Solution</h2>
        <p className="mt-2 text-muted-foreground">
          AI-generated recommendations tailored to parents’ preferences like
          meaning, origin, or even how the name sounds together with the family
          name.
        </p>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Features</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
          <li>AI-powered personalized suggestions</li>
          <li>Search by meaning, origin, or cultural background</li>
          <li>Favorites list with sharing options</li>
          <li>Name compatibility checker</li>
          <li>Daily inspiration notifications</li>
        </ul>
      </>
    ),
    results: [
      {
        label: "Names curated and growing",
        value: "2000+",
      },
      {
        label: "Families helped in first 3 months",
        value: "500+",
      },
      {
        label: "Active monthly users",
        value: "1,200+",
      }
    ],
    created_at: new Date().toISOString(),
    published_at: "2025-08-21",
  },
  {
    id: "ayaah-reminder",
    slug: "ayaah-reminder",
    title: "Ayaah Reminder",
    excerpt: "Keep track of your Quran journey and get gentle reminders to stay consistent.",
    tags: ['app'],
    image_url: "/thumbnail.jpg",
    body: (
      <>
        <p className="text-pretty text-muted-foreground">
          Ayaah Reminder is designed to help Muslims track their Quran recitation,
          pick up where they left off, and build consistency with reminders.
        </p>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Problems</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Forgetting the last read verse and page.</li>
          <li>Lack of structured reminders for Quran consistency.</li>
          <li>Difficulty syncing recitation between multiple devices.</li>
        </ul>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Solution</h2>
        <p className="mt-2 text-muted-foreground">
          Ayaah Reminder saves your last read ayah, syncs across devices, and
          sends notifications to encourage consistent recitation.
        </p>

        <h2 className="mt-4 text-lg md:text-xl font-semibold">Features</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Save and resume from last ayah</li>
          <li>Daily/weekly reminder notifications</li>
          <li>Cross-device sync via cloud</li>
          <li>Dark mode for night reading</li>
          <li>Simple UI designed for focus</li>
        </ul>
      </>
    ),
    results: [
      {
        label: "Active monthly users",
        value: "2000+",
      },
      {
        label: "Users report improved consistency",
        value: "90%",
      },
      {
        label: "Featured in Islamic productivity communities",
        value: "#1",
      }
    ],
    created_at: new Date().toISOString(),
    published_at: "2025-08-21",
  },
]
