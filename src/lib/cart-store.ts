import { useSyncExternalStore } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const STORAGE_KEY = "df-cart";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

let cart: CartItem[] = [];
let listeners: Set<() => void> = new Set();

if (typeof window !== "undefined") {
  cart = loadCart();
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function emit() {
  persist();
  listeners.forEach((l) => l());
}

export function addToCart(item: Omit<CartItem, "quantity">, qty = 1) {
  const existing = cart.find((c) => c.id === item.id);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart = [...cart, { ...item, quantity: qty }];
  }
  cart = [...cart.filter((c) => c !== existing), ...(existing ? [existing] : [])];
  // deduplicate keeping order
  const map = new Map<number, CartItem>();
  for (const c of cart) map.set(c.id, c);
  cart = Array.from(map.values());
  emit();
}

export function removeFromCart(id: number) {
  cart = cart.filter((c) => c.id !== id);
  emit();
}

export function updateQuantity(id: number, qty: number) {
  if (qty <= 0) return removeFromCart(id);
  cart = cart.map((c) => (c.id === id ? { ...c, quantity: qty } : c));
  emit();
}

export function clearCart() {
  cart = [];
  emit();
}

export function getCart() {
  return cart;
}

export function getCartCount() {
  return cart.reduce((sum, c) => sum + c.quantity, 0);
}

export function getCartTotal() {
  return cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return cart;
}

function getServerSnapshot(): CartItem[] {
  return [];
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    items,
    count: items.reduce((s, c) => s + c.quantity, 0),
    total: items.reduce((s, c) => s + c.price * c.quantity, 0),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}
