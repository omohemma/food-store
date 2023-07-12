import {createStore} from "vuex";
import {Product} from "../types/product.type.ts";
import {Category} from "../types/category.type.ts";
import {Cart} from "../types/cart.type.ts";
import {groupCartItems, removeItem} from "./_utils.ts";

import {CategoryImages} from "../data/categoryImages.ts"


export interface ProductState {
    categories: Category[],
    products: Product[],
    cartItems: Cart[]
}

export default createStore<ProductState>({
    state: {
        categories: [],
        products: [],
        cartItems: [],
    },
    mutations: {
        setCategories(state: ProductState, categories: Category[]): void {
            state.categories = categories;
        },
        setProducts(state: ProductState, products: Product[]): void {
            state.products = products;
        },
        addItem(state: ProductState, item: Cart) {
            state.cartItems = groupCartItems(state.cartItems, item)
        },
        removeItems(state: ProductState, itemId: number) {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== itemId
            )
        },
        decreaseQuantity(state: ProductState, item: Cart) {
            state.cartItems = removeItem(state.cartItems, item)
        }
    },
    actions: {
        async getProducts({commit}): Promise<Category[]> {
            const response = await fetch(`http://localhost:3000/dishes`);
            const data = await response.json();

            const categories: Array<string> = [...new Set(data.map((taxon: Product) => taxon.category))]

            const categoryImages = CategoryImages
            const categoryTypes: Category[] = categories.map((category: string): Category => {
                return {
                    "category": category,
                    "url": categoryImages[category][0],
                    "banner": categoryImages[category][1]
                }
            })

            const products: Product[] = data.map((product: Product, index: number) => {
                return {
                    "id": index + 1,
                    ...product
                }
            })

            commit('setCategories', categoryTypes)
            commit('setProducts', products)

            return data;
        },
        addItemToCart({commit}, payload: Cart) {
            commit("addItem", payload)
        },
        removeItemsFromCart({commit}, id: number) {
            commit("removeItems", id)
        },
        decreaseProductQuantityInCart({commit}, payload: Cart) {
            commit("decreaseQuantity", payload)
        },
    },
    getters: {
        categories(state: ProductState) {
            return state.categories;
        },
        getCategoryBySlug: (state: ProductState) => (slug: string) => {
            const category = [...state.categories].find((category: Category) => category.category === slug)
            return category
        },
        products(state: ProductState) {
            return state.products;
        },
        productsByCategory: (state: ProductState) => (category: string) => {
            const products: Product[] = [...state.products].filter((product: Product) => product.category === category)
            return products
        },
        cartItems(state: ProductState) {
            return state.cartItems
        },
        cartItemsCount(state: ProductState) {
            return state.cartItems.length
        },
        cartItemsTotal(state: ProductState) {
            const total: number = state.cartItems.reduce((sum: number, {
                price,
                quantity
            }: Cart) => sum += (price * quantity), 0)
            return Number(total)
        },
        deliveryFee(state: ProductState, getters) {
            const deliveryFee: number = 0.05 * getters.cartItemsTotal;
            return Number(deliveryFee)

        },
        cartItemQuantity: (state: ProductState) => (id: number) => {
            const cartItem: Cart = state.cartItems.find((cartItem) => cartItem.id === id)
            return cartItem?.quantity ?? 0;
        }

    },
})
;
