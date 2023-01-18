function validate() {
  const divResult = document.getElementById("result")
  const valid = isValid(document.getElementById("cardnumber").value)
  if (valid) {
    divResult.innerHTML = `<p>La Tarjeta es Valida</p>`
  }
  else {
    divResult.innerHTML = `<p>La Tarjeta es Invalida</p>`
  }
}
function isValid(creditCardNumber) {
  let validador = false //variable validadora
  if (creditCardNumber == "") return validador //si esta vacio es incorrecto
  //algoritmo de Luhn
  //paso1 inversion
  const arregloInvertido = [...creditCardNumber].reverse()
  console.log(arregloInvertido) //arreglo con string
  let arregloInvertidoNumero = []
  for (elemento of arregloInvertido) {
    arregloInvertidoNumero.push(Number(elemento))
  }
  console.log(arregloInvertidoNumero)
  //paso2 buscamos los de POSICION PAR y los multiplicamos x2
  for (let i = 0; i < arregloInvertidoNumero.length; i++) {
    if ((i + 1) % 2 == 0) {
      arregloInvertidoNumero[i] = arregloInvertidoNumero[i] * 2
      //paso3 suma de digitos si son mayores iguales que 10
      if (arregloInvertidoNumero[i] >= 10) {//10,12,14,16,18
        let numeroCadena = arregloInvertidoNumero[i].toString() //"16"
        arregloInvertidoNumero[i] = Number(numeroCadena[0]) + Number(numeroCadena[1])
      }
    }
  }
  console.log(arregloInvertidoNumero)
  // paso4: sumar todas los elementos del arreglo y verificar que sea multiplo de 10
  let acumulador = 0
  for (element of arregloInvertidoNumero) {
    acumulador = acumulador + element
  }
  console.log(acumulador)
  if (acumulador % 10 == 0) {
    validador = true // es valido si es multiplo de 10
  }
  return validador
}
//restringiendo como maximo 16 caracteres
function maximaLongitud() {
  const inputCard = document.getElementById('cardnumber');
  if (inputCard.value.length > 16) {
    inputCard.value = inputCard.value.slice(0, 16);
  }
}