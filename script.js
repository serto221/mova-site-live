const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
function updateClocks(){
 document.querySelectorAll('[data-clock]').forEach(el=>{
  const tz=el.dataset.clock;
  const parts=new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit',hour12:true,timeZone:tz}).formatToParts(new Date());
  const hour=parts.find(p=>p.type==='hour')?.value||'';
  const minute=parts.find(p=>p.type==='minute')?.value||'';
  const day=parts.find(p=>p.type==='dayPeriod')?.value||'';
  el.innerHTML=`${hour}<span class="blink">:</span>${minute} ${day}`;
 });
 const h=Number(new Intl.DateTimeFormat('en-US',{hour:'numeric',hourCycle:'h23',timeZone:'Asia/Dubai'}).format(new Date()));
 const greet=h<12?'Good Morning':h<18?'Good Day':'Good Evening';
 const g=document.querySelector('[data-greeting]'); if(g) g.textContent=greet;
}
updateClocks();setInterval(updateClocks,1000);
const menu=document.querySelector('.mobile-menu');
document.querySelector('.hamburger')?.addEventListener('click',()=>menu.classList.add('open'));
document.querySelector('.mobile-close')?.addEventListener('click',()=>menu.classList.remove('open'));
const imgs=[...document.querySelectorAll('.service-media img')];
document.querySelectorAll('.service-list li').forEach(li=>li.addEventListener('mouseenter',()=>{imgs.forEach((img,i)=>img.classList.toggle('active',i===Number(li.dataset.img))) }));
