class View {
    constructor(selector) {
        this._elemento = $(selector);
    }
    update(modelo) {
        this._elemento.html(this.template(modelo));
    }
}
