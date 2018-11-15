const League = require('../app/data/league').League;
const Team = require('../app/data/team').Team;
const Player = require('../app/data/player').Player;


test('Test constructor', () => {
    let league = new League(22);
    expect(league.numberOfTeams).toBe(22);
    expect(league.calendar).toBe(null);
    expect(league.leagueTable).toBe(null);
    expect(league.listTeams).toEqual([]);

});

test('Test addTeam', () => {
    let league = new League(22);
    let catalonia = new Team('Catalonia');
    league.addTeam(catalonia);
    expect(league.listTeams.length).toBe(1);

});


test('Test addTeam expecting error', () => {
    let league = new League(3);

    let catalonia = new Team('Catalonia');
    let madrid = new Team('Madrid');
    let levante = new Team('levante');
    let valencia = new Team('valencia');

    league.addTeam(madrid);
    league.addTeam(levante);
    league.addTeam(valencia);

    expect(() => league.addTeam(catalonia)).toThrowError(Error);
});

test('Test createCalendar', () => {
    let league = new League(9);
    league.createCalendar();
    expect(league.calendar).toEqual([]);
});

/*
test('Test createRandomLeague', () => {
    
    let playerData = [];
    let numberOfTeams = 3;
    let minTeamValue = 10;
    let maxTeamValue = 10000;

    for (let i = 0; i < 33; i++) {
        let player = new Player(i+1);
        playerData.push(player);
    }


    expect(League.createRandomLeague(playerData,numberOfTeams,minTeamValue,maxTeamValue)).toThrowError(Error);
});

*/