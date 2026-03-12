# Nick TODOs

## Missing Images

Several inline chart/diagram images from the original Blogspot posts are no longer
available on Google's CDN. The posts still read fine without them, but if you have
the originals they'd be great to add back.

### Negative Splitting Ultras (`content/posts/negative-splitting-ultras.md`)

The post originally had 4 inline images. We recovered 1 of 4:

- **ns-chart-2.png** - RECOVERED - the pace strategy effort curve chart
- **MISSING** - chart #1 (appears to be the initial pace strategy / split comparison chart)
  - Original URL: `https://lh5.googleusercontent.com/LEljTQUM5AjboQcPF5jhnB-TZtgh4EvT8ZMqiAyLyUjqpMIGb02KFzcthroFj1kh_nAhrRs4zu7Z92DSO8tzUPsC87IkyPjRxxTcRUFcbd0sn8UuA0ueTvJybZ0T6Xad9rGkl_4G=s0`
- **MISSING** - chart #3 (another effort curve / tradeoff chart)
  - Original URL: `https://lh4.googleusercontent.com/-D4kdHXz4vgxUiJfj-_0tjexdxgwTr6u5pzM2ZS8Q3D5eYoS4bQKApjpBlJiE2wWjgPPQ2Qmcsn5gbax6dUFodFVZP1sYCpJhjZ70PBAoOZuIcIy9G4j3sNeis8_i9JnNiq77cIq=s0`
- **MISSING** - chart #4 (small chart, possibly the split formula illustration)
  - Original URL: `https://lh5.googleusercontent.com/X2lUOv_Kh3fWLathsDS6tnAAYhESIExvkiJDGeHGsVKhQNVaA0-NHjp-UtTXAgzZPHmi_VgCI2Peh_1z62OJ-lhSmeepfd3FdcONCOakcbcYaY8OEjCUCVe7yXXuqMzlvIUagrph=w619-h175`

### Below the Green Line (`content/posts/below-the-green-line.md`)

The post originally had 7 inline images. We recovered 2 of 7:

- **gl-chart-1.png** - RECOVERED - the green line pacing chart (green line, dotted execution, red line)
- **gl-chart-2.png** - RECOVERED - the green line with dips / buffer illustration
- **MISSING** - chart #3 (standalone green line race picture)
  - Original URL: `https://lh3.googleusercontent.com/78R8Sd3h29EJmlcA-yMRKUIw_kxdZqQoUsWbFD4lshnGsca8aN6s6RLxgvnDF9HmVSORZ_SK1DL1zjOz_25g4NXaN-sz-9DX7olscMics0KBTZ91IDz3S59BmLnQHErZ3_VYyFz`
- **MISSING** - chart #4 (yellow line race picture)
  - Original URL: `https://lh4.googleusercontent.com/bYIgYPEUDnI-L3FLIwY1QZ-g4zxzts3EDZn2Q86To-IVQiV__LrPqsxN6kJGN17LWPWaSnkVezmzSt-iZxs-79PuTYCn6OX3VZBAdyro8biDJq8`
- **MISSING** - chart #5 (red line race picture)
  - Original URL: `https://lh5.googleusercontent.com/wAne9VmgQEdxFBpHRBw2A8c-KOlqrO_Hh9sqbBipcLd8riiOfsNV2Yt3gD4ED6ESNbx8UnRFT63QtMJSU6oJTV9O6Zg7HRyj2w8W7-0sK1qZhbfehVtZoDbZ7Wru9Pq5`
- **MISSING** - chart #6 (unknown, possibly the "pushing the green line up" illustration)
  - Original URL: `https://lh4.googleusercontent.com/l2RbTa4ixotO6H5gBI0mPlmlfR1SeslQhdcIu2XMIvZv-c_PKflYIyoz2nEN_Mszv_kjmpOM9mLcTDzTu8te1ngFFVnHfiDQZ25U4SuA4o0-jORbw7UIItGsaF6dN2XtWsrWMCO3`
- **MISSING** - chart #7 (the red/yellow line dotted execution chart)
  - Original URL: `https://lh5.googleusercontent.com/txxw_TcwZP82hzUzYW04XotT7V2dqqL_oY73tNkgNPU7alBApd7P5L7x8lp7Y1VUhAoqaBjh3eRSBg7VzEGbSm-qRInx5rWpwppSMNCoyjdtXTLevSFNsxoxmMg2V6AFZTYoJGR_`
  - NOTE: This one DID download as gl-chart-1.png but may actually be chart #7, not #1. Please verify.

### Desert Solstice 2021 Race Report (`content/posts/desert-solstice-2021-race-report.md`)

All key images recovered:

- **desert-solstice-1.png** - RECOVERED - race photo (featured image / hero)
- **desert-solstice-2.png** - RECOVERED - finish photo (Melissa Ruse)
- **MISSING** - 1 additional race photo that failed to download
  - Original URL: `https://lh4.googleusercontent.com/ilYsjSqwGxdO43wpQOxFJkWqBIjx_Kbsfh8Zbk8Xr-Ec_0293sAso3MC6eqqdZzToE6rYeEEtYaAZgmqL2qrDwcMO4XO7RYfZ-etJYcy8iDjPb6QgGkg7ctPTbpH6OarSNq9p35zxGv98sp59A`

### Estimating the Green Line (`content/posts/estimating-the-green-line.md`)

All images recovered (only had 1 featured image).

## How to Add Missing Images

If you have the original chart images (likely created in Google Sheets or a drawing tool):

1. Save them as PNG files
2. Place them in `static/images/`
3. Reference them in the post markdown as `![description](/images/your-filename.png)`

## Other TODOs

- [ ] Review all 4 posts for content accuracy (the text was extracted via web scraping)
- [ ] Replace profile photo (`static/images/profile.jpg`) with a higher-res version if available
- [ ] Review the About page (`content/about.md`) and personalize further
- [ ] Decide on theme refinements before launch (see `DESIGN_RESEARCH.md` for inspiration)
- [ ] When ready to go live: update DNS to point `www.nickcouryruns.com` at GitHub Pages
      (in your domain registrar, add a CNAME record pointing to `nickcoury.github.io`)
- [ ] Enable GitHub Pages in repo settings (Settings > Pages > Source: GitHub Actions)
