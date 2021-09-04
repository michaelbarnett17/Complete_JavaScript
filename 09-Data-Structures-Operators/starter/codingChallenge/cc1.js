const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  const {players} = game;

  const players1 = players[0];
  const players2 = players[1];

  console.log(players1);
  console.log(players2);

  const gk = players1[0];
  const [, ...fieldPlayers] = players1;

  console.log(gk);
  console.log(fieldPlayers);

  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);

  const subs = ['sub1', 'sub2', 'sub3'];

  players1Final = [...players1, ...subs];
  console.log(players1Final);

  const {odds: {team1}} = game;
  console.log(team1);

  const {odds: {team2}} = game;
  console.log(team2);

  const {odds: {x}} = game;
  console.log(x);

  const printGoals = function(...arry) {
    let goals = 0;
    const {scored} = game;
    for (let i = 0; i < scored.length; i++) {
        if (arry.includes(scored[i])) {
            goals++;
        }
    }
    console.log(goals);
  }

  printGoals('Gnarby', 'Muller', 'Hummels');


  for (const iterator of object) {
    
  }