export const delayTime = (timeout, callback) => {
  setTimeout(() => {
    callback();
  }, timeout);
};
