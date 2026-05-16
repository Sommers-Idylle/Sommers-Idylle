// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', function(){
  document.getElementById('mainNav').classList.toggle('show');
});

// Simple calendar generator (two months) — highlights a sample date
(function renderCalendar(){
  const cal = document.getElementById('calendar');
  if(!cal) return;
  // For demo: render 35 day cells (5 rows x 7 cols)
  for(let i=1;i<=35;i++){
    const d = document.createElement('div');
    d.className = 'day';
    d.textContent = i;
    if(i===19) d.classList.add('active'); // sample highlighted day
    cal.appendChild(d);
  }
})();

// Simple gallery lightbox
document.getElementById('galleryGrid').addEventListener('click', function(e){
  if(e.target.tagName !== 'IMG') return;
  const src = e.target.src;
  const overlay = document.createElement('div');
  overlay.style.position='fixed';
  overlay.style.left=0; overlay.style.top=0; overlay.style.right=0; overlay.style.bottom=0;
  overlay.style.background='rgba(0,0,0,0.8)'; overlay.style.display='flex';
  overlay.style.alignItems='center'; overlay.style.justifyContent='center'; overlay.style.zIndex=9999;
  const img = document.createElement('img');
  img.src = src; img.style.maxWidth='90%'; img.style.maxHeight='90%'; img.style.borderRadius='8px';
  overlay.appendChild(img);
  overlay.addEventListener('click', ()=> document.body.removeChild(overlay));
  document.body.appendChild(overlay);
});

function goToBooking() {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    let url = "https://www.booking.com/hotel/de/sommers-idylle.de.html";

    if (checkin && checkout) {
        url += `?checkin=${checkin}&checkout=${checkout}`;
    }

    window.open(url, "_blank");
}
