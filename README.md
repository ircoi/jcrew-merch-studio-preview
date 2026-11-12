# Merch Studio — J.Crew planning concept

A no-build front-end concept for a role-based Merchandising, Planning and Allocation workspace. Open `index.html` in a modern browser; no package install or server is required.

## What is interactive

- Role desk navigation for Merchandising, Planning, Allocation, Trend Intelligence, Action Center and Data Room.
- Synthetic Season 4 dashboard with demo styles, plans, region scenarios and allocation proposals.
- Review buttons open a decision dialog; no backend systems are changed.
- Search the sample assortment, preview a scenario, export the allocation demo as CSV, and upload a CSV for local parsing.
- Download CSV field templates from the Data Room.
- Merchandisers can link a local image to a selected SKU; the demo only checks SKU text in the filename and is not image recognition or OCR.
- Allocators can select replenishment proposals calculated from target cover, receiver on-hand, inbound units, donor availability and quota; proposals route through a local Merch approval queue.
- Planner view includes sample OTB remaining and metric-definition notes. Production KPI definitions still need agreement with business and Finance.
- 30 original CSS moodboard illustrations are clearly marked as demo art, not scraped media or verified trends.

## Data and source boundaries

Operating figures are sample data for the concept. Vogue is linked as an RSS metadata source; Vogue images and full articles are not included. Instagram source access requires eligible Meta accounts, app configuration, review and approved permissions. NOAA/NWS values in the screens are illustrative. 

CSV uploads and selected images are read locally by the browser; they are not sent to a server. Uploaded CSVs do not replace the synthetic dashboard values. Asset links use local browser storage and may be limited by browser storage quotas. Transfer approvals are held in memory and disappear when the page is reloaded.

The demo has no connected SAP, o9, Blue Yonder, asset library, OCR/image AI, SSO, persistence, live data refresh or system write-back. A production build needs confirmed systems of record and interface access, agreed metric definitions, role/record-level authorization, data freshness and reconciliation controls, audit trails, exception handling and human approval before write-back.
