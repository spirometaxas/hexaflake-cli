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

const drawHexagon = function(board, pos, scale) {
  const width = getWidth(scale);
  for (let i = 0; i < getHeight(scale) / 2; i++) {
    const startX = pos.x - parseInt(width / 2) + i;
    for (let j = 0; j < width - (2 * i); j++) {
      if (j % 2 == 0) {
        board[pos.y + i][startX + j] = '▲';
      } else {
        board[pos.y + i][startX + j] = '▼';
      }
    }
  }
  for (let i = 0; i < getHeight(scale) / 2; i++) {
    const startX = pos.x - parseInt(width / 2) + i;
    for (let j = 0; j < width - (2 * i); j++) {
      if (j % 2 == 0) {
        board[pos.y - (i + 1)][startX + j] = '▼';
      } else {
        board[pos.y - (i + 1)][startX + j] = '▲';
      }
    }
  }
}

const hexaflake = function(n, scale, board, pos) {
  if (n === 0) {
    drawHexagon(board, pos, scale);
    return;
  }

  // Center
  hexaflake(n - 1, scale - 1, board, { x: pos.x, y: pos.y });

  // Sides
  hexaflake(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 1) - 1, y: pos.y });
  hexaflake(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 1) + 1, y: pos.y });

  // Top
  hexaflake(n - 1, scale - 1, board, { x: pos.x - parseInt(getWidth(scale - 1) / 2) - 1, y: pos.y + getHeight(scale - 1) });
  hexaflake(n - 1, scale - 1, board, { x: pos.x + parseInt(getWidth(scale - 1) / 2) + 1, y: pos.y + getHeight(scale - 1) });

  // Bottom
  hexaflake(n - 1, scale - 1, board, { x: pos.x - parseInt(getWidth(scale - 1) / 2) - 1, y: pos.y - getHeight(scale - 1) });
  hexaflake(n - 1, scale - 1, board, { x: pos.x + parseInt(getWidth(scale - 1) / 2) + 1, y: pos.y - getHeight(scale - 1) });
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

const create = function(n, scale) {
  if (n === undefined || n < 0) {
    return '';
  }
  if (scale === undefined || scale < n) {
    scale = n;
  }

  const board = createBoard(getWidth(scale), getHeight(scale));
  hexaflake(n, scale, board, { x: parseInt(getWidth(scale) / 2.0), y: parseInt(getHeight(scale) / 2.0) }); 
  return draw(board);
}

module.exports = {
  create: create
};