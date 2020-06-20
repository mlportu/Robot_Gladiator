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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
           }
        }
            //player attacks enemy
         else if(promptFight === "fight" || promptFight === "FIGHT") {
                var damage = randomNumber(playerAttack -3, playerAttack);
                enemyHealth = Math.max(0, enemyHealth - damage);
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
                var damage = randomNumber(enemyAttack - 3, enemyAttack);
                playerHealth = Math.max(0, playerHealth - damage);
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
                enemyHealth = randomNumber(40, 60);
                //use debugger to pause script from running and check whats wrong
                //debugger    

                //pass the pickedEnemyNames variable's value into the fight function 
                fight(pickedEnemyNames);
                if(playerHealth > 0 && i < enemyNames.length -1){
                    // ask user
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                    if (storeConfirm){
                        shop();
                    }
                }
            }   
            else{
                window.alert("You had lost your robot in battle! Game Over!");
                break;
                }
            }
        endGame();
       };
       
       var shop = function() {
        var shopOptionPrompt= window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
           );
           switch(shopOptionPrompt){
               case "refill":
               case "REFILL":
                   if(playerMoney>+7){
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                   playerHealth = playerHealth + 20;
                   playerMoney = playerMoney - 7;
                    }
                    else {window.alert("You don't have enought money!");
                    }
                   break;
                case "upgrade":
                case "UPGRADE":
                    if (playerMoney>=7) {
                        window.alert("Upgrading player's attack by 6 for 7 dollars.");
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                    }
                    else{
                        window.alert("You don't have enought money!");
                    }
                    break;
                case "LEAVE":
                case "leave":
                    window.alert("Leaving the store.");
                    break;
                default:
                    window.alert("you did not pick a valid option. Try again.");
                    shop();
                    break;
           }
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
       
       var randomNumber = function (min, max) {
           var value = Math.floor(Math.random() * (max-min+1) + min);
           return value;
       }

       

startGame();

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
