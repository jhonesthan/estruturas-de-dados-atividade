// Gerar uma lista que seja a interseção das listas do item a, como em interseção de conjuntos.

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3];
const intersection = array1.filter(i => array2.includes(i));
console.log(intersection); // [2, 3] lista Intercessora