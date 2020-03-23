const squareSize = 40;

const rowNum = 10;
const colNum = 5;

const figure_types = ["L", "J", "T", "I"];

const TYPE_COLORS = {
  "L": "red",
  "J": "blue",
  "T": "purple",
  "I": "green"
};

const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const ROTATE = 38;

const TYPE_START_POSITIONS = {
	"L": [0, 1, 0, 0, 1, 0, 0, 1, 1],
  	"J": [0, 1, 0, 0, 1, 0, 1, 1, 0],
  	"T": [0, 1, 0, 1, 1, 1, 0, 0, 0],
  	"I": [0, 1, 0, 0, 1, 0, 0, 1, 0]
}