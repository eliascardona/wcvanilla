class ComponenteWeb extends HTMLElement {
	constructor() {
		super()
		let shadow = this.attachShadow({ mode: 'open' })
		this.strongEl = document.createElement('strong')
		shadow.appendChild(this.strongEl)
	}


	connectedCallback() {
		let wcUsername = this.getAttribute('wc-username')
		this.strongEl.innerHTML = `
			<div style="margin: 4rem 3rem; padding: 2rem; border-radius: 1em; box-shadow: rgba(100, 100, 100, 0.3) 0px 2px 4px 0px;">
				<span>hola</span>
					<strong>
						${wcUsername}
					</strong>
			</div>
		`
		this.strongEl.addEventListener('click', (e) => {
			console.log('click en custom element')
		})
	}  // end of 'connectedCallback()' method


}

customElements.define('componente-web', ComponenteWeb)
