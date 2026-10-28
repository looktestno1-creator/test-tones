# Test tones

A blind listening survey for two sets of product sounds. Each sound asks:

> What would you expect this sound to mean? What does it remind you of?

Listeners also pick their favourite variation in each set and rate it from 1 to 5.

## Files

- `index.html`: the survey (a single page with no build step)
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

The tone codes match the `@NNNN` suffix of the original sound files. Nothing in this repo says what each set is for, so it stays blind even if the repo is public.

## Where answers are saved

Answers are saved only when the page runs as a Claude artifact, which provides the shared storage. Hosted anywhere else (for example GitHub Pages), the survey plays and works the same, but **Submit answers** shows a summary for the listener to copy and send instead of saving it.

## Publishing on GitHub Pages

Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`.
