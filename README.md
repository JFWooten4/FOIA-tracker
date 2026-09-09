# FOIA Tracker

A public-facing tracker for following SEC FOIA requests from filing through correspondence and production, with newcomer guidance and GitHub-native contribution tools.

## Public site branch

The `public-foia-tracker-site` branch contains a dependency-free static site:

- `index.html` — request dashboard, correspondence timeline, research path, request builder, and contributor center
- `styles.css` — responsive visual design
- `script.js` — copy tools and the in-browser request builder
- `CONTRIBUTING.md` — contribution lanes, correspondence checklist, research-lead guidance, and pull-request checklist
- `Acknowledgement Letter FOIA-PA - 26-00500-FOIA.pdf` — currently posted correspondence

The site intentionally distinguishes repository-visible status from the SEC Public Access Link. It does not imply that the tracker has live access to the SEC's private PAL status data.

## Contributing

The website is the front door; GitHub is the source of truth. Newcomers can contribute by correcting a tracker entry, adding correspondence, opening a FOIA research lead, refining a records request, or improving the site and its tooling.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow and privacy checklist.

## Publishing

The branch is ready for any static host. For GitHub Pages, configure Pages to publish from the repository root of the desired branch, or merge the site to the branch already configured as the Pages source.

## Updating a request

Add new correspondence to the repository and then update the request status and timeline in `index.html`. Keep correspondence in chronological order and avoid publishing private requester information that is not necessary for understanding the request.

## Official SEC resources

- SEC FOIA: https://www.sec.gov/foia
- SEC request form: https://www.sec.gov/forms/request_public_docs
- SEC FOIA Reference Guide: https://www.sec.gov/foia/foia-reference-guide
- SEC FOIA logs: https://www.sec.gov/foia/frequently-requested-documents/foia-logs
- SEC Public Access Link information: https://www.sec.gov/foia/frequently-requested-documents/public-access-link-pal
