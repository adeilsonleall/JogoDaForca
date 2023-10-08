/* Busca Elementos do DOM */
const lb_dica=document.getElementById("lb_dica");
const lb_pv_oculta=document.getElementById("lb_pv_oculta");
const botoes=[...document.getElementsByClassName("btn")];
const lb_chances=document.getElementById("lb_chances")
const img_boneco=document.getElementById("boneco")

/* Variáveis: */
let pv_escolhida="";
let pv_oculta="";
let letra_digitada;
let descobrindo_pv="";
let chances=6;
let correspondecia=false;
let acertos=0;

/* Biblioteca de palavras:*/
const frutas=["MANGA","BANANA","LARANJA","JABUTICABA","UVA","KIWI","PERA","ABACATE"];
const times=["CORINTHIANS","SANTOS","FLUMINENSE","BOTAFOGO","PALMEIRAS","FLAMENGO","INTERNACIONAL"];
const animais=["CACHORRO","GATO","RATO","COELHO","CAVALO","GALINHA","JUMENTO","PAPAGAIO","URUBU","TATU","SAPO"];
const objeto=["COPO","CADERNO","LIVRO","CANETA","PRATO"];
const palavras=[frutas,times,animais,objeto];
const dica = ["FRUTA","TIME","ANIMAL","OBJETO"];
let ale1, ale2;

/* Código para realizar a escolha aleatória de uma dica e palavra:*/
aleatorio1=Math.floor(Math.random()*palavras.length);
aleatorio2=Math.floor(Math.random()*palavras[aleatorio1].length);
pv_escolhida=palavras[aleatorio1][aleatorio2];

console.log(pv_escolhida)

/* Atualiza chances: */
lb_chances.innerHTML=chances;

/* Atualiza dica:*/
lb_dica.innerHTML=dica[aleatorio1];

/* Código para preencher a palavra oculta com asteriscos com a mesma quantidade de letras da palavra escolhida: */
pv_oculta="*".repeat(pv_escolhida.length);

/* Atualiza palavra oculta: */
lb_pv_oculta.innerHTML=pv_oculta;

/* Pega letra digitada e verifica se a palavra escolhida possui essa letra:*/
  botoes.map((btn)=>{ // Mapea botões.
    btn.addEventListener("click",()=>{ // Monitora botão clicado.
      letra_digitada=btn.innerHTML // Armazena letra capturada pelo evento de click.

      descobrindo_pv=''; // Limpa variável para capturar nova(s) letra(s). 
      correspondecia=false; // Reseta variável de correspondência (Usada para verificar correspondência entre letra capturada e palavra).

      if(acertos<pv_escolhida.length && chances>0){ // Só permite a execução da rotina principal se houver letras para serem descobertas e se ainda restar chances.

        for(let i=0; i<pv_escolhida.length; i++){ // Repete rotina enquanto houver letras para serem comparadas.

          if(pv_escolhida[i]==letra_digitada){ // Verifica se a palavra escolhida possuí igualdade com a nova letra capturada.
            descobrindo_pv+=letra_digitada; // Quando verdadeiro, adiciona a letra encontrada à variável.         
            correspondecia=true; // Ao encontrar ao menos uma letra já é possível afirmar que há uma corespondencia entre letra e palavra.
            acertos++; // Incrementa variável acertos.
          }else{
            descobrindo_pv+=pv_oculta[i]; // Condição falsa, adiciona asteriscos ou letras previamente salvas na variável pv_oculta.
          }
        }
  
        if(correspondecia==false){ // Se a etra digitada não encontrou uma correspondência com a palavra escolhida está rotina é execultada.
          chances--; // Decrementa chances.
          lb_chances.innerHTML=chances; // Atualiza chances restantes.
          btn.setAttribute("style","background-color: rgb(255, 148, 115);"); // Muda a cor de fundo do botão para indicar que entre letra e palavra não há correspondecia.
          btn.setAttribute('disabled', 'disabled');
          switch(chances){ // Atualiza imagem a cada erro.
            case 5: img_boneco.setAttribute("src","img/img1.png"); break;  
            case 4: img_boneco.setAttribute("src","img/img2.png"); break;
            case 3: img_boneco.setAttribute("src","img/img3.png"); break;
            case 2: img_boneco.setAttribute("src","img/img4.png"); break;
            case 1: img_boneco.setAttribute("src","img/img5.png"); break;
            case 0: img_boneco.setAttribute("src","img/img6.png"); // Quando as chances se esgotarem além de trocar a imagem a palavra será mostrada.
                    lb_pv_oculta.setAttribute("style","color: red; font-size: 22pt");  // A cor do texto é trocada para vermelho indicando que o usuário esgotou suas chances e perdeu a rodada. 
                    lb_pv_oculta.innerHTML=pv_escolhida; break; // Mostra a palavra.
          }
        }else{  // Quando huver coorenpondencia entre a letra e a palavra, está rotina é execultada.        
          btn.setAttribute("style","background-color: rgb(92, 252, 145);") // Mudar a cor de fundo do botão para verde sinalizando o acerto.
          btn.setAttribute('disabled', 'disabled');
          pv_oculta=descobrindo_pv; // Atualiza variável com letra(s) encontrada(s).
          lb_pv_oculta.innerHTML=pv_oculta; // Atualiza display.
          if(acertos==pv_escolhida.length) lb_pv_oculta.setAttribute("style","color: green; font-size: 22pt");
        }
      } 
    })   
  })
  
  
