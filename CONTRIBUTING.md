# Contributing to FOIA Tracker

FOIA Tracker is meant to make public-record research easier to follow, reuse, and improve. You can contribute without already knowing FOIA law or GitHub deeply.

The website is the public front door. GitHub is the source of truth for documents, corrections, research leads, and proposed improvements.

## Pick a contribution lane

### Check an existing tracker entry

Good first contributions include:

- fixing a broken source link
- correcting a date or request stage
- adding context that can be supported by a public source
- improving wording for a newcomer
- flagging a privacy or accessibility problem

You can edit `index.html` directly through GitHub or open an issue describing the correction and its source.

## Add correspondence

If you have a new agency letter, scope email, fee notice, production, appeal response, or final response:

1. Preserve the original file when practical.
2. Check the document for private information that is not necessary to publish.
3. Use a descriptive filename that includes the request number when known.
4. Upload the file to the repository.
5. Add it to the correspondence timeline in `index.html` in chronological order.
6. Update the request stage only when the posted record supports the change.
7. Link the timeline entry back to the repository copy of the document.
8. In the pull request, explain what the document is and where it fits in the request history.

Do not publish passwords, account credentials, private authentication links, unnecessary home addresses, or other sensitive personal information.

## Open a FOIA research lead

You do not need a finished request to contribute useful research. Open an issue when you find a meaningful gap in the public record.

A strong lead includes:

- the question you are trying to answer
- what public sources you already checked
- the existing records you think may fill the gap
- a likely date range
- a likely SEC office or custodian, if known
- names, release numbers, matter numbers, or distinctive search terms
- useful public links

The goal is to turn a broad question into a record set that the agency could reasonably search for.

## Build or improve a request

FOIA generally provides access to existing agency records. It does not generally require the SEC to research a topic, answer a question, analyze data, or create a new record.

When refining a request, prefer concrete record descriptions over conclusions you want the agency to reach. Useful scoping fields include:

- record type
- subject or event
- date range
- office or custodian
- names
- release or matter numbers
- distinctive search terms

The request builder on the public site can turn those fields into a starting draft. Treat the generated text as a starting point, not legal advice.

## Improve the site or contributor tools

Site contributions are welcome, especially changes that make the project easier for a first-time visitor to understand or easier for a contributor to update.

Useful areas include:

- accessibility
- request metadata and data structure
- document indexing
- timeline automation
- contributor workflows
- search and filtering
- static-site deployment
- tests and link checking

The site is intentionally dependency-free HTML, CSS, and JavaScript right now.

## Pull request checklist

Before opening a pull request:

- [ ] The change is supported by the linked record or source where factual claims are involved.
- [ ] New correspondence is in chronological order.
- [ ] No unnecessary sensitive information is exposed.
- [ ] GitHub links point to the relevant branch, file, issue, or source document.
- [ ] Public-facing language is understandable to someone new to FOIA.
- [ ] The site still works without a build step.

## Useful links

- Repository: https://github.com/JFWooten4/FOIA-tracker
- Public-site branch: https://github.com/JFWooten4/FOIA-tracker/tree/public-foia-tracker-site
- Issues: https://github.com/JFWooten4/FOIA-tracker/issues
- SEC FOIA: https://www.sec.gov/foia
- SEC FOIA request form: https://www.sec.gov/forms/request_public_docs
- SEC FOIA Reference Guide: https://www.sec.gov/foia/foia-reference-guide
- SEC FOIA logs: https://www.sec.gov/foia/frequently-requested-documents/foia-logs
