let players = []
let p1 = document.querySelector('div#player1')
let p2 = document.querySelector('div#player2')
let p3 = document.querySelector('div#player3')
let p4 = document.querySelector('div#player4')
let p5 = document.querySelector('div#player5')
let p6 = document.querySelector('div#player6')
let p7 = document.querySelector('div#player7')
let p8 = document.querySelector('div#player8')
let p9 = document.querySelector('div#player9')
let p10 = document.querySelector('div#player10') 

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
  this.player1 = Number([Math.floor(Math.random() * 10)]);
  this.player2 = Number([Math.floor(Math.random() * 10)]);
  // Garante que player1 e player2 sejam jogadores diferentes
  while (player2 === player1) {
    player2 = Number([Math.floor(Math.random() * 10)]);
  }

  let a = ''
  let b = ''

  switch (player1) {
    case 0:
      a = p1.textContent
    break;
    case 1:
      a = p2.textContent
    break;
    case 2:
     a = p3.textContent
    break;
    case 3:
      a = p4.textContent
    break;
    case 4:
      a = p5.textContent
    break;
    case 5:
      a = p6.textContent
    break;
    case 6:
      a = p7.textContent
    break;
    case 7:
      a = p8.textContent
    break;
    case 8:
      a = p9.textContent
    break;
    case 9:
      a = p10.textContent
    break;
  }

  switch (player2) {
    case 0:
      b = p1.textContent
    break;
    case 1:
      b = p2.textContent
    break;
    case 2:
      b = p3.textContent
    break;
    case 3:
      b = p4.textContent
    break;
    case 4:
      b = p5.textContent
    break;
    case 5:
      b = p6.textContent
    break;
    case 6:
      b = p7.textContent
    break;
    case 7:
      b = p8.textContent
    break;
    case 8:
      b = p9.textContent
    break;
    case 9:
      b = p10.textContent
    break;
  }

  // Mostra ao usuario quem foram os sorteados
  document.querySelector('p#infop').innerHTML = `<strong>${a}</strong> e <strong>${b}</strong>`
  document.querySelector('div#popupf').style.display = 'block';
}

const randomresults = () => {
  // Fecha o PopUp
  document.querySelector('div#popupf').style.display = 'none';
  // Tira os botões
  document.querySelector('button#start-button').style.display = 'none'
  document.querySelector('button#allpick').style.display = 'none'
  document.querySelector('button#random').style.display = 'none'
  document.querySelector('button#restart').style.display = 'none'

  // Prepara os players
  switch (player1) {
    case 0:
      player1 = document.querySelector('div#player1')
    break;
    case 1:
      player1 = document.querySelector('div#player2')
    break;
    case 2:
      player1 = document.querySelector('div#player3')
    break;
    case 3:
      player1 = document.querySelector('div#player4')
    break;
    case 4:
      player1 = document.querySelector('div#player5')
    break;
    case 5:
      player1 = document.querySelector('div#player6')
    break;
    case 6:
      player1 = document.querySelector('div#player7')
    break;
    case 7:
      player1 = document.querySelector('div#player8')
    break;
    case 8:
      player1 = document.querySelector('div#player9')
    break;
    case 9:
      player1 = document.querySelector('div#player10')
    break;
  }

  switch (player2) {
    case 0:
      player2 = document.querySelector('div#player1')
    break;
    case 1:
      player2 = document.querySelector('div#player2')
    break;
    case 2:
      player2 = document.querySelector('div#player3')
    break;
    case 3:
      player2 = document.querySelector('div#player4')
    break;
    case 4:
      player2 = document.querySelector('div#player5')
    break;
    case 5:
      player2 = document.querySelector('div#player6')
    break;
    case 6:
      player2 = document.querySelector('div#player7')
    break;
    case 7:
      player2 = document.querySelector('div#player8')
    break;
    case 8:
      player2 = document.querySelector('div#player9')
    break;
    case 9:
      player2 = document.querySelector('div#player10')
    break;
  }
  let players = document.querySelectorAll('.player');

  // faz uma cópia do array de jogadores para evitar repetições
  let playersCopy = Array.from(players);
  // remove os jogadores sorteados da cópia
  let index1 = playersCopy.indexOf(player1);
  playersCopy.splice(index1, 1);

  let index2 = playersCopy.indexOf(player2);
  playersCopy.splice(index2, 1);
  // adiciona o jogador 1 no time 1
  let team1 = document.getElementById('team1');
  const selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(player1)

  // adiciona o jogador 2 no time 2
  let team2 = document.getElementById('team2');
  const selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(player2)
  // Muda o nome das equipes
  let team1Name = document.getElementById('team1-name');
  let team2Name = document.getElementById('team2-name');

  let playerName1 = player1.textContent.toUpperCase().replace(/\s/g, '');
  team1Name.innerHTML = `Time ${playerName1}`;
  let playerName2 = player2.textContent.toUpperCase().replace(/\s/g, '');
  team2Name.innerHTML = `Time ${playerName2}`;
  randompicks()
}

const randompicks = () => {
  let players = []
  // Seleciona todos os elementos com a classe "player"
  let playerElements = document.querySelectorAll('.player');

  // Cria um objeto para cada jogador e adiciona ao array "players"
  playerElements.forEach(function(playerElement) {
    let playerName = playerElement.dataset.name;
    players.push({
      name: playerName,
      team: null,
      element: playerElement
    });

    // Adiciona o evento de clique em cada jogador
    playerElement.addEventListener('click', function() {
    // Seleciona o jogador clicado
    let clickedPlayer = players.find(function(player) {
      return player.element === playerElement;
    });

    // Verifica em qual time o jogador deve ser adicionado
    let team1Players = players.filter(function(player) {
      return player.team === 'time1';
    });
    let team2Players = players.filter(function(player) {
      return player.team === 'time2';
    })

    if (team1Players.length < 1) {
      // Adiciona o jogador 1 ao time 1
      clickedPlayer.team = 'time1';
      let team1 = document.getElementById('team1');
      let selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(playerElement);
    } else if (team2Players.length < 2) { 
      // Adiciona o jogador 2 e 3 ao time 2
      clickedPlayer.team = 'time2';
      let team2 = document.getElementById('team2');
      let selected2 = team2.querySelector('.selected-players');
      selected2.appendChild(playerElement);
    } else if (team1Players.length < 3) {
      // Adiciona o jogador 4 e 5 ao time 1
      clickedPlayer.team = 'time1';
      let team1 = document.getElementById('team1');
      let selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(playerElement);
    } else if (team2Players.length < 4) { 
      // Adiciona o jogador 6 e 7 ao time 2
      clickedPlayer.team = 'time2';
      let team2 = document.getElementById('team2');
      let selected2 = team2.querySelector('.selected-players');
      selected2.appendChild(playerElement);
    } else {
      // Adiciona o jogador 8 ao time 1
      clickedPlayer.team = 'time1';
      let team1 = document.getElementById('team1');
      let selected1 = team1.querySelector('.selected-players');
      selected1.appendChild(playerElement);
    } 

    

  });
  });
}

const allpick = () => {
// PICKS
let players = [];

// Seleciona todos os elementos com a classe "player"
let playerElements = document.querySelectorAll('.player');

// Cria um objeto para cada jogador e adiciona ao array "players"
playerElements.forEach(function(playerElement) {
  let playerName = playerElement.dataset.name;
  players.push({
    name: playerName,
    team: null,
    element: playerElement
  });

// Adiciona o evento de clique em cada jogador
playerElement.addEventListener('click', function() {
// Seleciona o jogador clicado
let clickedPlayer = players.find(function(player) {
  return player.element === playerElement;
});

// Verifica em qual time o jogador deve ser adicionado
let team1Players = players.filter(function(player) {
  return player.team === 'time1';
});
let team2Players = players.filter(function(player) {
  return player.team === 'time2';
});

if (team1Players.length < 1) {
  // Adiciona o jogador 1 ao time 1
  clickedPlayer.team = 'time1';
  let team1 = document.getElementById('team1');
  let selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);

} else if (team2Players.length < 1) { 
  // Adiciona o jogador 2 e 3 ao time 2
  clickedPlayer.team = 'time2';
  let team2 = document.getElementById('team2');
  let selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(playerElement);

} else if (team1Players.length < 2) {
  // Adiciona o jogador 4 e 5 ao time 1
  clickedPlayer.team = 'time1';
  let team1 = document.getElementById('team1');
  let selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);

} else if (team2Players.length < 3) { 
  // Adiciona o jogador 6 e 7 ao time 2
  clickedPlayer.team = 'time2';
  let team2 = document.getElementById('team2');
  let selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(playerElement);
} else if (team1Players.length < 4) {
  // Adiciona o jogador 4 e 5 ao time 1
  clickedPlayer.team = 'time1';
  let team1 = document.getElementById('team1');
  let selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);

} else if (team2Players.length < 5) { 
  // Adiciona o jogador 6 e 7 ao time 2
  clickedPlayer.team = 'time2';
  let team2 = document.getElementById('team2');
  let selected2 = team2.querySelector('.selected-players');
  selected2.appendChild(playerElement);
  
} else {
  // Adiciona o jogador 4 e 5 ao time 1
  clickedPlayer.team = 'time1';
  let team1 = document.getElementById('team1');
  let selected1 = team1.querySelector('.selected-players');
  selected1.appendChild(playerElement);
}
});
});
}

