// The one file to edit. Add, remove, or reorder entries here and push;
// Vercel redeploys the hub automatically.
//
// status: "live" | "building" | "planned"
// url:    the deployed site (leave "" until it's on Vercel)
// links:  any extra shortcuts (admin pages, dashboards, docs...)

window.HUB = {
  owner: "Chris Miller",
  tagline: "Everything I'm building, in one place.",
  github: "https://github.com/chrismiller2022-collab",

  sites: [
    {
      name: "YC Power Ratings",
      description: "Power ratings and rankings site, with an admin panel for managing data.",
      status: "live",
      url: "https://ycpr.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/YCPR",
      links: [{ label: "Admin", href: "https://ycpr.vercel.app/admin" }],
      tags: ["sports", "data"],
    },
    {
      name: "LTP Sport Psych",
      description: "Sport psychology site.",
      status: "live",
      url: "https://ltpsportpsych.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/ltpsportpsych",
      links: [{ label: "Admin", href: "https://ltpsportpsych.vercel.app/admin" }],
      tags: ["sports", "coaching"],
    },
    {
      name: "Home Hub",
      description: "Home dashboard.",
      status: "building",
      url: "",
      repo: "https://github.com/chrismiller2022-collab/HomeHub",
      links: [],
      tags: ["home"],
    },
    {
      name: "AI Job Search",
      description: "AI-assisted job hunting: finding, tracking, and applying to roles.",
      status: "building",
      url: "",
      repo: "https://github.com/chrismiller2022-collab/jobhunt",
      links: [],
      tags: ["ai", "career"],
    },
    {
      name: "Workout Planner",
      description: "Plan workouts and track training.",
      status: "building",
      url: "https://workouts-ebon-xi.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/workouts",
      links: [],
      tags: ["fitness"],
    },
    {
      name: "Financial Planner",
      description: "Budgeting and long-term financial planning.",
      status: "live",
      url: "https://finplanner-six.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/finplanner",
      links: [{ label: "Cash Flow", href: "https://finplanner-six.vercel.app/cashflow" }],
      tags: ["finance"],
    },
    {
      name: "Citrus Tree Care Calendar",
      description: "Seasonal care calendar for citrus trees: watering, feeding, and pruning.",
      status: "live",
      url: "https://bigcitrus.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/bigcitrus",
      links: [],
      tags: ["home", "garden"],
    },
  ],
};
