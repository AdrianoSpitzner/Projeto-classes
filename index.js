class nomeHeroi{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    identidade(){
        console.log(`O Monge ${this.nome} de ${this.idade} de idade é o mais novo de todos`)

    }
}

class heroiHabilidade{
    constructor(heroi, ataque){
        this.heroi = heroi
        this.ataque = ataque 
    }

    mensagem(){
        console.log(`O ${this.heroi} Atacou usando ${this.ataque}`)
    }

}
let quemSouEu = new nomeHeroi("Nano", 12)
let ataqueDoHeroi = new heroiHabilidade("Monge", "Artes Marciais")
quemSouEu.identidade()
ataqueDoHeroi.mensagem()
