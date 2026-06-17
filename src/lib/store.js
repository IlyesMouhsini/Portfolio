import { writable } from 'svelte/store';

// On crée une variable globale qui démarre à "false"
export const isAppReady = writable(false);