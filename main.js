const result = document.querySelectorAll('.result')[0];
const resultIndices = document.querySelectorAll('.result')[1];
let array = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
];

//С помощью функции findIndex
let index = array.findIndex(item => item.length > 3);
result.innerHTML = `Первый индекс, который проходит условие: ${index}`;

//С помощью цикла, если индексов больше одного и нужно найти все
let indices = [];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.length < 4)
        {continue;}
    indices.push(i);
    console.log(indices);
}

resultIndices.innerHTML = `Индексы элементов массива: ${indices}`;