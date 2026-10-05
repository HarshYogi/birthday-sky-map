const LAT=25.3176,LON=82.9739,TZ=5.5,DATE={y:2001,m:10,d:30},RAD=Math.PI/180;
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
["Phecda",11.8972,53.6948,"Ursa Major","One of the four stars forming the bowl of the Big Dipper.","Part of a ladle that has guided travellers for thousands of years."],
["Megrez",12.2571,57.0326,"Ursa Major","The faintest star of the Big Dipper, where the handle meets the bowl.","The quiet one that holds everything together."],
["Alioth",12.9005,55.9598,"Ursa Major","The brightest star in the Big Dipper's handle.","A little handle to one of the sky's most famous shapes."],
["Mizar",13.3987,54.9254,"Ursa Major","A famous double star in the Big Dipper's handle.","Look closely — some stars hide another star beside them."],
["Alkaid",13.7923,49.3133,"Ursa Major","The star at the end of the Big Dipper's handle.","Another pointer in a constellation full of directions."],
["Schedar",0.6751,56.5373,"Cassiopeia","A bright star in the W-shaped Cassiopeia.","A queen-shaped constellation waiting in the northern sky."],
["Caph",0.1529,59.1498,"Cassiopeia","One of the stars forming Cassiopeia's W.","A small spark in one of the sky's best patterns."],
["Navi",0.9451,60.7167,"Cassiopeia","The middle point of Cassiopeia's W.","The middle of the W. Let's say W is for wonderful."],
["Ruchbah",1.4303,60.2353,"Cassiopeia","A star in the W of Cassiopeia.","Another corner of the sky's easiest-to-find letter."],
["Segin",1.9066,63.67,"Cassiopeia","The end of Cassiopeia's W.","The last little stroke of a big W."],
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
["Ursa Major",["Dubhe","Merak"],["Merak","Phecda"],["Phecda","Megrez"],["Megrez","Dubhe"],["Megrez","Alioth"],["Alioth","Mizar"],["Mizar","Alkaid"]],
["Cassiopeia",["Caph","Schedar"],["Schedar","Navi"],["Navi","Ruchbah"],["Ruchbah","Segin"]],
["Scorpius",["Graffias","Dschubba"],["Dschubba","Antares"],["Antares","Shaula"],["Shaula","Sargas"]],
["Gemini",["Castor","Pollux"]],["Pegasus",["Alpheratz","Markab"],["Markab","Enif"]]
];
const NOTES=[
["The first little secret","Before I knew your name, the universe already knew where to put you.","Vega"],
["A long-distance one","If I could, I'd sit beside you and point at these stars one by one.","Rigel"],
["Your Scorpio note","Of course your constellation gets its own secret.","Antares"],
["A tiny promise","Whenever the distance feels too big, remember: we're still under the same sky.","Polaris"],
["The important one","Out of all these stars, I still choose you.","Sirius"]
];
const NICKS=["Little Hiccup","Tiny Wish","Pocket Star","Sleepy Spark","Midnight Penny","Quiet Giggle","Cinnamon Dot","Soft Glow","Tiny Firefly","Dream Dust","Lost Sock","Moonbeam's Cousin","Warm Cup","Secret Sparkle"];
const FAINT_PERSONAL=["Nobody has named this one yet. It's yours if you want it.","Too faint to be famous, bright enough to be found. Like someone I know.","Millions of stars like this, and you stopped at this one. I like that about you."];

const $=id=>document.getElementById(id);
const on=(id,fn)=>{const e=$(id);if(e)e.onclick=fn};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const canvas=$("sky"),ctx=canvas.getContext("2d");
const ZMIN=.6,ZMAX=6;
let W=0,H=0,dpr=1,timeMin=240,centerAz=180,zoom=1,panY=0,playing=false,mode="wander",selected=null;
let positions={},fvis=[],LSTc=0,lastReadout="";
let pointers=new Map(),found=new Set(),anim=null,animRaf=0,tapStart=null,multi=false,prevDist=0,prevMid=null,lastTap=null,keepKey=null;
let kept=new Set();try{kept=new Set(JSON.parse(localStorage.getItem("keptStars")||"[]"))}catch(e){}
function saveKept(){try{localStorage.setItem("keptStars",JSON.stringify([...kept]))}catch(e){}}

/* ---------- faint "deep sky" stars: revealed as you zoom in ---------- */
function rng(seed){return()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}}
function galToEq(l,b){const dG=27.12825*RAD,aG=192.85948*RAD,lN=122.93192*RAD;const sd=Math.sin(b)*Math.sin(dG)+Math.cos(b)*Math.cos(dG)*Math.cos(lN-l);const dec=Math.asin(sd);const y=Math.cos(b)*Math.sin(lN-l),x=Math.sin(b)*Math.cos(dG)-Math.cos(b)*Math.sin(dG)*Math.cos(lN-l);let ra=(aG+Math.atan2(y,x))/RAD;ra=((ra%360)+360)%360/15;return[ra,dec/RAD]}
const FAINT=[];(function(){const r=rng(20011030);for(let i=0;i<5200;i++){let ra,dec;if(i%5<2){const c=galToEq(r()*Math.PI*2,(r()+r()+r()-1.5)*.3);ra=c[0];dec=c[1]}else{ra=r()*24;dec=Math.asin(2*r()-1)/RAD}FAINT.push([ra,dec,3.4+3.6*Math.sqrt(r()),r()])}})();

/* ---------- sky maths ---------- */
function resize(){dpr=Math.min(devicePixelRatio||1,2);W=canvas.clientWidth;H=canvas.clientHeight;canvas.width=W*dpr;canvas.height=H*dpr;draw()}
addEventListener("resize",resize);
function jd(y,m,d,h){if(m<=2){y--;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5+h/24}
function gmst(j){const T=(j-2451545)/36525;let v=280.46061837+360.98564736629*(j-2451545)+.000387933*T*T-T*T*T/38710000;return (v%360+360)%360}
/* timeMin = minutes after 6 PM IST. IST is UTC+5:30, so convert to UT before using it. */
function lstFor(tm){return (gmst(jd(DATE.y,DATE.m,DATE.d,18+tm/60-TZ))+LON)%360}
function horizontal(raH,dec,lst){if(lst===undefined)lst=LSTc;const Hd=(lst-raH*15)*RAD,dr=dec*RAD,lr=LAT*RAD;const alt=Math.asin(Math.sin(lr)*Math.sin(dr)+Math.cos(lr)*Math.cos(dr)*Math.cos(Hd))/RAD;const y=-Math.sin(Hd)*Math.cos(dr),x=Math.sin(dr)*Math.cos(lr)-Math.cos(dr)*Math.sin(lr)*Math.cos(Hd);return{alt,az:(Math.atan2(y,x)/RAD+360)%360}}
const Rad=z=>Math.min(W,H)*.74*(z===undefined?zoom:z);
function project(alt,az){const r=(90-clamp(alt,-4,90))/93,da=(((az-centerAz+540)%360)-180)*RAD,R=Rad();return{x:W/2+Math.sin(da)*r*R,y:H*.52+panY-Math.cos(da)*r*R}}
function size(n){return ({Sirius:4.8,Canopus:4.2,Vega:4.3,Capella:4.2,Arcturus:4.1,Rigel:4,Betelgeuse:4,Procyon:3.9,Altair:3.9,Aldebaran:3.8,Antares:4,Spica:3.8,Pollux:3.6,Deneb:3.6,Regulus:3.6,Polaris:3.5}[n]||2.3)}


/* ---------- Moon, planets & Sun (low-precision orbits: accurate to well under a degree) ---------- */
const TAU=Math.PI*2,mod=(v,n)=>((v%n)+n)%n;
const EL={
 mercury:[0.38709927,0.00000037,0.20563593,0.00001906,7.00497902,-0.00594749,252.25032350,149472.67411175,77.45779628,0.16047689,48.33076593,-0.12534081],
 venus:[0.72333566,0.00000390,0.00677672,-0.00004107,3.39467605,-0.00078890,181.97909950,58517.81538729,131.60246718,0.00268329,76.67984255,-0.27769418],
 earth:[1.00000261,0.00000562,0.01671123,-0.00004392,-0.00001531,-0.01294668,100.46457166,35999.37244981,102.93768193,0.32327364,0,0],
 mars:[1.52371034,0.00001847,0.09339410,0.00007882,1.84969142,-0.00813131,-4.55343205,19140.30268499,-23.94362959,0.44441088,49.55953891,-0.29257343],
 jupiter:[5.20288700,-0.00011607,0.04838624,-0.00013253,1.30439695,-0.00183714,34.39644051,3034.74612775,14.72847983,0.21252668,100.47390909,0.20469106],
 saturn:[9.53667594,-0.00125060,0.05386179,-0.00050991,2.48599187,0.00193609,49.95424423,1222.49362201,92.59887831,-0.41897216,113.66242448,-0.28867794]
};
function helio(el,T){
  const a=el[0]+el[1]*T,e=el[2]+el[3]*T,I=(el[4]+el[5]*T)*RAD,L=el[6]+el[7]*T,w=el[8]+el[9]*T,O=el[10]+el[11]*T;
  const M=(mod(L-w+180,360)-180)*RAD;let E=M;for(let i=0;i<8;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));
  const xp=a*(Math.cos(E)-e),yp=a*Math.sqrt(1-e*e)*Math.sin(E),om=(w-O)*RAD,Om=O*RAD;
  const co=Math.cos(om),so=Math.sin(om),cO=Math.cos(Om),sO=Math.sin(Om),cI=Math.cos(I),sI=Math.sin(I);
  return[(co*cO-so*sO*cI)*xp+(-so*cO-co*sO*cI)*yp,(co*sO+so*cO*cI)*xp+(-so*sO+co*cO*cI)*yp,so*sI*xp+co*sI*yp];
}
function geoOf(name,T){
  const e=helio(EL.earth,T),eps=23.43928*RAD;
  const g=name==="sun"?[-e[0],-e[1],-e[2]]:(q=>[q[0]-e[0],q[1]-e[1],q[2]-e[2]])(helio(EL[name],T));
  const dist=Math.hypot(g[0],g[1],g[2]),ye=g[1]*Math.cos(eps)-g[2]*Math.sin(eps),ze=g[1]*Math.sin(eps)+g[2]*Math.cos(eps);
  return{raH:mod(Math.atan2(ye,g[0]),TAU)/RAD/15,dec:Math.asin(ze/dist)/RAD,dist,lon:mod(Math.atan2(g[1],g[0])/RAD,360)};
}
function moonPos(T){
  const L=218.3164477+481267.88123421*T,Dd=297.8501921+445267.1114034*T,Ms=357.5291092+35999.0502909*T,Mm=134.9633964+477198.8675055*T,F=93.272095+483202.0175233*T;
  const s=x=>Math.sin(x*RAD);
  const lon=L+6.288774*s(Mm)+1.274027*s(2*Dd-Mm)+0.658314*s(2*Dd)+0.213618*s(2*Mm)-0.185116*s(Ms)-0.114332*s(2*F)+0.058793*s(2*Dd-2*Mm)+0.057066*s(2*Dd-Ms-Mm)+0.053322*s(2*Dd+Mm)+0.045758*s(2*Dd-Ms)-0.040923*s(Ms-Mm)-0.03472*s(Dd)-0.030383*s(Ms+Mm);
  const lat=5.128122*s(F)+0.280602*s(Mm+F)+0.277693*s(Mm-F)+0.173237*s(2*Dd-F)+0.055413*s(2*Dd-Mm+F)+0.046271*s(2*Dd-Mm-F)+0.032573*s(2*Dd+F);
  const eps=(23.4393-0.013*T)*RAD,l=lon*RAD,b=lat*RAD;
  const ra=Math.atan2(Math.sin(l)*Math.cos(eps)-Math.tan(b)*Math.sin(eps),Math.cos(l));
  const dec=Math.asin(Math.sin(b)*Math.cos(eps)+Math.cos(b)*Math.sin(eps)*Math.sin(l));
  return{raH:mod(ra,TAU)/RAD/15,dec:dec/RAD,lon:mod(lon,360),lat};
}
const BODY_STYLE={venus:{n:"Venus",r:5.2,c:"255,244,216"},jupiter:{n:"Jupiter",r:5.4,c:"255,231,196"},saturn:{n:"Saturn",r:4,c:"241,220,166"},mars:{n:"Mars",r:3.8,c:"255,154,116"},mercury:{n:"Mercury",r:3,c:"217,212,200"}};
function solarAt(tm){
  const T=(jd(DATE.y,DATE.m,DATE.d,18+tm/60-TZ)-2451545)/36525,lst=lstFor(tm);
  const sun=geoOf("sun",T),mn=moonPos(T),Dl=mod(mn.lon-sun.lon,360);
  const psi=Math.acos(Math.cos(mn.lat*RAD)*Math.cos(Dl*RAD))/RAD;
  const list=[{id:"moon",raH:mn.raH,dec:mn.dec,dist:.00257,D:Dl,psi,illum:(1-Math.cos(psi*RAD))/2}];
  for(const k in BODY_STYLE){const g=geoOf(k,T);list.push({id:k,raH:g.raH,dec:g.dec,dist:g.dist})}
  for(const b of list)b.h=horizontal(b.raH,b.dec,lst);
  return{list,sunH:horizontal(sun.raH,sun.dec,lst)};
}
function phaseName(D){return D<8||D>352?"New Moon":D<82?"Waxing crescent":D<98?"First quarter":D<172?"Waxing gibbous":D<188?"Full Moon":D<262?"Waning gibbous":D<278?"Last quarter":"Waning crescent"}
const GC={raH:17.7611,dec:-28.9362};
const BODY_TEXT={
  venus:["Brighter than every star, but it isn't a star at all. It's a planet wrapped in thick clouds, and hotter than a pizza oven.","The brightest thing up here after the Moon, and it's not even a star. Reminds me of someone."],
  mars:["The red planet gets its colour from rusty iron in its dust.","A little red, a little dramatic. I say that lovingly."],
  jupiter:["The biggest planet of all. More than a thousand Earths would fit inside it, and even binoculars can show its four largest moons.","Big planet, big heart. I thought of you."],
  saturn:["Famous for its rings of ice and rock. Even a small telescope makes them look unreal.","The most stylish planet in the sky. You'd approve."],
  mercury:["The smallest planet, and so close to the Sun that it's hard to catch. It only shows near the horizon around dusk or dawn.","A shy little one. Glad you spotted it."]
};
function bodyCard(id,b){
  if(id==="gc")return{kicker:"OUR GALAXY",name:"Heart of the Milky Way",meta:"Toward Sagittarius · about 26,000 light-years away",desc:"Every star you can see is a neighbour in this one galaxy. At its centre sits a black hole roughly four million times heavier than our Sun.",personal:"Even a whole galaxy has a heart somewhere. I know where mine is."};
  if(id==="moon"){
    const waxing=b.D<180,days=waxing?Math.round((180-b.D)/12.19):Math.round((b.D-180)/12.19);
    const line=b.illum>.985||days===0?"It's as good as full.":waxing?`It would be full in about ${days} day${days===1?"":"s"}.`:`It was full about ${days} day${days===1?"":"s"} earlier.`;
    return{kicker:"THE MOON",name:"The Moon",meta:`${phaseName(b.D)} · ${Math.round(b.illum*100)}% lit`,desc:`${line} It's about 384,000 km away, so its light reaches your eyes in just over a second.`,personal:"Wherever we each are, it's the same Moon. Look up sometimes, and know I did too."};
  }
  const t=BODY_TEXT[id],mins=Math.round(b.dist*8.317);
  return{kicker:"PLANET",name:BODY_STYLE[id].n,meta:"Wandering across the same sky as the stars",desc:`${t[0]} Its light took about ${mins} minutes to reach you.`,personal:t[1]};
}
/* sky-position maths for the Moon's bright edge */
function vec3(alt,az){const a=alt*RAD,z=az*RAD;return[Math.cos(a)*Math.cos(z),Math.cos(a)*Math.sin(z),Math.sin(a)]}
function unvec3(v){const n=Math.hypot(v[0],v[1],v[2]);return{alt:Math.asin(v[2]/n)/RAD,az:mod(Math.atan2(v[1],v[0])/RAD,360)}}
function limbAngle(mh,sh,p0){
  const m=vec3(mh.alt,mh.az),s=vec3(sh.alt,sh.az),d=m[0]*s[0]+m[1]*s[1]+m[2]*s[2];
  let t=[s[0]-d*m[0],s[1]-d*m[1],s[2]-d*m[2]];const n=Math.hypot(t[0],t[1],t[2])||1;t=[t[0]/n,t[1]/n,t[2]/n];
  const m2=unvec3([m[0]+.04*t[0],m[1]+.04*t[1],m[2]+.04*t[2]]),p1=project(m2.alt,m2.az);
  return Math.atan2(p1.y-p0.y,p1.x-p0.x);
}
const MARIA=[[-.3,-.25,.26],[.12,-.32,.18],[-.05,.05,.16],[.3,.05,.12],[-.35,.18,.1],[.1,.38,.09]];
function drawMoon(x,y,r,m,ang){
  const gl=ctx.createRadialGradient(x,y,r*.6,x,y,r*4.4);gl.addColorStop(0,`rgba(255,244,214,${.07+.2*m.illum})`);gl.addColorStop(1,"rgba(255,244,214,0)");
  ctx.fillStyle=gl;ctx.beginPath();ctx.arc(x,y,r*4.4,0,TAU);ctx.fill();
  ctx.save();ctx.translate(x,y);
  ctx.fillStyle="rgba(70,80,112,.55)";ctx.beginPath();ctx.arc(0,0,r,0,TAU);ctx.fill();   /* faint earthshine on the dark part */
  ctx.rotate(ang);ctx.beginPath();ctx.arc(0,0,r,-Math.PI/2,Math.PI/2,false);
  const cp=Math.cos(m.psi*RAD);for(let i=0;i<=40;i++){const t=Math.PI-i/40*Math.PI;ctx.lineTo(r*cp*Math.sin(t),-r*Math.cos(t))}
  ctx.closePath();ctx.clip();ctx.rotate(-ang);
  const lg=ctx.createRadialGradient(-r*.25,-r*.25,r*.1,0,0,r*1.05);lg.addColorStop(0,"#fffaf0");lg.addColorStop(1,"#d9d2c0");
  ctx.fillStyle=lg;ctx.fillRect(-r,-r,2*r,2*r);
  ctx.fillStyle="rgba(120,118,132,.27)";for(const q of MARIA){ctx.beginPath();ctx.arc(q[0]*r,q[1]*r,q[2]*r,0,TAU);ctx.fill()}
  ctx.restore();
}

/* ---------- Milky Way: soft glow along the galactic plane ---------- */
function mkSprite(rgb){const c=document.createElement("canvas");c.width=c.height=64;const g=c.getContext("2d"),gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,`rgba(${rgb},.9)`);gr.addColorStop(.4,`rgba(${rgb},.4)`);gr.addColorStop(1,`rgba(${rgb},0)`);g.fillStyle=gr;g.fillRect(0,0,64,64);return c}
const SPR_C=mkSprite("190,205,255"),SPR_W=mkSprite("255,228,196");
const MW=[];(function(){const r=rng(777);let n=0;
  while(n<950){const l=r()*360,wl=Math.min(l,360-l),w=.3+.7*Math.exp(-Math.pow(wl/60,2));if(r()>w)continue;
    const sg=5+6*Math.exp(-Math.pow(wl/35,2)),b=(r()+r()+r()+r()-2)*1.73*sg,c=galToEq(l*RAD,b*RAD);
    MW.push({ra:c[0],dec:c[1],rad:4+r()*5,a:.016+.022*w,warm:wl<40});n++}})();
let showSolar=false,showMW=false,solarPos=[];

/* ---------- drawing ---------- */
function draw(){
  if(!W)return;
  LSTc=lstFor(timeMin);positions={};fvis=[];solarPos=[];
  ctx.setTransform(dpr,0,0,dpr,0,0);
  let g=ctx.createRadialGradient(W*.5,H*.42,0,W*.5,H*.52,Math.max(W,H)*.8);
  g.addColorStop(0,"#111b3b");g.addColorStop(.5,"#080d22");g.addColorStop(1,"#02030a");
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const R=Rad(),cx=W/2,cy=H*.52+panY,rr=R*90/93;
  /* horizon ring + warm glow near the ground */
  ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);ctx.fillStyle="rgba(24,34,78,.16)";ctx.fill();
  const hz=ctx.createRadialGradient(cx,cy,rr*.82,cx,cy,rr);hz.addColorStop(0,"rgba(231,198,163,0)");hz.addColorStop(1,"rgba(231,198,163,.13)");
  ctx.fillStyle=hz;ctx.fill();ctx.strokeStyle="rgba(231,198,163,.26)";ctx.lineWidth=1;ctx.stroke();
  ctx.textAlign="center";ctx.textBaseline="middle";ctx.font="600 11px -apple-system,sans-serif";
  [["N",0],["E",90],["S",180],["W",270]].forEach(([l,a])=>{const da=(a-centerAz)*RAD,x=cx+Math.sin(da)*rr*1.06,y=cy-Math.cos(da)*rr*1.06;if(x>10&&x<W-10&&y>10&&y<H-10){ctx.fillStyle=l==="N"?"rgba(231,198,163,.95)":"rgba(255,255,255,.5)";ctx.fillText(l,x,y)}});
  /* positions of the named stars */
  for(const s of STARS){const h=horizontal(s[1],s[2]);if(h.alt>0){const p=project(h.alt,h.az);positions[s[0]]={...p,alt:h.alt,az:h.az,s}}}
  /* Milky Way (optional layer) */
  if(showMW){
    ctx.save();ctx.beginPath();ctx.arc(cx,cy,rr,0,TAU);ctx.clip();ctx.globalCompositeOperation="lighter";
    const pxdeg=R/93;
    for(const b of MW){const h=horizontal(b.ra,b.dec);if(h.alt<-3)continue;const p=project(h.alt,h.az),rad=b.rad*pxdeg;
      if(p.x<-rad||p.x>W+rad||p.y<-rad||p.y>H+rad)continue;
      ctx.globalAlpha=b.a*Math.min(1,(h.alt+3)/12);ctx.drawImage(b.warm?SPR_W:SPR_C,p.x-rad,p.y-rad,rad*2,rad*2)}
    ctx.restore();ctx.globalAlpha=1;
  }
  /* faint stars — a deeper sky appears the closer you look */
  const L=4.7+1.7*Math.log2(zoom),hearts=[];
  for(let i=0;i<FAINT.length;i++){
    const f=FAINT[i];if(f[2]>L)continue;
    const h=horizontal(f[0],f[1]);if(h.alt<0)continue;
    const p=project(h.alt,h.az);if(p.x<-6||p.x>W+6||p.y<-6||p.y>H+6)continue;
    const k=L-f[2],r=Math.min(1.8,.38+k*.26),a=Math.min(1,.22+k*.3)*Math.min(1,.3+h.alt/9);
    ctx.globalAlpha=a;ctx.fillStyle=f[3]<.2?"#cfe0ff":f[3]>.82?"#ffe2bd":"#fff";
    ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();
    if(k>.3)fvis.push({i,x:p.x,y:p.y});
    if(kept.has("f"+i))hearts.push({x:p.x,y:p.y-r-8});
  }
  ctx.globalAlpha=1;
  if(mode!=="wander")drawLines();
  /* named stars */
  const grow=Math.min(1.9,Math.pow(Math.max(zoom,.6),.35)),showNames=zoom>=1.7||(mode==="constellations"&&zoom>=1);
  for(const s of STARS){
    const p=positions[s[0]];if(!p)continue;
    let r=size(s[0])*grow;if(mode==="notes"&&!NOTES.some(n=>n[2]===s[0]))r*=.72;
    const fade=Math.min(1,.3+p.alt/8);
    const glow=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,r*5);glow.addColorStop(0,"rgba(255,245,214,.30)");glow.addColorStop(1,"rgba(255,245,214,0)");
    ctx.globalAlpha=fade;ctx.fillStyle=glow;ctx.beginPath();ctx.arc(p.x,p.y,r*5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#fff";ctx.globalAlpha=Math.min(1,.65+r/10)*fade;ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
    if(mode==="notes"&&NOTES.some(n=>n[2]===s[0])){ctx.strokeStyle="rgba(255,215,170,.55)";ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,r+7,0,Math.PI*2);ctx.stroke()}
    if(kept.has(s[0]))hearts.push({x:p.x,y:p.y-r-9});
    if((showNames||(selected&&selected[0]===s[0]))&&p.x>0&&p.x<W&&p.y>0&&p.y<H){ctx.font="11px -apple-system,sans-serif";ctx.textAlign="left";ctx.fillStyle="rgba(255,255,255,.62)";ctx.fillText(s[0],p.x+r+6,p.y+1)}
  }
  /* Moon & planets (optional layer) */
  if(showSolar){
    const sol=solarAt(timeMin),mr=11*Math.min(2.2,Math.pow(Math.max(zoom,.6),.45));
    ctx.font="11px -apple-system,sans-serif";ctx.textAlign="left";ctx.textBaseline="middle";
    for(const b of sol.list){
      if(b.h.alt<=0)continue;
      const p=project(b.h.alt,b.h.az),fade=Math.min(1,.3+b.h.alt/8);
      if(b.id==="moon"){
        drawMoon(p.x,p.y,mr,b,limbAngle(b.h,sol.sunH,p));
        solarPos.push({id:"moon",x:p.x,y:p.y,r:mr,b,alt:b.h.alt,az:b.h.az});
        ctx.fillStyle="rgba(255,255,255,.72)";if(p.x>0&&p.x<W)ctx.fillText("Moon",p.x+mr+7,p.y);
        if(kept.has("moon"))hearts.push({x:p.x,y:p.y-mr-9});
      }else{
        const st=BODY_STYLE[b.id],r=st.r*grow;
        const gl=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,r*5);gl.addColorStop(0,`rgba(${st.c},.4)`);gl.addColorStop(1,`rgba(${st.c},0)`);
        ctx.globalAlpha=fade;ctx.fillStyle=gl;ctx.beginPath();ctx.arc(p.x,p.y,r*5,0,TAU);ctx.fill();
        ctx.fillStyle=`rgb(${st.c})`;ctx.beginPath();ctx.arc(p.x,p.y,r,0,TAU);ctx.fill();
        if(b.id==="saturn"){ctx.strokeStyle=`rgba(${st.c},.8)`;ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(p.x,p.y,r*2.1,r*.7,-.35,0,TAU);ctx.stroke()}
        ctx.fillStyle="rgba(255,255,255,.72)";if(p.x>0&&p.x<W)ctx.fillText(st.n,p.x+r+8,p.y);ctx.globalAlpha=1;
        solarPos.push({id:b.id,x:p.x,y:p.y,r:r*1.6,b,alt:b.h.alt,az:b.h.az});
        if(kept.has(b.id))hearts.push({x:p.x,y:p.y-r-9});
      }
    }
    ctx.textBaseline="middle";
  }
  /* the heart of the Milky Way is tappable when that layer is on */
  if(showMW){
    const h=horizontal(GC.raH,GC.dec);
    if(h.alt>0){const p=project(h.alt,h.az);
      ctx.strokeStyle="rgba(255,225,190,.5)";ctx.lineWidth=1;ctx.setLineDash([3,4]);ctx.beginPath();ctx.arc(p.x,p.y,14,0,TAU);ctx.stroke();ctx.setLineDash([]);
      if(p.x>0&&p.x<W){ctx.font="italic 11px Georgia,serif";ctx.textAlign="left";ctx.fillStyle="rgba(255,228,196,.7)";ctx.fillText("heart of the galaxy",p.x+20,p.y)}
      solarPos.push({id:"gc",x:p.x,y:p.y,r:14,b:null,alt:h.alt,az:h.az})}
  }
  /* constellation names */
  if(mode==="constellations"&&zoom<3.5){ctx.font="italic 13px Georgia,serif";ctx.textAlign="center";ctx.fillStyle="rgba(231,198,163,.62)";
    for(const gp of LINES){const seen=new Set();let ax=0,ay=0;for(let i=1;i<gp.length;i++)for(const n of gp[i]){const p=positions[n];if(p&&!seen.has(n)){seen.add(n);ax+=p.x;ay+=p.y}}
      if(seen.size>=2){const x=ax/seen.size,y=ay/seen.size-20;if(x>20&&x<W-20&&y>20&&y<H-20)ctx.fillText(gp[0],x,y)}}}
  /* kept hearts */
  ctx.font="12px -apple-system,sans-serif";ctx.textAlign="center";ctx.fillStyle="#ffc4d4";for(const h of hearts)ctx.fillText("♡",h.x,h.y);
  /* selection ring */
  let sp=null;
  if(selected&&selected.f!==undefined){const f=FAINT[selected.f],h=horizontal(f[0],f[1]);if(h.alt>0)sp=project(h.alt,h.az)}
  else if(selected&&selected.b){const q=solarPos.find(z=>z.id===selected.b);if(q)sp=q}
  else if(selected&&positions[selected[0]])sp=positions[selected[0]];
  if(sp){ctx.strokeStyle="rgba(255,255,255,.65)";ctx.lineWidth=1;ctx.beginPath();ctx.arc(sp.x,sp.y,sp.r?Math.max(17,sp.r+9):17,0,Math.PI*2);ctx.stroke()}
  /* zoom readout */
  const t="×"+zoom.toFixed(1);if(t!==lastReadout){lastReadout=t;const z=$("zread");if(z)z.textContent=t}
}
function drawLines(){
  ctx.strokeStyle=mode==="constellations"?"rgba(200,210,255,.3)":"rgba(200,210,255,.18)";ctx.lineWidth=mode==="constellations"?1.1:.8;
  for(const g of LINES)for(let i=1;i<g.length;i++){const a=positions[g[i][0]],b=positions[g[i][1]];if(a&&b){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
}
function timeText(){let total=1080+timeMin;let h=Math.floor((total%1440)/60),m=total%60,ap=h>=12?"PM":"AM";h=h%12||12;return `${h}:${String(m).padStart(2,"0")} ${ap}`}
function notesHint(){
  if(mode!=="notes")return;
  const lst=lstFor(timeMin);let up=0;
  for(const n of NOTES){const s=STARS.find(x=>x[0]===n[2]);if(s&&horizontal(s[1],s[2],lst).alt>0)up++}
  $("chapterText").textContent=up===NOTES.length?"The stars with little rings are hiding notes.":`${up} of ${NOTES.length} ringed stars are above the horizon now. Slide the time to meet the rest.`;
}
function update(){$("timeText").textContent=timeText();notesHint();draw()}

/* ---------- zoom + camera ---------- */
function limitPan(v){const lim=Rad()+H*.15;return clamp(v,-lim,lim)}
/* zoom while keeping the point under screen-y `ym` still */
function setZoom(z,ym){z=clamp(z,ZMIN,ZMAX);const cy=H*.52;if(ym===undefined)ym=cy;const k=z/zoom;panY=limitPan(ym-cy+k*(cy+panY-ym));zoom=z}
function rotate(dx,dy){centerAz=(centerAz-dx*.34/Math.pow(zoom,.85)+360)%360;panY=limitPan(panY+dy);draw()}
function flyTo(to,dur){
  anim={t0:performance.now(),dur:dur||650,from:{z:zoom,az:centerAz,py:panY,tm:timeMin},to};
  if(!animRaf)animRaf=requestAnimationFrame(animStep);
}
function animStep(now){
  if(!anim){animRaf=0;return}
  const k=Math.min(1,(now-anim.t0)/anim.dur),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,f=anim.from,t=anim.to;
  zoom=f.z*Math.pow(t.z/f.z,e);
  if(t.az!==undefined&&t.az!==null){const d=((t.az-f.az+540)%360)-180;centerAz=(f.az+d*e+360)%360}
  panY=f.py+(t.py-f.py)*e;
  if(t.tm!==undefined&&t.tm!==null){timeMin=Math.round(f.tm+(t.tm-f.tm)*e);const s=$("time");if(s)s.value=timeMin;$("timeText").textContent=timeText()}
  draw();
  if(k<1)animRaf=requestAnimationFrame(animStep);else{anim=null;animRaf=0;notesHint()}
}
function zoomBy(f){
  const z=clamp(zoom*f,ZMIN,ZMAX);
  flyTo({z,az:null,py:z<=1.05?0:limitPanFor(z,(z/zoom)*panY)},280);
}
function limitPanFor(z,v){const lim=Rad(z)+H*.15;return clamp(v,-lim,lim)}
function resetZoom(){
  /* tap the ×readout: ×1 → whole sky → ×1 */
  const z=zoom>1.25?1:(zoom>.85?.68:1);
  flyTo({z,az:null,py:0},380);
}
function doubleTap(x,y){
  const z=zoom<2.4?Math.min(ZMAX,zoom*2.4):1,cy=H*.52,k=z/zoom;
  flyTo({z,az:null,py:z<=1.05?0:limitPanFor(z,y-cy+k*(cy+panY-y))},380);
}
/* bring a sky position to the upper-middle of the screen (above the card) */
function focusOn(alt,az,minZoom,tm){
  const z=Math.max(zoom,minZoom||1.8),r=(90-clamp(alt,-4,90))/93;
  flyTo({z,az,py:H*.34-H*.52+r*Rad(z),tm},650);
}

/* ---------- cards ---------- */
function setKeepButton(){const b=$("keepStar");if(b)b.textContent=kept.has(keepKey)?"Kept ♡  (tap to undo)":"Keep this one ♡"}
function showStar(s){
  selected=s;keepKey=s[0];
  $("cardKicker").textContent=s[0]==="Antares"?"YOUR SCORPIO STAR":"STAR";$("cardName").textContent=s[0];$("cardMeta").textContent=s[3];
  $("cardDesc").textContent=s[4];$("cardPersonal").textContent=s[5];setKeepButton();
  $("starCard").classList.remove("hidden");
  const n=NOTES.find(x=>x[2]===s[0]);if(n){found.add(n[2]);updateFound()}
  draw();
}
function showFaint(i){
  selected={f:i};keepKey="f"+i;
  $("cardKicker").textContent="A QUIET STAR";$("cardName").textContent=NICKS[i%NICKS.length];
  $("cardMeta").textContent="Too faint to have a real name — so I gave it one";
  $("cardDesc").textContent="You can only see it because you leaned in close. Telescopes find millions of stars like this.";
  $("cardPersonal").textContent=FAINT_PERSONAL[i%FAINT_PERSONAL.length];setKeepButton();
  $("starCard").classList.remove("hidden");draw();
}
function showBody(id,q){
  const c=bodyCard(id,q.b);selected={b:id};keepKey=id===""?null:id;
  $("cardKicker").textContent=c.kicker;$("cardName").textContent=c.name;$("cardMeta").textContent=c.meta;
  $("cardDesc").textContent=c.desc;$("cardPersonal").textContent=c.personal;setKeepButton();
  $("starCard").classList.remove("hidden");draw();
}
function updateFound(){$("foundCount").textContent=found.size;if(found.size>=NOTES.length)$("finalPrompt").classList.remove("hidden")}
function showNote(n){$("noteTitle").textContent=n[0];$("noteText").textContent=n[1];$("noteCard").classList.remove("hidden");found.add(n[2]);updateFound()}

/* ---------- touch: drag, pinch, tap, double-tap ---------- */
function nearest(x,y){
  for(const q of solarPos){if(Math.hypot(q.x-x,q.y-y)<Math.max(34,q.r+16))return{b:q.id,q}}
  let best=null,d=34;
  for(const s of STARS){const p=positions[s[0]];if(!p)continue;const q=Math.hypot(p.x-x,p.y-y);if(q<d){d=q;best={s}}}
  if(best)return best;
  d=22;for(const f of fvis){const q=Math.hypot(f.x-x,f.y-y);if(q<d){d=q;best={f:f.i}}}
  return best;
}
function hint(msg,ms){const h=$("hint");h.textContent=msg;if(ms)setTimeout(()=>{h.textContent=DEFAULT_HINT},ms)}
const DEFAULT_HINT="Pinch to zoom · double-tap to magnify · tap a star";
function singleTap(x,y){
  const hit=nearest(x,y);
  if(hit&&hit.b){showBody(hit.b,hit.q);focusOn(hit.q.alt,hit.q.az,1.6);return}
  if(hit&&hit.s){
    const s=hit.s,p=positions[s[0]];
    if(mode==="notes"){const n=NOTES.find(q=>q[2]===s[0]);n?showNote(n):showStar(s)}else showStar(s);
    if(p)focusOn(p.alt,p.az,1.8);
  }else if(hit&&hit.f!==undefined){
    const f=FAINT[hit.f],h=horizontal(f[0],f[1]);showFaint(hit.f);focusOn(h.alt,h.az,2.4);
  }else hint("Keep looking… there are secrets among the stars.",2200);
}
function tap(x,y){
  const now=performance.now();
  if(lastTap&&now-lastTap.t<320&&Math.hypot(x-lastTap.x,y-lastTap.y)<30){lastTap=null;doubleTap(x,y);return}
  lastTap={x,y,t:now};singleTap(x,y);
}
canvas.addEventListener("pointerdown",e=>{
  canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});anim=null;
  if(pointers.size===1){tapStart={x:e.clientX,y:e.clientY,t:performance.now(),moved:false};multi=false}
  else{multi=true;const [a,b]=[...pointers.values()];prevDist=Math.hypot(a.x-b.x,a.y-b.y);prevMid={x:(a.x+b.x)/2,y:(a.y+b.y)/2}}
});
canvas.addEventListener("pointermove",e=>{
  const p=pointers.get(e.pointerId);if(!p)return;
  const ox=p.x,oy=p.y;p.x=e.clientX;p.y=e.clientY;
  if(pointers.size===1){
    if(tapStart&&Math.hypot(p.x-tapStart.x,p.y-tapStart.y)>10)tapStart.moved=true;
    if(tapStart&&tapStart.moved)rotate(p.x-ox,p.y-oy);
  }else if(pointers.size>=2){
    const [a,b]=[...pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y),m={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
    if(prevDist>0&&d>0)setZoom(zoom*d/prevDist,m.y);
    if(prevMid){centerAz=(centerAz-(m.x-prevMid.x)*.34/Math.pow(zoom,.85)+360)%360;panY=limitPan(panY+(m.y-prevMid.y))}
    prevDist=d;prevMid=m;draw();
  }
});
canvas.addEventListener("pointerup",e=>{
  const single=pointers.size===1;pointers.delete(e.pointerId);
  if(pointers.size===0){
    if(single&&tapStart&&!tapStart.moved&&!multi&&performance.now()-tapStart.t<550)tap(e.clientX,e.clientY);
    tapStart=null;
  }else if(pointers.size===1){const r=[...pointers.values()][0];prevDist=0;prevMid={x:r.x,y:r.y}}
});
canvas.addEventListener("pointercancel",e=>{pointers.delete(e.pointerId);if(!pointers.size)tapStart=null});
canvas.addEventListener("wheel",e=>{e.preventDefault();anim=null;setZoom(zoom*Math.exp(-e.deltaY*.0015),e.clientY);draw()},{passive:false});
["gesturestart","gesturechange","gestureend"].forEach(t=>document.addEventListener(t,e=>e.preventDefault()));

/* ---------- buttons ---------- */
on("begin",()=>{$("intro").classList.add("hidden");$("journey").classList.remove("hidden");resize();hint(DEFAULT_HINT)});
on("home",()=>{playing=false;$("journey").classList.add("hidden");$("intro").classList.remove("hidden")});
on("info",()=>$("infoCard").classList.remove("hidden"));
on("closeInfo",()=>$("infoCard").classList.add("hidden"));
on("closeStar",()=>{selected=null;$("starCard").classList.add("hidden");draw()});
on("closeConst",()=>$("constellationCard").classList.add("hidden"));
on("closeNote",()=>$("noteCard").classList.add("hidden"));
on("keepStar",()=>{if(keepKey===null)return;if(kept.has(keepKey))kept.delete(keepKey);else{kept.add(keepKey);hint("Kept. ♡",1600)}saveKept();setKeepButton();draw()});
on("zin",()=>zoomBy(1.8));on("zout",()=>zoomBy(1/1.8));on("zread",resetZoom);
document.querySelectorAll(".mode").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".mode").forEach(x=>x.classList.remove("active"));b.classList.add("active");mode=b.dataset.mode;
  $("chapterKicker").textContent=mode==="wander"?"CHAPTER I":mode==="constellations"?"CHAPTER II":"CHAPTER III";
  $("chapterTitle").textContent=mode==="wander"?"A sky was waiting.":mode==="constellations"?"Stories written in stars.":"I hid a few things for you.";
  $("chapterText").textContent=mode==="wander"?"Drag slowly. There are little things hidden up here.":mode==="constellations"?"Tap the lines and stars. Find the scorpion.":"The stars with little rings are hiding notes.";
  notesHint();draw();
});
/* Scorpius sets around 7 PM that night, so jump the clock back to 6:30 PM and fly to the scorpion */
on("showScorpio",()=>{
  $("constellationCard").classList.add("hidden");mode="constellations";
  document.querySelectorAll(".mode").forEach(x=>x.classList.toggle("active",x.dataset.mode==="constellations"));
  const tm=30,h=horizontal(16.4901,-26.4319,lstFor(tm)),z=1.15,r=(90-clamp(h.alt,-4,90))/93;
  flyTo({z,az:h.az,py:H*.5-H*.52+r*Rad(z),tm},1100);
  hint("Scorpius is low in the south-west early in the evening and sets soon after. Slide time forward to watch it go.",5200);
});
function setToggle(id,v){const b=$(id);if(!b)return;b.classList.toggle("on",v);b.setAttribute("aria-pressed",String(v))}
function closeIfSelected(pred){if(selected&&pred(selected)){selected=null;$("starCard").classList.add("hidden")}}
on("tSolar",()=>{
  showSolar=!showSolar;setToggle("tSolar",showSolar);
  if(showSolar){const m=solarAt(timeMin).list[0];
    if(m.h.alt>0){focusOn(m.h.alt,m.h.az,1.3);hint("That's the Moon from your night. Tap it, and the planets.",4200)}
    else hint("The Moon is below the horizon at this hour. Slide the time to find it.",4200)}
  else closeIfSelected(x=>x.b&&x.b!=="gc");
  draw();
});
on("tMW",()=>{
  showMW=!showMW;setToggle("tMW",showMW);
  if(showMW)hint("That soft glow is our own galaxy, seen edge-on. Tap its heart.",4200);else closeIfSelected(x=>x.b==="gc");
  draw();
});
$("time").oninput=e=>{anim=null;timeMin=+e.target.value;update()};
on("play",()=>{playing=!playing;$("play").textContent=playing?"❚❚":"▶";if(playing)tick()});
function tick(){if(!playing)return;timeMin+=2;if(timeMin>720)timeMin=0;$("time").value=timeMin;update();setTimeout(tick,90)}
on("letterBtn",()=>$("letter").classList.remove("hidden"));
on("closeLetter",()=>$("letter").classList.add("hidden"));
setTimeout(()=>{$("hint").style.opacity=".85"},900);
