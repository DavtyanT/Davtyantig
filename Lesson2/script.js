
var matrix=[];
for(var a = 0; a<19; a++){
    matrix.push([]);
     for(var b = 0; b<25; b++){
        matrix[a].push(Math.floor(Math.random()* Math.floor(6)));
    }
    
}
/*
var matrix = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


    [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


    [1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1],

    [0, 2, 3, 2, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 1, 1],

    [0, 4, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 2, 1],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3],

];
*/
var GishatichArr = [];
var hunterArr = [];
var ZombiArr = [];
var xotakerArr = [];
var side = 100;
var grassArr = [];
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y, 2);
                xotakerArr.push(xt);
            }

            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y, 3);
                GishatichArr.push(gsh);
            }
            else if (matrix[y][x] == 4) {
                var zmb = new Zombi(x, y, 4);
                ZombiArr.push(zmb);
            }
            else if (matrix[y][x] == 5) {
                var hnt = new Hunter(x, y, 5);
                hunterArr.push(hnt);
            }
        }

    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var u in xotakerArr) {
        xotakerArr[u].utel();
    }

    for (var g in GishatichArr) {
        GishatichArr[g].utelgs();
    }
    for (var f in GishatichArr) {
        if (GishatichArr[f].energy == 6) {
            GishatichArr[f].bazmanalGsh();
        }

        if (GishatichArr[f].energy == -6) {

            GishatichArr[f].mernelGsh();
            for (var m in GishatichArr) {
                if (GishatichArr[m].x == GishatichArr[f].x && GishatichArr[m].y == GishatichArr[f].y) {
                    GishatichArr.splice(m, 1);
                    break;
                }
            }
        }
    }


    for (var t in ZombiArr) {
        ZombiArr[t].utelZombi();
        for (var e in xotakerArr) {
            if (xotakerArr[e].x == ZombiArr[t].x && xotakerArr[e].y == ZombiArr[t].y) {
                xotakerArr.splice(e, 1);
                break;
            }
        }
        for (var d in GishatichArr) {
            if (GishatichArr[d].x == ZombiArr[t].x && GishatichArr[d].y == ZombiArr[t].y) {
                GishatichArr.splice(d, 1);
                break;
            }
        }
        for (var h in hunterArr) {
            if (hunterArr[h].x == ZombiArr[t].x && hunterArr[h].y == ZombiArr[t].y) {
                hunterArr.splice(h, 1);
                break;
            }
        }
    }

    for (var l in hunterArr) {
        hunterArr[l].krakel();
    }
}