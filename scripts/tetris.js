/*ctx.fillStyle = "blue";
ctx.fillRect(squareSize, 2*squareSize, squareSize, squareSize);*/

var playSpace = [];

for(var i=0; i < rowNum; i++){
	playSpace[i] = [];
	for(var j=0; j < colNum; j++){
		playSpace[i][j] = 0;
		fillSq(j, i, "white");
	}
}

var continueGame = true;
var figure;
var figureShape;
var figureColor;
var curPos = [1, 0];
var newFig = true
var notStart = false

var gameInterval = setInterval(() => {
	if(newFig){
		figure, figureShape, figureColor = newFigure();
		if(checkForFreeSpace(1, 0, figureShape) == false){
			clearInterval(null);
		}
		drawFigure(curPos[0], curPos[1], figureShape, figureColor);
		newFig = false;
	}else{
		moveDown();
	}
}, 4000);

/*while (continueGame){
	if(newFig){
		destroyFullRows();
		curPos = [1, 0];
		figure, figureShape, figureColor = newFigure();
		newFig = false; 
		if(checkForFreeSpace(curPos[0], curPos[1], figureShape)){
			drawFigure(curPos[0], curPos[1], figureShape, figureColor);
		}else{
			continueGame = false;
		}
	}
	
}*/