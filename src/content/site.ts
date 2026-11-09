export const site = {
  name: "Alex Berger Consulting",
  email: "alex@berger.dk",
  mailto: "mailto:alex@berger.dk",
  githubUrl: "https://github.com/alexpberger",
  githubLabel: "github.com/alexpberger",
  hero: {
    eyebrow: "Alex Berger Consulting",
    title: "Data & AI, taken through to production.",
    lead: "I combine consulting experience, product thinking and hands-on engineering to turn opportunities into working solutions.",
    cta: "Get in touch",
  },
  situations: {
    id: "work",
    label: "How I can help",
    items: [
      {
        verb: "Accelerate",
        object: "delivery",
        body: "Help move existing Data & AI initiatives forward. Provide additional technical capacity, expertise and momentum to projects that are already underway.",
      },
      {
        verb: "Build",
        object: "Data & AI solutions",
        body: "Design and build solutions ranging from data pipelines and analytical models to production-ready applications and AI products.",
      },
      {
        verb: "Automate",
        object: "complex work",
        body: "Apply AI-powered workflows and Agentic AI to automate complex, information-intensive processes.",
      },
    ],
  },
  introduction: {
    id: "about",
    label: "About",
    title: "From idea through adoption",
    paragraphs: [
      "I'm Alex Berger. I work with organisations directly, combining senior consulting experience with product thinking and hands-on engineering.",
      "I take solutions from the idea through implementation and adoption.",
    ],
  },
  credentials: {
    id: "experience",
    label: "Experience",
    items: [
      {
        title: "10+ years",
        body: "Experience across Data, Analytics, AI and Technology.",
      },
      {
        title: "Production AI",
        body: "From machine learning APIs to production multi-agent AI systems.",
      },
      {
        title: "End-to-end delivery",
        body: "Combining strategy, product thinking and hands-on engineering.",
      },
    ],
    certification:
      "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
  },
  contact: {
    id: "contact",
    label: "Contact",
    title: "Get in touch",
    lead: "Email is the direct way to start a conversation.",
  },
  navigation: [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ],
} as const;
