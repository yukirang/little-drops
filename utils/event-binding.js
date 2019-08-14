function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }
  elem.addEventListener(type, e => {
    let target;
    if (selector) {
      target = e.target;
      if (target.matches(selector)) {
        fn.call(target, e);
      }
    } else {
      fn(e);
    }
  });
}

//Example
const div1 = document.getElementById('div1');
bindEvent(div1, 'click', 'a', e => {
  console.log(this.innerHTML);
});
