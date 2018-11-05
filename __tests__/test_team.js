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

//Tenemos dudas
test('Test addPlayers', () => {
    
    let team = new Team('Real Catalonia');
    let players = [];
    let player = new Player(86);
    let player2 = new Player(12);
    players.push(player);
    players.push(player2);

    team.addPlayers(players);
    expect(player.getID()).toBe(86);
   
});

test('Test getTeamOverallQuality', () => {
    
    let team = new Team('Real Catalonia');
    expect(team.getTeamOverallQuality()).toBe(0);   
});

test('Test getRandomTeamTactic', () => {
    
    //let team = new Team('Levante');
    expect(Team.getRandomTeamTactic()).toBe(String);
    
});

