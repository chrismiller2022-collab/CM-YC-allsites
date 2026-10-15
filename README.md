# YCwebportfolio: Project Hub

A personal dashboard that links to every site and app I'm building.

It's a static site: plain HTML with no framework and no build step, so Vercel deploys it as-is.

## Adding or updating a project

Edit **`sites.js`** and push. Each entry looks like this:

```js
{
  name: "Workout Planner",
  description: "Plan workouts and track training.",
  status: "planned",            // "live" | "building" | "planned" | "showcase"
  url: "",                      // fill in once it's deployed
  repo: "https://github.com/chrismiller2022-collab/workouts",
  links: [{ label: "Admin", href: "https://.../admin" }],
  tags: ["fitness"],
}
```

## Hosting a standalone page (case studies, write-ups)

Put the page at `<name>/index.html` in this repo. Then add an entry with `status: "showcase"` and `url: "/<name>/"`. For an example, see `tv-score-bug/`.

The green or red dot next to each deployed site is a reachability check that runs in the browser.

## Deploying to Vercel

1. Go to vercel.com, choose **Add New → Project**, and import `YCwebportfolio`. Project names must be lowercase, so use `ycwebportfolio`.
2. Framework preset: **Other**. Leave the build command empty and keep the output directory as the root.
3. Deploy. Every push to the production branch redeploys the hub.

## Running locally

Open `index.html` in a browser, or run `npx serve .`.
