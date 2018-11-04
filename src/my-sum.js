
class Sum extends HTMLElement {

  static get observedAttributes() {
    return ['a', 'b'];
  }

  set a (value) {
    this.__a = Number(value);
    this.__refresh();
  }

  get a () {
    return this.__a;
  }

  set b (value) {
    this.__b = Number(value);
    this.__refresh();
  }

  get b () {
    return this.__b;
  }

  constructor () {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    shadow.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  connectedCallback() {
    console.log('Custom element added to page.');
  }

  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom element moved to new page.');
  }

  __refresh () {
    this.shadowRoot.querySelector('div').textContent = `${this.a} + ${this.b} = ${this.a + this.b}`;
  }
} 

customElements.define('my-sum', Sum);
