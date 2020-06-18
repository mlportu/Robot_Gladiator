var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

var enemyNames=[ "Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 12;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth >0) {
        //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
         //if user picks skip confirm and then stop the loop
        if (promptFight==="skip" || promptFight === "SKIP"){
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if true, leave fight
            if (confirmSkip){
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                //subtract money from playerMoney
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
           }
        }
            //player attacks enemy
            enemyHealth = enemyHealth - playerAttack;
                console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
            //check enemy's health
            if(enemyHealth<=0) {
                 window.alert(enemyName + " has died!");
                 
                 // awared player money for winning
                 playerMoney = playerMoney + 20;

                 //leave while loop, enemy is dead
                break;
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
                break;
            }
            else{
                 window.alert(playerName + " still has " + playerHealth + " health left.");
            } 
        }
    }
        for(var i = 0; i<enemyNames.length; i++){
            var pickedEnemyNames = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyNames);
        }

//fight();

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
