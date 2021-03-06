

var fight = function(enemy) {
    while (enemy.health > 0 && playerInfo.health >0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
         //if user picks skip confirm and then stop the loop
        if (promptFight==="skip" || promptFight === "SKIP"){
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if true, leave fight
            if (confirmSkip){
                window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                //subtract money from playerMoney
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
           }
        }
            //player attacks enemy
         else if(promptFight === "fight" || promptFight === "FIGHT") {
                var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );
                //check enemy's health
                if(enemy.health<=0) {
                 window.alert(enemy.name + " has died!");
                 
                 // awared player money for winning
                 playerInfo.money = playerInfo.money + 20;

                 //leave while loop, enemy is dead
                break;
                }
                else{
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
        
                //enemy attacks player
                var damage = randomNumber(enemy.attack - 3, enemy.attack);
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );
                // check player's health
                if(playerInfo.health<=0){
                window.alert(playerInfo.name + " has died");
                break;
                }
                else{
                 window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                } 
         }
         else {
             window.alert("You need to pick a valid option. Try Again!");
         }
        }
    }
       var startGame = function() {
           //reset player stats
          playerInfo.reset();
        for(var i = 0; i<enemyInfo.length; i++){
            //let user know what round they are in, remember that arrays start at 0
            if(playerInfo.health > 0){
                window.alert("Welcome to Robot Gladiators! Round " + ( i+1));

                var pickedEnemyObj = enemyInfo[i];
                pickedEnemyObj.health = randomNumber(40, 60);
                //use debugger to pause script from running and check whats wrong
                //debugger    

                //pass the pickedEnemyNames variable's value into the fight function 
                fight(pickedEnemyObj);
                if(playerInfo.health > 0 && i < enemyInfo.length -1){
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
                   playerInfo.refillHealth;
                   break;
                case "upgrade":
                case "UPGRADE":
                    playerInfo.upgradeAttack;
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
           if (playerInfo.health>0){
                window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

       var playerInfo = {
        name: window.prompt("What is your robot's name?"),
        health: 30,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function() {
            if (this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
              } 
              else {
                window.alert("You don't have enough money!");
              }
        }, // comma!
        upgradeAttack: function() {
            if (this.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -= 7;
              } 
              else {
                window.alert("You don't have enough money!");
              }
        }
    };
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14),
        },
        {
            name: "Amy Andriod",
            attack: randomNumber(10, 14),
        },
        {
            name:"Robo Trumble",
            attack: randomNumber(10, 14),
        }
    ]

startGame();

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
