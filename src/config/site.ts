import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BarChart3,
  Building2,
  GraduationCap,
  Heart,
  MapPin,
  Package,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export interface CallToAction {
  label: string;
  href: string;
  description?: string;
  trackingEvent?: string;
}

export interface HeroConfig {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  metric: {
    value: number;
    suffix: string;
    label: string;
  };
  primaryCta: CallToAction;
  secondaryCta?: CallToAction;
}

export interface WhoWeAreConfig {
  heading: string;
  highlight: string;
  paragraphs: string[];
  emphasis: string;
  quote: string;
  attributes: string[];
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

export interface ServicesConfig {
  heading: string;
  description: string;
  items: readonly ServiceItem[];
}

export interface WhyChooseReason {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

export interface WhyChooseConfig {
  heading: string;
  description: string;
  quote: string;
  reasons: readonly WhyChooseReason[];
}

export interface CaseStudyMetric {
  label: string;
  value: number;
  suffix?: string;
}

export interface CaseStudy {
  id: number;
  project: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: readonly CaseStudyMetric[];
  quote: string;
  client: string;
  clientTitle: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export interface TrustIndicator {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export interface HomepageConfig {
  hero: HeroConfig;
  whoWeAre: WhoWeAreConfig;
  services: ServicesConfig;
  whyChoose: WhyChooseConfig;
  caseStudies: {
    badge: string;
    heading: string;
    description: string;
    items: readonly CaseStudy[];
  };
  testimonials: {
    heading: string;
    description: string;
    items: readonly Testimonial[];
  };
  team: {
    heading: string;
    description: string;
    members: readonly TeamMember[];
  };
  trustIndicators: {
    items: readonly TrustIndicator[];
  };
  cta: {
    heading: string;
    description: string;
    primaryCta: CallToAction;
    secondaryCta?: CallToAction;
  };
}

export interface BlogConfig {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  cta: {
    heading: string;
    description: string;
    primaryCta: CallToAction;
  };
}

export interface BookingConfig {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    description: string;
  };
  benefits: readonly {
    title: string;
    description: string;
  }[];
  embed: {
    url: string;
    title: string;
  };
  steps: readonly string[];
}

export interface BrandingConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  logo: {
    src: string;
    alt: string;
  };
}

export interface TemplateConfig {
  metadata: {
    title: string;
    description: string;
  };
  branding: BrandingConfig;
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
  };
  social: {
    linkedin: string;
  };
  business: {
    hours: string;
    timezone: string;
  };
  navigation: {
    quickLinks: readonly {
      label: string;
      href: string;
    }[];
  };
  homepage: HomepageConfig;
  blog: BlogConfig;
  booking: BookingConfig;
  footer: {
    legal: string;
  };
}

export const siteConfig = {
  metadata: {
    title: 'Dubstack Starter – Modern Service Template',
    description:
      'Dubstack is a Next.js + shadcn/ui starter built for service businesses that want a reusable, configuration-first marketing site.',
  },
  branding: {
    companyName: 'Dubstack Studio',
    shortName: 'Dubstack',
    tagline: 'Launch-ready marketing system for service businesses',
    logo: {
      src: '/placeholder-logo.svg',
      alt: 'Dubstack logo',
    },
  },
  contact: {
    email: 'hello@yourcompany.com',
    phone: '+15551234567',
    phoneDisplay: '(555) 123-4567',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/your-company',
  },
  business: {
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
    timezone: 'Local Time Zone',
  },
  navigation: {
    quickLinks: [
      { label: 'Who We Are', href: '/#who-we-are' },
      { label: 'What We Do', href: '/#what-we-do' },
      { label: 'Why Choose Us', href: '/#why-choose-us' },
      { label: 'Case Studies', href: '/#case-studies' },
      { label: 'Team', href: '/#team' },
      { label: 'Blog', href: '/blog' },
      { label: 'Book a Call', href: '/book' },
    ] as const,
  },
  homepage: {
    hero: {
      eyebrow: 'Modular Marketing Template',
      title: 'Launch a polished services site in days with',
      highlight: 'Dubstack',
      description:
        'Use this starter as a foundation for agencies, consultants, or operators. Swap copy from a single TypeScript config and show up with a story that resonates.',
      metric: {
        value: 24,
        suffix: '%',
        label: 'average lift in qualified leads after launch',
      },
      primaryCta: {
        label: 'Book a discovery call',
        href: '/book',
        trackingEvent: 'hero_book_call_clicked',
      },
      secondaryCta: {
        label: 'Preview capabilities',
        href: '#what-we-do',
        trackingEvent: 'hero_preview_capabilities_clicked',
      },
    },
    whoWeAre: {
      heading: 'We built Dubstack to accelerate service-led teams',
      highlight: 'Dubstack Studio',
      paragraphs: [
        'Dubstack is a reusable marketing site template powered by Next.js, Tailwind CSS, and shadcn/ui. Every section is wired for high-clarity storytelling and conversion-focused layouts.',
        'All of the messaging, social proof, and CTAs live in one typed configuration file. Swap voice and value props without hunting through JSX or duplicating components.',
        'Use the starter as-is or treat it as scaffolding for your own component library. Either way you get a production-ready foundation with analytics, forms, and best-practice patterns out of the box.',
      ],
      emphasis: 'Opinionated defaults with room to make it yours.',
      quote: 'Templates should feel like accelerators, not straightjackets.',
      attributes: ['Flexible', 'Strategy-Led', 'Editable'],
    },
    services: {
      heading: 'Modular services to showcase your value',
      description:
        'Each card is a prompt for the offers you bring to market. Swap the copy, keep the structure, and plug into detail pages when you are ready.',
      items: [
        {
          icon: TrendingUp,
          title: 'Growth Strategy Workshops',
          description:
            'Lead collaborative planning sessions that turn business goals into measurable roadmaps with ready-to-use agenda templates.',
          features: [
            'Discovery collateral',
            'Messaging frameworks',
            'Experiment backlog',
          ],
          slug: 'growth-strategy-workshops',
        },
        {
          icon: Package,
          title: 'Productized Service Design',
          description:
            'Shape irresistible service packages with clear outcomes, deliverables, and pricing guardrails your team can deliver repeatedly.',
          features: [
            'Offer positioning',
            'Pricing guidance',
            'Delivery playbooks',
          ],
          slug: 'productized-service-design',
        },
        {
          icon: BarChart3,
          title: 'Insight & Reporting Systems',
          description:
            'Stand up metrics dashboards that translate activity into outcomes so clients see value without chasing down spreadsheets.',
          features: [
            'North star metrics',
            'Executive dashboards',
            'Narrative recaps',
          ],
          slug: 'insight-and-reporting',
        },
        {
          icon: Target,
          title: 'Campaign Execution Pods',
          description:
            'Orchestrate multi-channel experiments with reusable creative briefs, channel kits, and QA checklists.',
          features: ['Channel kits', 'QA workflows', 'Launch retros'],
          slug: 'campaign-execution-pods',
        },
        {
          icon: Sparkles,
          title: 'Website Optimization Sprints',
          description:
            'Iterate on landing pages with battle-tested sections, inline analytics, and validation loops that compound results.',
          features: [
            'Component library',
            'A/B test backlog',
            'Performance instrumentation',
          ],
          slug: 'website-optimization-sprints',
        },
        {
          icon: GraduationCap,
          title: 'Enablement & Training',
          description:
            'Upskill client teams with workshops, templates, and office hours so the momentum continues after handoff.',
          features: ['Live workshops', 'Template kits', 'Ongoing office hours'],
          slug: 'enablement-and-training',
        },
      ] as const,
    },
    whyChoose: {
      heading: 'Why teams pick Dubstack',
      description:
        'Focus on storytelling and results while the template covers typography, layouts, accessibility, and instrumentation.',
      quote:
        'Every section is intentionally opinionated so the conversation starts faster and the execution stays consistent.',
      reasons: [
        {
          number: '01',
          icon: Heart,
          title: 'Client-first storytelling',
          description:
            'Content slots are written in plain language so strategists, writers, and clients can collaborate without deciphering dev speak.',
          highlight: 'Human-centered copy blocks',
        },
        {
          number: '02',
          icon: Zap,
          title: 'Adaptable by default',
          description:
            'Tweak brand visuals, add sections, or wire into a CMS. The design system is utility-first, so customization stays fast.',
          highlight: 'Edit once, reuse everywhere',
        },
        {
          number: '03',
          icon: Users,
          title: 'Partnership ready',
          description:
            'Hand-offs stay clean thanks to documented components, analytics hooks, and a clear folder structure your team can adopt instantly.',
          highlight: 'Built for long-term collaboration',
        },
      ] as const,
    },
    caseStudies: {
      badge: 'Sample Results',
      heading: 'Showcase your client impact',
      description:
        'Swap in the engagements you are proud of. The layout highlights challenges, solutions, and measurable outcomes.',
      items: [
        {
          id: 1,
          project: 'ServiceOps Overhaul',
          industry: 'Fractional COO Collective',
          challenge:
            'Team needed a narrative that connected their behind-the-scenes work to client results before launching nationwide.',
          solution:
            'Rebuilt positioning, defined packaged offers, and launched a Dubstack-powered site with guided lead capture.',
          metrics: [
            { label: 'Pipeline velocity', value: 32, suffix: '%↑' },
            { label: 'Close rate', value: 18, suffix: 'pts' },
            { label: 'Client retention', value: 14, suffix: '%↑' },
          ] as const,
          quote:
            'The template gave us a structure that felt premium without the six-week build. We were signing new retainers within a month.',
          client: 'Jordan Rios',
          clientTitle: 'Founder, Operator Collective',
        },
        {
          id: 2,
          project: 'Advisory Launchpad',
          industry: 'B2B GTM Consultancy',
          challenge:
            'Needed to clarify value props and capture leads from enterprise buyers without hiring a full marketing team.',
          solution:
            'Implemented modular landing pages, embedded scheduling flows, and added proof modules that map services to outcomes.',
          metrics: [
            { label: 'Qualified demos', value: 57, suffix: '%↑' },
            { label: 'Average deal size', value: 21, suffix: '%↑' },
            { label: 'Sales cycle', value: 26, suffix: '%↓' },
          ] as const,
          quote:
            'Dubstack let us focus on the program. We swapped copy in an afternoon and had a credible digital presence the next day.',
          client: 'Morgan Blake',
          clientTitle: 'Managing Partner, Signal Advisory',
        },
        {
          id: 3,
          project: 'Member Community Rollout',
          industry: 'Creator Accelerator',
          challenge:
            'Sought a flexible site for recurring cohorts with room for rotating testimonials, FAQs, and gated curriculum previews.',
          solution:
            'Plugged Dubstack into a CMS, set up audience-specific pages, and layered in automated onboarding workflows.',
          metrics: [
            { label: 'Waitlist growth', value: 3, suffix: 'x' },
            { label: 'Launch conversion', value: 19, suffix: '%↑' },
            { label: 'Member NPS', value: 12, suffix: 'pts' },
          ] as const,
          quote:
            'Our last launch sold out in 48 hours. Having the story, proof, and calls to action dialed in made the difference.',
          client: 'Elena Park',
          clientTitle: 'Director, Orbit Labs',
        },
      ] as const,
    },
    testimonials: {
      heading: 'What partners say',
      description:
        'Use this space to reinforce credibility with quotes that speak to outcomes, collaboration, and ease of working together.',
      items: [
        {
          id: 1,
          quote:
            'We launched in under two weeks and the narrative finally matches the caliber of work we deliver.',
          author: 'Taylor Morgan',
          role: 'Principal Consultant',
          company: 'Northbound Ops',
          location: 'Portland, OR',
          rating: 5,
        },
        {
          id: 2,
          quote:
            'The typed config keeps everything centralized. Copy updates that used to take a sprint now happen in minutes.',
          author: 'Renee Walters',
          role: 'Head of Growth',
          company: 'Atlas Collective',
          location: 'Austin, TX',
          rating: 5,
        },
        {
          id: 3,
          quote:
            'Our clients commented on the clarity instantly. Dubstack shipped with structure, proof, and motion built in.',
          author: 'Samir Patel',
          role: 'Managing Director',
          company: 'Signal Works',
          location: 'Chicago, IL',
          rating: 5,
        },
        {
          id: 4,
          quote:
            'It finally feels like we have a reusable playbook for every new engagement instead of reinventing the site each time.',
          author: 'Lauren Cho',
          role: 'Partner',
          company: 'Waypoint Advisory',
          location: 'Seattle, WA',
          rating: 5,
        },
      ] as const,
    },
    team: {
      heading: 'Your Dubstack build crew',
      description:
        'Introduce the people behind the work. Swap in founders, collaborators, or client-facing leads so prospects know who they will partner with.',
      members: [
        {
          id: 1,
          name: 'Jordan Avery',
          role: 'Lead Strategist',
          bio: 'Shapes positioning, messaging, and go-to-market plans that keep every engagement anchored to measurable results.',
          image: '/professional-headshot-male-consultant.jpg',
          linkedin: 'https://www.linkedin.com/in/sample-strategist',
        },
        {
          id: 2,
          name: 'Sasha Bennett',
          role: 'Design & Experience Partner',
          bio: 'Translates strategy into premium creative, ensuring every touchpoint feels intentional and on-brand.',
          image: '/professional-headshot-female-technology.jpg',
          linkedin: 'https://www.linkedin.com/in/sample-designer',
        },
        {
          id: 3,
          name: 'Priya Desai',
          role: 'Operations Architect',
          bio: 'Builds delivery systems, automations, and documentation so the engine keeps running after launch.',
          image: '/female-analyst-headshot.png',
          linkedin: 'https://www.linkedin.com/in/sample-operations',
        },
        {
          id: 4,
          name: 'Luis Moreno',
          role: 'Growth Lead',
          bio: 'Owns analytics, experimentation, and continuous improvement cycles that keep results compounding.',
          image: '/male-director-headshot.png',
          linkedin: 'https://www.linkedin.com/in/sample-growth',
        },
      ] as const,
    },
    trustIndicators: {
      items: [
        {
          icon: Building2,
          value: 40,
          suffix: '+',
          label: 'Templates deployed',
        },
        {
          icon: TrendingUp,
          value: 28,
          suffix: '%',
          label: 'Average conversion lift',
        },
        {
          icon: MapPin,
          value: 12,
          suffix: '+',
          label: 'Industries supported',
        },
        {
          icon: Award,
          value: 15,
          suffix: '+',
          label: 'Years combined experience',
        },
      ] as const,
    },
    cta: {
      heading: 'Ready to tailor Dubstack to your next engagement?',
      description:
        'Spin up a discovery call or drop your questions. We will walk through the template, swap in your content, and map the launch plan.',
      primaryCta: {
        label: 'Book a discovery call',
        href: '/book',
        trackingEvent: 'cta_primary_clicked',
      },
      secondaryCta: {
        label: 'Download setup checklist',
        href: '/template-checklist.pdf',
        trackingEvent: 'cta_secondary_clicked',
      },
    },
  },
  blog: {
    metadata: {
      title: 'Insights | Dubstack',
      description:
        'Articles and playbooks on packaging services, proving value, and running modern marketing engagements with Dubstack.',
    },
    hero: {
      eyebrow: 'Insights & Playbooks',
      heading: 'Field notes for service teams',
      description:
        'Short, practical reads to help you package expertise, build momentum, and stay close to client outcomes.',
    },
    cta: {
      heading: 'Want a walkthrough tailored to your use case?',
      description:
        'Bring your team to a live session and we will map Dubstack to the exact services you deliver.',
      primaryCta: {
        label: 'Book a discovery call',
        href: '/book',
        trackingEvent: 'blog_cta_clicked',
      },
    },
  },
  booking: {
    metadata: {
      title: 'Book a discovery call | Dubstack',
      description:
        'Schedule a 30-minute conversation to see how Dubstack adapts to your services, clients, and internal workflows.',
    },
    hero: {
      heading: "Let's map Dubstack to your next launch",
      description:
        'Choose a time that works for you. We will review your current site, identify fast wins, and outline how the template accelerates delivery.',
    },
    benefits: [
      {
        title: 'Free strategy session',
        description:
          'Low-pressure walkthrough focused on your goals and existing marketing footprint.',
      },
      {
        title: '30-minute deep dive',
        description:
          'Expect a collaborative conversation with clear next steps, not a generic sales pitch.',
      },
      {
        title: 'Actionable recommendations',
        description:
          'Walk away with a prioritized checklist whether or not we continue working together.',
      },
    ] as const,
    embed: {
      url: 'https://cal.com/your-company/dubstack-discovery',
      title: 'Schedule a discovery call with Dubstack',
    },
    steps: [
      'Share a quick snapshot of your team, services, and goals.',
      'Review a tailored Dubstack walkthrough with implementation options.',
      'Align on the delivery approach, timeline, and responsibilities.',
      'Decide on next steps and get the kickoff checklist.',
    ] as const,
  },
  footer: {
    legal: 'All rights reserved.',
  },
} satisfies TemplateConfig;
