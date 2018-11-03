import './my-sum';

setInterval(() => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const e = document.querySelector('my-sum');
  e.setAttribute('a', a);
  e.setAttribute('b', b);
}, 2000);
