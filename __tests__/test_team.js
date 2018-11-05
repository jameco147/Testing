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