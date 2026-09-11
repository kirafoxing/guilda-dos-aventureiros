'use strict'

const grade = document.querySelector('#grade-herois')

let herois = [{id: 1, nome: "Aldric", classe: "Guerreiro", nivel: 12, hp: 185},{id: 2, nome: "Lyra", classe: "Mago", nivel: 8, hp: 110},
{id: 3, nome: "Kael", classe: "Arqueiro", nivel: 15, hp: 140}]

const emojis = { Guerreiro: '⚔️', Mago: '🧙', Arqueiro: '🏹' };

const renderizarHerois = function(){
    if (herois.length === 0) {
        grade.innerHTML = `<p>Nenhum herói alistado</p>`
        return
    }
    const cards = herois.map((heroi) => {
        const emoji = emojis[heroi.classe] || '❓';
        return `<div class="card"> <h3>Nome: ${heroi.nome}</h3> Classe: ${emoji} ${heroi.classe} <br> Nível: ${heroi.nivel} <br> HP: ${heroi.hp}</div>`
    }).join('')
    
    grade.innerHTML = cards
    
}

renderizarHerois()