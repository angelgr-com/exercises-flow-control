const oddOrEvenEx2 = () => {
    resultEx2(getMessageEx2());
}

const getMessageEx2 = () => {
    const introducedNumberSwitch = document.getElementById('numberSwitch').value;

    switch (isNaN(introducedNumberSwitch)) {
        case true:
            return(`${introducedNumberSwitch} no es un número`);
            break;
        case false:
            return(oddOrEven2(introducedNumberSwitch));
            break;
    }
}

const oddOrEven2 = (introducedNumberSwitch) => {
    if (introducedNumberSwitch % 2 === 0) {
        return(`El número ${introducedNumberSwitch} es par`);
    }
    return(`El número ${introducedNumberSwitch} es impar`);
}

const resultEx2 = (message) => {
    document.getElementById('oddOrEvenSwitch').innerHTML = message;
}