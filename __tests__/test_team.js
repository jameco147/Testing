const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
const readJSONData = require('../app/data/json_reader').readJSONData;
const Player =  require('../app/data/player').Player;
const Team = require('../app/data/team').Team;

test('Test constructor', () => {
    let team = new Team('Valencia Club de Futbol');
    expect(team.teamName).toBe('Valencia Club de Futbol');
});

test('Test hasPlayer', () => {
    
    let team = new Team('Real Catalonia');
    let player = new Player(86);
    team.addPlayer(player);
    let player2 = new Player(90);
   
    expect(team.hasPlayer(player)).toBe(true);
    expect(team.hasPlayer(player2)).toBe(false);      
});

test('Test getNumberPlayers', () => {
    
    let team = new Team('Real Catalonia');
    let player = new Player(86);
    team.addPlayer(player);
    let player2 = new Player(90);
    team.addPlayer(player2);
   
    expect(team.getNumberPlayers()).toBe(2);     
});

test('Test addPlayer', () => {
    
    let team = new Team('Real Catalonia');
    let player = new Player(86);
    
   
    expect(team.addPlayer(player)).toBe(true);
    expect(team.addPlayer(player)).toBe(false);   
});

test('Test addPlayers', () => {
    
    let team = new Team('Real Catalonia');
    let players = [];
    let player = new Player(86);
    let player2 = new Player(12);
    players.push(player);
    players.push(player2);

    team.addPlayers(players);

    //console.log(team.listPlayers);

    expect(team.listPlayers[0].id).toBe(86);
    expect(team.listPlayers[1].id).toBe(12);
   
});

test('Test getTeamOverallQuality', () => {
    
    let team = new Team('Real Catalonia');
    expect(team.getTeamOverallQuality()).toBe(0);   
});

test('Test getRandomTeamTactic', () => {

    let availableTactics = [ '3-4-3', '3-5-2', '3-6-1', '4-3-3', '4-4-2', '4-5-1', '5-3-2' ];
    
    for(let i = 0; i <= 1000; i++){
        let tactic = Team.getRandomTeamTactic();
        expect(availableTactics.includes(tactic)).toBe(true);
    }  
});


test('Test  _parseTactic is not a number', () => {
    
    let tactic = '3-4-Pepe'; 
    expect(() => Team._parseTactic(tactic)).toThrowError(Error);
});

test('Test  _parseTactic equal array', () => {
    
    let tactic2 = '3-4-3';
    let array = [3,4,3];
    expect(Team._parseTactic(tactic2)).toEqual(array);
});


test('Test  _parseTactic more than 10', () => {
    
    let tactic3 = '4-4-9';
    expect(() => Team._parseTactic(tactic3)).toThrowError(Error);
});

test('Test _getRandomPlayers insufficient players to make a team', () => {

    let players = [];
    for(let i = 0; i <= 15; i++){
       players.push(new Player(i));   
    }  
   // console.log(players.length);
    expect(() => Team._getRandomPlayers(players, 20)).toThrowError(Error);
});


test('Test _getRandomPlayers', () => {
    let jugadores = [];
    let valor = 10;
    let jugadoresSeleccionados = [];
    let contador = 0;
    let hayDiez = false;
  
    for (var i = 0; i < 20; i++) {
      let jugador = new Player(i+1);
      jugadores.push(jugador);
      // console.log(jugadores[i]);
    }
  
      jugadoresSeleccionados = Team._getRandomPlayers(jugadores,valor);
  
      for (var i = 0; i < jugadores.length; i++) {
        for (var a = 0; a < jugadoresSeleccionados.length; a++) {
          if (jugadores[i] === jugadoresSeleccionados[a]) {
            contador++;
          }
        }
      }
  
      if (contador === valor) {
        hayDiez = true;
      }
  
      expect(hayDiez).toBe(true);
  
  });


  test('Test create random team', () => {

    let players = [];
    let tactic ="4-4-2";
    let teamName = "Valencia";
    let teamValue = 11000000;

    for(let i = 0; i <= 22; i++){
       players.push(new Player(i));   
    }  


    
    expect(() => Team.createRandomTeam(players,tactic,teamName,teamValue)).toThrowError(Error);
});


