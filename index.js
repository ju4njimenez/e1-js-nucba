const ingredientes = ["harina", "aceite", "sal", "levadura", "queso", "oregano", "salsa", "agua", "aceitunas", "ajo"]
const pares = []
const impares = []

function recorrerArray(arr) {

    for (let index = 0; index < arr.length; index++) {

        console.log(arr[index])

    }
    return

}

function separarIngredientes(array) {

    for (var i = 0; i < array.length; i++) {
        if (array[i].length % 2 == 0) {
            pares.push(array[i])
        } else {
            impares.push(array[i])
        }
    }

    console.log('los ingrendientes pares son:')
    recorrerArray(pares)
    console.log('los ingrendientes impares son:')
    recorrerArray(impares)

    return
}
separarIngredientes(ingredientes)