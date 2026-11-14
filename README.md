# Merch Studio — MP&A workspace concept

A no-build front-end concept for a role-based Merchandising, Planning and Allocation workspace. Open `index.html` in a modern browser; no package install or server is required.

## What is interactive

- Role desk navigation for Merchandising, Planning, Store Planning, Allocation, Trend Intelligence, MP&A Analytics, Action Center and Data Room.
- Role switching updates the sample user and personal task queue.
- Synthetic Season 4 dashboard with demo styles, plans, regional store targets and allocation proposals.
- Review buttons open a decision dialog; no backend systems are changed.
- Search and filter the sample assortment; preview a sales scenario; export allocation and store-plan review CSVs; and upload a CSV for local parsing.
- Store-plan scenarios redistribute a fixed total across locations; exported values use the same scenario shown in the table.
- Download a CSV schema index or a template for the selected data type from the Data Room.
- Merchandisers can link an authorized local image to a selected SKU. The demo only checks SKU text in the filename; it does not analyze image content.
- Allocators can select replenishment proposals calculated from target cover, receiver on-hand, inbound units, donor availability and quota; proposals route through a local Merch approval queue.
- Trend cards are taxonomy/workflow examples without third-party imagery or claims that they represent live trends. They can be added to the session action queue for review.
- The Analytics workspace includes a metric dictionary export and fixed-filter query over the demo dataset. Metrics without adequate source data (such as weeks of supply or channel-level sales) explicitly return no result.
- Planner view includes sample OTB remaining and metric-definition notes. Production KPI definitions still need agreement with business and Finance.

## Data and source boundaries

Operating figures are sample data for the concept. Vogue is linked as an RSS metadata source; Vogue images and full articles are not included. Instagram source access requires eligible Meta accounts, app configuration, review and approved permissions. NOAA/NWS values in the screens are illustrative.

CSV uploads and selected images are read locally by the browser; they are not sent to a server. Uploaded CSVs do not replace the synthetic dashboard values. Asset links use local browser storage and may be limited by browser storage quotas. Transfer approvals are held in memory and disappear when the page is reloaded.

The demo has no connected SAP, o9, Blue Yonder, authorized asset library, OCR/image AI, SSO, server persistence, live data refresh or system write-back. No third-party product/editorial images are scraped or bundled. A production build needs confirmed systems of record and interface access, agreed metric definitions, role/record-level authorization, data freshness and reconciliation controls, audit trails, exception handling and human approval before write-back.
