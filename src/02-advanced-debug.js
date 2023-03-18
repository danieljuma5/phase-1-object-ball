console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()

function numPointsScored(playerName) {
  // Loop through each team object
  for (const team in gameObject) {
    const players = gameObject[team]["players"];
    // Loop through each player's stats
    for (const player in players) {
      if (player === playerName) {
        // If the player's name matches the argument, return their points scored
        return players[player]["points"];
      }
    }
  }
  // If not found, return undefined
  return undefined;
}


function shoeSize(playerName) {
  // Loop through each team's players
  for (const team in gameObject) {
    const players = gameObject[team]["players"];
    // Loop through each player's stats
    for (const player in players) {
      if (player === playerName) {
        // If the player's name matches the argument, return their shoe size
        return players[player]["shoe"];
      }
    }
  }
  // If the player is not found, return undefined
  return undefined;
}

function teamColors(teamName) {
  // Loop through each team in gameObject
  for (const team in gameObject) {
    if (gameObject[team]["teamName"] === teamName) {
      // If the team name matches the argument, return the team's colors
      return gameObject[team]["colors"];
    }
  }
  // If the team is not found, return undefined
  return undefined;
}


function teamNames() {
  // Create an array to hold the team names
  const teamNamesArray = [];
  // Loop through each team in gameObject
  for (const team in gameObject) {
    // Push the team name to the array
    teamNamesArray.push(gameObject[team]["teamName"]);
  }
  return teamNamesArray;
}

function playerNumbers(teamName) {
  // Loop through each team in gameObject
  for (const team in gameObject) {
    if (gameObject[team]["teamName"] === teamName) {
      // If the team name matches the argument, create an array to hold the player numbers
      const playerNumbersArray = [];
      // Loop through each player on the team
      for (const player in gameObject[team]["players"]) {
        // Push the player's number to the array
        playerNumbersArray.push(gameObject[team]["players"][player]["number"]);
      }
      return playerNumbersArray;
    }
  }
  // If the team is not found, return undefined
  return undefined;
}

function playerStats(playerName) {
  // Loop through each team in gameObject
  for (const team in gameObject) {
    // Loop through each player on the team
    for (const player in gameObject[team]["players"]) {
      // If the player name matches the argument, return the player's stats
      if (player === playerName) {
        return gameObject[team]["players"][player];
      }
    }
  }
  // If the player is not found, return undefined
  return undefined;
}

function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoe = "";
  // Loop through each team in gameObject
  for (const team in gameObject) {
    // Loop through each player on the team
    for (const player in gameObject[team]["players"]) {
      const currentShoeSize = gameObject[team]["players"][player]["shoe"];
      // If the current player's shoe size is larger than the largest shoe size so far, update largestShoeSize and playerWithLargestShoe
      if (currentShoeSize > largestShoeSize) {
        largestShoeSize = currentShoeSize;
        playerWithLargestShoe = player;
      }
    }
  }
  // Return the number of rebounds for the player with the largest shoe size
  return gameObject[playerWithLargestShoe]["players"][playerWithLargestShoe]["rebounds"];
}
function mostPointsScored(game) {
  let maxPoints = 0;
  let playerName = "";
  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > maxPoints) {
        maxPoints = game[team].players[player].points;
        playerName = player;
      }
    }
  }
  return playerName;
}

function winningTeam(game) {
  let homePoints = 0;
  let awayPoints = 0;
  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }
  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }
  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else if (awayPoints > homePoints) {
    return game.away.teamName;
  } else {
    return "Tie game!";
  }
}

function playerWithLongestName(game) {
  let maxLength = 0;
  let playerName = "";
  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > maxLength) {
        maxLength = player.length;
        playerName = player;
      }
    }
  }
  return playerName;
}

