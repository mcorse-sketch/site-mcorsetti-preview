(()=>{const c=document.getElementById('chat'),b=document.getElementById('waBtn');
if(c&&b){b.addEventListener('click',e=>{e.preventDefault();c.hidden=!c.hidden;if(!c.hidden)c.querySelector('input').focus()});
c.querySelector('.ch-x').onclick=()=>c.hidden=true;
const f=c.querySelector('form');f.addEventListener('submit',e=>{e.preventDefault();const v=f.querySelector('input').value.trim()||'Olá, Jorge!';window.open(f.dataset.wa+'?text='+encodeURIComponent(v),'_blank','noopener')});}
document.querySelectorAll('[data-car]').forEach(car=>{const cs=[...car.querySelectorAll('.rv-c')],ds=[...car.querySelectorAll('.rv-dots button')],pp=car.querySelector('.rv-pp');let i=0,paused=false,hover=false;
const go=n=>{cs[i].classList.remove('on');ds[i].classList.remove('on');i=(n+cs.length)%cs.length;cs[i].classList.add('on');ds[i].classList.add('on')};
ds.forEach((d,k)=>d.onclick=()=>go(k));pp.onclick=()=>{paused=!paused;pp.textContent=paused?'▶':'❚❚';pp.setAttribute('aria-label',paused?'Retomar':'Pausar')};
car.onmouseenter=()=>hover=true;car.onmouseleave=()=>hover=false;setInterval(()=>{if(!paused&&!hover)go(i+1)},5000)});})();
if(location.protocol==='file:')document.documentElement.classList.add('nofetch');
