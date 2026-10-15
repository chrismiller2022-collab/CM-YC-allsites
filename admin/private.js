// Private extras for the /admin dashboard, keyed by the project's name in
// /sites.js. Served only behind the admin password (see middleware.js).
//
// admin:  the project's admin page; it becomes the card's main button
// links:  any other owner-only shortcuts

window.PRIVATE = {
  "YC Power Ratings": { admin: "https://ycpr.vercel.app/admin" },
  "LTP Sport Psych": { admin: "https://ltpsportpsych.vercel.app/admin" },
  "Financial Planner": { admin: "https://finplanner-six.vercel.app/admin" },
  "Workout Planner": { admin: "https://workouts-ebon-xi.vercel.app/admin" },
};
