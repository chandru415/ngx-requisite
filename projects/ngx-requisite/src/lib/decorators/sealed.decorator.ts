export const Sealed = () => {
    return (constructor: Function) => {
      Object.seal(constructor);
      Object.seal(constructor.prototype);
    };
  };