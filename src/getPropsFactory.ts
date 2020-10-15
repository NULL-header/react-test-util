export const getPropsFactory = <T extends Record<any, any>>(arg: T) => {
  return () => arg;
};
