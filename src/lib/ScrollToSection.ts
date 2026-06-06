// src/lib/scroll.ts

/**
 * Aligne l'écran de manière fluide vers l'élément ayant l'ID spécifié
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`L'élément avec l'ID "${id}" n'a pas été trouvé dans le document.`);
  }
}