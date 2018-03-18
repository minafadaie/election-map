var createCandidate = function(candidateName, partyColor)

 {
  var candidate = {};
  candidate.name = candidateName;
  candidate.results = null;
  candidate.totalVotes= 0;
  candidate.color= partyColor;
   
  candidate.announceCandidate = function()
   {
     console.log("Welcome, " + candidateName);
     console.log(partyColor);
   };
   
  candidate.announceCandidate();

  return candidate;
  
 };

var candidate1 = createCandidate("Rover Rufferson", [132, 17, 11]);
var candidate2= createCandidate("Maxine Meowser", [245, 141, 136]);

candidate1.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
candidate2.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

candidate1.results[9] = 1;
candidate2.results[9] = 28;
candidate1.results[4] = 17;
candidate2.results[4] = 38;
candidate1.results[43] = 11;
candidate2.results[43] = 27;


var setStateResults = function(state)
{
  theStates[state].winner = null;
  if (candidate1.results[state] > candidate2.results[state])
    {
      theStates[state].winner = candidate1;
    } 
  else if (candidate1.results[state] < candidate2.results[state]) 
    {
      theStates[state].winner = candidate2;
    }
  
  var stateWinner = theStates[state].winner
  if (stateWinner !== null) {
    console.log(stateWinner.name);
    //console.log(stateWinner.color);
    theStates[state].rgbColor = stateWinner.color;
  } else {
    console.log("DRAW");
    theStates[state].rgbColor = [11, 32, 57];
  }
  
  var stateResults = document.getElementById('stateResults');
  
  var header = stateResults.children[0].children[0];
  
  var stateName = header.children[0];
  var stateAbbreviation = header.children[1];
  
  var body = stateResults.children[1];
  
  var candidate1Name = body.children[0].children[0];
  var candidate1Results = body.children[0].children[1];
  
  var candidate2Name = body.children[1].children[0];
  var candidate2Results = body.children[1].children[1];
  
  var winnerName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  stateAbbreviation.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = candidate1.name;
  candidate1Results.innerText = candidate1.results[state];
  candidate2Name.innerText = candidate2.name;
  candidate2Results.innerText = candidate2.results[state];
  
  if (stateWinner !== null)
    {
      winnerName.innerText = stateWinner.name;
    }
  
  else
    {
      winnerName.innerText = "DRAW";
    }
   
};



candidate1.totalVotes = function()
{
  this.totalVotes = 0;
  for (var i = 0; i < this.results.length; i++)
    {
      this.totalVotes = this.totalVotes + this.results[i];
    }
};

candidate2.totalVotes = function()
{
  this.totalVotes = 0;
  for (var i = 0; i < this.results.length; i++)
    {
      this.totalVotes = this.totalVotes + this.results[i];
    }
};

candidate1.totalVotes();
candidate2.totalVotes();
console.log(candidate1.totalVotes);
console.log(candidate2.totalVotes);

var winner = function()

{
  if (candidate1.totalVotes > candidate2.totalVotes)
    {
    winner = candidate1;
    }
  
  else if (candidate1.totalVotes < candidate2.totalVotes)
    {
    winner = candidate2;
    }
  
  else 
    {
    console.log("It's a draw!")
    }
  
  console.log("Congratulations " + winner.name + "!");
};

winner();

var countryResults = document.getElementById('countryResults');

countryResults.children[0].children[0].children[0].innerText = candidate1.name;
countryResults.children[0].children[0].children[1].innerText = candidate1.totalVotes;
countryResults.children[0].children[0].children[2].innerText = candidate2.name;
countryResults.children[0].children[0].children[3].innerText = candidate2.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner.name;


