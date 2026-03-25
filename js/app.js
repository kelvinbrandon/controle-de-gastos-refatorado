import { Categoria, listaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

const gastosPorCategoria = new listaGastosPorCategoria(
    new Categoria('alimentacao'),
    new Categoria('transporte'),
    new Categoria('lazer'),
    new Categoria('outros'),

);

//manipulacao do DOM
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const valorInformado = parseFloat(formulario.elements.valor.value);

    const categoriaInformada = formulario.elements.categoria.value;

    if (valorNegativo(valorInformado)) {
        alert('Valor não pode ser negativo');
        return;
    }

    const categoria = gastosPorCategoria.obterCategoria(categoriaInformada);

    console.log(categoriaInformada);
    console.log(categoria);

    categoria.adicionarValor(valorInformado);



    atualizarInterface(gastosPorCategoria);
    formulario.reset();
});






