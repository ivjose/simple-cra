/* eslint-disable import/prefer-default-export */
export const loadDash = {
  get: (obj, path, defaultValue) => {
    return String.prototype.split
      .call(path, /[,[\].]+?/)
      .filter(Boolean)
      .reduce(
        (a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue),
        obj
      );
  },
};
