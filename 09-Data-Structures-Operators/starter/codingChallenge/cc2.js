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

  for (let i = 0; i <= game.scored.length - 1; i++) {
    console.log(`Goal ${i + 1} ${game.scored[i]}`);
  }

  let oddsTotal = 0;
  let numberOfOdds = 0;
  for (const odd of Object.values(game.odds)) {
      oddsTotal += odd;
      numberOfOdds++;
  }

  console.log(oddsTotal/numberOfOdds);

  console.log(`Odds of victory ${game.team1}: ${game.odds.team1}`);

  let {scored : scorers} = game;

  const scorersObj = {

    }

  for (const scorer of scorers) {
      if (!(scorer in scorersObj)) {
          scorersObj[`${scorer}`] = 1;
      } else {
          let currentScore = scorersObj[`${scorer}`]
          currentScore++;
          scorersObj[`${scorer}`] = currentScore;
      }
  }

  console.log(scorersObj);