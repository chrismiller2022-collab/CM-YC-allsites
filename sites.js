// Public project list. This file is visible to anyone, so keep admin URLs out
// of it; those go in admin/private.js, which sits behind the admin password.
//
// status:      "live" | "building" | "planned" | "showcase" (case study / write-up)
// url:         the main site: a full URL, or a path like "/tv-score-bug/" for pages hosted here
// public:      false hides the project from the public portfolio (it still shows in /admin)
// demo:        a public demo of the app or its admin side (shown as "Demo")
// writeup:     a case study / write-up page (shown as "Write-up")
// links:       other public shortcuts
// repo:        GitHub repo; set repoPrivate: true to hide it on the public page

window.HUB = {
  owner: "Chris Miller",
  tagline: "Web apps and tools I've designed and built.",
  github: "https://github.com/chrismiller2022-collab",

  sites: [
    {
      name: "YC Power Ratings",
      description: "College football power ratings with my own projected spreads and totals, locked before kickoff, plus a graded log of every bet and pool pick.",
      status: "live",
      url: "https://ycpr.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/YCPR",
      tags: ["sports", "data"],
    },
    {
      name: "TV Score Bug",
      description: "A live betting and fantasy scoreboard drawn over any TV broadcast: React web overlay, Android TV app, and a phone remote.",
      status: "showcase",
      url: "/tv-score-bug/",
      tags: ["sports", "android tv", "react", "supabase"],
    },
    {
      name: "LTP Sport Psych",
      description: "Sport psychology site.",
      status: "live",
      url: "https://ltpsportpsych.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/ltpsportpsych",
      repoPrivate: true,
      tags: ["sports", "coaching"],
    },
    {
      name: "Financial Planner",
      description: "Household budgeting and planning. Try the John & Jane demo, or run a 5-step setup that saves only in your own browser.",
      status: "live",
      url: "https://finplanner-six.vercel.app",
      demo: "https://finplanner-six.vercel.app/demo",
      repo: "https://github.com/chrismiller2022-collab/finplanner",
      links: [{ label: "Start planner", href: "https://finplanner-six.vercel.app/app" }],
      tags: ["finance"],
    },
    {
      name: "Workout Planner",
      description: "Plan workouts and track training.",
      status: "building",
      url: "https://workouts-ebon-xi.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/workouts",
      tags: ["fitness"],
    },
    {
      name: "Citrus Tree Care Calendar",
      description: "Seasonal care calendar for citrus trees: watering, feeding, and pruning.",
      status: "live",
      url: "https://bigcitrus.vercel.app",
      repo: "https://github.com/chrismiller2022-collab/bigcitrus",
      tags: ["home", "garden"],
    },
    {
      name: "Home Hub",
      description: "Home dashboard.",
      status: "building",
      public: false,
      repo: "https://github.com/chrismiller2022-collab/HomeHub",
      tags: ["home"],
    },
    {
      name: "AI Job Search",
      description: "AI-assisted job hunting: finding, tracking, and applying to roles.",
      status: "building",
      public: false,
      repo: "https://github.com/chrismiller2022-collab/jobhunt",
      repoPrivate: true,
      tags: ["ai", "career"],
    },
  ],
};
