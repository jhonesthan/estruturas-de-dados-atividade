// Imprimir as listas geradas nos itens c e d, usando a função listar (ou percorrer).

const array1 = [10, 34, 5]
const array2 = [4, 7, 9]
const array3 = [1, 2, 3, 4, 5];
const array4 = [2, 3];
const newArray = [...array1, ...array2]

const intersection = array3.filter(i => array4.includes(i));
console.log(intersection, newArray); 