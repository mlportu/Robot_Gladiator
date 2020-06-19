var playerName = window.prompt("What is your robot's name?");
var playerHealth = 30;
var playerAttack =10;
var playerMoney = 10;

var enemyNames=[ "Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth >0) {

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
         else if(promptFight === "fight" || "FIGHT") {
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
         else {
             window.alert("You need to pick a valid option. Try Again!");
         }
        }
    }
       var startGame = function() {
           //reset player stats
           playerHealth = 100;
           playerAttack = 10;
           playerMoney = 10;
        for(var i = 0; i<enemyNames.length; i++){
            //let user know what round they are in, remember that arrays start at 0
            if(playerHealth > 0){
                window.alert("Welcome to Robot Gladiators! Round " + ( i+1));

                var pickedEnemyNames = enemyNames[i];
                enemyHealth = 20
                //use debugger to pause script from running and check whats wrong
                //debugger    

                //pass the pickedEnemyNames variable's value into the fight function 
                fight(pickedEnemyNames);
            }   
            else{
                window.alert("You had lost your robot in battle! Game Over!");
                break;
                }
            }
        endGame();
       };
       
       var endGame = function() {
           if (playerHealth>0){
                window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
           }
           else{
                window.alert("You've lost your robot in battle.");
           }
           var playAgainConfirm = window.confirm("Would you like to play again?");

            if(playAgainConfirm){
                 startGame();
            }
             else{
                window.alert("Thank you for playing Robot Gladiators! Come back soon!");
            }
       }

       

startGame();

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
