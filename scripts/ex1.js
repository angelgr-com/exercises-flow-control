const oddOrEven = () => {
    result(getMessage());
}

const getMessage = () => {
    const introducedNumber = document.getElementById('number').value;

    if (isNaN(introducedNumber)) {
        return(`${introducedNumber} no es un número`);
    } else {
        if (introducedNumber % 2 === 0) {
            return(`El número ${introducedNumber} es par`);
        }
        return(`El número ${introducedNumber} es impar`);
    }
}

const result = (message) => {
    document.getElementById('oddOrEven').innerHTML = message;
}