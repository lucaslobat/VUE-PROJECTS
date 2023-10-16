/* Library imports */
import { createApp } from "vue";
import { createStore } from "vuex";

/* Router import */
import router from "./router.js";

/* Componentes imports */
import App from "./App.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";

const app = createApp(App);
app.component("base-badge", BaseBadge);

/* Modules */
const authentication = {
  state: { isLoggedIn: false },
  getters: {
    isLoggedInGetter(state) {
      return state.isLoggedIn;
    },
  },
};

const products = {
  state: {
    products: [
      {
        id: "p1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
        title: "Book Collection",
        description:
          "A collection of must-read books. All-time classics included!",
        price: 99.99,
      },
      {
        id: "p2",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",
        title: "Mountain Tent",
        description: "A tent for the ambitious outdoor tourist.",
        price: 129.99,
      },
      {
        id: "p3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        title: "Food Box",
        description:
          "May be partially expired when it arrives but at least it is cheap!",
        price: 6.99,
      },
    ],
  },
  getters: {
    productsGetter(state) {
      return state.products;
    },
  },
};
const cart = {
  state: {
    cart: { items: [], total: 0, qty: 0 },
  },
  getters: {
    cartGetter(state) {
      return state.cart;
    },
    cartTotalGetter(state) {
      return state.cart.total.toFixed(2);
    },
    cartQuantityGetter(state) {
      return state.cart.qty;
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productsState = state.products;
      const cartState = state.cart;

      // Check if the added item already exists in the shopping cart.
      const identifiedProductIndex = cartState.items.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      //If the item exists, it will increase its quantity in the shopping cart when added again.
      if (identifiedProductIndex >= 0) {
        cartState.items[identifiedProductIndex].qty++;

        /*  If the item doesn't exist, it creates a new object, populates it with the received payload parameter, 
          add the quantity property and includes it on the cart items array */
      } else {
        const newItem = {
          ...payload,
          qty: 1,
        };
        cartState.items.push(newItem);
      }

      /* Finally, when adding a new product, the cart quantity property will increase
        and the product's price will be sumed to the cart's total  */
      cartState.qty++;
      cartState.total += payload.price;
    },
    removeProductFromCart(state, payload) {
      // Store the cart state
      const cartState = state.cart;

      /* Stores the INDEX of the cart state element 'id' that corresponds
       to the provided 'id' property in the payload. */
      const identifiedProductIndex = cartState.items.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      /* Stores the whole object base on the index */
      const productElement = cartState.items[identifiedProductIndex];

      /* Remove the identified element from
       the cart state based on it's index */
      cartState.items.splice(identifiedProductIndex, 1);

      /* Subtract the 'qty' property of the 'productElement' from the cart state */
      cartState.qty -= productElement.qty;

      /* Calcula the total amount of the product based on its 'qty' and 'price' properties and subtract it from the carts 'total' */
      cartState.total -= productElement.price * productElement.qty;
    },
  },
};

/* Store definition */
const store = createStore({
  modules: {
    authentication: authentication,
    products: products,
    cart: cart,
  },
});

app.use(store);
app.use(router);
app.mount("#app");
