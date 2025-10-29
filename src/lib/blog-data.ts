export interface BlogPost {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  datePosted: string;
  dateUpdated: string;
  author: string;
  image: string;
  imageAlt: string;
  content: string;
  categoryTitle: string;
}

const now = new Date().toISOString();

export const blogPosts: BlogPost[] = [
  {
    title: 'Ship Your Next Client Site in Record Time',
    slug: 'ship-your-next-client-site',
    metaTitle: 'Ship Your Next Client Site in Record Time | Dubstack Starter',
    metaDescription:
      'A step-by-step playbook for customizing Dubstack so you can launch high-converting client sites without rebuilding from scratch.',
    datePosted: now,
    dateUpdated: now,
    author: 'dubstack-team',
    image: '/placeholder.jpg',
    imageAlt: 'Team planning a website launch',
    categoryTitle: 'Launch Playbooks',
    content: `
      <p>Dubstack packs opinionated sections, analytics, and CTAs into a single template so you can focus on the story your client needs to tell. This launch checklist walks through the exact steps we use when spinning up a new engagement.</p>
      <h2>1. Confirm the Narrative</h2>
      <p>Start with the <strong>configuration file</strong>. Update the company identity, hero messaging, proof points, and CTAs before touching any JSX. Because copy lives in one place, reviews stay fast and consistent.</p>
      <h2>2. Swap Visuals in Batches</h2>
      <p>Replace logos, headshots, and hero imagery with your client&apos;s assets. Use the provided sizing notes in <code>public/README.md</code> to keep quality high. If assets aren&apos;t ready, leave the included placeholders so the layout still feels polished.</p>
      <h2>3. Extend Sections Only as Needed</h2>
      <p>Dubstack ships with flexible sections. Duplicate or remove them using the config before building new components. When you do create a custom block, keep copy inputs centralized so future edits are still painless.</p>
      <h2>4. Run the Handoff Ritual</h2>
      <p>Export a change log, record a quick Loom, and surface the configuration file. Clients love knowing exactly where to tweak copy, add testimonials, or change CTAs.</p>
    `,
  },
  {
    title: 'Productize Services Without Losing Your Spark',
    slug: 'productize-services-without-losing-your-spark',
    metaTitle:
      'Productize Services Without Losing Your Spark | Dubstack Starter',
    metaDescription:
      'Learn how to turn bespoke consulting into repeatable offers that clients instantly understand.',
    datePosted: now,
    dateUpdated: now,
    author: 'dubstack-team',
    image: '/placeholder.jpg',
    imageAlt: 'Sticky notes on a strategy wall',
    categoryTitle: 'Offer Design',
    content: `
      <p>Moving from custom consulting to productized services is one of the fastest ways to increase margin and reduce sales friction. Here&apos;s how to use Dubstack to make that transition feel natural.</p>
      <h2>1. Define Outcomes, Not Inputs</h2>
      <p>Your service cards should describe the <strong>outcome</strong> buyers get, not the hours or deliverables. Use the provided sections to tie outcomes to proof and common questions.</p>
      <h2>2. Show the Journey</h2>
      <p>The case study section is built for narrative storytelling. Map the before/after, include the metrics that matter, then invite readers to imagine themselves in the client&apos;s shoes.</p>
      <h2>3. Offer a Low-Lift Next Step</h2>
      <p>Pair every service page with an obvious starting point: a workshop, audit, or discovery call. Update the CTA config so that prompt is visible on every page.</p>
      <h2>4. Keep Iterating</h2>
      <p>Use the analytics hooks baked into Dubstack to learn what sections convert. Adjust copy, reorder proof, and keep shipping within the same template.</p>
    `,
  },
  {
    title: 'Build a Reporting Rhythm Clients Love',
    slug: 'build-a-reporting-rhythm-clients-love',
    metaTitle: 'Build a Reporting Rhythm Clients Love | Dubstack Starter',
    metaDescription:
      'Make your wins obvious, your priorities clear, and your next steps actionable with an intentional reporting cadence.',
    datePosted: now,
    dateUpdated: now,
    author: 'dubstack-team',
    image: '/placeholder.jpg',
    imageAlt: 'Dashboard and documentation on a laptop',
    categoryTitle: 'Client Experience',
    content: `
      <p>Great service providers don&apos;t wait for clients to ask how things are going. They show the path, celebrate wins, and surface blockers proactively. Here&apos;s a lightweight rhythm to emulate.</p>
      <h2>1. Agree on the Signals</h2>
      <p>Start with three tiers of metrics: the north star, supporting indicators, and leading signals. Document them inside the reporting section so expectations stay aligned.</p>
      <h2>2. Standardize the Recap</h2>
      <p>Use Dubstack&apos;s case study and testimonial structures as inspiration for your weekly recaps. Lead with what changed, why it mattered, and what&apos;s next.</p>
      <h2>3. Make Next Steps Concrete</h2>
      <p>Every update should include a short action list with owners and due dates. Transparency keeps momentum high and prevents surprise fire drills.</p>
      <h2>4. Archive the Wins</h2>
      <p>Drop highlights into your proof library. You&apos;ll have a steady stream of fresh testimonials and metrics to reuse across the site.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime(),
    )
    .slice(0, limit);
}
