const data = {
  basics: {
    firstName: "Justin",
    lastName: "Kahrs",
    label: "Senior Software Engineer",
    email: "justin@justinkahrs.com",
    phone: "(231) 794-1337",
    url: "https://www.justinkahrs.com",
    location: {
      city: "Grand Rapids",
      region: "MI",
      country: "USA",
    },
    summary:
      "Full stack engineer that has gone all-in on AI-driven development and automation. Creator of o11n, a custom-built AI-augmented IDE designed to accelerate developer productivity. Founder of Senna Automation, an agency focused on delivering intelligent automation solutions to small businesses. Spent nearly 7 years at a Silicon Valley fleet-management startup, playing a key technical role in engineering multiple products and systems for Fortune Global 500 companies, and over 8 years in public-university technology positions.",
  },

  work: [
    {
      name: "o11n (software)",
      link: "https://o11n.life",
      position: "Creator & Developer",
      startDate: "2025",
      endDate: "Present",
      summary: "",
      highlights: [
        "AI-augmented Integrated Development Environment (IDE)",
        "Compatibility with any Large Language Model (LLM) chat-bot",
        "Significant enhancement of productivity in prototyping and feature development",
      ],
    },
    {
      name: "Ridecell",
      location: "San Francisco, CA",
      link: "https://www.ridecell.com",
      position: "Senior Frontend Engineer (remote)",
      startDate: "2018",
      endDate: "2024",
      highlights: [
        "Shipped next-generation shared-mobility solutions internationally for a Fortune Global 500 company",
        "Delivered and maintained many products ranging from fleet-management automation workflows to short-term rental booking applications",
      ],
    },
    {
      name: "Indiana University",
      location: "Bloomington, IN",
      link: "https://www.iu.edu",
      position: "Senior Frontend Engineer",
      startDate: "2015",
      endDate: "2018",
      highlights: [
        "Built and supported internal data-processing/management tools and dashboards",
        "HIPAA/FERPA-compliant practices",
        "Interfaced web-based applications with Tableau/Denodo for complex data analysis and retrieval",
      ],
    },
    {
      name: "Grand Valley State University",
      location: "Allendale, MI",
      link: "https://www.gvsu.edu",
      position: "Server Support Technician",
      startDate: "2010",
      endDate: "2015",
      highlights: [],
    },
  ],

  education: [
    {
      institution: "Grand Valley State University",
      area: "Computer Science",
      studyType: "B.S.",
      startDate: "2006",
      endDate: "2010",
    },
  ],

  skills: [
    { name: "Front-End", keywords: ["JavaScript", "TypeScript", "React"] },
    { name: "Back-End", keywords: ["Python", "Django"] },
    { name: "Cloud", keywords: ["GCP", "AWS"] },
    { name: "Automation", keywords: ["Make", "Zapier", "n8n"] },
    { name: "DevOps", keywords: ["GitHub Actions"] },
  ],

  references: [],
};

export default data;
