const doc = (document.currentScript || document._currentScript).ownerDocument;

class Header extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var menu = doc.querySelector('#top-bar').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(menu, true);
		shadowRoot.appendChild(instance);
	}
}

window.customElements.define('top-bar', Header);