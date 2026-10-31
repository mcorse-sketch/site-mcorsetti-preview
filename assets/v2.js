(()=>{const d=document,h=d.getElementById('hdr');let ly=0,lenis;const mob=()=>innerWidth<=980;
if(window.Lenis&&!matchMedia('(prefers-reduced-motion: reduce)').matches){lenis=new Lenis({duration:1.15,smoothWheel:true});const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
// word split for scroll-linked reveal
d.querySelectorAll('.sw').forEach(el=>{el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>`<span class="wd">${w}</span>`).join(' ')});
const HS=[...d.querySelectorAll('.hs')].map(s=>({s,pin:s.querySelector('.hs-pin'),tr:s.querySelector('.hs-track'),bar:s.querySelector('.hs-prog i'),cnt:s.querySelector('.hs-count b'),n:s.querySelectorAll('.hc').length,dist:0}));
function layout(){HS.forEach(o=>{if(mob()){o.s.style.height='';o.tr.style.transform='';return}o.dist=Math.max(0,o.tr.scrollWidth-innerWidth);o.len=o.dist*1.5;o.s.style.height=(innerHeight+o.len)+"px"})}
const heroImg=d.querySelector('.hero-media img'),heroIn=d.querySelector('.hero-in');
function frame(){const y=scrollY,vh=innerHeight;
 h.classList.toggle('sc',y>40);h.classList.toggle('hide',y>ly&&y>500&&!d.body.classList.contains('menu'));ly=y;
 if(!mob())HS.forEach(o=>{const r=o.s.getBoundingClientRect(),p=o.len?clamp(-r.top/o.len):0;o.tr.style.transform=`translate3d(${-p*o.dist}px,0,0)`;if(o.bar)o.bar.style.transform=`scaleX(${p})`;if(o.cnt)o.cnt.textContent=String(Math.min(o.n,1+Math.floor(p*o.n*0.999))).padStart(2,'0')});
 if(heroImg){const p=clamp(y/vh);heroImg.style.transform=`translate3d(0,${p*120}px,0) scale(${1.04+p*.18})`;if(heroIn){heroIn.style.opacity=1-p*1.1;heroIn.style.transform=`translate3d(0,${p*-60}px,0)`}}
 d.querySelectorAll('[data-speed]').forEach(el=>{if(el===heroImg)return;const r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const c=r.top+r.height/2-vh/2;el.style.transform=`translate3d(0,${c*parseFloat(el.dataset.speed)}px,0) scale(1.04)`});
 d.querySelectorAll('.sw').forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<-50||r.top>vh+50)return;const p=clamp((vh*.85-r.top)/(r.height+vh*.45));const ws=el.children,n=ws.length,k=p*n;for(let i=0;i<n;i++)ws[i].style.opacity=clamp(k-i,0,1)*.75+.25});
 d.querySelectorAll('[data-grow] .media').forEach(m=>{const r=m.parentElement.getBoundingClientRect();const p=clamp((vh-r.top)/(vh*.9));m.style.transform=`scale(${.78+.22*p})`;m.style.borderRadius=`${28-22*p}px`});
}
let tick=false;const onS=()=>{if(!tick){tick=true;requestAnimationFrame(()=>{frame();tick=false})}};
addEventListener('scroll',onS,{passive:true});addEventListener('resize',()=>{layout();frame()});addEventListener('load',()=>{layout();frame()});layout();frame();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);x.target.querySelectorAll?.('.count').forEach(count)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
d.querySelectorAll('.rv,.split').forEach(el=>io.observe(el));
function count(el){const to=+el.dataset.to,pre=el.dataset.pre,suf=el.dataset.suf,t0=performance.now(),D=1800;const st=n=>{const p=Math.min((n-t0)/D,1),v=Math.round(to*(1-Math.pow(1-p,4)));el.textContent=pre+v+suf;if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st)}
const vo=new IntersectionObserver(es=>es.forEach(x=>{const v=x.target;if(x.isIntersecting){if(!v.src){v.src=v.dataset.src;if(v.hasAttribute('data-auto'))v.preload='auto'}if(v.hasAttribute('data-auto'))v.play().catch(()=>{})}else if(v.hasAttribute('data-auto')&&!v.paused)v.pause()}),{rootMargin:'200px'});
d.querySelectorAll('video[data-src]').forEach(v=>vo.observe(v));
d.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>d.body.classList.remove('menu')));
d.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',ev=>{const t=d.querySelector(a.getAttribute('href'));if(t){ev.preventDefault();lenis?lenis.scrollTo(t):t.scrollIntoView({behavior:'smooth'})}}));
})();

/* Origem do contato (Jorge): os botões do WhatsApp para o número do Jorge abrem uma frase pronta que identifica de onde o visitante veio.
   google = chegou com gclid/gbraid/wbraid ou utm_source=google; meta = utm_source facebook/instagram/meta; senão = site. A 1ª origem fica guardada por 30 dias. */
(function(){
var NUM='5521967856074',K='wa_origem_v1',DIA=864e5;
function detecta(){var q=new URLSearchParams(location.search),s=(q.get('utm_source')||'').toLowerCase(),o=null;
if(q.get('gclid')||q.get('gbraid')||q.get('wbraid')||s==='google')o='google';
else if(/^(facebook|fb|instagram|ig|meta)$/.test(s))o='meta';
var r=null;try{r=JSON.parse(localStorage.getItem(K)||'null')}catch(e){}
if(o){try{localStorage.setItem(K,JSON.stringify({o:o,t:Date.now()}))}catch(e){}return o}
if(r&&r.o&&Date.now()-r.t<30*DIA)return r.o;return 'site'}
var TEMA={consulta:['marcar uma consulta','marcar uma consulta'],geral:['informações','informações'],rezum:['informações sobre próstata (Rezum)','informações sobre o tratamento Rezum']};
function frase(o,tema){var fim=(TEMA[tema]||TEMA.geral)[0];
if(o==='google')return 'Olá, Jorge! Encontrei o Dr. Marco no Google e gostaria de '+fim+'.';
if(o==='meta')return 'Olá, Jorge! Vi o anúncio do Dr. Marco e gostaria de '+fim+'.';
return 'Olá, Jorge! Vim pelo site do Dr. Marco e gostaria de '+fim+'.'}
function tema(txt){txt=(txt||'').toLowerCase();if(/rezum/.test(txt))return 'rezum';if(/agendar|marcar/.test(txt))return 'consulta';return 'geral'}
function ajusta(a){try{var h=a.getAttribute('href')||'';if(h.indexOf('wa.me/'+NUM)<0)return;
var m=h.match(/[?&]text=([^&]*)/),antigo=m?decodeURIComponent(m[1]):'';
var t=frase(detecta(),/rezum/i.test(location.pathname)?'rezum':tema(antigo));
a.setAttribute('href','https://wa.me/'+NUM+'?text='+encodeURIComponent(t))}catch(e){}}
function todos(){document.querySelectorAll('a[href*="wa.me/'+NUM+'"]').forEach(ajusta)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',todos);else todos();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(a)ajusta(a)},true);
window.__waOrigem={detecta:detecta,frase:frase,tema:tema};
})();
