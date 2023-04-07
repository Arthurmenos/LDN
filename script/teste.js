// Adicionar jogadores

let players = [];
var n = 0

while (n < 11) {
    let addPlayer = prompt("Digite o nome do jogador");
    players.push(addPlayer);
    n++
    if (n >= 11) {
        break; 
    }
}

alert(players)

// Função para sortear um jogador
function pickPlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
  }
  
  // Sortear os capitães
  var captain1 = pickPlayer(players);
  players.splice(players.indexOf(captain1), 1);
  var captain2 = pickPlayer(players);
  players.splice(players.indexOf(captain2), 1);

// Divisão dos jogadores em times
var teamA = [];
var teamB = [];
var turn = firstPick;
    for (var i = 0; i < players.length; i++) {
    if (turn === firstPick) {
        teamA.push(players[i]);
        turn = secondPick;
    } else {
        teamB.push(players[i]);
        turn = firstPick;
    }
}

// Exibir resultados
alert("Capitão 1: " + captain1);
alert("Capitão 2: " + captain2);
alert("Time A: " + teamA.join(", "));
alert("Time B: " + teamB.join(", "));