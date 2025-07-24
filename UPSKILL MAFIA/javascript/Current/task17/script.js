const services = [
  {
    id: 1,
    name: "Dry Cleaning",
    price: 200,
    img: "https://plus.unsplash.com/premium_photo-1682129249054-b0aeef5ae1fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Leather & Suede Cleaning",
    price: 999,
    img: "https://media.istockphoto.com/id/1372101796/photo/man-cleaning-leather-car-seat-with-microfiber-cloth.jpg?s=1024x1024&w=is&k=20&c=14okOEyElB-6uOzcoE1jZGbb043Z13M54PPR0Ox-ekQ="
  },
  {
    id: 3,
    name: "Wedding Dress Cleaning",
    price: 2400,
    img: "https://images.unsplash.com/photo-1651935655249-35abb4eb51c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGRyZXNzJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "Stain Removal",
    price: 500,
    img: "https://media.istockphoto.com/id/1319060612/photo/disappointed-woman-holding-stained-clothes.webp?a=1&b=1&s=612x612&w=0&k=20&c=H-7lD3Lblyl2vg6WBhnfS1au2k0LoTq3N-k7l_ggwm0="
  },
  {
    id: 5,
    name: "Ironing",
    price: 30,
    img: "https://plus.unsplash.com/premium_photo-1683134123155-20499f471baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXJvbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    name: "Wash and Fold",
    price: 140,
    img: "https://media.istockphoto.com/id/1286024201/photo/stacked-and-ready-to-be-packed.webp?a=1&b=1&s=612x612&w=0&k=20&c=t_C9QR-aF7hGnOwAktgQCBWiwuIBaHa5CdaF_cmTv7k="
  }
];

const servicesListEl = document.getElementById("services-list");
const addedItemsBody = document.getElementById("added-items-body");
const totalAmountEl = document.getElementById("total-amount");
const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

let cartItems = [];
let currentServiceIndex = 0;

// Render only the current service card
function renderCurrentService() {
  servicesListEl.innerHTML = "";

  if (currentServiceIndex >= services.length) {
    servicesListEl.innerHTML = `<p style="text-align:center; font-style: italic; color:#777;">No more services to browse.</p>`;
    return;
  }

  const service = services[currentServiceIndex];
  const inCart = cartItems.some(item => item.id === service.id);

  const serviceCard = document.createElement("div");
  serviceCard.classList.add("service-card");

  serviceCard.innerHTML = `
    <img src="${service.img}" alt="${service.name}" />
    <div class="service-info">
      <h4>${service.name}</h4>
      <span class="price">₹${service.price}.00</span>
    </div>
    <div class="service-actions">
      <button class="skip-btn">Skip Item</button>
      <button class="add-btn" ${inCart ? "disabled" : ""}>Add Item</button>
    </div>
  `;

  // Skip button moves to next service
  const skipBtn = serviceCard.querySelector(".skip-btn");
  skipBtn.addEventListener("click", () => {
    currentServiceIndex++;
    renderCurrentService();
  });

  // Add button adds to cart and moves to next service
  const addBtn = serviceCard.querySelector(".add-btn");
  addBtn.addEventListener("click", () => {
    if (!inCart) {
      addItemToCart(service);
    }
    currentServiceIndex++;
    renderCurrentService();
  });

  servicesListEl.appendChild(serviceCard);
}

function addItemToCart(service) {
  cartItems.push(service);
  updateAddedItems();
}

function updateAddedItems() {
  addedItemsBody.innerHTML = "";

  if (cartItems.length === 0) {
    addedItemsBody.innerHTML = `
      <tr class="no-items-row">
        <td colspan="3" class="no-items-text">
          No Items Added<br />
          <small>Add items to the cart from the services bar</small>
        </td>
      </tr>
    `;
    totalAmountEl.textContent = "₹0";
    return;
  }

  cartItems.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${item.name}</td>
      <td>₹${item.price}.00</td>
    `;
    addedItemsBody.appendChild(tr);
  });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  totalAmountEl.textContent = `₹${total}`;
}

bookingForm.addEventListener("submit", e => {
  e.preventDefault();

  if (cartItems.length === 0) {
    bookingMessage.style.color = "red";
    bookingMessage.textContent = "Please add items to cart before booking.";
    return;
  }

  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!fullName || !email || !phone) {
    bookingMessage.style.color = "red";
    bookingMessage.textContent = "Please fill out all the fields.";
    return;
  }

  bookingMessage.style.color = "green";
  bookingMessage.textContent = `Thank you for booking, ${fullName}! We will get back to you soon.`;

  bookingForm.reset();
  cartItems = [];
  updateAddedItems();

  // Reset browsing index so user can start again
  currentServiceIndex = 0;
  renderCurrentService();
});

// Initial render
renderCurrentService();
updateAddedItems();
