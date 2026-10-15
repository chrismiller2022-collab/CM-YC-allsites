# YCwebportfolio

Two sites in one static Vercel project. There's no framework and no build step.

| Path | Who it's for | What it shows |
|---|---|---|
| `/` | Everyone | Public portfolio: live sites, demos, write-ups and case studies. No admin links. |
| `/admin` | Me only, behind a password | Every project with its **Admin** button first, a green/red up-check, and when I last clicked through to each admin page. |

## Files

- **`sites.js`**: the project list. It's public, so admin URLs never go here.
- **`admin/private.js`**: the admin URLs and other owner-only links, keyed by project name. It's password-protected.
- **`middleware.js`**: password-protects `/admin` and everything under it.
- **`tv-score-bug/`**: a case study hosted here. Add others the same way at `<name>/index.html`.

## Adding or updating a project

In `sites.js`:

```js
{
  name: "Workout Planner",
  description: "Plan workouts and track training.",
  status: "building",        // "live" | "building" | "planned" | "showcase"
  url: "https://workouts-ebon-xi.vercel.app",
  demo: "",                  // public demo, e.g. of the admin side
  writeup: "",               // case study / write-up, e.g. "/workouts-admin/"
  repo: "https://github.com/chrismiller2022-collab/workouts",
  repoPrivate: false,        // true hides the Code button on the public page
  public: true,              // false hides it from the public page entirely
  tags: ["fitness"],
}
```

If the project has an admin page, add it to `admin/private.js`:

```js
"Workout Planner": { admin: "https://workouts-ebon-xi.vercel.app/admin" },
```

## "Last checked" times

Clicking a project's **Admin** button on `/admin` records the date and time. Each card shows it, and the header counts admin pages you haven't checked in 7+ days. **Least recently checked** sorts the oldest first.

The times are stored in the browser (`localStorage`), so each device keeps its own.

## Deploying to Vercel

1. Import the repo with the project name `ycwebportfolio` (it must be lowercase). Use the preset **Other** and no build command.
2. In **Settings → Environment Variables**, add `ADMIN_PASSWORD` and redeploy. Until it's set, `/admin` stays locked.
3. To sign in to `/admin`, use any username plus that password. The browser remembers it for the session.

## Running locally

Run `npx serve .`. The password check only runs on Vercel, so `/admin` is open locally.
