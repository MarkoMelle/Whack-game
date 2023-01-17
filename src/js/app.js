import GamePlay from './GamePlay';

document.addEventListener('DOMContentLoaded', () => {
  const gamePlay = new GamePlay();
  gamePlay.init(document.querySelector('#game-container'));
});
