// eslint-disable-next-line import/prefer-default-export
export const localStorage = {
  save: (name, value) => {
    console.log(name, value);

    window.localStorage.setItem(name, JSON.stringify(value));
  },
  get: name => {
    const localAuthUser = window.localStorage.getItem(name);
    if (typeof localAuthUser === 'string') {
      return localAuthUser;
    }
    return null;
  },
  remove: name => {
    window.localStorage.removeItem(name);
  },
  clear: () => {
    window.localStorage.clear();
  },
};
