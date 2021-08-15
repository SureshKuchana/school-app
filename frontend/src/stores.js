// Svelte has a concept of Store, which are objects that hold states that can be any Svelte Component.
// Stores are a state management tool similar to REDUX in React and Vuex in VUE.
import { writable } from 'svelte/store'

export const user = writable()
