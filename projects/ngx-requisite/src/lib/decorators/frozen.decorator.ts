export const Frozen = () => {
  return (constructor: Function) => {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
  };
};