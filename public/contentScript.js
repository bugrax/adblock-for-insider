/*global chrome*/
function nodeInsertedCallback(event) {
  const divs = document.getElementsByClassName("tp-backdrop tp-active");
  const divModal = document.getElementsByClassName("tp-modal");
  const addiv = document.getElementsByClassName("ad");
  const adLdiv = document.getElementsByClassName("l-ad");
  Array.from(adLdiv).forEach((element) => {
    element.remove();
  });
  Array.from(addiv).forEach((element) => {
    element.remove();
  });
  Array.from(divs).forEach((element) => {
    element.remove();
  });
  Array.from(divModal).forEach((element) => {
    element.remove();
  });
}
document.addEventListener("DOMNodeInserted", nodeInsertedCallback);
