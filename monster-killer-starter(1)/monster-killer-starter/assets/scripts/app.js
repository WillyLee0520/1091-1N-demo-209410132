const ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 20;
let counter = 0;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function reset() {
    if (currentMonsterHealth <=0 || currentPlayerHealth <= 0){
        currentPlayerHealth = chosenMaxLife;
        currentMonsterHealth = chosenMaxLife;
        resetGame(chosenMaxLife)
    }
    
}


function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    console.log('monster damage', damage.toFixed(2), currentMonsterHealth.toFixed(2))
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerdamage;
    console.log('player damage', playerdamage.toFixed(2), currentPlayerHealth.toFixed(2))
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ){
        alert('Player won!')
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('Monster won!')
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('Draw!')
        reset();
    }
    
}

function strongattackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    console.log('monster damage', damage.toFixed(2), currentMonsterHealth.toFixed(2))
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerdamage;
    console.log('player damage', playerdamage.toFixed(2), currentPlayerHealth.toFixed(2))
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ){
        alert('Player won!')
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('Monster won!')
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('Draw!')
        reset();
    }
    counter ++
    console.log('強攻次數',counter);
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongattackHandler)