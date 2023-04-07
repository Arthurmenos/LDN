
function iniciar() {
    // Atribui o evento "click" para o botão "Iniciar"
    document.getElementById('start-button').addEventListener('click', function() {
      // Array de nomes dos jogadores
      var nomesJogadores = [];
      
      // Loop para exibir as caixas de diálogo e armazenar os nomes inseridos pelo usuário
      for (var i = 1; i <= 10; i++) {
        var nome = prompt('Digite o nome do jogador ' + i);
        nomesJogadores.push(nome || 'Jogador ' + i);
      }
    
      // Seleciona todos os elementos com a classe "player"
      var players = document.querySelectorAll('.player');
    
      // Loop para atualizar o texto de cada jogador com o nome correspondente
      for (var i = 0; i < players.length; i++) {
        players[i].textContent = nomesJogadores[i];
      }
    });
}

// Seleciona todos os elementos com a classe "player"
var players = document.querySelectorAll('.player');

function random() {
  document.getElementById('random').addEventListener('click', function() {
      // seleciona um jogador aleatório do array de jogadores
      var players = document.querySelectorAll('.player');
      var player1 = players[Math.floor(Math.random() * players.length)];
      var player2 = players[Math.floor(Math.random() * players.length)];
  
      // Garante que player1 e player2 sejam jogadores diferentes
      while (player2 === player1) {
          player2 = players[Math.floor(Math.random() * players.length)];
          }

      // faz uma cópia do array de jogadores para evitar repetições
      var playersCopy = Array.from(players);
  
      // remove os jogadores sorteados da cópia
      var index1 = playersCopy.indexOf(player1);
      playersCopy.splice(index1, 1);
  
      var index2 = playersCopy.indexOf(player2);
      playersCopy.splice(index2, 1);
    
      // adiciona o jogador 1 no time 1
      var team1 = document.getElementById('team1');
      const selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(player1)
      
      // adiciona o jogador 2 no time 2
      var team2 = document.getElementById('team2');
      const selected2 = team2.querySelector('.selected-players');
      selected2.appendChild(player2)

      // Muda o nome das equipes
      var team1Name = document.getElementById('team1-name');
      var team2Name = document.getElementById('team2-name');

      var playerName1 = player1.textContent.toUpperCase().replace(/\s/g, '');
      team1Name.innerHTML = `Time ${playerName1}`;
      var playerName2 = player2.textContent.toUpperCase().replace(/\s/g, '');
      team2Name.innerHTML = `Time ${playerName2}`;
      picksrandom()
  });
}

function picksrandom() {
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

function allpick() {
  document.getElementById('allpick').addEventListener('click', function() {
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
  });
}