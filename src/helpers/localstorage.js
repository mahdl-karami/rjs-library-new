function setLocal(key, value) {
  localStorage.setItem(String(key), String(value));
}
function getLocal(key) {
  return localStorage.getItem(String(key));
}
export { setLocal, getLocal };
