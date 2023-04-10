let players = []
const iniciar = () => {
  // Array de nomes dos jogadores
  let nomesJogadores = [];
  // Loop para exibir as caixas de diálogo e armazenar os nomes inseridos pelo usuário
  for (let i = 1; i <= 10; i++) {
    let nome = prompt('Digite o nome do jogador ' + i);
    nomesJogadores.push(nome || 'Jogador ' + i);
  }

  // Seleciona todos os elementos com a classe "player"
  let players = document.querySelectorAll('.player');

  // Loop para atualizar o texto de cada jogador com o nome correspondente
  for (let i = 0; i < players.length; i++) {
    players[i].textContent = nomesJogadores[i];
  }

  // Mostra os botões
  document.querySelector('button#start-button').style.display = 'none'
  document.querySelector('button#allpick').style.display = 'block'
  document.querySelector('button#random').style.display = 'block'
  document.querySelector('button#restart').style.display = 'block'
}

const restart = () => {
  // Redefine o texto de cada jogador para o valor padrão
  for (let i = 0; i < players.length; i++) {
    players[i].textContent = 'Jogador ' + (i + 1);
  }

  // Oculta os botões RANDOM e ALLPICK
  document.querySelector('button#start-button').style.display = 'block'
  document.querySelector('button#allpick').style.display = 'none';
  document.querySelector('button#random').style.display = 'none';
  document.querySelector('button#restart').style.display = 'none';

  iniciar();
}

const random = () => {
  // seleciona um jogador aleatório do array de jogadores
  let players = document.querySelectorAll('.player');
  var player1 = players[Math.floor(Math.random() * players.length)];
  var player2 = players[Math.floor(Math.random() * players.length)];

  // Garante que player1 e player2 sejam jogadores diferentes
  while (player2 === player1) {
    player2 = players[Math.floor(Math.random() * players.length)];
  }

  // Mostra ao usuario quem foram os sorteados
  let a = player1.textContent
  let b = player2.textContent
  document.querySelector('p#infop').innerHTML = `<strong>${a}</strong> e <strong>${b}</strong>`
  document.querySelector('div#popupf').style.display = 'block';
  return {player1, player2}
}

const picksrandom = () => {
 
  document.querySelector('div#popupf').style.display = 'none';
  let players = document.querySelectorAll('.player');

  // faz uma cópia do array de jogadores para evitar repetições
  let playersCopy = Array.from(players);
  console.log('ARRAY CRAIADA')
  // remove os jogadores sorteados da cópia
  let index1 = playersCopy.indexOf(player1);
  playersCopy.splice(index1, 1);

  let index2 = playersCopy.indexOf(player2);
  playersCopy.splice(index2, 1);
  console.log('REMOVE JOGADORES')
  // adiciona o jogador 1 no time 1
  let team1 = document.getElementById('team1');
  const selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(player1)

  // adiciona o jogador 2 no time 2
  let team2 = document.getElementById('team2');
  const selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(player2)
  console.log('ADICIONADOS AO TIME')
  // Muda o nome das equipes
  let team1Name = document.getElementById('team1-name');
  let team2Name = document.getElementById('team2-name');

  let playerName1 = player1.textContent.toUpperCase().replace(/\s/g, '');
  team1Name.innerHTML = `Time ${playerName1}`;
  let playerName2 = player2.textContent.toUpperCase().replace(/\s/g, '');
  team2Name.innerHTML = `Time ${playerName2}`;
  console.log('NOMES MODIFICADOS')

  // Seleciona todos os elementos com a classe "player"
  var playerElements = document.querySelectorAll('.player');

  // Cria um objeto para cada jogador e adiciona ao array "players"
  playerElements.forEach(function(playerElement) {
    var playerName = playerElement.dataset.name;
    players.push({
      name: playerName,
      team: null,
      element: playerElement
    });

    // Adiciona o evento de clique em cada jogador
    playerElement.addEventListener('click', function() {
    // Seleciona o jogador clicado
    var clickedPlayer = players.find(function(player) {
      return player.element === playerElement;
    });

    // Verifica em qual time o jogador deve ser adicionado
    var team1Players = players.filter(function(player) {
      return player.team === 'time1';
    });
    var team2Players = players.filter(function(player) {
      return player.team === 'time2';
    });

    if (team1Players.length < 1) {
      // Adiciona o jogador 1 ao time 1
      clickedPlayer.team = 'time1';
      var team1 = document.getElementById('team1');
      var selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(playerElement);
    } else if (team2Players.length < 2) { 
      // Adiciona o jogador 2 e 3 ao time 2
      clickedPlayer.team = 'time2';
      var team2 = document.getElementById('team2');
      var selected2 = team2.querySelector('.selected-players');
      selected2.appendChild(playerElement);
    } else if (team1Players.length < 3) {
      // Adiciona o jogador 4 e 5 ao time 1
      clickedPlayer.team = 'time1';
      var team1 = document.getElementById('team1');
      var selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(playerElement);
    } else if (team2Players.length < 4) { 
      // Adiciona o jogador 6 e 7 ao time 2
      clickedPlayer.team = 'time2';
      var team2 = document.getElementById('team2');
      var selected2 = team2.querySelector('.selected-players');
      selected2.appendChild(playerElement);
    } else {
      // Adiciona o jogador 8 ao time 1
      clickedPlayer.team = 'time1';
      var team1 = document.getElementById('team1');
      var selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(playerElement);
    } 
  });
  });
}


const allpick = () => {
// PICKS
var players = [];

// Seleciona todos os elementos com a classe "player"
var playerElements = document.querySelectorAll('.player');

// Cria um objeto para cada jogador e adiciona ao array "players"
playerElements.forEach(function(playerElement) {
  var playerName = playerElement.dataset.name;
  players.push({
    name: playerName,
    team: null,
    element: playerElement
  });

// Adiciona o evento de clique em cada jogador
playerElement.addEventListener('click', function() {
// Seleciona o jogador clicado
var clickedPlayer = players.find(function(player) {
  return player.element === playerElement;
});

// Verifica em qual time o jogador deve ser adicionado
var team1Players = players.filter(function(player) {
  return player.team === 'time1';
});
var team2Players = players.filter(function(player) {
  return player.team === 'time2';
});

if (team1Players.length < 1) {
  // Adiciona o jogador 1 ao time 1
  clickedPlayer.team = 'time1';
  var team1 = document.getElementById('team1');
  var selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);

} else if (team2Players.length < 1) { 
  // Adiciona o jogador 2 e 3 ao time 2
  clickedPlayer.team = 'time2';
  var team2 = document.getElementById('team2');
  var selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(playerElement);

} else if (team1Players.length < 2) {
  // Adiciona o jogador 4 e 5 ao time 1
  clickedPlayer.team = 'time1';
  var team1 = document.getElementById('team1');
  var selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);

} else if (team2Players.length < 3) { 
  // Adiciona o jogador 6 e 7 ao time 2
  clickedPlayer.team = 'time2';
  var team2 = document.getElementById('team2');
  var selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(playerElement);
} else if (team1Players.length < 4) {
  // Adiciona o jogador 4 e 5 ao time 1
  clickedPlayer.team = 'time1';
  var team1 = document.getElementById('team1');
  var selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);

} else if (team2Players.length < 5) { 
  // Adiciona o jogador 6 e 7 ao time 2
  clickedPlayer.team = 'time2';
  var team2 = document.getElementById('team2');
  var selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(playerElement);
  
} else {
  // Adiciona o jogador 4 e 5 ao time 1
  clickedPlayer.team = 'time1';
  var team1 = document.getElementById('team1');
  var selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);
}
});
});
}

