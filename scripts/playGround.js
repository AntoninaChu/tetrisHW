const playGround = document.getElementById('playGround');
const ctx = playGround.getContext("2d");

function fillSq(x, y, color){
	ctx.fillStyle = color;
	ctx.fillRect(x*squareSize, y*squareSize, squareSize, squareSize);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*squareSize, y*squareSize, squareSize, squareSize);
	if(color == "white"){
		playSpace[y][x] = 0;
	}else{
		playSpace[y][x] = 1;
	}
}

function newFigure(){
	figure = figure_types[Math.floor(Math.random()*figure_types.length)];
	figureShape = TYPE_START_POSITIONS[figure];
	figureColor = TYPE_COLORS[figure];
	return figure, figureShape, figureColor
}

function copyRows(rowNumber){
	for(var row = rowNumber; row > 0; row--){
		for(var col = 0; col < colNum; col ++){
			if(playSpace[row - 1][col] == 1){
				fillSq(col, row, "yellow");
			}
			else{
				fillSq(col, row, "white");
			}
		}
	}
	for(var col2 = 0; col2 < colNum; col2++){
		fillSq(col2, 0, "white");
	}
}

function destroyFullRows(){
	var fullRow = true
	for(var r = 0; r < rowNum; r++){
		for(var c = 0; c < colNum; c++){
			if(playSpace[r][c] == 0){
				fullRow = false;
			}
		}
		if(fullRow){
			copyRows(r);
		}
		fullRow = true;
	}
}

function moveDown(){
	drawFigure(curPos[0], curPos[1], figureShape, "white");
	curPos[1]++;
	if(checkForFreeSpace(curPos[0], curPos[1], figureShape)){
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}else{
		curPos[1]--;
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
		newFig = true;
		curPos = [1, 0]
		destroyFullRows();
	}
}

function moveRight(){
	drawFigure(curPos[0], curPos[1], figureShape, "white");
	curPos[0]++;
	if(checkForFreeSpace(curPos[0], curPos[1], figureShape)){
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}else{
		curPos[0]--;
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}
	destroyFullRows();
}

function moveLeft(){
	drawFigure(curPos[0], curPos[1], figureShape, "white");
	curPos[0]--;
	if(checkForFreeSpace(curPos[0], curPos[1], figureShape)){
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}else{
		curPos[0]++;
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}
	destroyFullRows();
}

function rotate(){
	drawFigure(curPos[0], curPos[1], figureShape, "white");
	figureShape = rotateRightPositions(figureShape);
	if(checkForFreeSpace(curPos[0], curPos[1], figureShape)){
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}else{
		figureShape = rotateLeft(figureShape);
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
	}
	destroyFullRows();
}