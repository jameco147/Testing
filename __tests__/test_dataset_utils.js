const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
const readJSONData = require('../app/data/json_reader').readJSONData;
const Player =  require('../app/data/player').Player;
const Team = require('../app/data/team').Team;


test('Test readJSONData 1: Valid JSON', () => {
    let jsonObj = readJSONData('./data/sample.json');
    //Check that exacly 3 objects were read
    expect(jsonObj.length).toBe(3);
    expect(jsonObj[0].Name).toBe('Cristiano Ronaldo');
    expect(jsonObj[0].Age).toBe(32);
    expect(jsonObj[0].Overall).toBe(94);
    expect(jsonObj[0].Nationality).toBe('Portugal');
    expect(jsonObj[0].Value).toBe('€95.5M');
    expect(jsonObj[0].Club).toBe('Real Madrid CF');
    expect(jsonObj[0]['Preferred Positions']).toBe('ST LW');

    expect(jsonObj[1].Name).toBe('L. Messi');
    expect(jsonObj[1].Age).toBe(30);
    expect(jsonObj[1].Overall).toBe(93);
    expect(jsonObj[1].Nationality).toBe('Argentina');
    expect(jsonObj[1].Value).toBe('€105M');
    expect(jsonObj[1].Club).toBe('FC Barcelona');
    expect(jsonObj[1]['Preferred Positions']).toBe('RW');

    expect(jsonObj[2].Name).toBe('Neymar');
    expect(jsonObj[2].Age).toBe(25);
    expect(jsonObj[2].Overall).toBe(92);
    expect(jsonObj[2].Nationality).toBe('Brazil');
    expect(jsonObj[2].Value).toBe('€123M');
    expect(jsonObj[2].Club).toBe('Paris Saint-Germain');
    expect(jsonObj[2]['Preferred Positions']).toBe('LW');
});

test('Test readJSONData 2: Error JSON', () => {
    expect( f => readJSONData('./data/sample_error.json') ).toThrowError(SyntaxError)
});

test('Test readJSONData 3: No file found', () => {
    expect( f => readJSONData('./data/idontexist.json') ).toThrowError(Error);
});

test('Test extractDataFromRawJSON', () => {
    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    expect(arrayPlayers.length).toBe(3);
    expect(arrayPlayers[0].getName()).toBe('Cristiano Ronaldo');
    expect(arrayPlayers[0].getAge()).toBe(32);
    expect(arrayPlayers[0].getQuality()).toBe(94);
    expect(arrayPlayers[0].getNationality()).toBe('Portugal');
    expect(arrayPlayers[0].getValue()).toBe(95500000);
    expect(arrayPlayers[0].getTeam()).toBe('Real Madrid CF');
    expect(arrayPlayers[0].isForward()).toBe(true);
    expect(arrayPlayers[0].isMidfielder()).toBe(true);
    expect(arrayPlayers[0].isBack()).toBe(false);
});


//A partir de aquí es la clase player que irá en otro documento.

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


//A partir de aquí es la clase team que irá en otro documento

test('Test constructor', () => {
    let team = new Team('Valencia Club de Futbol');
    expect(team.teamName).toBe('Valencia Club de Futbol');
});

test('Test hasPlayer kkkk', () => {
    
    let team = new Team('Real Mierda');
    team.addPlayer('Cristiano Ronaldo');
    expect(team.getNumberPlayers).toBe(1);


    
    
});




