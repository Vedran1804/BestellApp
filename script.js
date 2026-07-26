function renderPage() {
  renderMenu();
  renderDrinks();
  renderDesert();
  renderBasket();
}

function renderMenu() {
  let container = document.getElementById("menuContainer");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < options[0].menu.length; i++) {
    container.innerHTML += HTML_menuRed(i);
  }
}

function renderDrinks() {
  let container = document.getElementById("drinksContainer");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < options[0].drinks.length; i++) {
    container.innerHTML += HTML_drinksRed(i);
  }
}

function renderDesert() {
  let container = document.getElementById("desertContainer");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < options[0].desert.length; i++) {
    container.innerHTML += HTML_desertRed(i);
  }
}

function renderBasket() {
  let target = document.getElementById("basketOptionsTarget");
  if (!target) return;
  target.innerHTML = "";
  if (basket.length === 0) {
    target.innerHTML = HTML_emptyBasket();
    return;
  }
  for (let i = 0; i < basket.length; i++) {
    target.innerHTML += HTML_korpaRed(i);
  }
}

function pushMenuIntoBasket(index) {
  let found = false;
  let selected = options[0].menu[index];
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name == selected.name) {
      basket[i].amount++;
      found = true;
    }
  }
  if (!found) {
    basket.push({ "name": selected.name, "price": selected.price, "amount": 1 });
  }
  renderBasket();
}

function pushDrinksIntoBasket(index) {
  let found = false;
  let selected = options[0].drinks[index];
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name == selected.name) {
      basket[i].amount++;
      found = true;
    }
  }
  if (!found) {
    basket.push({ "name": selected.name, "price": selected.price, "amount": 1 });
  }
  renderBasket();
}

function pushDesertIntoBasket(index) {
  let found = false;
  let selected = options[0].desert[index];
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name == selected.name) {
      basket[i].amount++;
      found = true;
    }
  }
  if (!found) {
    basket.push({ "name": selected.name, "price": selected.price, "amount": 1 });
  }
  renderBasket();
}

function addItemToBasket(index) {
  basket[index].amount++;
  renderBasket();
}

function substractItemFromBasket(index) {
  if (basket[index].amount > 1) {
    basket[index].amount--;
    renderBasket();
  } else {
    deleteFromBasket(index);
  }
}

function deleteFromBasket(index) {
  basket.splice(index, 1);
  calcTotalAmount();
  renderBasket();
}

function calcTotalAmount() {
  let totalRef = document.getElementById("totalAmount");
  let floatRef = document.getElementById("floatingTotal");
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].price * basket[i].amount;
  }
  let total = sum > 0 ? (sum + 5).toFixed(2) : "0.00";
  if (totalRef) totalRef.innerHTML = total + "€";
  if (floatRef) floatRef.innerHTML = total + "€";
}

function executeOrder() {
  if (basket.length === 0) return;

  basket = [];
  renderBasket(); 
  calcTotalAmount();

  let overlay = document.getElementById("orderOverlay");
  if (overlay) {
    overlay.style.display = "flex";
  }
}


function closeSuccessMessage() {
  let overlay = document.getElementById("orderOverlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}
function openBasket() {
  document.getElementById("basketAside").style.display = "block";
}

function closeBasket() {
  document.getElementById("basketAside").style.display = "none";
}