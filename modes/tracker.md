# Mode: tracker — Application Tracker

Reads and displays `data/applications.md`.

**Tracker format:**
```markdown
| # | Date | Company | Role | Score | Status | PDF | Report |
```

Possible states: `Evaluated` → `Applied` → `Responded` → `Contact` → `Interview` → `Offer` / `Rejected` / `Discarded` / `SKIP`

- `Applied` = the candidate sent their application
- `Responded` = A recruiter/company contacted and the candidate responded (inbound)
- `Contact` = The candidate proactively contacted someone at the company (outbound, e.g. LinkedIn power move)

If the user asks to update a status, edit the corresponding row.

Also show statistics:
- Total applications
- By state
- Average score
- % with PDF generated
- % with report generated
