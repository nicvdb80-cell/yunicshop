// ── TAB SWITCHING ──
  function openTab(tabId) {
    // Hide all panels
    document.querySelectorAll('.panel').forEach(function(p) {
      p.classList.remove('active');
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      b.classList.remove('active');
    });

    // Deactivate all nav links
    document.querySelectorAll('.nav-link').forEach(function(a) {
      a.classList.remove('active');
    });

    // Activate selected panel
    var panel = document.getElementById('panel-' + tabId);
    if (panel) panel.classList.add('active');

    // Activate matching tab button
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      if (b.getAttribute('data-tab') === tabId) b.classList.add('active');
    });

    // Activate matching nav link
    document.querySelectorAll('.nav-link').forEach(function(a) {
      if (a.getAttribute('data-tab') === tabId) a.classList.add('active');
    });

    // Scroll to tab section
    var tabSection = document.querySelector('.main-tabs');
    if (tabSection) {
      tabSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Wire up tab buttons
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      openTab(this.getAttribute('data-tab'));
    });
  });

  // Wire up nav links
  document.querySelectorAll('.nav-link').forEach(function(link) {
    if (link.classList.contains('nav-link-dining')) return; // external link, skip
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openTab(this.getAttribute('data-tab'));
    });
  });
// ── CATALOG DATA ──
const catalog = {
  textiles: {
    label: 'Craft & Textiles',
    title: 'Ikat, Batik & Hand-Woven Cloth',
    products: [
      { id: 't1', name: 'Parang Batik Scarf', origin: 'Yogyakarta, Java', price: 385000, desc: 'Hand-drawn batik tulis on silk, using the parang motif. Natural soga brown and indigo dyes. Each one slightly different — a mark of the human hand behind it.', img: null },
      { id: 't2', name: 'Sumba Ikat Textile', origin: 'East Sumba', price: 1250000, desc: 'Hinggi cloth from the Kambera region. Woven on a backstrap loom using hand-spun cotton, with natural red from morinda root and blue from indigo. Clan motifs encoded into the weave.', img: null },
      { id: 't3', name: 'Indigo Batik Runner', origin: 'Solo, Central Java', price: 550000, desc: 'A table runner in deep indigo batik cap — block-printed with a repeating kawung motif. Cotton, 180cm long. Beautiful on a wooden table or draped over a bench.', img: null },
      { id: 't4', name: 'Flores Ikat Pouch', origin: 'Ende, Flores', price: 280000, desc: 'A small pouch made from offcuts of traditional Flores ikat. Hand-stitched with a brass clasp. Each pouch is unique — no two pieces of ikat are the same.', img: null },
    ]
  },
  objects: {
    label: 'Objects',
    title: 'Ceramics, Wood & Brass',
    products: [
      { id: 'o1', name: 'Penujak Earthenware Bowl', origin: 'Penujak, Lombok', price: 320000, desc: 'Hand-shaped from river clay by the women of Penujak village. Fired in an open wood kiln. Slightly irregular, deeply beautiful — use it for fruit, keys, or quiet display.', img: null },
      { id: 'o2', name: 'Jepara Carved Board', origin: 'Jepara, Central Java', price: 320000, desc: 'A single piece of teak, carved with a traditional floral border by a master carver in Jepara. Serving board, cheese board, or simply an object for the table.', img: 'images/img08.jpg' },
      { id: 'o3', name: 'Brass Flower Dish', origin: 'Yogyakarta, Java', price: 420000, desc: 'Cast brass in the form of a hibiscus flower — a traditional Javanese form used as an offering dish. Now at home on a dining table, a shelf, or beside a bed.', img: null },
      { id: 'o4', name: 'Woven Rattan Bowl', origin: 'Beleka, Lombok', price: 680000, desc: 'Tight Sasak-method rattan weave, two days of work by a single weaver. Strong enough for daily use, beautiful enough to leave out always.', img: 'images/img09.jpg' },
    ]
  },
  wearables: {
    label: 'Wearables',
    title: 'Scarves, Sarongs & Jewellery',
    products: [
      { id: 'w1', name: 'Natural Dye Silk Scarf', origin: 'Tenganan, Bali', price: 750000, desc: 'Woven from hand-spun silk and dyed with natural indigo and turmeric. The Geringsing double-ikat technique is found only in Tenganan — one of the most complex weaving traditions in the world.', img: null },
      { id: 'w2', name: 'Batik Cotton Sarong', origin: 'Pekalongan, Java', price: 480000, desc: 'A full sarong in soft Pekalongan batik — the style known for its Chinese-influenced florals and unusually soft colour palette. Worn as a wrap, used as a throw, or draped.', img: null },
      { id: 'w3', name: 'Silver Filigree Ring', origin: 'Celuk, Bali', price: 380000, desc: 'Hand-twisted silver wire from the silversmith village of Celuk. Each ring takes a craftsman four hours to complete. Adjustable — fits most fingers.', img: null },
      { id: 'w4', name: 'Brass & Bone Bracelet', origin: 'Flores', price: 220000, desc: 'A simple bracelet of cast brass beads and carved bone, strung on waxed cotton. A piece from the road — found in a small market in Ende, made by a craftsman whose family has sold here for thirty years.', img: null },
    ]
  },
  home: {
    label: 'For the Home',
    title: 'Cushions, Runners & Vessels',
    products: [
      { id: 'h1', name: 'Ikat Cushion Cover', origin: 'Sumba', price: 650000, desc: 'A cushion cover woven from Sumba ikat in earthy ochre and mauve — the natural dyes age beautifully over years of use. 50x50cm, envelope back. Insert not included.', img: null },
      { id: 'h2', name: 'Hand-Woven Table Runner', origin: 'Lombok', price: 420000, desc: 'A runner in natural cotton with a subtle woven stripe — made on a traditional floor loom by a weaving cooperative in central Lombok. 40x160cm.', img: null },
      { id: 'h3', name: 'Lombok Ceramic Vase', origin: 'Banyumulek, Lombok', price: 380000, desc: 'A hand-built vase from Banyumulek, the pottery village outside Mataram. Burnished with a river stone before firing — giving it a soft, warm sheen. Holds dried stems beautifully.', img: null },
      { id: 'h4', name: 'Speckled Ceramic Plate Set', origin: 'Yogyakarta, Java', price: 890000, desc: 'A set of four hand-thrown plates in speckled stoneware glaze. Food-safe, microwave-safe, dishwasher-safe. The kind of plates that make every meal feel considered.', img: null },
    ]
  }
};

// ── BASKET STATE ──
let basket = [];

function openCatalog(cat) {
  const data = catalog[cat];
  if (!data) return;
  document.getElementById('catalogLabel').textContent = data.label;
  document.getElementById('catalogTitle').textContent = data.title;

  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = data.products.map(p => `
    <div class="cat-product">
      ${p.img
        ? `<img class="cat-product-img" src="${p.img}" alt="${p.name}">`
        : `<div class="cat-product-img-placeholder">◈</div>`}
      <div class="cat-product-body">
        <div class="cat-product-origin">${p.origin}</div>
        <div class="cat-product-name">${p.name}</div>
        <div class="cat-product-desc">${p.desc}</div>
        <div class="cat-product-footer">
          <div class="cat-product-price">IDR ${p.price.toLocaleString('id-ID')}</div>
          <button class="add-to-basket" onclick="addToBasket('${cat}','${p.id}')">Add to basket</button>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('catalogOverlay').classList.add('open');
  document.getElementById('catalogModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCatalog() {
  document.getElementById('catalogOverlay').classList.remove('open');
  document.getElementById('catalogModal').classList.remove('open');
  document.body.style.overflow = '';
}

function addToBasket(cat, id) {
  const product = catalog[cat].products.find(p => p.id === id);
  if (!product) return;
  const existing = basket.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    basket.push({ ...product, qty: 1 });
  }
  updateBasketCount();
  // Flash feedback
  const btn = event.target;
  btn.textContent = 'Added ✓';
  btn.style.background = '#B4934D';
  setTimeout(() => { btn.textContent = 'Add to basket'; btn.style.background = ''; }, 1200);
}

function removeFromBasket(id) {
  basket = basket.filter(i => i.id !== id);
  updateBasketCount();
  renderBasket();
}

function updateBasketCount() {
  const total = basket.reduce((s, i) => s + i.qty, 0);
  document.getElementById('basketCount').textContent = total;
}

function openBasket() {
  renderBasket();
  document.getElementById('basketOverlay').classList.add('open');
  document.getElementById('basketPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBasket() {
  document.getElementById('basketOverlay').classList.remove('open');
  document.getElementById('basketPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function renderBasket() {
  const container = document.getElementById('basketItems');
  const footer = document.getElementById('basketFooter');

  if (basket.length === 0) {
    container.innerHTML = '<p class="basket-empty">Your basket is empty.</p>';
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = basket.map(item => `
    <div class="basket-item">
      <div class="basket-item-info">
        <div class="basket-item-origin">${item.origin}</div>
        <div class="basket-item-name">${item.name}${item.qty > 1 ? ` ×${item.qty}` : ''}</div>
        <div class="basket-item-price">IDR ${(item.price * item.qty).toLocaleString('id-ID')}</div>
      </div>
      <button class="basket-item-remove" onclick="removeFromBasket('${item.id}')">✕</button>
    </div>
  `).join('');

  const total = basket.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('basketTotal').textContent = 'IDR ' + total.toLocaleString('id-ID');
  footer.style.display = 'block';
}

function checkoutWhatsApp() {
  const lines = basket.map(i => `• ${i.name} (${i.origin}) × ${i.qty} — IDR ${(i.price * i.qty).toLocaleString('id-ID')}`);
  const total = basket.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `Hello Yunic,\n\nI'd like to order:\n\n${lines.join('\n')}\n\nTotal: IDR ${total.toLocaleString('id-ID')}\n\nPlease confirm availability. Thank you!`;
  const url = `https://wa.me/62xxxxxxxxxx?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ── MOBILE MENU ──
function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn   = document.getElementById('hamburger');
  var open  = menu.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-hidden', !open);
}

function mobileNavClick(el) {
  var tabId = el.getAttribute('data-tab');
  if (tabId) openTab(tabId);
  // Close menu after tap
  var menu = document.getElementById('mobileMenu');
  var btn  = document.getElementById('hamburger');
  menu.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobileMenu');
  var btn  = document.getElementById('hamburger');
  if (menu && menu.classList.contains('open')) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  }
});

