# Test tones

A blind listening survey for eight sets of product sounds. Each sound asks:

> What would you expect this sound to mean? What does it remind you of?

Listeners also pick their favourite sound in each set and rate it from 1 to 5.

## Files

- `index.html`: the survey (a single page with no build step)
- `apps-script/Code.gs`: receives answers and writes them to the results Google Sheet
- `s/`: the tones, under neutral names so file names don't hint at their purpose

| File | Set | Tone code |
| --- | --- | --- |
| `s/a1.wav` | Sound set 1, variation 1 | @0150 |
| `s/a2.wav` | Sound set 1, variation 2 | @0157 |
| `s/a3.wav` | Sound set 1, variation 3 | @0124 |
| `s/b1.wav` | Sound set 2, variation 1 | @0103 |
| `s/b2.wav` | Sound set 2, variation 2 | @0106 |
| `s/b3.wav` | Sound set 2, variation 3 | @0171 |
| `s/b4.wav` | Sound set 2, variation 4 | @0172 |
| `s/c1.wav` | Sound set 3, sound 1 | @0138 |
| `s/c2.wav` | Sound set 3, sound 2 | @0126 |
| `s/d1.wav` | Sound set 4, sound 1 | @0159 |
| `s/d2.wav` | Sound set 4, sound 2 | @0160 |
| `s/d3.wav` | Sound set 4, sound 3 | @0111 |
| `s/d4.wav` | Sound set 4, sound 4 | @0154 |
| `s/d5.wav` | Sound set 4, sound 5 | @0130 |
| `s/e1.wav` | Sound set 5, sound 1 | @0166 |
| `s/e2.wav` | Sound set 5, sound 2 | @0167 |
| `s/e3.wav` | Sound set 5, sound 3 | @0180 |
| `s/e4.wav` | Sound set 5, sound 4 | @0108 |
| `s/e5.wav` | Sound set 5, sound 5 | @0152 |
| `s/f1.wav` | Sound set 6, sound 1 | @0146 |
| `s/f2.wav` | Sound set 6, sound 2 | @0173 |
| `s/f3.wav` | Sound set 6, sound 3 | @0174 |
| `s/f4.wav` | Sound set 6, sound 4 | @0175 |
| `s/g1.wav` | Sound set 7, sound 1 | @0121 |
| `s/g2.wav` | Sound set 7, sound 2 | @0101 |
| `s/h1.wav` | Sound set 8, sound 1 | @0134 |
| `s/h2.wav` | Sound set 8, sound 2 | @0144 |
| `s/h3.wav` | Sound set 8, sound 3 | @0177 |

The tone codes match the `@NNNN` suffix of the original sound files. Nothing in this repo says what each set is for, so it stays blind even if the repo is public.

## Where answers are saved

- **As a Claude artifact:** answers go to the artifact's own private storage. Only the owner and editors see them.
- **Anywhere else (e.g. GitHub Pages):** answers go to a Google Sheet through a small Apps Script web app (`apps-script/Code.gs`). Visitors never see other people's answers or the sheet. Each sound becomes one row, and resubmitting replaces that visitor's earlier rows.
- If neither is available, **Submit answers** shows a summary for the listener to copy and send instead.

## Collecting answers in Google Sheets

1. Go to [script.google.com](https://script.google.com) signed in as the sheet's owner, and click **New project**.
   (Opening Apps Script from the sheet's **Extensions** menu also works, but it fails with "Sorry, unable to open the file at present" when the browser is signed in to more than one Google account. If you see that, use a private window signed in to just the owner's account.)
2. Replace everything in `Code.gs` with the contents of `apps-script/Code.gs`, then save. `SHEET_ID` at the top already points at the results sheet.
3. **Deploy → New deployment →** type **Web app**. Set *Execute as* to **Me** and *Who has access* to **Anyone**, then **Deploy** and allow access when Google asks.
4. Copy the web app URL (it ends in `/exec`) into `SHEET_URL` near the bottom of `index.html`. This is already done for the current deployment.

"Anyone" only lets visitors *send* answers. The script never returns sheet data, and the sheet itself stays private to you.

After changing `Code.gs` later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## Publishing on GitHub Pages

Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`.
