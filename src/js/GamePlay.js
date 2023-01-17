export default class GamePlay {
  constructor() {
    this.boardSize = 2;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.cellIndex = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="controls">
      </div>
      <div class="board-container">
        <div data-id="board" class="board"></div>
      </div>
    `;

    this.boardEl = this.container.querySelector('[data-id=board]');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  moveToRandomCell(arrLength) {
    for (let i = 0; i < this.cells.length; i += 1) {
      this.boardEl.children[i].classList.remove('goblin');
    }
    const getRandom = () => {
      const i = Math.floor(Math.random() * arrLength);
      if (i === this.cellIndex && !this.cellIndex) {
        getRandom();
      } else {
        this.cellIndex = i;
      }
    };
    getRandom();
    this.boardEl.children[this.cellIndex].classList.add('goblin');
  }

  init(container) {
    this.bindToDOM(container);
    this.drawUi();
    this.moveToRandomCell(this.cells.length);
    setInterval(() => {
      this.moveToRandomCell(this.cells.length);
    }, 1000);
  }
}
