// プレイヤー情報
let player = {
  hp: 100,
  mp: 50,
  exp: 0,
  level: 1,
  attack: 10,
  heal: 20
};

// 敵情報
let enemy = {
  hp: 50,
  attack: 5
};

// ゲーム要素
let playerHp = document.getElementById('player-hp');
let playerMp = document.getElementById('player-mp');
let playerExp = document.getElementById('player-exp');
let playerLevel = document.getElementById('player-level');
let enemyHp = document.getElementById('enemy-hp');
let attackBtn = document.getElementById('attack-btn');
let healBtn = document.getElementById('heal-btn');

// 初期化
playerHp.textContent = player.hp;
playerMp.textContent = player.mp;
playerExp.textContent = player.exp;
playerLevel.textContent = player.level;
enemyHp
