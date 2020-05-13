var WIDTH = 320;
var HEIGHT = 200;
var MOVE_SPEED = 0.15;
var ROT_SPEED = Math.PI / 36;
var FPS = 1000 / 30; 
var TEX_WIDTH = 64;
var TEX_HEIGHT = 64;

var LEVEL = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 6, 6, 0, 6, 6, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 0, 2, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 0, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0],
  [6, 6, 0, 6, 6, 0, 0, 0, 0, 1, 2, 0, 2, 3, 3, 3, 3, 3, 2, 0, 2, 0, 0, 0, 0, 0, 7, 7, 0, 7, 7],
  [6, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 0, 2, 3, 0, 0, 0, 3, 2, 0, 2, 2, 2, 2, 2, 2, 7, 0, 0, 0, 7],
  [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [6, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 7, 0, 0, 0, 7],
  [6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7]
];


var player = {
  posX: 24.5,
  posY: 1.5,

  dirX: -1.0,
  dirY: 0.0, 

  planeX: 0.0, 
  planeY: 0.66,

  moveForward: false,
  moveBackward: false,
  turnLeft: false,
  turnRight: false,
  strafeLeft: false,
  strafeRight: false,
};

// textures

var textures = [];

var img0 = new Image();
img0.src = './images/wall-' + 0 + '.png';
img0.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img0, 0, 0);
  textures[0] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img1 = new Image();
img1.src = './images/wall-' + 1 + '.png';
img1.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img1, 0, 0);
  textures[1] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img2 = new Image();
img2.src = './images/wall-' + 2 + '.png';
img2.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img2, 0, 0);
  textures[2] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img3 = new Image();
img3.src = './images/wall-' + 3 + '.png';
img3.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img3, 0, 0);
  textures[3] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img4 = new Image();
img4.src = './images/wall-' + 4 + '.png';
img4.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img4, 0, 0);
  textures[4] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img5 = new Image();
img5.src = './images/wall-' + 5 + '.png';
img5.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img5, 0, 0);
  textures[5] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img6 = new Image();
img6.src = './images/wall-' + 6 + '.png';
img6.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img6, 0, 0);
  textures[6] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

var img7 = new Image();
img7.src = './images/wall-' + 7 + '.png';
img7.addEventListener('load', function() {
  var textureCanvas = document.createElement('canvas');
  var context = textureCanvas.getContext('2d');
  context.drawImage(img7, 0, 0);
  textures[7] = context.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT).data;
}, false);

function render() {
  var canvas = document.getElementById('screen');
  var ctx = canvas.getContext('2d');
  var imageData = ctx.createImageData(WIDTH, HEIGHT); 
  var data = imageData.data;
  
  var cameraX;
  var rayDirX;
  var rayDirY;

  // which box the player is in
  var mapX = parseInt(player.posX);
  var mapY = parseInt(player.posY);

  // length of ray from pos to next x or y side
  // from players position to next unit
  var sideDistX;
  var sideDistY;

  // length of ray to one x or y-side or next x or y side
  // from unit to unit 
  var deltaDistX;
  var deltaDistY;

  var perpWallDist;

  // what direction to step in (+1, -1)
  var stepX;
  var stepY;

  // have we hit a wall
  var hit = false;

  // was NS or EW hit?
  var side;

  var lineHeight;
  var drawStart;
  var drawEnd;

  var textNum;
  var wallX;
  var texX;
  var texY;
  var texBase;
  var step;

  var drawCounter;

  for (i = 0; i < WIDTH; i++) {
    // -1 is left, 0 is center +1 is right;
    cameraX = 2 * i / WIDTH - 1;

    // ray vector
    rayDirX = player.dirX + player.planeX * cameraX;
    rayDirY = player.dirY + player.planeY * cameraX;

    // which box the player is in
    mapX = parseInt(player.posX);
    mapY = parseInt(player.posY);

    // length of ray to one x or y-side or next x or y side
    deltaDistX = Math.abs(1 / rayDirX);
    deltaDistY = Math.abs(1 / rayDirY);

    // calculate step and initial sideDist
    if (rayDirX < 0) {
      stepX = -1;
      sideDistX = (player.posX - mapX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (mapX + 1.0 - player.posX) * deltaDistX; 
    }
    if (rayDirY < 0) {
      stepY = -1;
      sideDistY = (player.posY - mapY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (mapY + 1.0 - player.posY) * deltaDistY; 
    }

    hit = false;

    // DDA algorithm
    while (!hit) {
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += stepX;
        side = false;
      } else {
        sideDistY += deltaDistY;
        mapY += stepY;
        side = true;
      }

      if (LEVEL[mapX][mapY] > 0) {
        hit = true;
      }
    }

    // calculate distance perpendicular to plane
    if (side === false) {
      perpWallDist = (mapX - player.posX + (1 - stepX) / 2) / rayDirX;
    } else {
      perpWallDist = (mapY - player.posY + (1 - stepY) / 2) / rayDirY;
    }

    // get line height
    lineHeight = parseInt(HEIGHT / perpWallDist); 

    // find where line starts and ends
    drawStart = parseInt(-1 * lineHeight / 2 + HEIGHT / 2);
    if (drawStart < 0) {
      drawStart = 0;
    }
    drawEnd = parseInt(lineHeight / 2 + HEIGHT / 2);
    if (drawEnd >= HEIGHT) {
      drawEnd = HEIGHT - 1;
    }

    // textured wall
   
    textNum = LEVEL[mapX][mapY] - 1; 

    // calculate value of wallX, where was it hit? 
    if (side === false) {
      wallX = player.posY + perpWallDist * rayDirY;
    } else {
      wallX = player.posX + perpWallDist * rayDirX;
    }
    wallX -= Math.floor(wallX);

    // x co-ordinate of the texture
    texX = parseInt(wallX * 1.0 * TEX_WIDTH);

    if (side === false && rayDirX > 0) {
      texX = TEX_WIDTH - texX - 1;
    }

    if (side === true && rayDirY < 0) {
      texX = TEX_WIDTH - texX - 1;
    }

    // how many pixels down the texture per line pixel
    step = 1.0 * TEX_HEIGHT / lineHeight;
    
    // initial texture position
    texPos = (drawStart - HEIGHT / 2 + lineHeight / 2) * step;

    drawCounter = drawStart;

    drawCounter = 0;
    while (drawCounter < HEIGHT) {
      d = (drawCounter * WIDTH * 4) + (i * 4);

      if (drawCounter < drawStart) {
        data[d] = 96;
        data[d+1] = 96;
        data[d+2] = 96;
        data[d+3] = 255;
      } else if (drawCounter < drawEnd) {
        texture = textures[textNum];

        if (texture === undefined) {
          data[d] = 255;
          data[d+1] = 0;
          data[d+2] = 255;
          data[d+3] = 255;
        } else {
          texY = parseInt(texPos) & (TEX_HEIGHT - 1); 
          texPos += step;
          texBase = (TEX_HEIGHT * texY + texX)*4;
          if (side === true) {
            data[d] = texture[texBase] >> 1;
            data[d+1] = texture[texBase+1] >> 1;
            data[d+2] = texture[texBase+2] >> 1;
            data[d+3] = texture[texBase+3];
          } else {
            data[d] = texture[texBase];
            data[d+1] = texture[texBase+1];
            data[d+2] = texture[texBase+2];
            data[d+3] = texture[texBase+3];
          }
        }
      } else {
        data[d] = 192;
        data[d+1] = 192;
        data[d+2] = 192;
        data[d+3] = 255;
      }

      drawCounter += 1;
    }

  }
  
  // write image data to canvas
  ctx.putImageData(imageData, 0, 0); 
}

document.addEventListener("keydown", function(event) {
  switch(event.code) {
    case 'KeyW':
      player.moveForward = true;
      break;
    case 'KeyA':
      player.turnLeft = true;
      break;
    case 'KeyS':
      player.moveBackward = true;
      break;
    case 'KeyD':
      player.turnRight = true;
      break;
    case 'KeyZ':
      player.strafeLeft = true;
      break;
    case 'KeyC':
      player.strafeRight = true;
      break;
  }
});

document.addEventListener("keyup", function(event) {
  switch(event.code) {
    case 'KeyW':
      player.moveForward = false;
      break;
    case 'KeyA':
      player.turnLeft = false;
      break;
    case 'KeyS':
      player.moveBackward = false;
      break;
    case 'KeyD':
      player.turnRight = false;
      break;
    case 'KeyZ':
      player.strafeLeft = false;
      break;
    case 'KeyC':
      player.strafeRight = false;
      break;
  }
});

function move() {
  var oldDirX;
  var oldPlaneX;

  if (player.moveForward) {    
    if (LEVEL[parseInt(player.posX + player.dirX * MOVE_SPEED)][parseInt(player.posY)] === 0) {
      player.posX += player.dirX * MOVE_SPEED; 
    }
    if (LEVEL[parseInt(player.posX)][parseInt(player.posY + player.dirY * MOVE_SPEED)] === 0) {
      player.posY += player.dirY * MOVE_SPEED;
    }
  }
 
  if (player.turnLeft) {
    oldDirX = player.dirX;
    player.dirX = player.dirX * Math.cos(ROT_SPEED) - player.dirY * Math.sin(ROT_SPEED);
    player.dirY = oldDirX * Math.sin(ROT_SPEED) + player.dirY * Math.cos(ROT_SPEED);
    oldPlaneX = player.planeX;
    player.planeX = player.planeX * Math.cos(ROT_SPEED) - player.planeY * Math.sin(ROT_SPEED);
    player.planeY = oldPlaneX * Math.sin(ROT_SPEED) + player.planeY * Math.cos(ROT_SPEED);
  }

  if (player.moveBackward) {
    if (LEVEL[parseInt(player.posX - player.dirX * MOVE_SPEED)][parseInt(player.posY)] === 0) {
      player.posX -= player.dirX * MOVE_SPEED;
    }

    if (LEVEL[parseInt(player.posX)][parseInt(player.posY - player.dirY * MOVE_SPEED)] === 0) {
      player.posY -= player.dirY * MOVE_SPEED;
    }
  }

  if (player.turnRight) {
    oldDirX = player.dirX;
    player.dirX = player.dirX * Math.cos(-1 * ROT_SPEED) - player.dirY * Math.sin(-1 * ROT_SPEED);
    player.dirY = oldDirX * Math.sin(-1 * ROT_SPEED) + player.dirY * Math.cos(-1 * ROT_SPEED);

    oldPlaneX = player.planeX; 
    player.planeX = player.planeX * Math.cos(-1 * ROT_SPEED) - player.planeY * Math.sin(-1 * ROT_SPEED);
    player.planeY = oldPlaneX * Math.sin(-1 * ROT_SPEED) + player.planeY * Math.cos(-1 * ROT_SPEED);
  }

  if (player.strafeLeft) {
    if (LEVEL[parseInt(player.posX + -1 * player.dirY * MOVE_SPEED)][parseInt(player.posY)] === 0) {
      player.posX += -1 * player.dirY * MOVE_SPEED; 
    }

    if (LEVEL[parseInt(player.posX)][parseInt(player.posY + player.dirX * MOVE_SPEED)] === 0) {
      player.posY += player.dirX * MOVE_SPEED;
    }
  }

  if (player.strafeRight) {
    if (LEVEL[parseInt(player.posX + player.dirY * MOVE_SPEED)][parseInt(player.posY)] === 0) {
      player.posX += player.dirY * MOVE_SPEED; 
    }

    if (LEVEL[parseInt(player.posX)][parseInt(player.posY + -1 * player.dirX * MOVE_SPEED)] === 0) {
      player.posY += -1 * player.dirX * MOVE_SPEED;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.time('render');
  render();
  console.timeEnd('render');
  setInterval(render, FPS);
  setInterval(move, FPS);
});
