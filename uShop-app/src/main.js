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

/* Store definition */
const store = createStore({
  /* State */
  state: {
    isLoggedIn: false,
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
    cart: { items: [], total: 0, qty: 0 },
  },

  /* Getters */
  getters: {
    productsGetter(state) {
      return state.products;
    },
  },

  /* Mutations */
  mutations: {
    addProductToCart(state, payload) {
      const productsState = state.products;
      const cartState = state.cart;

      // Check if the added item already exists in the shopping cart.
      const productInCartIndex = cartState.items.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      //If the item exists, when added again, it will increase its quantity in the shopping cart.
      if (productInCartIndex >= 0) {
        cartState.items[productInCartIndex].qty++;

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
  },
});

app.use(store);
app.use(router);
app.mount("#app");
