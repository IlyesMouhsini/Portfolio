export function intersect(node, callback) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      callback(entry.isIntersecting);
    },
    {
      threshold: 0.3
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}