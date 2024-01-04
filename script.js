// Declaração da variável da IA
const ai = {
    // Nome da IA
    nome: "Mini IA", 
    // Idade da IA
    idade: 1,
    // Respostas da IA
    respostas: {
      "Olá!"(){
        return "Olá!! Em que posso lhe ajudar?";
      },

      "Qual é o seu nome?"() {
        return "Meu nome é MiezeIA. Sou um modelo de Inteligência Artificial treinado pela ARCADE. Ainda estou em desenvolvimento, mas aprendi a realizar alguns tipos de tarefas.";
      },

      "Qual é a sua idade?"() {
        return this.idade;
      },

      "Qual é a capital de Angola?"() {
        return "A capital de Angola é Luanda";
      },

      "Qual é a capital do Brasil?"() {
        return "A capital do Brasil é Brasília";
      },
      
      "Qual é o resultado de 2 + 2?"() {
        return 4;
      },

      "Qual é o nome da namorada do CEO da ARCADE?"(){
        return "Quanto ao nome da namorada do CEO da ARCADE eu gostaria tanto lhe dizer, mas não me é permetido.<br> Mas lhe garanto que o nome dela é tão lindo quanto a ela.";
      },

      "Repete o que disseste"(){
        return "Se eu te contar vais pensar que é  Mbiembiembié 😂😂";
      },

      "O que é a Química?"(){
        return "Química é uma área da ciência natural que trata principalmente das propriedades das substâncias, as mudanças que elas sofrem, e as leis naturais que descrevem estas mudanças.";
      }
    },
  };
  
  // Função para chamar uma resposta da IA
  function chamarResposta(pergunta) {
    // Encontra a resposta para a pergunta
    const resposta = ai.respostas[pergunta];
  
    // Se a resposta existir, retorna-a
    if (resposta) {
      return resposta();
    }
  
    // Se a resposta não existir, retorna um texto genérico
    return "Não sei responder a essa pergunta";
  }
  
  // Handler do evento click do botão
  document.querySelector("#enviar").addEventListener("click", () => {
    // Obtém a pergunta do campo de texto
    const pergunta = document.querySelector("#pergunta").value;
    
    // Verifica se o campo está vazio
    if (pergunta === "") {
      // Mostra uma mensagem de erro
      alert("O campo deve estar preenchido");
      return;
    }
  
    // Chama a função para chamar a resposta
    const resposta = chamarResposta(pergunta);
  
    // Adiciona a resposta ao elemento "respostas"
    document.querySelector("#respostas").innerHTML += `<li><p class="pergunta">${pergunta}</p> <p class="resposta"><svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" fill="none">
    <rect width="1080" height="1080" fill="white"/>
    <path d="M520.197 683.913L486.695 760.686C473.817 790.196 433.001 790.196 420.123 760.686L386.621 683.913C356.806 615.591 303.142 561.207 236.204 531.478L143.989 490.524C114.67 477.503 114.67 434.83 143.989 421.809L233.323 382.133C301.984 351.639 356.61 295.24 385.916 224.588L419.852 142.772C432.445 112.41 474.373 112.409 486.967 142.771L520.903 224.588C550.208 295.24 604.834 351.639 673.495 382.133L762.83 421.809C792.148 434.83 792.148 477.503 762.83 490.524L670.615 531.479C603.676 561.208 550.012 615.591 520.197 683.913Z" fill="#A8C7FA"/>
    <path d="M831.54 925.99L822.118 947.601C815.223 963.417 793.333 963.417 786.437 947.601L777.015 925.99C760.22 887.471 729.969 856.799 692.222 840.02L663.194 827.116C647.498 820.139 647.498 797.31 663.194 790.333L690.599 778.15C729.317 760.94 760.11 729.133 776.616 689.302L786.292 665.955C793.035 649.683 815.52 649.683 822.264 665.955L831.939 689.302C848.446 729.133 879.239 760.94 917.956 778.15L945.362 790.333C961.057 797.31 961.057 820.139 945.362 827.116L916.333 840.02C878.586 856.799 848.335 887.471 831.54 925.99Z" fill="#A8C7FA"/>
    </svg> ${resposta}</p></li>`;
  });
  
  // Mantém a pagina sempre no fim
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelector("body").style.top = -scrollY;
});