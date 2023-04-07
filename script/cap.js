// Lista de jogadores
var players = ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5", "Jogador 6", "Jogador 7", "Jogador 8", "Jogador 9", "Jogador 10"];

// Função para sortear um jogador
function pickPlayer(players) {
  return players[Math.floor(Math.random() * players.length)];
}

// Sortear os capitães
let captain1 = pickPlayer(players);
players.splice(players.indexOf(captain1), 1);
let captain2 = pickPlayer(players);
players.splice(players.indexOf(captain2), 1);

// Sortear qual capitão escolherá primeiro
let coinFlip = Math.floor(Math.random() * 2);
let firstPick = (coinFlip === 0) ? captain1 : captain2;
let secondPick = (coinFlip === 0) ? captain2 : captain1;

// Divisão dos jogadores em times
let teamA = [];
let teamB = [];
let turn = firstPick;
for (let i = 0; i < players.length; i++) {
  if (turn === firstPick) {
    teamA.push(players[i]);
    turn = secondPick;
  } else {
    teamB.push(players[i]);
    turn = firstPick;
  }
}

// Exibir resultados
console.log("Capitão 1: " + captain1);
console.log("Capitão 2: " + captain2);
console.log("Time A: " + teamA.join(", "));
console.log("Time B: " + teamB.join(", "));