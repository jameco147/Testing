const League = require('../app/data/league').League;
const Team = require('../app/data/team').Team;

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

/*
test('Test addTeam expecting error', () => {
    let league = new League(22);
    let catalonia = new Team('Catalonia');
    league.addTeam(catalonia);
    expect(league.listTeams.length).toBe(1);

});
*/