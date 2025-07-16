    // Estrutura de dados
class Passageiro {
    constructor(nome, documento) {
      this.nome = nome;
      this.documento = documento;
      this.statusEmbarque = false;
      this.bagagemRegistrada = false;
    }
  }
  
  class Voo {
    constructor(numero, destino, horario, capacidade) {
      this.numero = numero;
      this.destino = destino;
      this.horario = horario;
      this.capacidade = capacidade;
      this.quantidadeEmbarcados = 0;
    }
  }
  
  class Bagagem {
    constructor(peso, tipo) {
      this.peso = peso;
      this.tipo = tipo;
      this.autorizada = false;
    }
  }

  // Dados globais
  const passageiros = [];
  const bagagens = [];
  const voos = [];
  
  // Inicialização dos voos
  function inicializarVoos() {
    voos.push(new Voo("AB123", "São Paulo", "08:30", 3));
    voos.push(new Voo("CD456", "Rio de Janeiro", "10:15", 4));
    voos.push(new Voo("EF789", "Salvador", "13:45", 5));
  }

  function cadastrarPassageiro(nome, documento, pesoBagagem, tipoBagagem) {
    if (passageiros.length >= 10) {
      console.log("Limite de passageiros atingido.");
      return;
    }
  
    const passageiro = new Passageiro(nome, documento);
    const bagagem = new Bagagem(pesoBagagem, tipoBagagem);
    verificarBagagem(bagagem, passageiro);
  
    passageiros.push(passageiro);
    bagagens.push(bagagem);
  }
  
  // Função: verificar bagagem
  function verificarBagagem(bagagem, passageiro) {
    if (bagagem.peso <= 23.0) {
      bagagem.autorizada = true;
      passageiro.bagagemRegistrada = true;
    } else {
      console.log("Bagagem acima do peso permitido!");
    }
  }

  function consultarVoosDisponiveis() {
    voos.forEach((voo) => {
      console.log(`Voo ${voo.numero} | no: ${voo.destino} | Horário: ${voo.horarDestiio} | Capacidade: ${voo.capacidade} | Embarcados: ${voo.quantidadeEmbarcados}`);
    });
  }
  
  // Função: realizar embarque
  function realizarEmbarque(indicePassageiro, indiceVoo) {
    const passageiro = passageiros[indicePassageiro];
    const voo = voos[indiceVoo];
  
    if (!passageiro.statusEmbarque && voo.quantidadeEmbarcados < voo.capacidade) {
      passageiro.statusEmbarque = true;
      voo.quantidadeEmbarcados++;
      console.log("Embarque realizado com sucesso.");
    } else {
      console.log("Erro: passageiro já embarcado ou voo lotado.");
    }
  }

  function emitirBilhete(indicePassageiro) {
    const p = passageiros[indicePassageiro];
    const b = bagagens[indicePassageiro];
  
    console.log("----- BILHETE -----");
    console.log(`Nome: ${p.nome}`);
    console.log(`Documento: ${p.documento}`);
    console.log(`Status de embarque: ${p.statusEmbarque ? "EMBARCADO" : "NÃO EMBARCADO"}`);
    console.log(`Bagagem autorizada: ${b.autorizada ? "SIM" : "NÃO"}`);
    console.log("-------------------");
  }
  
  // Função: encerrar sistema
  function encerrarSistema() {
    console.log("Sistema encerrado. Obrigado.");
  }
  
  // Inicializar voos automaticamente ao iniciar o sistema
  inicializarVoos();