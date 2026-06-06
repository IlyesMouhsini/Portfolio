// src/lib/scroll.ts

/**
 * Action Svelte pour détecter quand un élément devient visible à l'écran
 */
export function observeIntersection(node: HTMLElement, onVisible: () => void) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si l'élément entre dans le champ de vision (au moins 15%)
      if (entry.isIntersecting) {
        onVisible();
        // On arrête d'observer une fois visible pour que l'animation ne se joue qu'une fois
        observer.unobserve(node);
      }
    });
  }, {
    threshold: 0.15 // Déclenche l'action quand 15% de l'élément est visible
  });

  observer.observe(node);

  // Nettoyage automatique si le composant est détruit
  return {
    destroy() {
      observer.disconnect();
    }
  };
}