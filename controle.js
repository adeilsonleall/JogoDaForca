/* Busca Elementos do DOM */
const lb_dica=document.getElementById("lb_dica");
const lb_pv_oculta=document.getElementById("lb_pv_oculta");
const botoes=[...document.getElementsByClassName("btn")];

/* Variáveis: */
let pv_escolhida="";
let pv_oculta="";
let letra_digitada;
let descobrindo_pv="";
let chances=6;

/* Biblioteca de palavras:*/
const frutas=["MANGA","BANANA","LARANJA"];
const times=["CORINTHIAS","SANTOS","FLUMINENSE"];
const animais=["CACHORRO","GATO","RATO"];
const palavras=[frutas,times,animais];
const dica = ["FRUTA","TIME","ANIMAL"]
let ale1, ale2;

/* Código para realizar a escolha aleatória de uma dica e palavra:*/
aleatorio1=Math.floor(Math.random()*palavras.length);
aleatorio2=Math.floor(Math.random()*palavras[aleatorio1].length);
pv_escolhida=palavras[aleatorio1][aleatorio2];

/* Atualiza dica:*/
lb_dica.innerHTML=dica[aleatorio1];

/* Código para preencher a palavra oculta com asteriscos com a mesma quantidade de letras da palavra escolhida: */
pv_oculta="*".repeat(pv_escolhida.length);

/* Atualiza display: */
lb_pv_oculta.innerHTML = pv_oculta;

console.log(pv_escolhida);

/* Pega letra digitada e verifica se a palavra escolhida possui essa letra:*/
  botoes.map((btn)=>{ // Mapea botões.
    btn.addEventListener("click",()=>{ // Monitora botão precionado.
      letra_digitada=btn.innerHTML // Armazena letra capturada.

      descobrindo_pv=''; // Limpa variável para capturar nova(s) letra(s). 

      for(let i=0; i<pv_escolhida.length; i++){ // Repete rotina enquanto houver letras para serem comparadas.

        if(pv_escolhida[i]==letra_digitada){ // Verifica se a palavra escolhida possuí igualdade com a nova letra capturada.
          descobrindo_pv+=letra_digitada; // Quando verdadeiro, adiciona a letra encontrada à variável em questão.         
        }else{
          descobrindo_pv+=pv_oculta[i]; // Condição falsa, adiciona asteriscos ou letras previamente salvas na variável pv_oculta.
        }
      }

      pv_oculta=descobrindo_pv; // Atualiza variável com letra(s) encontrada(s),

      lb_pv_oculta.innerHTML = pv_oculta; // Atualiza display.
    })   
  })
  
  
