const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]);

    const events = new Set();
    for (const [key, value] of gameEvents) {
        console.log(key, value);
        events.add(value);
    }

  eventsArray = [...events];
  console.log(eventsArray);

  gameEvents.delete(64);
  console.log(gameEvents);

  console.log(`On average an even happened every ${90 / gameEvents.size} minutes`);

  for (const [key, value] of gameEvents) {
    if(key < 45) {
        console.log(`First Half ${key} ${value}`);
    } else {
        console.log(`Second Half ${key} ${value}`); 
    }
}

