export class Categoria {
    // encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome) {
        this.#nome = nome;
        this.#valor = 0;
    }
    // uso dos getters
    get valor(){
        return this.#valor;
    }
    get nome(){
        return this.#nome;
    }
    //manipulacao do estado 
    adicionarValor(valor){
        this.#valor += parseFloat(valor);

    }

}



export class listaGastosPorCategoria {
    #categorias
    //rest Operator
    constructor(...categorias) {
        this.#categorias = categorias;
    }
    get categorias(){
        return this.#categorias;
    }
    obterCategoria(nome){
        return this.#categorias.find(categoria => categoria.nome == nome);
    }
    obterTotal(){
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }
}
