const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
const readJSONData = require('../app/data/json_reader').readJSONData;
const Player =  require('../app/data/player').Player;
const Team = require('../app/data/team').Team;

test('Test constructor', ()=>{

    let player = new Player(22);
    expect(player.id).toBe(22);
});

test('Test constructor', ()=>{
let jsonObj = readJSONData('./data/sample.json');
expect(jsonObj[1].ID).toBe(158023);
});

test('Test isGoalKeeper', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    expect(arrayPlayers[0].isGoalKeeper()).toBe(false);
});


test('Test equals', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    let player = new Player(20801);
    expect(player.equals(arrayPlayers[0])).toBe(true);
});
