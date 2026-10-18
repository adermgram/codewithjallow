# Code with Jallow website: setup guide

A fast static website. No database, no server, no monthly hosting bill.

## 1. Edit the content (prices, courses, news, photos)
Everything editable is in **`js/data.js`**:
- **Fees:** find the course and write `fee: "D 1,500"`. Empty shows "To be announced".
- **Available Now / Coming Soon:** `status: "available"` or `"coming-soon"`.
- **Schedule, duration, learning mode, registration status:** same block.
- **News post:** copy a block in `POSTS` (newest first).
- **Gallery photo or video:** save the photo in `images/`, add a line in `GALLERY`.
- **Social links and email:** `SITE.social` and `SITE.email`.

Keep photos under ~300 KB each (use squoosh.app to shrink them) so the site stays fast on mobile data.

## 2. Store registrations in a Google Sheet
1. Create a new Google Sheet named **Code with Jallow Registrations**.
2. Go to **Extensions → Apps Script**, delete the sample code, and paste in `apps-script/Code.gs`.
3. (Optional) put your email in `NOTIFY_EMAIL` to get an alert for each sign-up.
4. Click **Deploy → New deployment → Web app**. Set *Execute as: Me* and *Who has access: Anyone*. Authorise when asked.
5. Copy the **Web app URL** and paste it into `formEndpoint` in `js/data.js`.

Registrations appear in the **Registrations** tab (with a Status column to track New / Contacted / Enrolled), and contact messages in **Messages**. Only the Google account that owns the Sheet can see them.

Until this is connected, the forms open a prefilled WhatsApp message instead, so nothing is lost.

## 3. Put it online (free)
Use **Cloudflare Pages**, **Netlify** or **GitHub Pages**:
- Netlify: go to app.netlify.com/drop and drag the whole `site` folder in. It's live in seconds.
- To update later, edit `data.js` and drop the folder in again.

## 4. Domain name
Buy a domain (e.g. `codewithjallow.com`, about $10–15/year from Namecheap or Cloudflare), then add it in your host's **Domain settings** and follow the DNS steps. HTTPS is automatic.
Afterwards, replace `https://www.example.com` in `robots.txt`, `sitemap.xml` and `index.html` with the real address.

## 5. Google visibility
Add the site to **Google Search Console** and submit `sitemap.xml`. Create a free **Google Business Profile** for "Code with Jallow, Basse" so it appears on Google Maps.

## Upgrading later
When the initiative grows (online payments, student accounts, an admin dashboard), the design carries over to a Next.js + Supabase build. Nothing here is wasted.
