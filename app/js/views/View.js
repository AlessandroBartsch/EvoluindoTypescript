class View {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
    template(modelo) { throw new Error('Você deve implementar o metodo template.'); }
}
