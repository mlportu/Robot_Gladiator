var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

var enemyNames=[ "Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this ballte? Enter 'Fight' or 'SKIP' to choose.");
    //If player choses to fight, then fight
    if(promptFight==="fight" || promptFight=== "FIGHT"){
        //player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(
           playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if(enemyHealth<=0) {
            window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //enemy attacks player
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
        if(playerHealth<=0){
            window.alert(playerName + " has died");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
    }
        //player chooses to skip
    else if (promptFight==="skip" || promptFight === "SKIP"){
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            //subtract money from playerMoney
            playerMoney = playerMoney - 2;
        }
        else{
            fight();
        }
    } 
    else {
        window.alert("You need to pick a valid option. Try again!");
   }
};
for(var i = 0; i<enemyNames.length; i++){
    fight(enemyNames[i]);
}
//fight();

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
