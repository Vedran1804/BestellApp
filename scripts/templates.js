function HTML_menuRed(index) {
  let item = options[0].menu[index];
  return `
    <div class="menu-item-row">
      <div class="dish-details">
        <img src="${item.img}" class="food-logo">
        <div class="dish">
          <span class="dish-title">${item.name}</span>
          <small>${item.description}</small>
        </div>
      </div>
      <div class="price">
        <div class="dish-price">${item.price.toFixed(2)}€</div>
        <button class="btn-add-plus" onclick="pushMenuIntoBasket(${index}); calcTotalAmount();">+</button>
      </div>
    </div>`;
}

function HTML_drinksRed(index) {
  let item = options[0].drinks[index];
  return `
    <div class="menu-item-row">
      <div class="dish-details">
        <img src="${item.img}" class="food-logo">
        <div class="dish">
          <span class="dish-title">${item.name}</span>
        </div>
      </div>
      <div class="price">
        <div class="dish-price">${item.price.toFixed(2)}€</div>
        <button class="btn-add-plus" onclick="pushDrinksIntoBasket(${index}); calcTotalAmount();">+</button>
      </div>
    </div>`;
}

function HTML_desertRed(index) {
  let item = options[0].desert[index];
  return `
    <div class="menu-item-row">
      <div class="dish-details">
        <img src="${item.img}" class="food-logo">
        <div class="dish">
          <span class="dish-title">${item.name}</span>
        </div>
      </div>
      <div class="price">
        <div class="dish-price">${item.price.toFixed(2)}€</div>
        <button class="btn-add-plus" onclick="pushDesertIntoBasket(${index}); calcTotalAmount();">+</button>
      </div>
    </div>`;
}

function HTML_korpaRed(index) {
  let item = basket[index];
  let itemPrice = item.price * item.amount;
  return `
    <div class="basket-item-row">
      <div class="basket-info">
        <span class="dish-title">${item.name}</span><br>
        <small>x${item.amount}</small>
      </div>
      <div class="basket-price">${itemPrice.toFixed(2)}€</div>
      <div class="basket-actions">
        <button class="action-btn" onclick="addItemToBasket(${index}); calcTotalAmount();">+</button>
        <button class="action-btn" onclick="substractItemFromBasket(${index}); calcTotalAmount();">-</button>
        <button class="action-btn delete-btn" onclick="deleteFromBasket(${index})">x</button>
      </div>
    </div>`;
}
function HTML_emptyBasket() {
  return `<div class="empty-basket-text">Warenkorb ist leer</div>`;
}