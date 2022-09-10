const getWidth = function(n) {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 3;
  }
  return (getWidth(n - 1) * 3) + 2;
}

const getHeight = function(n) {
  return Math.pow(3, n) * 2;
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawHexagon = function(board, pos, size, character) {
  const width = getWidth(size);
  for (let i = 0; i < getHeight(size) / 2; i++) {
    const startX = pos.x - parseInt(width / 2) + i;
    for (let j = 0; j < width - (2 * i); j++) {
      if (character) {
        board[pos.y + i][startX + j] = character;
      } else {
        if (j % 2 == 0) {
          board[pos.y + i][startX + j] = '▲';
        } else {
          board[pos.y + i][startX + j] = '▼';
        }
      }
    }
  }
  for (let i = 0; i < getHeight(size) / 2; i++) {
    const startX = pos.x - parseInt(width / 2) + i;
    for (let j = 0; j < width - (2 * i); j++) {
      if (character) {
        board[pos.y - (i + 1)][startX + j] = character;
      } else {
        if (j % 2 == 0) {
          board[pos.y - (i + 1)][startX + j] = '▼';
        } else {
          board[pos.y - (i + 1)][startX + j] = '▲';
        }
      }
    }
  }
}

const hexaflake = function(n, size, board, pos, character) {
  if (n === 0) {
    drawHexagon(board, pos, size, character);
    return;
  }

  // Center
  hexaflake(n - 1, size - 1, board, { x: pos.x, y: pos.y }, character);

  // Sides
  hexaflake(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1) - 1, y: pos.y }, character);
  hexaflake(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1) + 1, y: pos.y }, character);

  // Top
  hexaflake(n - 1, size - 1, board, { x: pos.x - parseInt(getWidth(size - 1) / 2) - 1, y: pos.y + getHeight(size - 1) }, character);
  hexaflake(n - 1, size - 1, board, { x: pos.x + parseInt(getWidth(size - 1) / 2) + 1, y: pos.y + getHeight(size - 1) }, character);

  // Bottom
  hexaflake(n - 1, size - 1, board, { x: pos.x - parseInt(getWidth(size - 1) / 2) - 1, y: pos.y - getHeight(size - 1) }, character);
  hexaflake(n - 1, size - 1, board, { x: pos.x + parseInt(getWidth(size - 1) / 2) + 1, y: pos.y - getHeight(size - 1) }, character);
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }
  
  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  const board = createBoard(getWidth(size), getHeight(size));
  hexaflake(n, size, board, { x: parseInt(getWidth(size) / 2.0), y: parseInt(getHeight(size) / 2.0) }, character); 
  return draw(board);
}

module.exports = {
  create: create
};