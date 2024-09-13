// Arrays, objetos 

let participante = ["Michel", "alo"]
let meta = {
  objetivo: "Ler um livro todo mês",
  checked: false
}

let metas = [
  meta,
  {
    objetivo: "Caminhar 20 minutos todos os dias",
    checked:true
  }
]


// checarDesafio(false)
console.log(metas[1].objetivo)


// function checarDesafio(){
//   if (meta.checked == false) {
//     console.log(`Olá ${participante[0]}. Sua Meta: ${meta.objetivo} (Que pena! Meta não atingida)`)
//   }else{
//     console.log(`Olá ${participante[0]}. Sua Meta: ${meta.objetivo} (Parabéns! Meta atingida)`)
//   }
// } 

// checarDesafio()

