abstract class View <T> {

    private _elemento: JQuery;

    constructor (selector: string) {
        this._elemento = $(selector);
    }

    //comentando o codigo para testar
    update(modelo: T) {
        this._elemento.html(this.template(modelo));
    }

    abstract template(modelo: T): string;
}