const getMousePos = (e) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

const lerp = (a, b, n) => (1 - n) * a + n * b;

export { lerp, getMousePos };
