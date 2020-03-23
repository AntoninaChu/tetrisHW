function rotateRightPositions(posArr){
	return [posArr[6], posArr[3], posArr[0], 
			posArr[7], posArr[4], posArr[1], 
			posArr[8], posArr[5], posArr[2]];
}

function rotateLeft(posArr){
	return [posArr[2], posArr[5], posArr[8], 
			posArr[1], posArr[4], posArr[7], 
			posArr[0], posArr[3], posArr[6]];
}

function checkForFreeSpace(x, y, shape){
	var shapeIndx = 0;
	for(var i = y; i < y+3; i++){
		for(var j = x; j < x+3; j++){
			if(shape[shapeIndx] == 1){
				if(i< 0 || j < 0 || j > 4 || i > 9){
					return false;
				}
				if(playSpace[i][j] == 1){
					return false;
				}
			}
			shapeIndx++;
		}
	}
	return true;
}

function drawFigure(x, y, shape, color){
	console.log(color)
	var shapeIndx = 0;
	for(var i = y; i < y+3; i++){
		for(var j = x; j < x+3; j++){
			if(shape[shapeIndx] == 1){
				fillSq(j, i, color);
				console.log(color)
			}
			shapeIndx++;
		}
	}
}