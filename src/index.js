import './my-sum';

setInterval(() => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const e = document.querySelector('my-sum');
  e.a = a;
  e.b = b;
}, 2000);
