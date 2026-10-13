// ========================================
// CAVIN EDWARD - Sales Jaecoo Landing Page
// SCRIPT.JS - Auto-render dari data.js
// ========================================
// [CATATAN]: Semua data berasal dari window.PRODUCT_DATA (data.js)
// Nomor WhatsApp: 085762610036
// Nama Sales: Cavin Edward
// ========================================

const WA_NUMBER = "6285762610036";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// Elemen DOM
const productGrid = document.getElementById("productGrid");
const priceTableBody = document.getElementById("priceTableBody");
const varianSelect = document.getElementById("varian");
const bookingForm = document.getElementById("bookingForm");
const yearEl = document.getElementById("year");

// Modal
const productModal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalFeatures = document.getElementById("modalFeatures");
const modalSpecs = document.getElementById("modalSpecs");
const modalPesanBtn = document.getElementById("modalPesanBtn");
const modalWaBtn = document.getElementById("modalWaBtn");

let currentProduct = null;

// Tahun footer
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Render Produk Card
function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = "";

  PRODUCT_DATA.forEach((item) => {
    const card = document.createElement("article");
    card.className = "product-card reveal";
    card.setAttribute("data-id", item.id);

    const hargaDisplay = formatHarga(item.harga);

    card.innerHTML = `
      <div class="product-media">
        <img src="${item.gambar}" alt="${item.nama}" class="product-img" loading="lazy" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="product-body">
        <h3 class="product-name">${escapeHtml(item.nama)}</h3>
        <div class="product-price">${hargaDisplay}</div>
        <div class="product-actions">
          <button class="btn btn-ghost btn-detail" data-action="detail">
            <i class="bi bi-eye"></i>
            Lihat Detail
          </button>
          <button class="btn btn-primary btn-pesan" data-action="pesan">
            <i class="bi bi-cart-check"></i>
            Pesan Unit Ini
          </button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });

  // Event listeners
  productGrid.querySelectorAll(".btn-detail").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.currentTarget.closest(".product-card");
      const id = card.getAttribute("data-id");
      const product = PRODUCT_DATA.find((p) => p.id === id);
      if (product) openModal(product);
    });
  });

  productGrid.querySelectorAll(".btn-pesan").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.currentTarget.closest(".product-card");
      const id = card.getAttribute("data-id");
      const product = PRODUCT_DATA.find((p) => p.id === id);
      if (product) goToBooking(product.id);
    });
  });

  initReveal();
}

// Render Pricelist Table
function renderPricelist() {
  if (!priceTableBody) return;
  priceTableBody.innerHTML = "";

  PRODUCT_DATA.forEach((item) => {
    const tr = document.createElement("tr");
    const hargaDisplay = formatHarga(item.harga);

    tr.innerHTML = `
      <td>${escapeHtml(item.nama)}</td>
      <td class="price-cell">${hargaDisplay}</td>
      <td class="actions-cell">
        <button class="btn btn-primary btn-sm-wa" data-id="${item.id}">
          <i class="bi bi-whatsapp"></i>
          Minta Penawaran
        </button>
        <button class="btn btn-ghost btn-sm-book" data-id="${item.id}">
          <i class="bi bi-arrow-right"></i>
          Pesan
        </button>
      </td>
    `;

    priceTableBody.appendChild(tr);
  });

  priceTableBody.querySelectorAll(".btn-sm-wa").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const product = PRODUCT_DATA.find((p) => p.id === id);
      if (product) {
        const hargaDisplay = formatHarga(product.harga);
        const msg = `Halo Cavin Edward,\n\nSaya ingin minta penawaran untuk:\n*${product.nama}*\nHarga saat ini: ${hargaDisplay}\n\nTerima kasih.`;
        window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      }
    });
  });

  priceTableBody.querySelectorAll(".btn-sm-book").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      goToBooking(id);
    });
  });
}

// Render Form Dropdown
function renderFormDropdown() {
  if (!varianSelect) return;
  // Keep first option
  varianSelect.innerHTML = '<option value="">-- Pilih Varian --</option>';

  PRODUCT_DATA.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = item.nama;
    varianSelect.appendChild(opt);
  });
}

// Modal Functions
function openModal(product) {
  if (!productModal) return;
  currentProduct = product;

  modalImg.src = product.gambar;
  modalImg.alt = product.nama;
  modalImg.onerror = () => {
    modalImg.src = "images/placeholder.jpg";
  };

  modalTitle.textContent = product.nama;
  modalPrice.textContent = formatHarga(product.harga);

  modalFeatures.innerHTML = "";
  (product.fitur || []).forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    modalFeatures.appendChild(li);
  });

  // Spesifikasi detail
  if (modalSpecs) {
    modalSpecs.innerHTML = "";
    (product.spesifikasi || []).forEach((grup) => {
      const block = document.createElement("div");
      block.className = "spec-group";

      const h5 = document.createElement("h5");
      h5.textContent = grup.judul || "";
      block.appendChild(h5);

      const list = document.createElement("dl");
      list.className = "spec-list";
      (grup.item || []).forEach((row) => {
        const dt = document.createElement("dt");
        dt.textContent = row.label || "";
        const dd = document.createElement("dd");
        dd.textContent = row.nilai || "";
        list.appendChild(dt);
        list.appendChild(dd);
      });
      block.appendChild(list);
      modalSpecs.appendChild(block);
    });
  }

  // Actions
  modalPesanBtn.onclick = () => {
    closeModal();
    goToBooking(product.id);
  };

  const waMsg = `Halo Cavin Edward,\n\nSaya tertarik dengan *${product.nama}*.\nBisa kirim info lebih lanjut ya.\nTerima kasih.`;
  modalWaBtn.href = `${WA_BASE}?text=${encodeURIComponent(waMsg)}`;

  productModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!productModal) return;
  productModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Go to booking form
function goToBooking(varianId = "") {
  const bookingSection = document.getElementById("booking");
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setTimeout(() => {
    if (varianSelect && varianId) {
      varianSelect.value = varianId;
    }
    const namaInput = document.getElementById("nama");
    if (namaInput) namaInput.focus();
  }, 400);
}

// Form Validation & Submit
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const varianId = varianSelect.value;
    const rencana = document.getElementById("rencana").value;
    const testdrive = document.getElementById("testdrive").value;
    const catatan = document.getElementById("catatan").value.trim();

    // Clear errors
    document.getElementById("errNama").textContent = "";
    document.getElementById("errWa").textContent = "";
    document.getElementById("errVarian").textContent = "";
    document.getElementById("errRencana").textContent = "";

    let isValid = true;

    if (!nama) {
      document.getElementById("errNama").textContent = "Nama wajib diisi";
      isValid = false;
    }
    if (!whatsapp) {
      document.getElementById("errWa").textContent = "No. HP/WhatsApp wajib diisi";
      isValid = false;
    } else {
      // Simple validation - digits only, min 8
      const waRegex = /^[0-9+\-\s()]{8,20}$/;
      if (!waRegex.test(whatsapp.replace(/\s/g, ""))) {
        document.getElementById("errWa").textContent = "Format nomor tidak valid";
        isValid = false;
      }
    }
    if (!varianId) {
      document.getElementById("errVarian").textContent = "Pilih varian terlebih dahulu";
      isValid = false;
    }
    if (!rencana) {
      document.getElementById("errRencana").textContent = "Pilih rencana pembelian";
      isValid = false;
    }

    if (!isValid) return;

    const product = PRODUCT_DATA.find((p) => p.id === varianId);
    const varianNama = product ? product.nama : varianId;

    let msg = `Halo Cavin Edward (Sales Jaecoo),\n\nSaya ingin *BOOKING / PEMESANAN* unit Jaecoo berikut:\n\n`;
    msg += `*Nama:* ${nama}\n`;
    msg += `*No. HP/WhatsApp:* ${whatsapp}\n`;
    msg += `*Varian:* ${varianNama}\n`;
    msg += `*Rencana Pembelian:* ${rencana}\n`;
    if (testdrive) msg += `*Jadwal Test Drive:* ${testdrive}\n`;
    if (catatan) msg += `*Catatan:* ${catatan}\n\n`;
    msg += `Mohon info lebih lanjut ya. Terima kasih.\n\n`;
    msg += `Dikirim dari: CAVIN EDWARD - Landing Page`;

    window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });
}

// Reveal on scroll
function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("active"));
  }
}

// Modal events
if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
if (modalClose) modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Escape HTML
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Init
function init() {
  renderProducts();
  renderPricelist();
  renderFormDropdown();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}