# Test tones

A blind listening survey for five sets of product sounds. Each sound asks:

> What would you expect this sound to mean? What does it remind you of?

Listeners also pick their favourite sound in each set and rate it from 1 to 5.

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

The tone codes match the `@NNNN` suffix of the original sound files. Nothing in this repo says what each set is for, so it stays blind even if the repo is public.

## Where answers are saved

Answers are saved only when the page runs as a Claude artifact, which provides the shared storage. Hosted anywhere else (for example GitHub Pages), the survey plays and works the same, but **Submit answers** shows a summary for the listener to copy and send instead of saving it.

## Publishing on GitHub Pages

Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`.
