//https://static.platzi.com/media/public/uploads/ejercicios-arrays_8ed37b1e-46d5-4233-9232-3bd5835eaa50.pdf

function tournamentWinner(competitions,results){
    const scores = {}
    let winner = ''
    for(let i = 0; i < competitions.length; i ++){
        const[home, away] = competitions [i]
        const winningTeam = results [i] === 0 ? away : home
        scores[winningTeam] = (scores [winningTeam] || 0) + 3
        if( !winner || scores [winningTeam] > scores [winner]){
            winner = winningTeam}
    }
    return winner
}
const competitions = [['JavaScript','C#'],['C#','Python'],['Python','JavaScript']]
const results = [0,0,1]
console.log(tournamentWinner(competitions,results))


function torneo(competicion, resultados){
    const lenguajes = {
        JavaScript : 0,
        C : 0,
        Python : 0
    }
    for (let i = 0; i < competicion.length; i++) {
        const [local, visitante] = competicion[i] 
        const lenguajeGanador = resultados [i] === 0 ? visitante : local
        var len = lenguajeGanador[i]

    }
}