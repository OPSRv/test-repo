var l = Object.defineProperty;
var a = (n, t, r) =>
  t in n
    ? l(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (n[t] = r);
var c = (n, t, r) => (a(n, typeof t != "symbol" ? t + "" : t, r), r);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = r(e);
    fetch(e.href, o);
  }
})();
const d = "/assets/javascript-8dac5379.svg";
class u {
  constructor(t = 1, r) {
    c(this, "g");
    (this.count = t), (this.element = r);
  }
  counter() {
    this.element.addEventListener("click", () => {
      (this.count += 1), this.render();
    });
  }
  render() {
    (document.querySelector("#app").innerHTML = `
  <div>

    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">${this.count}</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`),
      (this.element = document.querySelector("#counter")),
      this.counter();
  }
}
const f = new u();
f.render();
console.log(window.location);
