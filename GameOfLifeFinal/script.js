var socket = io.connect();

// var matrix = [];
// for (var a = 0; a < 20; a++) {
//     matrix.push([]);
//     for (var b = 0; b < 25; b++) {
//         matrix[a].push(Math.floor(Math.random() * Math.floor(6)));
//     }

// }
var matrix = [

    [2.1, 1, 2, 1, 1, 1, 1, 2.1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2.1, 0, 0],

    [0, 0, 0, 0, 0, 2.1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0],

    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0],


    [5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0],


    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3.1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],


    [0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0],

    [0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 3, 0, 0, 2, 4],

    [0, 2.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 0, 0, 0],

    [0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0],

    [0, 4, 0, 3, 4, 0, 0, 4, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],

    [0, 0, 0, 0, 3.1, 0, 3.1, 0, 2.1, 0, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0],

    [0, 0, 4, 0, 0, 0, 0, 1, 0, 2.1, 0, 0, 0, 0, 1, 2.1, 0, 1, 0, 0, 1, 0],

    [0, 0, 3.1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],

    [0, 4, 0, 2, 3.1, 0, 1, 1, 1, 2, 2.1, 1, 0, 0, 1, 2, 1, 0, 1, 4, 2, 0],

    [0, 0, 0, 0, 1, 0, 5, 2.1, 2.1, 3, 1, 2.1, 2, 0, 0, 0, 0, 3.1, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 2.1, 1, 1, 2, 2, 0, 0, 1, 4, 0, 0, 1, 0, 0, 0],


    [5, 1, 0, 0, 1, 0, 0, 2.1, 1, 1, 2.1, 1, 2, 4, 3, 0, 1, 0, 1, 3.1, 4, 5],


    [0, 2.1, 0, 2.1, 0, 0, 1, 0, 2, 2.1, 0, 0, 1, 1, 2, 1, 0, 0, 4, 0, 0, 0],

    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 0, 0, 3],

    [1, 0, 0, 0, 0, 2, 1, 1, 4, 0, 1, 1, 0, 0, 0, 0, 4, 3, 2.1, 0, 0, 2.1],

    [1, 0, 1, 0, 0, 0, 2.1, 3.1, 2, 2.1, 0, 2, 0, 3.1, 4, 0, 0, 0, 0, 3, 4, 5],


];
// var matrix = [
//     [2,2,0,2],
//     [2,0,0,9],
// ]
var GishatichArr = [];
var hunterArr = [];
var ZombiArr = [];
var FireArr = [];
var xotakerArr = [];
var side = 50;
var grassArr = [];
var tripArr = [];
var weather = "summer";

var meteor = 0;
var trip = 0;



document.getElementById('demo').innerHTML = weather;


//var weather = "summer";








function setup() {
    setInterval(function () {
        if (weather == "summer") {
             if(meteor >= 9){
                 matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 8;
                 meteor = 0;
             }

             if(trip >= 5){
                 matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 9;
                 trip = 0;
             }
             meteor++;
             trip++;
            weather = "autumn";
            document.getElementById('demo').innerHTML = weather;

        }
        else if (weather == "autumn") {

            if(meteor >= 9){
                matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 8;
                meteor = 0;
            }

            if(trip >= 5){
                matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 9;
                trip = 0;
            }
            meteor++;
            trip++;
            weather = "winter";
            document.getElementById('demo').innerHTML = weather;
        }
        else if (weather == "winter") {

            if(meteor >= 9){
                matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 8;
                meteor = 0;
            }

            if(trip >= 5){
                matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 9;
                trip = 0;
            }
            meteor++;
            trip++;
            weather = "spring";
            document.getElementById('demo').innerHTML = weather;
        }
        else if (weather == "spring") {

            if(meteor >= 9){
                matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 8;
                meteor = 0;
            }

            if(trip >= 5){
                matrix[Math.round(Math.random()*21)][Math.round(Math.random()*20)] = 9;
                trip = 0;
            }
            meteor++;
            trip++;
            weather = "summer";
            document.getElementById('demo').innerHTML = weather;
        }
    }, 3000);
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                    var xt = new Xotaker(x, y);
                    xotakerArr.push(xt);
            }
            else if(matrix[y][x] == 2.1){

                var xteg = new XotakerEg(x, y);
                xotakerArr.push(xteg);
            }
            else if (matrix[y][x] == 3) {

                    var gsh = new Gishatich(x, y);
                    GishatichArr.push(gsh);
            }
            else if(matrix[y][x] == 3.1){

                var gsheg = new GishatichEg(x, y);
                GishatichArr.push(gsheg);
            }
            else if (matrix[y][x] == 4) {
                var zmb = new Zombi(x, y);
                ZombiArr.push(zmb);
            }
            else if (matrix[y][x] == 5) {
                var hnt = new Hunter(x, y);
                hunterArr.push(hnt);
            }
            else if (matrix[y][x] == 6) {
                var fire = new Fire(x, y);
                FireArr.push(fire);
            }

            else if (matrix[y][x] == 9) {
                var trip3 = new Trip(x, y);
                tripArr.push(trip3);
            }
        }

    }
}

var statistics;
function draw() {
    
    if (frameCount % 60 == 0) {
        
        statistics = {
            "Frame number": frameCount,
            "Խոտերի քանակ՝ ": grassArr.length,
            "Խոտակերների քանակ՝ ": xotakerArr.length,
            "Գիշատիչների քանակ՝ ": GishatichArr.length,
            "Որսորդների քանակ՝ ": hunterArr.length,
            "Զոմբիների քանակ՝ ": ZombiArr.length,
            "Կրակների քանակ ՝ ": FireArr.length
        }
        socket.emit("send statistics", statistics);
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                if (weather === 'autumn') {
                    fill("#fc9532");
                    rect(x * side, y * side, side, side);
                }
                else if (weather === 'summer') {
                    fill("#4f910d");
                    rect(x * side, y * side, side, side);
                }
                else if (weather === 'winter') {
                    fill("#D5EBD7");
                    rect(x * side, y * side, side, side);
                }
                else {
                    fill("#06560e");
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 2) {
                    fill("#ffe900");
                    rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 2.1){


                fill("#cfde7f");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                    fill("#ff0a0a");
                    rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 3.1){

                fill("#f72560");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#232020");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#d12200");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                matrix[y+1][x] = 6;
                var fire = new Fire(x, y+1);
                FireArr.push(fire);

                matrix[y-1][x] = 6;
                var fire = new Fire(x, y-1);
                FireArr.push(fire);

                matrix[y][x+1] = 6;
                var fire = new Fire(x+1, y);
                FireArr.push(fire);

                matrix[y][x-1] = 6;
                var fire = new Fire(x-1, y);
                FireArr.push(fire);

                fill("#5e0000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) {
                var trip3 = new Trip(x, y);
                tripArr.push(trip3);
                fill("black");
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


    for (var l in tripArr) {
        tripArr[l].krakel();
    }

    for (var t in FireArr) {
        FireArr[t].utelFire();

        for (var z in grassArr) {
            if (grassArr[z].x == FireArr[t].x && grassArr[z].y == FireArr[t].y) {
                grassArr.splice(z, 1);
                break;
            }
        }
        for (var e in xotakerArr) {
            if (xotakerArr[e].x == FireArr[t].x && xotakerArr[e].y == FireArr[t].y) {
                xotakerArr.splice(e, 1);
                break;
            }
        }
        for (var d in GishatichArr) {
            if (GishatichArr[d].x == FireArr[t].x && GishatichArr[d].y == FireArr[t].y) {
                GishatichArr.splice(d, 1);
                break;
            }
        }
        for (var h in hunterArr) {
            if (hunterArr[h].x == FireArr[t].x && hunterArr[h].y == FireArr[t].y) {
                hunterArr.splice(h, 1);
                break;
            }
        }
    }


}