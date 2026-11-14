const styles = [
  ["Cashmere Crewneck","Knitwear","Oat","KN-1042",1840,72,11.8,"Winner",230000],
  ["Classic Trench","Outerwear","Stone","OT-2108",1315,46,-8.6,"Watch",332000],
  ["Fair Isle Cardigan","Knitwear","Multi","KN-1184",990,64,6.2,"Rising",214000],
  ["Everyday Oxford","Shirting","Blue Stripe","SH-3317",1660,69,3.8,"On plan",166000],
  ["Wool Topcoat","Outerwear","Navy","OT-2021",780,41,-2.4,"Watch",312000],
  ["Heritage Plaid Skirt","Bottoms","Tartan","BT-4106",625,57,1.6,"On plan",93750],
  ["Quilted Barn Jacket","Outerwear","Olive","OT-2290",1210,77,14.2,"Winner",217800],
  ["Ribbed Turtleneck","Knitwear","Burgundy","KN-1055",1120,66,5.1,"Rising",123200],
  ["Straight Jean","Denim","Rinse","DN-5062",1430,61,2.7,"On plan",128700],
  ["Ludlow Blazer","Tailoring","Charcoal","TL-6101",840,52,-4.1,"Watch",336000],
  ["Printed Silk Scarf","Accessories","Floral","AC-8032",560,74,8.4,"Winner",44800],
  ["Corduroy Trouser","Bottoms","Camel","BT-4171",730,59,1.2,"On plan",109500]
];
const regions = [
  ["Northeast","41°–53°","Cooler than normal","Outerwear + knit layers","DEMO · HIGH VARIANCE"],
  ["Southeast","57°–71°","Mild, wetter periods","Transitional layers","DEMO · MEDIUM"],
  ["Midwest","36°–49°","Cold snaps possible","Warm knits + coats","DEMO · MEDIUM"],
  ["South Central","53°–68°","Near seasonal normal","Light layers, denim","DEMO · MEDIUM"],
  ["Mountain","30°–48°","Wide elevation range","Cold-weather depth","DEMO · HIGH VARIANCE"],
  ["Pacific","49°–64°","Coastal / inland split","Layering, lighter outerwear","DEMO · MEDIUM"]
];
const allocation = [
  {sku:"KN-1042",style:"Cashmere Crewneck · Oat",receive:"NYC · UES 014",donor:"NYC · Flatiron 008",onHand:18,weekly:11,inbound:0,donorAvailable:22,quota:18,targetCover:3,reason:"3 sizes below 1 week; donor cover remains above target"},
  {sku:"OT-2290",style:"Quilted Barn Jacket · Olive",receive:"Boston · Newbury 027",donor:"Boston · Chestnut Hill 019",onHand:14,weekly:8,inbound:0,donorAvailable:20,quota:12,targetCover:3,reason:"Low receiver cover; donor stock and quota available"},
  {sku:"KN-1184",style:"Fair Isle Cardigan · Multi",receive:"Chicago · North 041",donor:"Chicago · Oakbrook 035",onHand:12,weekly:7,inbound:0,donorAvailable:14,quota:10,targetCover:3,reason:"Size M risk; donor stock available"},
  {sku:"OT-2021",style:"Wool Topcoat · Navy",receive:"Seattle · Downtown 063",donor:"Seattle · University 058",onHand:26,weekly:6,inbound:0,donorAvailable:18,quota:12,targetCover:3,reason:"Receiver cover above target; no transfer need"},
  {sku:"KN-1055",style:"Ribbed Turtleneck · Burgundy",receive:"Atlanta · Ponce 052",donor:"Atlanta · Buckhead 049",onHand:9,weekly:6,inbound:2,donorAvailable:8,quota:8,targetCover:3,reason:"Fast rate; subtract 2 confirmed inbound units"}
];
const tasks = [
  ["09","NOV","ALLOCATION","Review cashmere cover in Northeast","3 locations are below 2 weeks of cover. Check size availability before approving suggested units.","Alex Morgan","HIGH"],
  ["09","NOV","PLANNING","Review trench size curve","Sales are 9% under plan in the demo data. Validate stockouts and size availability before revising demand.","Alex Morgan","TODAY"],
  ["10","NOV","MERCH","Validate Fair Isle trend signal","Keep this signal out of forecast inputs until it is compared with sell-through and approved as a trend hypothesis.","Morgan Lee","REVIEW"],
  ["10","NOV","MERCH","Confirm holiday gift edit readiness","Check web assortment, imagery status and inventory allocation before the 3 PM checkpoint.","Alex Morgan","TODAY"],
  ["11","NOV","PLANNING","Refresh regional weather scenario","Replace demo outlook with timestamped NOAA/NWS input and review confidence by region.","Sam Rivera","UPCOMING"],
  ["12","NOV","ALLOCATION","Check barn jacket inbound","Reconcile the suggested quantity against confirmed in-transit units and store capacity.","Jordan Kim","UPCOMING"],
  ["13","NOV","MERCH","Review plaid skirt lifecycle","Compare full-price sell-through, weeks of supply and markdown calendar before decision.","Morgan Lee","UPCOMING"],
  ["14","NOV","PLANNING","Prepare weekly variance notes","Separate demand, availability, pricing and returns effects in the MPA weekly review.","Alex Morgan","UPCOMING"]
];
const storePlans=[
  {store:"UES 014",city:"New York, NY",region:"Northeast",tier:"A",plan:480000,actual:502000,cover:5.8,exception:"Above plan"},
  {store:"Flatiron 008",city:"New York, NY",region:"Northeast",tier:"A",plan:420000,actual:398000,cover:7.1,exception:"Review demand"},
  {store:"Newbury 027",city:"Boston, MA",region:"Northeast",tier:"A",plan:390000,actual:412000,cover:4.9,exception:"Low cover"},
  {store:"Chestnut Hill 019",city:"Newton, MA",region:"Northeast",tier:"B",plan:310000,actual:294000,cover:6.7,exception:"On plan"},
  {store:"Ponce 052",city:"Atlanta, GA",region:"Southeast",tier:"B",plan:360000,actual:352000,cover:7.8,exception:"On plan"},
  {store:"Buckhead 049",city:"Atlanta, GA",region:"Southeast",tier:"A",plan:430000,actual:446000,cover:6.2,exception:"Above plan"},
  {store:"North 041",city:"Chicago, IL",region:"Midwest",tier:"A",plan:470000,actual:486000,cover:5.2,exception:"Low cover"},
  {store:"Oakbrook 035",city:"Oak Brook, IL",region:"Midwest",tier:"B",plan:380000,actual:362000,cover:8.1,exception:"Review demand"},
  {store:"Downtown 063",city:"Seattle, WA",region:"West",tier:"A",plan:410000,actual:421000,cover:6.4,exception:"On plan"},
  {store:"University 058",city:"Seattle, WA",region:"West",tier:"B",plan:350000,actual:343000,cover:7.3,exception:"On plan"},
  {store:"Marina 071",city:"San Francisco, CA",region:"West",tier:"A",plan:420000,actual:438000,cover:5.7,exception:"Above plan"},
  {store:"Fashion Island 076",city:"Newport Beach, CA",region:"West",tier:"B",plan:370000,actual:366000,cover:6.9,exception:"On plan"}
];
const metricDefinitions=[
  ["Net sales","Sales less discounts, returns and cancellations per approved finance mapping.","POS / Ecommerce","Merch Analytics","v1.0","DEMO — CONFIRM"],
  ["Units sold","Net fulfilled units less returned units per approved sales mapping.","POS / Ecommerce","Merch Analytics","v1.0","DEMO — CONFIRM"],
  ["Sell-through","Units sold ÷ (units sold + ending on-hand); return and stockout rules pending.","POS + Inventory","Planning","v1.0","DRAFT"],
  ["Weeks of supply","Available units ÷ average weekly unit sales; lookback window pending.","Inventory + POS","Planning","v1.0","DRAFT"],
  ["OTB remaining","Approved OTB budget less included commitments per finance policy.","o9 / ERP","Planning","v1.0","DRAFT"],
  ["Store plan variance","Actual net sales less store plan, divided by store plan.","POS + o9","Store Planning","v1.0","DEMO — CONFIRM"],
  ["Gross margin","Net sales less cost of goods sold per finance mapping.","Finance / ERP","Planning","—","NOT MAPPED"],
  ["Transfer net benefit","Incremental contribution less transfer cost and donor impact.","POS + Inventory","Allocation","—","NOT MAPPED"]
];
const trendIdeas = [
  ["Soft structure","SHAPE","Relaxed tailoring","Clean lines, softer shoulder and polished ease."],
  ["Heritage check","PRINT","Plaid","Classic checked pattern as an accent, not an assumption."],
  ["Deep lake blue","COLOR","Blue","A saturated blue reference for color review."],
  ["Textured layers","KNITWEAR","Layering","Layered textures to review against regional weather."],
  ["Modern Fair Isle","KNITWEAR","Pattern knit","Traditional motif as a testable product hypothesis."],
  ["Warm neutrals","COLOR","Camel / oat","A neutral palette reference; validate with sales and customer data."],
  ["Tonal dressing","SHAPE","Monochrome","Head-to-toe tonal styling as a styling signal."],
  ["Botanical miniature","PRINT","Floral","Small-scale botanical print idea for validation."],
  ["Modern prep","SHAPE","Polished casual","A styling lens for assortment review, not a demand claim."],
  ["Burgundy accent","COLOR","Wine","Accent-color reference; check with customer and inventory signals."],
  ["Cable texture","KNITWEAR","Cable knit","Tactile knit texture as an assortment taxonomy cue."],
  ["Pencil stripe","PRINT","Stripe","Directional stripe test; compare style and channel performance."],
  ["Utility field coat","SHAPE","Utility","Functional outerwear cue to check against climate and fit data."],
  ["Soft suiting","SHAPE","Tailoring","Ease-led tailoring cue for a workwear review."],
  ["Oxblood note","COLOR","Burgundy","Dark red color cue; validate breadth and placement."],
  ["Plaid layering","PRINT","Tartan","Layering and plaid idea to verify against current sales."],
  ["Funnel-neck layer","SHAPE","High neck","Neckline silhouette idea for a design review queue."],
  ["Winter white","COLOR","Ivory","Light neutral reference; consider care, climate and channel mix."],
  ["Velvet touch","TEXTURE","Velvet","Surface texture idea; validate occasion relevance and margin."],
  ["Classic penny loafer","ACCESSORY","Footwear","Accessory styling cue; verify against attachment rate."],
  ["Statement scarf","ACCESSORY","Silk print","A styling accent idea to review alongside attachment rate."],
  ["Barn jacket refresh","SHAPE","Workwear","Outerwear silhouette cue; compare by region and price point."],
  ["Cashmere layering","KNITWEAR","Fine gauge","Fine-gauge layer idea; validate against sell-through."],
  ["Painterly floral","PRINT","Floral","Expressive floral pattern hypothesis for review."],
  ["Wide-leg ease","SHAPE","Trouser","Proportion cue to review against size-level sell-through."],
  ["Navy anchor","COLOR","Navy","Core color reference; validate against stock and demand."],
  ["Layered collar","SHAPE","Collar detail","Layered collar styling cue for an editorial review."],
  ["Corduroy texture","TEXTURE","Ribbed wale","Texture cue to test by region and climate."],
  ["Heritage outerwear","SHAPE","Classic coat","Classic outerwear reference; test against lead times and demand."],
  ["Holiday jewel tone","COLOR","Jewel palette","Seasonal color idea to compare with historical gift sales."]
];
const ASSET_STORAGE_KEY="merchStudioSkuAssets";
const assetBySku=loadAssets();
let selectedAssetFile=null;
let assetCheckPassed=false;
const transferRequests=[];
let nextTransferId=1;
let pendingTransferDecision=null;
let activeTaskFilter="MY QUEUE";
const roleProfiles={
  Merchandiser:{name:"Alex Morgan",team:"Merchandising · East"},
  Planner:{name:"Sam Rivera",team:"Planning · US"},
  "Store Planner":{name:"Taylor Brooks",team:"Store Planning · US"},
  Allocator:{name:"Jordan Kim",team:"Allocation · East"},
  "Merch Analytics":{name:"Casey Park",team:"MP&A Analytics · US"}
};

const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const statusClass = status => status.toLowerCase().includes("watch") ? "watch" : status.toLowerCase().includes("risk") ? "risk" : "";
function renderTopStyles(){
  document.querySelector("#top-style-rows").innerHTML=styles.slice(0,4).map(s=>`<tr><td><b>${s[0]}</b></td><td>${s[2]}</td><td>$${s[8].toLocaleString("en-US")}</td><td>${s[5]}%</td><td class="${s[6]>=0?"positive-text":"negative-text"}">${s[6]>0?"+":""}${s[6]}%</td><td><span class="status-pill ${statusClass(s[7])}">${s[7].toUpperCase()}</span></td></tr>`).join("");
}
function initializeCategoryFilters(){
  const categories=[...new Set(styles.map(style=>style[1]))].sort();
  for(const id of ["category-filter","query-category"]){
    const select=document.querySelector(`#${id}`);
    select.innerHTML='<option value="">All categories</option>'+categories.map(category=>`<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
  }
}
function renderMerchRows(filter=""){
  const category=document.querySelector("#category-filter")?.value||"";
  document.querySelector("#merch-rows").innerHTML=styles.filter(s=>s.join(" ").toLowerCase().includes(filter.toLowerCase())&&(!category||s[1]===category)).map(s=>`<tr><td><b>${s[0]}</b><small style="display:block;color:#a4a198;font-size:7px;margin-top:4px">${s[3]}</small></td><td>${s[1]}</td><td>${s[2]}</td><td>${s[4].toLocaleString()}</td><td>${s[5]}%</td><td class="${s[6]>=0?"positive-text":"negative-text"}">${s[6]>0?"+":""}${s[6]}% vs plan</td><td><span class="status-pill ${statusClass(s[7])}">${s[7].toUpperCase()}</span></td></tr>`).join("");
}
function renderRegions(){
  document.querySelector("#region-grid").innerHTML=regions.map((r,i)=>`<article class="region-card"><header><b>${r[0]}</b><span>${["◒","☼","❄","◌","❄","☁"][i]}</span></header><div class="region-temp">${r[1]}</div><p>${r[2]}<br><b>${r[3]}</b></p><footer>${r[4]}</footer></article>`).join("");
}
function renderPlanRows(){
  const rows=[["Knitwear","$9.4M","$10.1M","+7.4%","Healthy","Check replenishment vs inbound"],
  ["Outerwear","$11.8M","$12.2M","+3.4%","Tight in NE","Review size-level coverage"],
  ["Shirting","$6.3M","$6.1M","−3.2%","Balanced","Check promo and size availability"],
  ["Bottoms","$5.7M","$5.5M","−3.5%","Elevated","Review aging inventory by fit"],
  ["Accessories","$3.1M","$3.4M","+9.7%","Healthy","Protect gift-ready availability"]];
  document.querySelector("#plan-rows").innerHTML=rows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td class="${r[3].startsWith("+")?"positive-text":"negative-text"}">${r[3]}</td><td><span class="status-pill ${r[4].includes("Tight")?"watch":""}">${r[4]}</span></td><td>${r[5]}</td></tr>`).join("");
}
function renderAllocation(){
  const filter=document.querySelector("#alloc-filter")?.value||"all";
  const rows=allocation.filter(a=>{
    const need=Math.max(0,Math.ceil(a.targetCover*a.weekly-a.onHand-a.inbound));
    const proposed=Math.min(need,a.donorAvailable,a.quota);
    return filter==="actionable"?proposed>0:filter==="no-need"?proposed===0:true;
  });
  document.querySelector("#allocation-rows").innerHTML=rows.map(a=>{
    const proposed=allocationProposal(a);
    const productImage=assetBySku[a.sku];
    const primaryImage=productImage?.type==="Primary";
    return `<tr><td><b>${escapeHTML(a.style)}</b><small class="sku-code">${a.sku}</small></td><td>${primaryImage?`<img class="sku-thumb" src="${productImage.data}" alt="${escapeHTML(a.style)}">`:'<span class="image-pending">NO AUTHORIZED IMAGE</span>'}</td><td>${escapeHTML(a.receive)}</td><td>${escapeHTML(a.donor)}<small class="sku-code">${a.donorAvailable} available</small></td><td>${a.onHand}</td><td>${a.weekly}</td><td>${a.inbound}</td><td class="${proposed?"positive-text":"muted-cell"}">${proposed}</td><td>${a.quota}</td><td>${escapeHTML(a.reason)}</td><td>${proposed?`<input class="transfer-check" type="checkbox" data-transfer-sku="${a.sku}" aria-label="Select ${escapeHTML(a.style)} transfer">`:'<span class="image-pending">NO NEED</span>'}</td></tr>`;
  }).join("");
  updateSelectedTransfers();
}
function loadAssets(){
  try{return JSON.parse(localStorage.getItem(ASSET_STORAGE_KEY)||"{}")}
  catch(error){console.warn("Could not load demo SKU images from local storage.",error);return {}}
}
function renderAssets(){
  const skuSelect=document.querySelector("#asset-sku");
  if(!skuSelect.options.length){
    skuSelect.innerHTML=styles.map(s=>`<option value="${s[3]}">${s[3]} · ${escapeHTML(s[0])} · ${escapeHTML(s[2])}</option>`).join("");
  }
  document.querySelector("#asset-rows").innerHTML=styles.map(s=>{
    const asset=assetBySku[s[3]];
    return `<tr><td><b>${s[3]}</b></td><td>${escapeHTML(s[0])} · ${escapeHTML(s[2])}</td><td>${asset?.type==="Primary"?`<img class="sku-thumb" src="${asset.data}" alt="${escapeHTML(s[0])}">`:'<span class="image-pending">NO AUTHORIZED PRIMARY IMAGE</span>'}</td><td><span class="status-pill ${asset?"":"watch"}">${asset?escapeHTML(asset.type.toUpperCase()):"NEEDS IMAGE"}</span></td><td>${asset?escapeHTML(asset.owner):"MERCH"}</td></tr>`;
  }).join("");
  document.querySelector("#allocation-rows")&&renderAllocation();
}
function setAssetCheck(message,passed=false){
  assetCheckPassed=passed;
  document.querySelector("#asset-check").textContent=message;
  document.querySelector("#save-asset").disabled=!passed;
}
function getRole(){return document.querySelector("#role-switch").value}
function requireRole(role){
  if(getRole()!==role){showToast(`Switch demo role to ${role} to use this action.`);return false}
  return true;
}
function allocationProposal(item){
  const need=Math.max(0,Math.ceil(item.targetCover*item.weekly-item.onHand-item.inbound));
  return Math.min(need,item.donorAvailable,item.quota);
}
function updateSelectedTransfers(){
  const selected=[...document.querySelectorAll(".transfer-check:checked")];
  const button=document.querySelector("#submit-transfers");
  if(!button)return;
  document.querySelector("#selected-transfer-count").textContent=`${selected.length} proposal${selected.length===1?"":"s"} selected`;
  button.disabled=selected.length===0;
}
function renderApprovals(){
  const container=document.querySelector("#approval-list");
  if(!transferRequests.length){container.innerHTML='<p class="empty-state">No transfer requests submitted.</p>';return}
  container.innerHTML=transferRequests.map(request=>`<div class="approval-row"><div><b>Transfer request ${request.id}</b><small>${request.items.map(item=>`${escapeHTML(item.style)}: ${item.quantity} units to ${escapeHTML(item.receive)}`).join(" · ")}${request.note?`<br>Decision note: ${escapeHTML(request.note)}`:""}${request.decidedBy?`<br>Reviewed by ${escapeHTML(request.decidedBy)}`:""}</small></div><span class="status-pill ${request.status==="Pending Merch approval"?"watch":request.status==="Approved"?"":"risk"}">${request.status.toUpperCase()}</span>${request.status==="Pending Merch approval"&&getRole()==="Merchandiser"?`<div class="decision-cell"><button class="tiny-button good" data-transfer-decision="${request.id}:approve">Approve</button><button class="tiny-button" data-transfer-decision="${request.id}:reject">Reject</button></div>`:""}</div>`).join("");
}
function submitSelectedTransfers(){
  if(!requireRole("Allocator"))return;
  const skus=[...document.querySelectorAll(".transfer-check:checked")].map(input=>input.dataset.transferSku);
  if(!skus.length)return;
  const items=skus.map(sku=>{
    const data=allocation.find(item=>item.sku===sku);
    return {...data,quantity:allocationProposal(data)};
  }).filter(item=>item.quantity>0);
  if(!items.length){showToast("No eligible transfer quantities remain.");return}
  transferRequests.unshift({id:`TR-${String(nextTransferId++).padStart(4,"0")}`,items,status:"Pending Merch approval",createdAt:new Date().toISOString()});
  renderApprovals();document.querySelectorAll(".transfer-check").forEach(input=>input.checked=false);updateSelectedTransfers();
  showToast("Transfer request submitted to Merch approval queue.");
}
function renderTrends(){
  const filter=document.querySelector("[data-trend-filter].active")?.dataset.trendFilter||"ALL";
  const list=filter==="ALL"?trendIdeas:trendIdeas.filter(item=>item[1]===filter);
  document.querySelector("#trend-grid").innerHTML=list.map((t,i)=>`<article class="trend-card" data-trend-category="${t[1]}"><div class="trend-card-body"><div class="trend-id"><span>REFERENCE ${String(i+1).padStart(2,"0")}</span><span>${t[1]}</span></div><h3>${t[0]}</h3><p>${t[3]}</p><footer><span>NO SOURCE IMAGE</span><span class="signal-confidence">VALIDATION REQUIRED</span></footer><button class="tiny-button" data-trend-action="${escapeHTML(t[0])}">Add to review queue</button></div></article>`).join("");
}
function storeTargetRows(){
  const regionFilter=document.querySelector("#store-region-filter")?.value||"all";
  const shift=Number(document.querySelector("#store-target-shift")?.value||0);
  const selected=storePlans.filter(s=>s.region===regionFilter);
  const others=storePlans.filter(s=>regionFilter!=="all"&&s.region!==regionFilter);
  const total=storePlans.reduce((sum,s)=>sum+s.plan,0);
  const selectedBase=selected.reduce((sum,s)=>sum+s.plan,0);
  const selectedTarget=regionFilter==="all"?total:selectedBase*(1+shift/100);
  const otherBase=others.reduce((sum,s)=>sum+s.plan,0);
  const rows=storePlans.map(store=>{
    let plan=store.plan;
    if(regionFilter!=="all"){
      if(store.region===regionFilter)plan=Math.round(store.plan*(1+shift/100));
      else if(otherBase>0)plan=Math.round(store.plan*(total-selectedTarget)/otherBase);
    }
    return {...store,scenarioPlan:plan};
  });
  if(regionFilter!=="all"&&others.length){
    const difference=total-rows.reduce((sum,row)=>sum+row.scenarioPlan,0);
    rows.find(row=>row.region===others[others.length-1].region&&row.store===others[others.length-1].store).scenarioPlan+=difference;
  }
  return rows;
}
function renderStorePlans(){
  const rows=storeTargetRows();
  document.querySelector("#store-plan-rows").innerHTML=rows.map(s=>{
    const variance=(s.actual-s.scenarioPlan)/s.scenarioPlan*100;
    return `<tr><td><b>${escapeHTML(s.store)}</b><small class="sku-code">${escapeHTML(s.city)}</small></td><td>${s.region}</td><td>${s.tier}</td><td>$${s.scenarioPlan.toLocaleString()}</td><td>$${s.actual.toLocaleString()}</td><td class="${variance>=0?"positive-text":"negative-text"}">${variance>=0?"+":""}${variance.toFixed(1)}%</td><td>${s.cover.toFixed(1)} wks</td><td><span class="status-pill ${s.exception.includes("Low")||s.exception.includes("Review")?"watch":""}">${s.exception}</span></td></tr>`;
  }).join("");
  const region=document.querySelector("#store-region-filter").value;
  const shift=Number(document.querySelector("#store-target-shift").value);
  const total=rows.reduce((sum,s)=>sum+s.scenarioPlan,0);
  document.querySelector("#store-shift-label").textContent=region==="all"?`Baseline total $${total.toLocaleString()}. Select a region to model a redistribution.`:`${shift>0?"+":""}${shift}% · Total remains $${total.toLocaleString()}`;
  document.querySelector("#store-target-shift").disabled=region==="all";
}
function renderMetrics(){
  document.querySelector("#metric-rows").innerHTML=metricDefinitions.map(row=>`<tr><td><b>${row[0]}</b></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td><span class="status-pill ${row[5].includes("DRAFT")||row[5].includes("NOT")?"watch":""}">${row[5]}</span></td></tr>`).join("");
}
function runSelfServiceQuery(){
  const metric=document.querySelector("#query-metric").value;
  const category=document.querySelector("#query-category").value;
  const channel=document.querySelector("#query-channel").value;
  if(metric==="Weeks of supply"){
    document.querySelector("#query-result").textContent="No result: this demo has no complete historical inventory snapshot. Upload inventory history before calculating weeks of supply.";
    return;
  }
  if(channel!=="all"){
    document.querySelector("#query-result").textContent="No result: the sample dataset has no verified channel-level breakout. Upload channel-tagged sales data before querying Stores or Online.";
    return;
  }
  const filtered=styles.filter(s=>!category||s[1]===category);
  let result;
  if(metric==="Net sales")result=filtered.reduce((sum,s)=>sum+s[8],0);
  else if(metric==="Units sold")result=filtered.reduce((sum,s)=>sum+s[4],0);
  else result=filtered.reduce((sum,s)=>sum+s[5]*s[4],0)/Math.max(1,filtered.reduce((sum,s)=>sum+s[4],0));
  const formatted=metric==="Net sales"?`$${Math.round(result).toLocaleString()}`:metric==="Units sold"?`${Math.round(result).toLocaleString()} units`:`${result.toFixed(1)}%`;
  document.querySelector("#query-result").innerHTML=`<b>${escapeHTML(metric)}:</b> ${formatted}<span> · ${filtered.length} styles · All channels · Sample data</span>`;
}
function renderTasks(){
  const currentOwner=roleProfiles[getRole()]?.name;
  const list=tasks.filter(task=>{
    if(activeTaskFilter==="COMPLETED")return task[6]==="DONE";
    if(activeTaskFilter==="APPROVALS")return false;
    if(activeTaskFilter==="MY QUEUE")return task[5]===currentOwner;
    return true;
  });
  document.querySelector("#action-list").innerHTML=list.length?list.map(t=>`<div class="action-row ${t[6]==="DONE"?"done":""}"><div class="action-date"><b>${escapeHTML(t[0])}</b>${escapeHTML(t[1])}</div><div class="action-kind">${escapeHTML(t[2])}</div><div class="action-desc"><b>${escapeHTML(t[3])}</b><p>${escapeHTML(t[4])}</p></div><div class="action-owner">${escapeHTML(t[5])}<small>${escapeHTML(t[6])}</small></div><button class="tiny-button" data-decision="${escapeHTML(t[3])}">Open →</button></div>`).join(""):'<p class="empty-state">No tasks in this view.</p>';
  document.querySelector("#action-list").hidden=activeTaskFilter==="APPROVALS";
  document.querySelector("#approval-list").closest(".approval-panel").hidden=activeTaskFilter==="COMPLETED";
  document.querySelectorAll("[data-task-filter]").forEach(button=>button.classList.toggle("active",button.dataset.taskFilter===activeTaskFilter));
}
function showToast(message){
  const el=document.querySelector("#toast");el.textContent=message;el.classList.add("show");
  clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove("show"),2800);
}
const labels={overview:"OVERVIEW",merch:"MERCHANDISING",planning:"PLANNING","store-planning":"STORE PLANNING",allocation:"ALLOCATION",trends:"TREND INTELLIGENCE",analytics:"MP&A ANALYTICS",actions:"ACTION CENTER",data:"DATA ROOM"};
function setView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active-view"));
  document.querySelector(`#view-${name}`)?.classList.add("active-view");
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelector("#crumb-view").textContent=labels[name]||name.toUpperCase();
  if(name==="merch")renderAssets();
  if(name==="store-planning")renderStorePlans();
  if(name==="allocation")renderAllocation();
  if(name==="analytics")renderMetrics();
  if(name==="actions"){renderApprovals();renderTasks();}
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",event=>{
  const viewButton=event.target.closest("[data-view]");
  if(viewButton){setView(viewButton.dataset.view);return}
  const decision=event.target.closest("[data-decision]");
  if(decision){
    const dialog=document.querySelector("#decision-dialog");
    document.querySelector("#dialog-title").textContent=decision.dataset.decision;
    document.querySelector("#dialog-copy").textContent="Review the supporting data and document your decision. This prototype does not write to an inventory, order or planning system.";
    dialog.showModal();
    return;
  }
  const transferDecision=event.target.closest("[data-transfer-decision]");
  if(transferDecision){
    if(!requireRole("Merchandiser"))return;
    const [id,decisionType]=transferDecision.dataset.transferDecision.split(":");
    const request=transferRequests.find(item=>item.id===id);
    if(!request)return;
    pendingTransferDecision={id,decisionType};
    document.querySelector("#dialog-title").textContent=`${decisionType==="approve"?"Approve":"Reject"} transfer ${id}`;
    document.querySelector("#dialog-copy").textContent=request.items.map(item=>`${item.quantity} units of ${item.style} to ${item.receive}`).join("; ");
    document.querySelector("#decision-note").value="";
    document.querySelector("#decision-note").required=decisionType==="reject";
    document.querySelector("#approve-action").innerHTML=decisionType==="approve"?'Approve request <span>→</span>':'Reject request <span>→</span>';
    document.querySelector("#decision-dialog").showModal();
  }
});
document.querySelector("#approve-action").addEventListener("click",event=>{
  if(pendingTransferDecision){
    const note=document.querySelector("#decision-note").value.trim();
    if(pendingTransferDecision.decisionType==="reject"&&!note){
      event.preventDefault();
      document.querySelector("#decision-note").setCustomValidity("Add a rejection reason before submitting.");
      document.querySelector("#decision-note").reportValidity();
      return;
    }
    document.querySelector("#decision-note").setCustomValidity("");
    const request=transferRequests.find(item=>item.id===pendingTransferDecision.id);
    if(request){
      request.status=pendingTransferDecision.decisionType==="approve"?"Approved":"Rejected";
      request.decidedBy=getRole();
      request.note=note;
      renderApprovals();
      showToast(`Transfer request ${request.id} ${request.status.toLowerCase()}.`);
    }
    pendingTransferDecision=null;
    document.querySelector("#approve-action").innerHTML='Mark reviewed <span>→</span>';
    document.querySelector("#decision-note").required=false;
    return;
  }
  const title=document.querySelector("#dialog-title").textContent;
  const task=tasks.find(t=>t[3]===title);
  if(task)task[6]="DONE";
  renderTasks();showToast("Decision note saved in this demo session.");
});
document.querySelector("#decision-note").addEventListener("input",event=>event.target.setCustomValidity(""));
document.querySelector("#decision-dialog").addEventListener("close",()=>{
  pendingTransferDecision=null;
  document.querySelector("#approve-action").innerHTML='Mark reviewed <span>→</span>';
  document.querySelector("#decision-note").required=false;
  document.querySelector("#decision-note").setCustomValidity("");
});
document.querySelector("#style-search").addEventListener("input",e=>renderMerchRows(e.target.value));
document.querySelector("#category-filter").addEventListener("change",()=>renderMerchRows(document.querySelector("#style-search").value));
document.querySelector("#scenario-button").addEventListener("click",()=>{
  document.querySelector(".scenario-panel").scrollIntoView({behavior:"smooth",block:"center"});
  document.querySelector("#scenario-demand").focus({preventScroll:true});
});
document.querySelector("#scenario-demand").addEventListener("input",event=>{
  document.querySelector("#scenario-demand-label").textContent=`${Number(event.target.value)>0?"+":""}${event.target.value}%`;
});
document.querySelector("#run-scenario").addEventListener("click",()=>{
  const shift=Number(document.querySelector("#scenario-demand").value);
  const base=42800000;
  const projected=base*(1+shift/100);
  document.querySelector("#scenario-output").innerHTML=`<b>Illustrative net sales:</b> $${Math.round(projected).toLocaleString()}<small>Base plan $${base.toLocaleString()} × ${shift>0?"+":""}${shift}% scenario input. No supply, margin or store-level effect modeled.</small>`;
});
document.querySelector("#trend-refresh").addEventListener("click",()=>setView("data"));
document.querySelector("#alloc-filter").addEventListener("change",renderAllocation);
document.querySelector("#new-action").addEventListener("click",()=>document.querySelector("#new-action-dialog").showModal());
document.querySelector("#submit-transfers").addEventListener("click",submitSelectedTransfers);
document.querySelector("#allocation-rows").addEventListener("change",event=>{
  if(event.target.matches(".transfer-check"))updateSelectedTransfers();
});
document.querySelector("#role-switch").addEventListener("change",event=>{
  const role=event.target.value;
  const profile=roleProfiles[role];
  document.querySelector(".profile-button b").textContent=profile.name;
  document.querySelector(".profile-button small").textContent=profile.team;
  document.querySelector("#new-action-owner").value=profile.name;
  renderApprovals();
  renderTasks();
});
document.querySelector("#asset-file").addEventListener("change",event=>{
  const file=event.target.files?.[0];
  const preview=document.querySelector("#asset-preview");
  selectedAssetFile=null;
  document.querySelector("#validate-asset").disabled=true;
  document.querySelector("#save-asset").disabled=true;
  if(!file){preview.innerHTML="<span>NO IMAGE SELECTED</span>";setAssetCheck("Select an SKU and image to start. This prototype does not run OCR or image recognition.");return}
  if(!requireRole("Merchandiser")){event.target.value="";return}
  if(!["image/jpeg","image/png","image/webp"].includes(file.type)){
    showToast("Choose a JPG, PNG or WebP image.");
    event.target.value="";return;
  }
  if(file.size>5*1024*1024){
    showToast("Image exceeds the 5 MB demo limit.");
    event.target.value="";return;
  }
  selectedAssetFile=file;
  const url=URL.createObjectURL(file);
  preview.innerHTML=`<img src="${url}" alt="Selected product image">`;
  document.querySelector("#validate-asset").disabled=false;
  setAssetCheck("Image selected. Run the demo check; it only tests filename text and does not analyze image content.");
});
document.querySelector("#validate-asset").addEventListener("click",()=>{
  if(!requireRole("Merchandiser")||!selectedAssetFile)return;
  const sku=document.querySelector("#asset-sku").value;
  const fileName=selectedAssetFile.name.toLowerCase();
  const otherSku=styles.find(style=>style[3]!==sku&&fileName.includes(style[3].toLowerCase()));
  if(otherSku){
    setAssetCheck(`Mismatch: filename contains ${otherSku[3]}, but selected SKU is ${sku}. Submission blocked.`,false);
    showToast("SKU mismatch found from filename; image not saved.");
    return;
  }
  setAssetCheck(`Demo check passed for ${sku}. Filename check only; a real image/OCR validation service is not connected.`,true);
});
document.querySelector("#save-asset").addEventListener("click",async()=>{
  if(!requireRole("Merchandiser")||!assetCheckPassed||!selectedAssetFile)return;
  const sku=document.querySelector("#asset-sku").value;
  try{
    const imageData=await createThumbnail(selectedAssetFile);
    const source=document.querySelector("#asset-source").value.trim();
    if(source&&new URL(source).protocol!=="https:")throw new Error("Asset source reference must use HTTPS.");
    assetBySku[sku]={data:imageData,type:document.querySelector("#asset-type").value,owner:document.querySelector(".profile-button b").textContent+" · Merch",source,filename:selectedAssetFile.name};
    localStorage.setItem(ASSET_STORAGE_KEY,JSON.stringify(assetBySku));
    renderAssets();
    document.querySelector("#asset-file").value="";
    document.querySelector("#asset-source").value="";
    selectedAssetFile=null;
    document.querySelector("#asset-preview").innerHTML="<span>IMAGE SAVED</span>";
    document.querySelector("#validate-asset").disabled=true;
    setAssetCheck(`Image linked to ${sku} in this browser. No server upload occurred.`);
    showToast(`Image linked to ${sku} for this browser demo.`);
  }catch(error){
    console.error("Could not save the demo image.",error);
    setAssetCheck(`Could not save image locally: ${error.message}`,false);
  }
});
function createThumbnail(file){
  return new Promise((resolve,reject)=>{
    const image=new Image(),url=URL.createObjectURL(file);
    image.onload=()=>{
      URL.revokeObjectURL(url);
      const scale=Math.min(1,600/Math.max(image.naturalWidth,image.naturalHeight));
      const canvas=document.createElement("canvas");
      canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
      canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
      const context=canvas.getContext("2d");
      if(!context){reject(new Error("Browser image processing is unavailable."));return}
      context.drawImage(image,0,0,canvas.width,canvas.height);
      resolve(canvas.toDataURL("image/jpeg",.78));
    };
    image.onerror=()=>{URL.revokeObjectURL(url);reject(new Error("Image could not be decoded."))};
    image.src=url;
  });
}
document.querySelector("#export-alloc").addEventListener("click",()=>downloadCSV("demo-allocation-review.csv",[
  "sku,style,receiving_store,donor_store,receiver_on_hand,weekly_units,inbound_units,donor_available,quota,suggested_qty,reason",
  ...allocation.map(item=>[
    item.sku,item.style,item.receive,item.donor,item.onHand,item.weekly,item.inbound,
    item.donorAvailable,item.quota,allocationProposal(item),item.reason
  ].map(value=>`"${String(value).replaceAll('"','""')}"`).join(","))
]));
document.querySelector("#store-region-filter").addEventListener("change",renderStorePlans);
document.querySelector("#store-target-shift").addEventListener("input",renderStorePlans);
document.querySelector("#reset-store-plan").addEventListener("click",()=>{
  document.querySelector("#store-region-filter").value="all";
  document.querySelector("#store-target-shift").value="0";
  renderStorePlans();
});
document.querySelector("#export-store-plan").addEventListener("click",()=>{
  const rows=storeTargetRows();
  downloadCSV("demo-store-plan.csv",["store,city,region,tier,plan_usd,actual_usd,stock_cover_weeks",...rows.map(row=>[row.store,row.city,row.region,row.tier,row.scenarioPlan,row.actual,row.cover].map(value=>`"${String(value).replaceAll('"','""')}"`).join(","))]);
});
document.querySelector("#export-metrics").addEventListener("click",()=>downloadCSV("mpa-metric-dictionary-demo.csv",["metric,definition,source,owner,version,status",...metricDefinitions.map(row=>row.map(value=>`"${String(value).replaceAll('"','""')}"`).join(","))]));
document.querySelector("#run-query").addEventListener("click",runSelfServiceQuery);
document.querySelector("#channel-filter").addEventListener("change",event=>{
  const values={all:{sales:"$8.42M",sellThrough:"68.4%",wos:"7.2",insight:"Outerwear: +11% vs plan. Synthetic demo result. Validate against current inventory and actual weather before taking action."},store:{sales:"$5.22M",sellThrough:"70.1%",wos:"6.8",insight:"Store channel sample selected. Outerwear is +8% vs plan in this synthetic dataset."},online:{sales:"$3.20M",sellThrough:"65.7%",wos:"7.9",insight:"Online channel sample selected. Outerwear is +15% vs plan in this synthetic dataset."}};
  const data=values[event.target.value];
  document.querySelector("#kpi-sales").textContent=data.sales;
  document.querySelectorAll("#view-overview .kpi-card")[1].querySelector("strong").textContent=data.sellThrough;
  document.querySelectorAll("#view-overview .kpi-card")[2].querySelector("strong").innerHTML=`${data.wos} <small class="unit">WKS</small>`;
  document.querySelector("#dashboard-insight").textContent=data.insight;
});
document.querySelectorAll("[data-trend-filter]").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll("[data-trend-filter]").forEach(item=>item.classList.toggle("active",item===button));
  renderTrends();
}));
document.querySelector("#trend-grid").addEventListener("click",event=>{
  const button=event.target.closest("[data-trend-action]");
  if(!button)return;
  const name=button.dataset.trendAction;
  tasks.unshift(["16","NOV","MERCH",`Review trend: ${name}`,"Trend taxonomy reference added manually. Attach a source, date and sell-through evidence before using in a forecast.",document.querySelector(".profile-button b").textContent,"OPEN"]);
  renderTasks();
  showToast(`“${name}” added to the action queue.`);
});
document.querySelectorAll("[data-task-filter]").forEach(button=>button.addEventListener("click",()=>{
  activeTaskFilter=button.dataset.taskFilter;
  renderTasks();
}));
document.querySelector(".profile-button").addEventListener("click",()=>document.querySelector("#role-switch").focus());
document.querySelector("#help-button").addEventListener("click",()=>document.querySelector("#help-dialog").showModal());
document.querySelector("#new-action-form").addEventListener("submit",event=>{
  if(event.submitter?.value!=="create")return;
  event.preventDefault();
  const title=document.querySelector("#new-action-title").value.trim();
  const owner=document.querySelector("#new-action-owner").value;
  const functionName=document.querySelector("#new-action-function").value;
  const date=new Date(`${document.querySelector("#new-action-due").value}T12:00:00`);
  const context=document.querySelector("#new-action-context").value.trim()||"No additional context.";
  if(!title||Number.isNaN(date.getTime()))return;
  tasks.unshift([String(date.getDate()).padStart(2,"0"),date.toLocaleString("en-US",{month:"short"}).toUpperCase(),functionName,title,context,owner,"OPEN"]);
  document.querySelector("#new-action-dialog").close();
  event.currentTarget.reset();
  renderTasks();
  showToast("Action created in this demo session.");
});
document.querySelector("#download-all-templates").addEventListener("click",()=>{
  downloadCSV("mpa-csv-schema.csv",["data_type,required_columns",...Object.entries(templateFields).map(([type,fields])=>`"${type}","${fields}"`)]);
});
const templateFields={
  sales:"week,channel,store_id,sku,units,net_sales_usd,returns_units,discount_pct",
  inventory:"as_of_date,location_id,sku,on_hand_units,in_transit_units,reserved_units",
  styles:"sku,style_name,category,color,size,launch_date,ticket_price_usd",
  stores:"store_id,region,city,state,time_zone,open_date,close_date,capacity",
  plan:"week,channel,category,net_sales_plan_usd,units_plan,inventory_target_units"
};
function downloadCSV(name,lines){
  const blob=new Blob([lines.join("\n")],{type:"text/csv;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function downloadTemplate(type){downloadCSV(`merch-studio-${type}-template.csv`,[templateFields[type]])}
document.querySelector("#download-template").addEventListener("click",()=>downloadTemplate(document.querySelector("#upload-type").value));
function parseCSV(text){
  const rows=[];let row=[],cell="",quoted=false;
  for(let i=0;i<text.length;i++){
    const c=text[i],next=text[i+1];
    if(c==='"'&&quoted&&next==='"'){cell+='"';i++}
    else if(c==='"')quoted=!quoted;
    else if(c===","&&!quoted){row.push(cell);cell=""}
    else if((c==="\n"||c==="\r")&&!quoted){if(c==="\r"&&next==="\n")i++;row.push(cell);if(row.some(v=>v.trim()))rows.push(row);row=[];cell=""}
    else cell+=c;
  }
  row.push(cell);if(row.some(v=>v.trim()))rows.push(row);
  return rows;
}
document.querySelector("#csv-upload").addEventListener("change",async event=>{
  const file=event.target.files?.[0];if(!file)return;
  const result=document.querySelector("#upload-result");
  if(file.size>10*1024*1024){result.textContent="File is larger than the recommended 10 MB limit. Choose a smaller CSV.";return}
  try{
    const rows=parseCSV(await file.text());
    if(rows.length<2){result.textContent="The CSV needs a header row and at least one data row.";return}
    const expected=templateFields[document.querySelector("#upload-type").value].split(",");
    const headers=rows[0].map(v=>v.trim().toLowerCase());
    const missing=expected.filter(field=>!headers.includes(field));
    result.innerHTML=`<b>${escapeHTML(file.name)}</b> · ${rows.length-1} data rows · ${headers.length} columns · parsed locally.<br>${missing.length?`Template fields not found: ${escapeHTML(missing.join(", "))}.`:"Required template headers found."} Preview: ${escapeHTML(rows[1].slice(0,5).join(" · "))}<br><span style="color:#9a7e4c">Upload is for demo preview only; it does not replace the synthetic dashboard values.</span>`;
    showToast("CSV parsed locally. No file was uploaded to a server.");
  }catch(error){result.textContent=`Could not read the CSV: ${error.message}`;}
});
document.querySelector(".upload-zone").addEventListener("dragover",e=>{e.preventDefault();e.currentTarget.classList.add("dragover")});
document.querySelector(".upload-zone").addEventListener("dragleave",e=>e.currentTarget.classList.remove("dragover"));
document.querySelector(".upload-zone").addEventListener("drop",e=>{
  e.preventDefault();e.currentTarget.classList.remove("dragover");
  const file=e.dataTransfer.files[0];if(!file)return;
  const input=document.querySelector("#csv-upload");
  const transfer=new DataTransfer();transfer.items.add(file);input.files=transfer.files;input.dispatchEvent(new Event("change"));
});
initializeCategoryFilters();renderTopStyles();renderMerchRows();renderRegions();renderPlanRows();renderAllocation();renderTrends();renderTasks();renderAssets();renderApprovals();renderStorePlans();renderMetrics();
