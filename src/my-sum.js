
class Sum extends HTMLElement {

  static get observedAttributes() {
    return ['a', 'b'];
  }

  constructor () {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    shadow.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    const a = Number(this.a);
    const b = Number(this.b);
    this.shadowRoot.querySelector('div').textContent = `${a} + ${b} = ${a + b}`;
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
} 

customElements.define('my-sum', Sum);
