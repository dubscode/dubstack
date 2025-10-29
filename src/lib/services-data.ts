import {
  BarChart3,
  GraduationCap,
  type LucideIcon,
  Package,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  overview: {
    title: string;
    content: string[];
    targetAudience: string;
  };
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  included: string[];
  outcomes: {
    metric: string;
    description: string;
  }[];
  relatedServices: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Service[] = [
  {
    slug: 'growth-strategy-workshops',
    title: 'Growth Strategy Workshops',
    icon: TrendingUp,
    headline: 'Align your team around measurable growth priorities',
    description:
      'Facilitated working sessions that translate directional goals into a prioritized roadmap with clear ownership and timelines.',
    overview: {
      title: 'Turn ambition into an actionable growth plan',
      content: [
        'Bring leadership, delivery, and revenue teams together for a structured sprint that surfaces goals, constraints, and quick wins.',
        'We mix async pre-work, collaborative canvases, and facilitated debate to clarify positioning, ICPs, and the experiments that will move the needle.',
        'The output is a shareable narrative with a sequenced backlog, success metrics, and a 90-day activation plan your team can execute immediately.',
      ],
      targetAudience:
        'Consultancies, agencies, and fractional operators who need consensus on what to build, sell, and prioritize next.',
    },
    benefits: [
      {
        icon: 'TrendingUp',
        title: 'Shared growth narrative',
        description:
          'Establish a single story that connects market insight, offers, and pipeline targets.',
      },
      {
        icon: 'Target',
        title: 'Prioritized backlog',
        description:
          'Stack-rank initiatives based on impact, effort, and confidence so teams stay focused.',
      },
      {
        icon: 'Users',
        title: 'Cross-functional alignment',
        description:
          'Give sales, delivery, and leadership clear roles in driving the plan forward.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Execution guardrails',
        description:
          'Template the rituals, cadences, and metrics that keep momentum after the workshop.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Prep',
        description:
          'Async questionnaires and interviews capture the current state, hypotheses, and success measures.',
      },
      {
        step: 2,
        title: 'Collaborative Sprint',
        description:
          'We facilitate a half or full-day session to pressure-test opportunities and map the growth narrative.',
      },
      {
        step: 3,
        title: 'Roadmap Prioritization',
        description:
          'Translate outcomes into a sequenced backlog with owners, inputs, and definitions of done.',
      },
      {
        step: 4,
        title: 'Launch & Support',
        description:
          'Debrief with stakeholders, finalize documentation, and host an optional 30-day review.',
      },
    ],
    included: [
      'Workshop prep kit with prompts and data requests',
      'Facilitated strategy sprint (remote or onsite)',
      'Growth narrative deck and prioritized backlog',
      '90-day activation calendar and ceremony guide',
      'Miro/Figma boards handed off for async updates',
      'Optional follow-up coaching session',
    ],
    outcomes: [
      {
        metric: '3x clearer roadmap',
        description:
          'Teams leave with aligned priorities and an execution plan.',
      },
      {
        metric: '2-week kickoff window',
        description:
          'Start acting on the plan within two weeks of the workshop.',
      },
      {
        metric: 'Executive alignment',
        description:
          'Stakeholders endorse the narrative, metrics, and responsibilities.',
      },
    ],
    relatedServices: ['productized-service-design', 'insight-and-reporting'],
    faqs: [
      {
        question: 'How many people can participate?',
        answer:
          'Up to 12 active participants works best. We supply async prompts so supporting voices can still contribute.',
      },
      {
        question: 'Can you facilitate in-person?',
        answer:
          'Yes. Travel can be added to any engagement. Remote-friendly templates are provided either way.',
      },
    ],
  },
  {
    slug: 'productized-service-design',
    title: 'Productized Service Design',
    icon: Package,
    headline: 'Package your expertise into repeatable offers people understand',
    description:
      'Clarify outcomes, deliverables, and pricing so prospects know exactly what they get and your team knows exactly how to deliver it.',
    overview: {
      title: 'Build market-ready offers without losing flexibility',
      content: [
        'We audit current engagements, client interviews, and positioning to surface the value people actually buy from you.',
        'Together we shape tiered offers, service blueprints, and commercial guardrails that balance scalability with bespoke attention.',
        'Enable your team with messaging, pricing, and delivery playbooks that close faster deals and deliver consistent experiences.',
      ],
      targetAudience:
        'Experts, studios, and operators shifting from custom consulting to repeatable, higher-margin engagements.',
    },
    benefits: [
      {
        icon: 'Package',
        title: 'Clear value propositions',
        description:
          'Describe outcomes in client-friendly language with proof points and artifacts.',
      },
      {
        icon: 'Layers',
        title: 'Modular delivery system',
        description:
          'Mix and match core modules without reinventing the process each time.',
      },
      {
        icon: 'DollarSign',
        title: 'Confident pricing',
        description:
          'Build pricing ladders and negotiation guardrails that protect margin.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Insight & Audit',
        description:
          'Review existing engagements, client feedback, and delivery workflows to identify strengths and gaps.',
      },
      {
        step: 2,
        title: 'Offer Architecture',
        description:
          'Define offer tiers, outcomes, timeline, and success metrics with optional add-ons.',
      },
      {
        step: 3,
        title: 'Commercial Enablement',
        description:
          'Create sales collateral, pricing frameworks, and objection handling scripts.',
      },
      {
        step: 4,
        title: 'Delivery Playbook',
        description:
          'Document delivery milestones, rituals, QA, and handoff requirements.',
      },
    ],
    included: [
      'Offer architecture canvas and tier definitions',
      'Messaging and positioning kit',
      'Pricing calculator with negotiation guidance',
      'Delivery playbook and template library',
      'Go-to-market enablement checklist',
    ],
    outcomes: [
      {
        metric: 'Faster sales cycles',
        description: 'Prospects grasp value quickly and buy with confidence.',
      },
      {
        metric: 'Higher effective rates',
        description:
          'Standardized scope reduces scope creep and protects margin.',
      },
      {
        metric: 'Repeatable delivery',
        description: 'Cross-functional teams operate from the same blueprint.',
      },
    ],
    relatedServices: ['growth-strategy-workshops', 'campaign-execution-pods'],
    faqs: [
      {
        question: 'Do we have to change our existing pricing?',
        answer:
          'Not necessarily. We model multiple scenarios so you can test pricing adjustments with confidence.',
      },
      {
        question: 'Can we still customize engagements?',
        answer:
          'Yes. We define flex zones and add-ons so customization is intentional and profitable.',
      },
    ],
  },
  {
    slug: 'insight-and-reporting',
    title: 'Insight & Reporting Systems',
    icon: BarChart3,
    headline: 'Tell a compelling story with data clients actually understand',
    description:
      'Stand up dashboards and recaps that connect effort to business outcomes, reducing churn and uncovering upsell opportunities.',
    overview: {
      title: 'From scattered metrics to narrative clarity',
      content: [
        'Audit current reporting to identify noise, blind spots, and labor-intensive workflows.',
        'Define north-star metrics, supporting signals, and the rituals that keep teams accountable.',
        'Implement lightweight data pipelines with templated recaps so insight and action stay tightly connected.',
      ],
      targetAudience:
        'Service providers who need better line-of-sight from activity to impact and want clients to feel the value without asking.',
    },
    benefits: [
      {
        icon: 'BarChart3',
        title: 'Executive-level clarity',
        description:
          'Elevate reporting beyond busy dashboards with narrative summaries and next steps.',
      },
      {
        icon: 'PieChart',
        title: 'Reliable data collection',
        description:
          'Automate ingestion of key signals while keeping manual inputs lightweight.',
      },
      {
        icon: 'Clock',
        title: 'Time back to deliver',
        description:
          'Reduce prep time for weekly updates with reusable templates and version control.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Insight Audit',
        description:
          'Gather current reports, stakeholder needs, and key business questions.',
      },
      {
        step: 2,
        title: 'Measurement Framework',
        description:
          'Define success metrics, supporting diagnostics, and reporting cadence.',
      },
      {
        step: 3,
        title: 'System Build',
        description:
          'Configure dashboards, templates, and automation inside your existing tools.',
      },
      {
        step: 4,
        title: 'Enable & Iterate',
        description:
          'Train your team, gather feedback, and schedule quarterly improvements.',
      },
    ],
    included: [
      'Measurement framework canvas',
      'Dashboard and recap templates',
      'Automation or integration recommendations',
      'Run-of-show for weekly/monthly reporting',
      'Change management checklist',
    ],
    outcomes: [
      {
        metric: 'Hours saved each week',
        description:
          'Standardized reporting trims prep time for client updates.',
      },
      {
        metric: 'Stronger retention',
        description: 'Clients see impact clearly and renew with confidence.',
      },
      {
        metric: 'Upsell visibility',
        description:
          'Spot opportunities for add-on services through shared data.',
      },
    ],
    relatedServices: [
      'campaign-execution-pods',
      'website-optimization-sprints',
    ],
    faqs: [
      {
        question: 'Do you connect to our existing tools?',
        answer:
          'Yes. We work within your stack (Looker Studio, Notion, Airtable, Sheets, etc.) and recommend focused upgrades only when needed.',
      },
      {
        question: 'Can you run reporting for us ongoing?',
        answer:
          'We can hand off to your team or structure an ongoing support retainer depending on bandwidth.',
      },
    ],
  },
  {
    slug: 'campaign-execution-pods',
    title: 'Campaign Execution Pods',
    icon: Target,
    headline: 'Spin up nimble teams for multi-channel experiments',
    description:
      'Build cross-functional pods with playbooks, creative kits, and QA rituals that keep campaigns shipping on time.',
    overview: {
      title: 'Create a repeatable engine for testing and launch',
      content: [
        'Define pod roles, swimlanes, and checkpoints so creative, ops, and strategy stay tightly coordinated.',
        'Equip teams with reusable briefs, QA checklists, and asset libraries to reduce handoffs and rework.',
        'Establish governance around experiment logs, retros, and knowledge sharing to compound learnings.',
      ],
      targetAudience:
        'Marketing and growth teams balancing high experiment volume with limited headcount.',
    },
    benefits: [
      {
        icon: 'Target',
        title: 'Faster cycle times',
        description:
          'Reduce launch friction with standardized briefs and approval paths.',
      },
      {
        icon: 'Sparkles',
        title: 'Higher quality launches',
        description:
          'Templated QA and sign-off steps catch issues before go-live.',
      },
      {
        icon: 'Users',
        title: 'Accountable pods',
        description:
          'Clear ownership across strategy, creative, and ops keeps velocity high.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Current State Review',
        description:
          'Audit recent campaigns, tooling, and communication to identify bottlenecks.',
      },
      {
        step: 2,
        title: 'Pod Architecture',
        description:
          'Define squad structure, cadences, and decision rights with key stakeholders.',
      },
      {
        step: 3,
        title: 'Playbook Activation',
        description:
          'Introduce briefs, QA checklists, and launch calendars tailored to your channels.',
      },
      {
        step: 4,
        title: 'Measure & Improve',
        description:
          'Install retro frameworks, dashboards, and knowledge base workflows.',
      },
    ],
    included: [
      'Campaign brief and creative kit templates',
      'QA and launch readiness checklists',
      'Squad charter and role definitions',
      'Experiment log and retro formats',
      'Enablement session for pod leads',
    ],
    outcomes: [
      {
        metric: 'Launch velocity',
        description: 'Pods deploy campaigns faster with fewer blockers.',
      },
      {
        metric: 'Quality assurance',
        description: 'Fewer last-minute fixes thanks to codified QA.',
      },
      {
        metric: 'Knowledge capture',
        description:
          'Retros feed a central playbook that improves every sprint.',
      },
    ],
    relatedServices: ['insight-and-reporting', 'website-optimization-sprints'],
    faqs: [
      {
        question: 'Can we pilot this with one pod?',
        answer:
          'Absolutely. We typically start with one pod, capture learnings, then roll out to additional teams.',
      },
      {
        question: 'Do you join our standups?',
        answer:
          'We can embed for the first few sprints or equip an internal lead to run the system.',
      },
    ],
  },
  {
    slug: 'website-optimization-sprints',
    title: 'Website Optimization Sprints',
    icon: Sparkles,
    headline: 'Ship conversion-focused improvements on a reliable cadence',
    description:
      'Run two-week sprints to test copy, layouts, and flows using Dubstack’s component library and instrumentation.',
    overview: {
      title: 'Tight loops, clear wins',
      content: [
        'Audit current pages, analytics, and qualitative feedback to identify drop-offs and quick wins.',
        'Plan sprints that pair quantitative signals with qualitative research to inform hypotheses.',
        'Deploy experiments with prebuilt sections, capture learnings, and feed them into long-term roadmaps.',
      ],
      targetAudience:
        'Marketing or growth teams that need to iterate on landing pages without spinning up full rebuilds.',
    },
    benefits: [
      {
        icon: 'Sparkles',
        title: 'Faster iteration',
        description:
          'Reusable components and analytics reduce design and dev cycles.',
      },
      {
        icon: 'TrendingUp',
        title: 'Measurable lifts',
        description:
          'Each sprint pairs a hypothesis with instrumentation so impact is clear.',
      },
      {
        icon: 'ClipboardList',
        title: 'Documented learnings',
        description: 'Every test feeds a living backlog and knowledge base.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Assessment & Setup',
        description:
          'Review analytics, heatmaps, and messaging to identify gaps and opportunities.',
      },
      {
        step: 2,
        title: 'Hypothesis Planning',
        description:
          'Pair qualitative insight with data to prioritize sprint experiments.',
      },
      {
        step: 3,
        title: 'Build & Ship',
        description:
          'Implement changes using Dubstack sections, QA thoroughly, and launch.',
      },
      {
        step: 4,
        title: 'Review & Roll Forward',
        description:
          'Evaluate results, update documentation, and plan the next sprint.',
      },
    ],
    included: [
      'Optimization backlog with prioritized experiments',
      'Copy, design, and analytics recommendations',
      'A/B test or sequential test plan',
      'Launch checklist and QA workflows',
      'Sprint retrospective template',
    ],
    outcomes: [
      {
        metric: 'Conversion lift',
        description: 'Incremental gains stack over recurring sprints.',
      },
      {
        metric: 'Time to ship',
        description: 'Reduce turnaround time for new ideas from weeks to days.',
      },
      {
        metric: 'Knowledge base growth',
        description: 'Documented learnings inform future campaigns.',
      },
    ],
    relatedServices: ['campaign-execution-pods', 'insight-and-reporting'],
    faqs: [
      {
        question: 'Do you handle development?',
        answer:
          'We can pair with your team or provide hands-on implementation support depending on capacity.',
      },
      {
        question: 'How many tests fit in a sprint?',
        answer:
          'Most teams run 1–3 experiments per sprint depending on complexity and resources.',
      },
    ],
  },
  {
    slug: 'enablement-and-training',
    title: 'Enablement & Training',
    icon: GraduationCap,
    headline: 'Teach your team how to run the system without external help',
    description:
      'Upskill operators, strategists, and creatives with workshops, templates, and office hours that reinforce Dubstack best practices.',
    overview: {
      title: 'Build capabilities that stick',
      content: [
        'Co-create enablement plans that meet teams where they are, from onboarding to advanced optimization.',
        'Deliver interactive workshops with practical exercises using your own assets, not generic examples.',
        'Provide follow-on office hours and certification paths so knowledge compounds inside your organization.',
      ],
      targetAudience:
        'Teams adopting Dubstack or refreshing internal playbooks who need structured guidance and accountability.',
    },
    benefits: [
      {
        icon: 'GraduationCap',
        title: 'Practical learning',
        description:
          'Sessions use your templates and scenarios so everything feels immediately applicable.',
      },
      {
        icon: 'Users',
        title: 'Cross-team alignment',
        description:
          'Train strategy, delivery, and operations together to reinforce shared language.',
      },
      {
        icon: 'Calendar',
        title: 'Ongoing support',
        description:
          'Office hours, feedback loops, and optional certifications keep mastery fresh.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Skill Gap Assessment',
        description:
          'Survey teams and review artifacts to prioritize training modules.',
      },
      {
        step: 2,
        title: 'Curriculum Design',
        description:
          'Customize workshops, exercises, and templates for each role.',
      },
      {
        step: 3,
        title: 'Live Enablement',
        description: 'Deliver interactive sessions with hands-on application.',
      },
      {
        step: 4,
        title: 'Reinforcement & Support',
        description:
          'Share recordings, track completion, and host recurring office hours.',
      },
    ],
    included: [
      'Training roadmap and curriculum outline',
      'Role-specific worksheets and templates',
      'Recording bundle and documentation updates',
      'Office hours or Slack support channel',
      'Certification checklist (optional)',
    ],
    outcomes: [
      {
        metric: 'Team adoption',
        description:
          'Higher usage of Dubstack patterns and tooling across teams.',
      },
      {
        metric: 'Confidence lift',
        description:
          'Participants report clearer understanding of responsibilities.',
      },
      {
        metric: 'Internal champions',
        description: 'Identify leaders who can coach future cohorts.',
      },
    ],
    relatedServices: [
      'growth-strategy-workshops',
      'website-optimization-sprints',
    ],
    faqs: [
      {
        question: 'Can trainings be asynchronous?',
        answer:
          'We offer blended formats—live workshops supplemented with recorded modules and assignments.',
      },
      {
        question: 'Do you customize for different teams?',
        answer:
          'Yes. We adapt materials for leadership, strategists, creatives, or operations as needed.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return servicesData.filter((service) => slugs.includes(service.slug));
}
