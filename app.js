const styles = [
  ["Cashmere Crewneck","Knitwear","Oat","KN-1042",1840,72,11.8,"Winner"],
  ["Classic Trench","Outerwear","Stone","OT-2108",1315,46,-8.6,"Watch"],
  ["Fair Isle Cardigan","Knitwear","Multi","KN-1184",990,64,6.2,"Rising"],
  ["Everyday Oxford","Shirting","Blue Stripe","SH-3317",1660,69,3.8,"On plan"],
  ["Wool Topcoat","Outerwear","Navy","OT-2021",780,41,-2.4,"Watch"],
  ["Heritage Plaid Skirt","Bottoms","Tartan","BT-4106",625,57,1.6,"On plan"],
  ["Quilted Barn Jacket","Outerwear","Olive","OT-2290",1210,77,14.2,"Winner"],
  ["Ribbed Turtleneck","Knitwear","Burgundy","KN-1055",1120,66,5.1,"Rising"],
  ["Straight Jean","Denim","Rinse","DN-5062",1430,61,2.7,"On plan"],
  ["Ludlow Blazer","Tailoring","Charcoal","TL-6101",840,52,-4.1,"Watch"],
  ["Printed Silk Scarf","Accessories","Floral","AC-8032",560,74,8.4,"Winner"],
  ["Corduroy Trouser","Bottoms","Camel","BT-4171",730,59,1.2,"On plan"]
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
  ["Cashmere Crewneck · Oat","NYC · UES 014",18,11,1.6,18,"Strong sell-through; 2 sizes under 1 week"],
  ["Quilted Barn Jacket · Olive","Boston · Newbury 027",14,8,1.8,12,"Cold outlook + above-plan rate"],
  ["Fair Isle Cardigan · Multi","Chicago · North 041",12,7,1.7,10,"Replenishment window; size M at risk"],
  ["Wool Topcoat · Navy","Seattle · Downtown 063",26,6,4.3,0,"Healthy cover; no action suggested"],
  ["Ribbed Turtleneck · Burgundy","Atlanta · Ponce 052",9,6,1.5,8,"Fast rate; check confirmed inbound"]
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
const trendIdeas = [
  ["Soft structure","SHAPE","Relaxed tailoring","Clean lines, softer shoulder and polished ease.","#e6dfd0","#859191","linear-gradient(90deg,transparent 46%,#ddd3bd 47% 54%,transparent 55%)","18px 18px"],
  ["Heritage check","PRINT","Plaid","Classic checked pattern as an accent, not an assumption.","#ece3d4","#a7664b","repeating-linear-gradient(45deg,transparent 0 7px,#7b5142 8px 9px,transparent 10px 16px)","17px 17px"],
  ["Deep lake blue","COLOR","Blue","A saturated blue reference for color review.","#dae2e0","#315b6d","radial-gradient(circle,#d8c495 1.5px,transparent 2px)","15px 15px"],
  ["Textured layers","KNITWEAR","Layering","Layered textures to review against regional weather.","#e7ded2","#77867c","repeating-linear-gradient(0deg,transparent 0 6px,#d2c6b6 7px 8px)","15px 15px"],
  ["Modern Fair Isle","KNITWEAR","Pattern knit","Traditional motif as a testable product hypothesis.","#e8dfd1","#8d4941","repeating-linear-gradient(135deg,#d9bc8d 0 2px,transparent 2px 7px)","13px 13px"],
  ["Warm neutrals","COLOR","Camel / oat","A neutral palette reference; validate with sales and customer data.","#e9dfd0","#aa8662","radial-gradient(circle,#f0e8d9 2px,transparent 3px)","17px 17px"],
  ["Tonal dressing","SHAPE","Monochrome","Head-to-toe tonal styling as a styling signal.","#e7e5dc","#929585","linear-gradient(0deg,transparent 48%,#c9b894 49% 51%,transparent 52%)","16px 16px"],
  ["Botanical miniature","PRINT","Floral","Small-scale botanical print idea for validation.","#e3e5d7","#60755e","radial-gradient(ellipse,#a5604f 2px,transparent 3px)","14px 14px"],
  ["Modern prep","SHAPE","Polished casual","A styling lens for assortment review, not a demand claim.","#e6dfd2","#536c7d","repeating-linear-gradient(90deg,transparent 0 8px,#eee5d6 9px 10px)","17px 17px"],
  ["Burgundy accent","COLOR","Wine","Accent-color reference; check with customer and inventory signals.","#e7d9d4","#784548","radial-gradient(circle,#d7be9a 1.5px,transparent 2px)","18px 18px"],
  ["Cable texture","KNITWEAR","Cable knit","Tactile knit texture as an assortment taxonomy cue.","#e7e0d3","#b59d7d","repeating-linear-gradient(75deg,transparent 0 6px,#e6d9c2 7px 9px,transparent 10px 14px)","14px 14px"],
  ["Pencil stripe","PRINT","Stripe","Directional stripe test; compare style and channel performance.","#e0e5e3","#456271","repeating-linear-gradient(90deg,transparent 0 7px,#d4c8b2 8px 9px)","16px 16px"],
  ["Utility field coat","SHAPE","Utility","Functional outerwear cue to check against climate and fit data.","#e4e1d4","#67765f","linear-gradient(90deg,transparent 15%,#baaa8c 16% 18%,transparent 19% 81%,#baaa8c 82% 84%,transparent 85%)","16px 16px"],
  ["Soft suiting","SHAPE","Tailoring","Ease-led tailoring cue for a considered workwear edit.","#e6dfd6","#65727b","repeating-linear-gradient(0deg,transparent 0 11px,#d2c6b5 12px 13px)","16px 16px"],
  ["Oxblood note","COLOR","Burgundy","Dark red color cue; validate breadth and placement.","#e5ded4","#733f45","radial-gradient(circle,#c6a56d 2px,transparent 3px)","14px 14px"],
  ["Plaid layering","PRINT","Tartan","Layering and plaid idea, shown as a synthetic visual.","#e6dfd6","#754e46","repeating-linear-gradient(0deg,transparent 0 7px,#bd9970 8px 9px,transparent 10px 15px)","15px 15px"],
  ["Funnel-neck layer","SHAPE","High neck","Neckline silhouette idea for a design review queue.","#e7e2d8","#8e8c80","linear-gradient(90deg,transparent 40%,#d1c6b5 41% 59%,transparent 60%)","17px 17px"],
  ["Winter white","COLOR","Ivory","Light neutral reference; consider care, climate and channel mix.","#e9e7df","#c2b9a7","radial-gradient(circle,#fffdf7 2px,transparent 3px)","15px 15px"],
  ["Velvet touch","TEXTURE","Velvet","Surface texture idea; validate occasion relevance and margin.","#e1dbd8","#574451","radial-gradient(circle,#927b86 1.5px,transparent 2px)","14px 14px"],
  ["Classic penny loafer","ACCESSORY","Footwear","Accessory styling cue; the card itself is illustrative.","#e7e0d3","#795e48","linear-gradient(0deg,transparent 60%,#c9b18f 61% 64%,transparent 65%)","16px 16px"],
  ["Statement scarf","ACCESSORY","Silk print","A styling accent idea to review alongside attachment rate.","#e5ded4","#a65d50","repeating-linear-gradient(45deg,transparent 0 6px,#d5bd98 7px 8px)","14px 14px"],
  ["Barn jacket refresh","SHAPE","Workwear","Outerwear silhouette cue; compare by region and price point.","#e1e3d6","#657052","linear-gradient(90deg,transparent 25%,#bdac8f 26% 28%,transparent 29% 71%,#bdac8f 72% 74%,transparent 75%)","18px 18px"],
  ["Cashmere layering","KNITWEAR","Fine gauge","Fine-gauge layer idea; never use as a substitute for sell-through.","#e8e1d5","#a88d6f","repeating-linear-gradient(0deg,transparent 0 4px,#d9cebb 5px 6px)","16px 16px"],
  ["Painterly floral","PRINT","Floral","Expressive floral pattern concept, generated for the demo.","#e2e4d7","#72836a","radial-gradient(ellipse at 30% 40%,#a65f55 3px,transparent 4px)","15px 15px"],
  ["Wide-leg ease","SHAPE","Trouser","Proportion cue to review against size-level sell-through.","#e6dfd3","#9a8265","linear-gradient(90deg,transparent 28%,#d0bea1 29% 34%,transparent 35% 65%,#d0bea1 66% 71%,transparent 72%)","17px 17px"],
  ["Navy anchor","COLOR","Navy","Core color reference; actual replenishment depends on verified stock.","#e4e1d8","#344b5a","radial-gradient(circle,#b8ab92 1px,transparent 2px)","14px 14px"],
  ["Layered collar","SHAPE","Collar detail","Layered collar styling cue for an editorial review.","#e7e1d5","#778a8b","linear-gradient(0deg,transparent 25%,#d3c4a8 26% 29%,transparent 30%)","16px 16px"],
  ["Corduroy texture","TEXTURE","Ribbed wale","Texture cue that may be tested by region and climate.","#e6dfd2","#8c6b52","repeating-linear-gradient(90deg,#c7b096 0 2px,transparent 3px 7px)","13px 13px"],
  ["Heritage outerwear","SHAPE","Classic coat","A timeless outerwear lens; test against lead times and demand.","#e5dfd4","#526570","linear-gradient(90deg,transparent 48%,#b5a27f 49% 52%,transparent 53%)","17px 17px"],
  ["Holiday jewel tone","COLOR","Jewel palette","Seasonal color story to compare with historical gift sales.","#e4ddd5","#8a4c55","radial-gradient(circle,#c6a56d 1px,transparent 2px)","12px 12px"]
];

const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const statusClass = status => status.toLowerCase().includes("watch") ? "watch" : status.toLowerCase().includes("risk") ? "risk" : "";
function renderTopStyles(){
  document.querySelector("#top-style-rows").innerHTML=styles.slice(0,4).map(s=>`<tr><td><b>${s[0]}</b></td><td>${s[2]}</td><td>$${(s[4]*s[6]*.42).toLocaleString("en-US",{maximumFractionDigits:0})}</td><td>${s[5]}%</td><td class="${s[6]>=0?"positive-text":"negative-text"}">${s[6]>0?"+":""}${s[6]}%</td><td><span class="status-pill ${statusClass(s[7])}">${s[7].toUpperCase()}</span></td></tr>`).join("");
}
function renderMerchRows(filter=""){
  document.querySelector("#merch-rows").innerHTML=styles.filter(s=>s.join(" ").toLowerCase().includes(filter.toLowerCase())).map(s=>`<tr><td><b>${s[0]}</b><small style="display:block;color:#a4a198;font-size:7px;margin-top:4px">${s[3]}</small></td><td>${s[1]}</td><td>${s[2]}</td><td>${s[4].toLocaleString()}</td><td>${s[5]}%</td><td class="${s[6]>=0?"positive-text":"negative-text"}">${s[6]>0?"+":""}${s[6]}% vs plan</td><td><span class="status-pill ${statusClass(s[7])}">${s[7].toUpperCase()}</span></td></tr>`).join("");
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
  document.querySelector("#allocation-rows").innerHTML=allocation.map((a,i)=>`<tr><td><b>${a[0]}</b></td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td class="${a[4]<2?"negative-text":"positive-text"}">${a[4]} wks</td><td><b>${a[5]}</b></td><td>${a[6]}</td><td><div class="decision-cell"><button class="tiny-button good" data-decision="Approve ${a[0]} for ${a[1]}">Review</button><button class="tiny-button" data-decision="Edit ${a[0]} for ${a[1]}">Edit</button></div></td></tr>`).join("");
}
function renderTrends(){
  document.querySelector("#trend-grid").innerHTML=trendIdeas.map((t,i)=>`<article class="trend-card"><div class="trend-art look-${i%5+1}" style="--artbg:${t[4]};--fabric:${t[5]};--pattern:${t[6]};--size:${t[7]};--tilt:${i%2?"2deg":"-2deg"}"><span class="pattern"></span><span class="shape-accent"></span><span class="art-caption">ORIGINAL DEMO ART · NOT SOURCE MEDIA</span></div><div class="trend-card-body"><div class="trend-id"><span>CONCEPT ${String(i+1).padStart(2,"0")}</span><span>${t[1]}</span></div><h3>${t[0]}</h3><p>${t[3]}</p><footer><span>SIMULATED CUE</span><span class="signal-confidence">NEEDS VALIDATION</span></footer></div></article>`).join("");
}
function renderTasks(){
  document.querySelector("#action-list").innerHTML=tasks.map((t,i)=>`<div class="action-row ${t[7]==="DONE"?"done":""}" data-task-index="${i}"><div class="action-date"><b>${t[0]}</b>${t[1]}</div><div class="action-kind">${t[2]}</div><div class="action-desc"><b>${t[3]}</b><p>${t[4]}</p></div><div class="action-owner">${t[5]}<small>${t[7]}</small></div><button class="tiny-button" data-decision="${t[3]}">Open →</button></div>`).join("");
}
function showToast(message){
  const el=document.querySelector("#toast");el.textContent=message;el.classList.add("show");
  clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove("show"),2800);
}
const labels={overview:"OVERVIEW",merch:"MERCHANDISING",planning:"PLANNING",allocation:"ALLOCATION",trends:"TREND INTELLIGENCE",actions:"ACTION CENTER",data:"DATA ROOM"};
function setView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active-view"));
  document.querySelector(`#view-${name}`)?.classList.add("active-view");
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelector("#crumb-view").textContent=labels[name]||name.toUpperCase();
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
  }
});
document.querySelector("#approve-action").addEventListener("click",()=>{
  const title=document.querySelector("#dialog-title").textContent;
  const task=tasks.find(t=>t[3]===title);
  if(task)task[7]="DONE";
  renderTasks();showToast("Decision note saved in this demo session.");
});
document.querySelector("#style-search").addEventListener("input",e=>renderMerchRows(e.target.value));
document.querySelector("#scenario-button").addEventListener("click",()=>showToast("Scenario draft created. Connect verified sales and supply data to calculate impact."));
document.querySelector("#run-scenario").addEventListener("click",()=>showToast("Scenario preview ready — simulated inputs only, no plan was changed."));
document.querySelector("#trend-refresh").addEventListener("click",()=>showToast("Source status checked: Vogue RSS link available; Instagram requires authorized API setup."));
document.querySelector("#alloc-filter").addEventListener("click",()=>showToast("Filter options are available in the full product; demo shows all proposals."));
document.querySelector("#new-action").addEventListener("click",()=>showToast("New action form would capture owner, due date, evidence and approval path."));
document.querySelector("#export-alloc").addEventListener("click",()=>downloadCSV("demo-allocation-review.csv",["style_color,location,on_hand,weekly_rate,cover_weeks,suggested_qty,reason",...allocation.map(a=>[a[0],a[1],a[2],a[3],a[4],a[5],a[6]].map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))]));
const templateFields={
  sales:"week,channel,store_id,sku,units,net_sales_usd,returns_units,discount_pct",
  inventory:"as_of_date,location_id,sku,on_hand_units,in_transit_units,reserved_units",
  styles:"sku,style_name,category,color,size,launch_date,ticket_price_usd",
  stores:"store_id,region,city,state,time_zone,open_date,close_date,capacity",
  plan:"week,channel,category,net_sales_plan_usd,units_plan,inventory_target_units"
};
function downloadCSV(name,lines){
  const blob=new Blob([lines.join("\n")],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href);
}
function downloadTemplate(type){downloadCSV(`merch-studio-${type}-template.csv`,[templateFields[type]])}
document.querySelector("#download-template").addEventListener("click",()=>downloadTemplate(document.querySelector("#upload-type").value));
document.querySelector("#download-all-templates").addEventListener("click",()=>downloadTemplate(document.querySelector("#upload-type").value));
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
renderTopStyles();renderMerchRows();renderRegions();renderPlanRows();renderAllocation();renderTrends();renderTasks();
