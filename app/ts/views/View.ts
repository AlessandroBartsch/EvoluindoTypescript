class View <T> {

    private _elemento: Element;

    constructor (selector: string) {
        this._elemento = document.querySelector(selector);
    }

    update(modelo: T) {
        this._elemento.innerHTML = this.template(modelo);
    }

    template(modelo: T): string {throw new Error('Você deve implementar o metodo template.')}
}