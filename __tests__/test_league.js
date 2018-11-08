const League = require('../app/data/league').League;

test('Test constructor', () => {
    let league = new League(22);
    expect(league.numberOfTeams).toBe(22);
});