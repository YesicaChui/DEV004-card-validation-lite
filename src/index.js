function validate() {
  const divResult = document.getElementById("result")
  const valid = isValid(document.getElementById("cardnumber").value)
  if (valid) {
    divResult.innerHTML = `<p>La Tarjeta es Valida</p>`
    //muestra correcto en div result// Show success in div#result
  }
  else {
    divResult.innerHTML = `<p>La Tarjeta es Invalida</p>`
    //muestra mensaje de error en div result // Show error message in div#result
  }
}

function sumaCifras(entrada) {//"12"
  let res = 0;
  for(elemento of entrada){//primera vuelta el elemento "1"
    res=res+Number(elemento) 
  } 
  return res;
}

function isValid(creditCardNumber) {

  let validador = true //variable validadora
  if (creditCardNumber == "") {//es incorrecto si esta vacio
    validador = false
    return validador
  } 

  //algoritmo de Luhn

  //paso1 inversion
  const arregloInvertido = [...creditCardNumber].reverse()
  console.log(arregloInvertido)
  let arregloInvertidoNumero = []
  for (elemento of arregloInvertido) {
    arregloInvertidoNumero.push(Number(elemento))
  }
  console.log(arregloInvertidoNumero)

  //paso2 multiplicar por dos los que son de posicion par
  for (let i = 0; i < arregloInvertidoNumero.length; i++) {
    if ((i + 1) % 2 == 0) {
      arregloInvertidoNumero[i] = arregloInvertidoNumero[i] * 2
      //paso3 suma de digitos si son mayores que 10
      if(arregloInvertidoNumero[i]>=10){
         arregloInvertidoNumero[i] = sumaCifras(arregloInvertidoNumero[i].toString())
      }
    }
  }
  console.log(arregloInvertidoNumero)
  // paso5: sumar todas los elementos elementos del arreglo y verificar que sea multiplo de 10
  let acumulador = 0
  for(element of arregloInvertidoNumero){
    acumulador=acumulador+element
  }
  console.log(acumulador)
  if(acumulador%10!=0){
    validador = false
  }
  //es creditcardnumber valido? // is creditCardNumber valid?
  return validador
}

const input = document.getElementById('cardnumber');
//restringiendo que se acepte un numero de caracteres
input.addEventListener('input', function () {
  if (this.value.length > 16)
    this.value = this.value.slice(0, 16);
})

