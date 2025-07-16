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