const getGrade = () => {
    let grade = document.getElementById('grade').value;

    switch(true) {
        case grade === "":
            showMessage('Introduce una nota.');
            break;
        case grade < 5:
            showMessage('Insuficiente');
            break;
        case grade < 6:
            showMessage('Suficiente');
            break;
        case grade < 7:
            showMessage('Bien');
            break;
        case grade < 9:
            showMessage('Notable');
            break;
        case isNaN(grade) || grade > 10:
            showMessage('Introduce una nota del 0 al 10.');
            break;
        default:
            showMessage('Sobresaliente');
            break;
    }
}

const showMessage = (message) => {
    document.getElementById('showGrade').innerHTML = `<p>${message}</p>`;
}

let i, j, sum = 0;
for (i = 0, j = 10; i < 5; i++, j--) {
    sum += i * j;
    console.log("sum = " + sum + `; i = ${i}; j = ${j};\n`);
}
console.log("sum = " + sum);