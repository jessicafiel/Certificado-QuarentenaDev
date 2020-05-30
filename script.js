function gerar(){
  contador = 1000000
  while(contador>0){
    contador = contador - 1
    htmldocertificado = emitirCertificado(inputNome.value)
  }
  
  listalink = [
    "https://codepen.io/Luana-2810/pen/JjdVPKr",
    "https://codepen.io/Luana-2810/pen/BaNeVJM",
    "https://codepen.io/Luana-2810/pen/mdJgaNx",
    "https://codepen.io/Luana-2810/pen/mdebEqG",
    "https://codepen.io/Luana-2810/pen/gOpVxKM",
    "https://codepen.io/Luana-2810/pen/mdebrQe",
    "https://codepen.io/Luana-2810/pen/xxwKRvO",
    "https://codepen.io/Luana-2810/pen/PoPoNaj",
    "https://codepen.io/Luana-2810/pen/PoPwJKN",
    "https://codepen.io/Luana-2810/pen/OJyVLPJ",
  ]
  
  titulo=[
    "Cálculo do gasto de gasolina",
    "Ultra Ball",
    "Cálculo do preço da corrida",
    "Meses",
    "Ficha" ,
    "Cálculo de IMC",
    "Sorteio de corrida",
    "Botão do like",
    "Contagem",
    "App do preço da corrida",
  ]
  
  contalink = 0
  
  listalinkcomhtml = ""
    
  while(contalink < 10){
    link = listalink[contalink]
   listalinkcomhtml = listalinkcomhtml + `<li>${titulo[contalink]}:<br><a target="_blank" href="${link}">${link.replace("https://",'')}</a></li>` 
    
    contalink = contalink + 1
  }
  
  document.body.innerHTML = 
    `${htmldocertificado}
    <ol>
      ${listalinkcomhtml}
    </ol> 
  `
 print()
}