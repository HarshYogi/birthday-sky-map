const LAT=25.3176,LON=82.9739,DATE={y:2001,m:10,d:30};
const STARS=[
["Sirius",6.7525,-16.7161,"Canis Major","The brightest star in Earth's night sky.","You are allowed to be someone's brightest star too."],
["Canopus",6.3992,-52.6957,"Carina","The second-brightest star in the night sky.","Some stars are rare. So are people who feel like home."],
["Arcturus",14.261,19.1825,"Boötes","An orange giant and one of the brightest stars we see.","Distance doesn't make something less real."],
["Vega",18.6156,38.7837,"Lyra","A brilliant blue-white star in Lyra.","If you ever forget how special you are, come find this one."],
["Capella",5.2782,45.998,"Auriga","A bright star system in Auriga.","A tiny light in a huge sky — still impossible to miss."],
["Rigel",5.2423,-8.2016,"Orion","A brilliant blue supergiant marking Orion's foot.","Somewhere between all these stars, I still found you."],
["Betelgeuse",5.9195,7.4071,"Orion","A famous reddish supergiant in Orion.","A little red spark, just because I know you will notice it."],
["Procyon",7.655,5.225,"Canis Minor","One of the brightest stars in the winter sky.","For the moments when you need a little light."],
["Altair",19.8464,8.8683,"Aquila","A bright star forming the Summer Triangle.","Three points make a triangle. Somehow, you make my world feel complete."],
["Aldebaran",4.5987,16.5093,"Taurus","An orange giant that appears to be the eye of Taurus.","One of the easiest stars to recognize."],
["Antares",16.4901,-26.4319,"Scorpius","A huge reddish supergiant and the heart of Scorpius.","Your Scorpio star. Of course I had to find it for you. ♏"],
["Spica",13.4199,-11.1614,"Virgo","A bright blue-white star in Virgo.","A quiet point of light, waiting to be noticed."],
["Pollux",7.7553,28.0262,"Gemini","The brighter of the famous Gemini twins.","Some stars come in pairs. Lucky ones find their person."],
["Castor",7.5767,31.8883,"Gemini","A beautiful multiple-star system in Gemini.","One of the twins — every sky deserves a little story."],
["Deneb",20.6905,45.2803,"Cygnus","A luminous supergiant marking the tail of Cygnus.","A star so bright it can be seen from incredibly far away."],
["Fomalhaut",22.9608,-29.6222,"Piscis Austrinus","A bright solitary star in the southern sky.","A lonely-looking star that doesn't have to stay lonely."],
["Regulus",10.1395,11.9672,"Leo","The brightest star in Leo.","A tiny royal point in the lion's heart."],
["Polaris",2.5303,89.2641,"Ursa Minor","The North Star, nearly aligned with Earth's north celestial pole.","When you don't know where you're going, some stars know the way."],
["Alnilam",5.6036,-1.2019,"Orion","The middle star of Orion's Belt.","Part of one of the most recognizable patterns in the sky."],
["Alnitak",5.6793,-1.9426,"Orion","The easternmost star of Orion's Belt.","One of three stars making a tiny line across the night."],
["Mintaka",5.5334,-0.2991,"Orion","The westernmost star of Orion's Belt.","Three little lights, holding one constellation together."],
["Bellatrix",5.4189,6.3497,"Orion","A blue giant marking Orion's shoulder.","A warrior's shoulder in one of the sky's oldest stories."],
["Saiph",5.7959,-9.6696,"Orion","A blue supergiant marking Orion's other foot.","A quiet companion to Rigel."],
["Dubhe",11.0621,61.751,"Ursa Major","One of the two pointer stars of the Big Dipper.","Follow this star and you'll find Polaris."],
["Merak",11.0307,56.3824,"Ursa Major","A pointer star that helps locate Polaris.","Some stars are meant to point you somewhere."],
["Alioth",12.9005,55.9598,"Ursa Major","The brightest star in the Big Dipper's handle.","A little handle to one of the sky's most famous shapes."],
["Mizar",13.3987,54.9254,"Ursa Major","A famous double star in the Big Dipper's handle.","Look closely — some stars hide another star beside them."],
["Alkaid",13.7923,49.3133,"Ursa Major","The star at the end of the Big Dipper's handle.","Another pointer in a constellation full of directions."],
["Schedar",0.6751,56.5373,"Cassiopeia","A bright star in the W-shaped Cassiopeia.","A queen-shaped constellation waiting in the northern sky."],
["Caph",0.1529,59.1498,"Cassiopeia","One of the stars forming Cassiopeia's W.","A small spark in one of the sky's best patterns."],
["Mirach",1.1622,35.6208,"Andromeda","A bright star in Andromeda.","An ancient story, still shining above us."],
["Alpheratz",0.1398,29.0904,"Andromeda","A bright corner of the Great Square.","A bridge between Andromeda and Pegasus."],
["Markab",23.0793,15.2053,"Pegasus","One corner of the Great Square of Pegasus.","A horse in the sky, carrying an old story."],
["Enif",21.7364,9.875,"Pegasus","The brightest star in Pegasus.","A little nose of a celestial horse."],
["Alphecca",15.5781,26.7147,"Corona Borealis","The brightest star in the Northern Crown.","A crown for a girl with her own little universe."],
["Shaula",17.5601,-37.1038,"Scorpius","One of the bright stars forming Scorpius's stinger.","The sharp little tail of your Scorpio constellation."],
["Sargas",17.6219,-42.9978,"Scorpius","A bright star near Scorpius's stinger.","Another spark in your zodiac constellation."],
["Dschubba",16.0056,-22.6218,"Scorpius","A star near the forehead of Scorpius.","One of the lights sketching out the scorpion."],
["Graffias",16.0906,-19.8054,"Scorpius","A multiple-star system in Scorpius.","A small piece of your Scorpio sky."]
];
const LINES=[
["Orion",["Betelgeuse","Bellatrix"],["Bellatrix","Mintaka"],["Mintaka","Alnilam"],["Alnilam","Alnitak"],["Alnitak","Betelgeuse"],["Mintaka","Rigel"],["Alnitak","Saiph"],["Rigel","Saiph"]],
["Ursa Major",["Dubhe","Merak"],["Merak","Phecda"],["Phecda","Megrez"],["Megrez","Alioth"],["Alioth","Mizar"],["Mizar","Alkaid"]],
["Cassiopeia",["Caph","Schedar"],["Schedar","Mirach"],["Mirach","Alpheratz"]],
["Scorpius",["Dschubba","Antares"],["Antares","Shaula"],["Shaula","Sargas"]],
["Gemini",["Castor","Pollux"]],["Pegasus",["Alpheratz","Markab"],["Markab","Enif"]]
];
const NOTES=[
["The first little secret","Before I knew your name, the universe already knew where to put you.","Vega"],
["A long-distance one","If I could, I'd sit beside you and point at these stars one by one.","Rigel"],
["Your Scorpio note","Of course your constellation gets its own secret.","Antares"],
["A tiny promise","Whenever the distance feels too big, remember: we're still under the same sky.","Polaris"],
["The important one","Out of all these stars, I still choose you.","Sirius"]
];
const canvas=document.getElementById("sky"),ctx=canvas.getContext("2d");
let W=0,H=0,dpr=1,timeMin=240,centerAz=180,zoom=1,playing=false,mode="wander",selected=null;
let pointers=new Map(),dragStart=null,found=new Set();
const positions={};
function resize(){dpr=Math.min(devicePixelRatio||1,2);W=canvas.clientWidth;H=canvas.clientHeight;canvas.width=W*dpr;canvas.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw()}
addEventListener("resize",resize);
function jd(y,m,d,h){if(m<=2){y--;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5+h/24}
function gmst(j){const T=(j-2451545)/36525;let v=280.46061837+360.98564736629*(j-2451545)+.000387933*T*T-T*T*T/38710000;return (v%360+360)%360}
function horizontal(ra,dec,hour){const lst=(gmst(jd(DATE.y,DATE.m,DATE.d,hour))+LON+360)%360,Hd=((lst-ra*15+540)%360)-180,hr=Hd*Math.PI/180,dr=dec*Math.PI/180,lr=LAT*Math.PI/180;const alt=Math.asin(Math.sin(lr)*Math.sin(dr)+Math.cos(lr)*Math.cos(dr)*Math.cos(hr))*180/Math.PI;const y=-Math.sin(hr)*Math.cos(dr),x=Math.sin(dr)*Math.cos(lr)-Math.cos(dr)*Math.sin(lr)*Math.cos(hr);return {alt,az:(Math.atan2(y,x)*180/Math.PI+360)%360}}
function project(alt,az){const r=(90-Math.max(-4,Math.min(90,alt)))/93;let da=((az-centerAz+540)%360)-180;return{x:W/2+Math.sin(da*Math.PI/180)*r*Math.min(W,H)*.74*zoom,y:H*.52-Math.cos(da*Math.PI/180)*r*Math.min(W,H)*.74*zoom}}
function size(n){return ({Sirius:4.8,Canopus:4.2,Vega:4.3,Capella:4.2,Arcturus:4.1,Rigel:4,Betelgeuse:4,Procyon:3.9,Altair:3.9,Aldebaran:3.8,Antares:4,Spica:3.8,Pollux:3.6,Deneb:3.6,Regulus:3.6,Polaris:3.5}[n]||2.3)}
function draw(){if(!W)return;let g=ctx.createRadialGradient(W*.5,H*.42,0,W*.5,H*.52,Math.max(W,H)*.8);g.addColorStop(0,"#111b3b");g.addColorStop(.5,"#080d22");g.addColorStop(1,"#02030a");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
let seed=42017;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};for(let i=0;i<230;i++){ctx.globalAlpha=.12+rnd()*.42;ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(rnd()*W,rnd()*H*.86,.3+rnd()*1.05,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;
const hour=18+timeMin/60;for(const s of STARS){const h=horizontal(s[1],s[2],hour);if(h.alt>-6){const p=project(h.alt,h.az);positions[s[0]]={...p,alt:h.alt,az:h.az,s};}}
if(mode!=="wander")drawLines();for(const s of STARS){const p=positions[s[0]];if(!p)continue;let r=size(s[0]);if(mode==="notes"&&!NOTES.some(n=>n[2]===s[0]))r*=.72;const glow=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,r*5);glow.addColorStop(0,"rgba(255,245,214,.30)");glow.addColorStop(1,"rgba(255,245,214,0)");ctx.fillStyle=glow;ctx.beginPath();ctx.arc(p.x,p.y,r*5,0,Math.PI*2);ctx.fill();ctx.fillStyle="#fff";ctx.globalAlpha=.65+r/10;ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;if(mode==="notes"&&NOTES.some(n=>n[2]===s[0])){ctx.strokeStyle="rgba(255,215,170,.5)";ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,r+7,0,Math.PI*2);ctx.stroke()}}
if(selected&&positions[selected[0]]){const p=positions[selected[0]];ctx.strokeStyle="rgba(255,255,255,.65)";ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,17,0,Math.PI*2);ctx.stroke()}}
function drawLines(){ctx.strokeStyle=mode==="constellations"?"rgba(200,210,255,.28)":"rgba(200,210,255,.18)";ctx.lineWidth=mode==="constellations"?1.1:.8;for(const g of LINES)for(let i=1;i<g.length;i++){const a=positions[g[i][0]],b=positions[g[i][1]];if(a&&b){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}
function timeText(){let total=1080+timeMin;let h=Math.floor((total%1440)/60),m=total%60,ap=h>=12?"PM":"AM";h=h%12||12;return `${h}:${String(m).padStart(2,"0")} ${ap}`}
function update(){document.getElementById("timeText").textContent=timeText();draw()}
function nearest(x,y){let best=null,d=32;for(const s of STARS){const p=positions[s[0]];if(!p)continue;const q=Math.hypot(p.x-x,p.y-y);if(q<d){d=q;best=s}}return best}
function showStar(s){selected=s;document.getElementById("cardKicker").textContent=s[0]==="Antares"?"YOUR SCORPIO STAR":"STAR";document.getElementById("cardName").textContent=s[0];document.getElementById("cardMeta").textContent=s[3];document.getElementById("cardDesc").textContent=s[4];document.getElementById("cardPersonal").textContent=s[5];document.getElementById("starCard").classList.remove("hidden");const n=NOTES.find(x=>x[2]===s[0]);if(n){found.add(n[2]);updateFound()}draw()}
function updateFound(){document.getElementById("foundCount").textContent=found.size;if(found.size>=NOTES.length)document.getElementById("finalPrompt").classList.remove("hidden")}
function showNote(n){document.getElementById("noteTitle").textContent=n[0];document.getElementById("noteText").textContent=n[1];document.getElementById("noteCard").classList.remove("hidden");found.add(n[2]);updateFound()}
function closeSheets(){["starCard","constellationCard","noteCard","infoCard"].forEach(id=>document.getElementById(id).classList.add("hidden"))}
canvas.addEventListener("pointerdown",e=>{canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1)dragStart={x:e.clientX,y:e.clientY,az:centerAz}});
canvas.addEventListener("pointermove",e=>{if(!pointers.has(e.pointerId))return;const old=pointers.get(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1&&dragStart){centerAz=(dragStart.az-(e.clientX-dragStart.x)*.34)%360;if(centerAz<0)centerAz+=360;draw()}else if(pointers.size===2){zoom=Math.max(.72,Math.min(1.55,zoom+(Math.abs(e.movementX)+Math.abs(e.movementY))*.001));draw()}});
canvas.addEventListener("pointerup",e=>{const s=dragStart;pointers.delete(e.pointerId);if(!pointers.size){if(s&&Math.hypot(e.clientX-s.x,e.clientY-s.y)<12){const hit=nearest(e.clientX,e.clientY);if(hit){if(mode==="notes"){const n=NOTES.find(x=>x[2]===hit[0]);n?showNote(n):showStar(hit)}else showStar(hit)}else{const h=document.getElementById("hint");h.textContent="Keep looking… there are secrets among the stars.";setTimeout(()=>h.textContent="Tap a bright star · drag to look around",2200)}}dragStart=null}});
document.getElementById("begin").onclick=()=>{document.getElementById("intro").classList.add("hidden");document.getElementById("journey").classList.remove("hidden");resize()};
document.getElementById("home").onclick=()=>{playing=false;document.getElementById("journey").classList.add("hidden");document.getElementById("intro").classList.remove("hidden")};
document.getElementById("info").onclick=()=>document.getElementById("infoCard").classList.remove("hidden");
document.getElementById("closeInfo").onclick=()=>document.getElementById("infoCard").classList.add("hidden");
document.getElementById("closeStar").onclick=()=>{selected=null;document.getElementById("starCard").classList.add("hidden");draw()};
document.getElementById("closeConst").onclick=()=>document.getElementById("constellationCard").classList.add("hidden");
document.getElementById("closeNote").onclick=()=>document.getElementById("noteCard").classList.add("hidden");
document.getElementById("keepStar").onclick=()=>{const h=document.getElementById("hint");h.textContent="Kept. ♡";setTimeout(()=>h.textContent="Tap a bright star · drag to look around",1600)};
document.querySelectorAll(".mode").forEach(b=>b.onclick=()=>{document.querySelectorAll(".mode").forEach(x=>x.classList.remove("active"));b.classList.add("active");mode=b.dataset.mode;document.getElementById("chapterKicker").textContent=mode==="wander"?"CHAPTER I":mode==="constellations"?"CHAPTER II":"CHAPTER III";document.getElementById("chapterTitle").textContent=mode==="wander"?"A sky was waiting.":mode==="constellations"?"Stories written in stars.":"I hid a few things for you.";document.getElementById("chapterText").textContent=mode==="wander"?"Drag slowly. There are little things hidden up here.":mode==="constellations"?"Tap the lines and stars. Find the scorpion.":"The stars with little rings are hiding notes.";draw()});
document.getElementById("showScorpio").onclick=()=>{document.getElementById("constellationCard").classList.add("hidden");mode="constellations";document.querySelectorAll(".mode").forEach(x=>x.classList.toggle("active",x.dataset.mode==="constellations"));centerAz=180;zoom=1.05;draw()};
document.getElementById("time").oninput=e=>{timeMin=+e.target.value;update()};
let raf=0;document.getElementById("play").onclick=()=>{playing=!playing;document.getElementById("play").textContent=playing?"❚❚":"▶";if(playing)tick()};
function tick(){if(!playing)return;timeMin+=2;if(timeMin>720)timeMin=0;document.getElementById("time").value=timeMin;update();raf=setTimeout(tick,90)}
document.getElementById("letterBtn").onclick=()=>document.getElementById("letter").classList.remove("hidden");
document.getElementById("closeLetter").onclick=()=>document.getElementById("letter").classList.add("hidden");
setTimeout(()=>document.getElementById("hint").style.opacity=".85",900);
