// =======================
// Mobile Navigation
// =======================
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function(){
    document.getElementById('mainNav').classList.toggle('show');
  });
}


// =======================
// FLATPICKR (Range Kalender)
// =======================
if (document.getElementById("dateRange")) {
  flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    minDate: "today"
  });
}


// =======================
// Booking Weiterleitung
// =======================
function goToBooking() {
    const range = document.getElementById("dateRange").value;

    let url = "https://www.booking.com/hotel/de/sommers-idylle.de.html";

    if (range.includes(" to ")) {
        const [checkin, checkout] = range.split(" to ");
        url += `?checkin=${checkin}&checkout=${checkout}`;
    }

    window.open(url, "_blank");
}


// =======================
// Gallery Lightbox
// =======================
const galleryGrid = document.getElementById('galleryGrid');

if (galleryGrid) {
  galleryGrid.addEventListener('click', function(e){
    if(e.target.tagName !== 'IMG') return;

    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    content.innerHTML = `<img src="${e.target.src}" class="w-full rounded-lg">`;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}


// =======================
// Modal (Impressum / Datenschutz)
// =======================
function openModal(type) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    if (!modal || !content) return;

    if (type === "impressum") {
        content.innerHTML = `
            <h2 class="text-2xl mb-4">Impressum</h2>
            <p>Hier dein Impressum einfügen...</p>
        `;
    }

    if (type === "datenschutz") {
        content.innerHTML = `
            <h2 class="text-2xl mb-4">Datenschutz</h2>
            <p>Hier deine Datenschutzerklärung einfügen...</p>
        `;
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}