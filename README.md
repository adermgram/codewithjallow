# Code with Jallow website: setup guide

A fast static website. No database, no server, no monthly hosting bill.

## 1. Edit the content: everything lives in `js/data.js`

You only ever need to change this one file. Keep the quotes `""` and commas `,` exactly as they are.

| What you want to change | Where in `js/data.js` |
|---|---|
| Site name, parent name, tagline | `SITE.name`, `SITE.parent`, `SITE.tagline` |
| Phone number(s) | `SITE.phones` |
| WhatsApp number (used by every WhatsApp button) | `SITE.whatsapp` |
| Email address | `SITE.email` |
| Location (footer, contact page) | `SITE.location` |
| Facebook / Instagram / TikTok / YouTube / LinkedIn links | `SITE.social` (leave `""` to hide an icon) |
| Where registrations are saved | `SITE.formEndpoint` (see step 2) |
| **Founder section** (About page, and the home "Meet your instructor" block) | `FOUNDER`: `name`, `role`, `photo`, `highlights` (the two badges on the photo), `bio` (one string per paragraph) |
| A course fee, duration, schedule | `COURSES` → find the course → `fee`, `duration`, `schedule` |
| Open a course / mark it "Coming Soon" | `COURSES` → `status: "available"` or `"coming-soon"` |
| Learning mode (In-person / Online) | `COURSES` → `modes` |
| Registration Open / Closed / Opening soon | `COURSES` → `registration` |
| Course description, topics, outcomes | `COURSES` → `description`, `topics`, `outcomes` |
| Which form options a course pre-ticks when someone clicks "Register for this course" | `COURSES` → `interests` |
| Add a new course | Copy a whole `{ ... }` block in `COURSES`. The home page, courses page, footer, roadmap and counters update by themselves. |
| Add a news post | Copy a block in `POSTS` (newest first) |
| Add a gallery photo or video | Save the photo in `images/`, then add a line in `GALLERY` |
| Registration form dropdown / radio / checkbox options | `FORM` (`grades`, `levels`, `interests`) |

Replacing the founder photo: save the new photo over `images/founder.jpg` (or change `FOUNDER.photo`). Keep photos under ~300 KB (shrink them at squoosh.app) so the site stays fast on mobile data.

### Things that are written directly in the HTML pages
Short, rarely changed text is in the page files, not `data.js`:
- **Home page** (`index.html`): hero headline and buttons, mission sentence, "In action" photo strip, FAQ answers, final call-to-action.
- **About page** (`about.html`): "Why Code with Jallow exists", mission, vision, objectives, community activities.
- **Page titles and Google descriptions**: the `<title>` and `<meta name="description">` at the top of each `.html` file.
- **Contact page** (`contact.html`): the Google Maps embed location (the `src` of the `<iframe>`).
- **Registration form questions** (`register.html`): the question wording and which questions exist. If you add or remove a question, also update the matching lines in `js/main.js` (the `NEW REGISTRATION` WhatsApp summary) and in `apps-script/Code.gs` (the sheet columns).
- **Colours, fonts, spacing** (`css/style.css`): the colour variables are at the very top of the file (`:root`).
- **Logo and favicon**: `images/logo.jpg`, `images/favicon.svg`.

## 2. Store registrations in a Google Sheet
1. Create a new Google Sheet named **Code with Jallow Registrations**.
2. Go to **Extensions → Apps Script**, delete the sample code, and paste in `apps-script/Code.gs`.
3. (Optional) put your email in `NOTIFY_EMAIL` to get an alert for each sign-up.
4. Click **Deploy → New deployment → Web app**. Set *Execute as: Me* and *Who has access: Anyone*. Authorise when asked.
5. Copy the **Web app URL** and paste it into `SITE.formEndpoint` in `js/data.js`.

Registrations appear in the **Registrations** tab (email, name, gender, class/grade, WhatsApp, computer level, computer at home, interests, reason, student, plus a Status column to track New / Contacted / Enrolled). Contact messages go to **Messages**. Only the Google account that owns the Sheet can see them.

If you change the registration form questions or re-deploy an updated `Code.gs`, delete the old **Registrations** tab first so it is recreated with the new column headings.

Until this is connected, the forms open a prefilled WhatsApp message instead, so nothing is lost.

## 3. Put it online (free)
Use **Cloudflare Pages**, **Netlify** or **GitHub Pages** (this repository can be published directly with GitHub Pages).
- Netlify: go to app.netlify.com/drop and drag the whole project folder in. It's live in seconds.
- To update later, edit `data.js`, commit and push (GitHub Pages / Cloudflare Pages redeploy by themselves) or drop the folder in again.

## 4. Domain name
Buy a domain (e.g. `codewithjallow.com`, about $10–15/year from Namecheap or Cloudflare), then add it in your host's **Domain settings** and follow the DNS steps. HTTPS is automatic.
Afterwards, replace `https://www.example.com` in `robots.txt`, `sitemap.xml` and `index.html` (the `canonical` link) with the real address, and make the `og:image` in `index.html` a full URL.

## 5. Google visibility
Add the site to **Google Search Console** and submit `sitemap.xml`. Create a free **Google Business Profile** for "Code with Jallow, Basse" so it appears on Google Maps.

## Project layout
```
index.html, about.html, courses.html, register.html,
news.html, gallery.html, contact.html   the pages
js/data.js                              all editable content (edit this)
js/main.js                              builds header, footer, courses, forms (rarely edited)
js/fx.js                                visual effects only; safe to delete
css/style.css                           all styling
images/                                 logo, founder and gallery photos
apps-script/Code.gs                     saves form submissions to Google Sheets
```

## Upgrading later
When the initiative grows (online payments, student accounts, an admin dashboard), the design carries over to a Next.js + Supabase build. Nothing here is wasted.
