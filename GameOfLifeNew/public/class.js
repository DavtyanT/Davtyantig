

class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.index = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.multiply = 0;

    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'summer') {

            if (this.multiply >= 3 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }
        else if (weather === 'winter') {

            if (this.multiply >= 26 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }

        else if (weather === 'autumn') {

            if (this.multiply >= 11 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }

        else if (weather === 'spring') {

            if (this.multiply >= 6 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }

        else if (this.multiply >= 4 && norVandak) {

            if (this.multiply >= 5 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}


class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 2;
        this.moveTact = 0;

    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'summer') {
            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }
        else if (weather === 'autumn') {
            if (this.moveTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'winter') {
            if (this.moveTact >= 13 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'spring') {
            if (this.moveTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }


    }


    utel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(1));
        if (weather === 'winter') {
            if (this.moveTact >= 11 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
        else {

            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
    }
    bazmanalXt() {
        this.moveTact++;
        var norVandak = random(this.yntrelVandak(2.1));
        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            if(Math.random() < 0.5){

                matrix[norVandak[1]][norVandak[0]] = 2;
                this.moveTact = 0;
                
            }
            else{

                matrix[norVandak[1]][norVandak[0]] = 2.1;
                this.moveTact = 0;
            }
        }

        this.energy = 0;
    }

    mernel() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;

    }

}

class XotakerEg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 2.1;
        this.moveTact = 0;

    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'summer') {
            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }
        else if (weather === 'autumn') {
            if (this.moveTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'winter') {
            if (this.moveTact >= 13 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'spring') {
            if (this.moveTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }


    }


    utel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(1));
        if (weather === 'winter') {
            if (this.moveTact >= 11 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
        else {

            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
    }
    bazmanalXt() {
        this.moveTact++;
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            
            this.moveTact = 0;
        }

        this.energy = 0;
    }

    mernel() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;

    }

}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 3;
        this.gishTact = 0;

    }

    stanalNorKordinatnerGsh() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerGsh();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvelGsh() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakxt = random(this.yntrelVandak(1));
        if (weather === 'summer') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
        if (weather === 'autumn') {

            if (this.gishTact >= 6 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 6 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'winter') {

            if (this.gishTact >= 12 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 12 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'spring') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
    }

    utelgs() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(2));

        var norVandakre = random(this.yntrelVandak(2));
        if (weather === 'winter') {

            if (this.gishTact >= 10 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 10 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
        else {

            if (this.gishTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 5 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
    }
    bazmanalGsh() {
        var norVandak = random(this.yntrelVandak(3.1));
        this.gishTact = 0;
        if (norVandak) {

        var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
        GishatichArr.push(norGishatich);
            if(Math.random() < 0.5){

                matrix[norVandak[1]][norVandak[0]] = 3;
                this.gishTact = 0;
            }
            else{

                matrix[norVandak[1]][norVandak[0]] = 3.1;
                this.gishTact = 0;
            }
        }

        this.energy = 0;
    }

    mernelGsh() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;
        this.gishTact = 0;

    }

}

class GishatichEg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 3.1;
        this.gishTact = 0;

    }

    stanalNorKordinatnerGsh() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerGsh();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvelGsh() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakxt = random(this.yntrelVandak(1));
        if (weather === 'summer') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
        if (weather === 'autumn') {

            if (this.gishTact >= 6 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 6 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'winter') {

            if (this.gishTact >= 12 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 12 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'spring') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
    }

    utelgs() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(2));

        var norVandakre = random(this.yntrelVandak(2.1));
        if (weather === 'winter') {

            if (this.gishTact >= 10 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 10 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandakre[1]][norVandakre[0]] = 3.1;

                this.x = norVandakre[0];
                this.y = norVandakre[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
        else {

            if (this.gishTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 5 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandakre[1]][norVandakre[0]] = 3.1;

                this.x = norVandakre[0];
                this.y = norVandakre[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
    }
    bazmanalGsh() {
        var norVandak = random(this.yntrelVandak(3));
        if (norVandak) {
            this.gishTact = 0;
        }

        this.energy = 0;
    }

    mernelGsh() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;
        this.gishTact = 0;

    }

}

class Zombi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 4;
        this.zombiTact = 0;

    }

    stanalNorKordinatnerZombi() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerZombi();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvelZombi() {
        this.zombiTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakzmb = random(this.yntrelVandak(1));
        if (weather === 'winter') {

            if (this.zombiTact >= 27 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;
            }
            else if (this.zombiTact >= 27 && norVandakzmb) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakzmb[1]][norVandakzmb[0]] = 4;

                this.x = norVandakzmb[0];
                this.y = norVandakzmb[1];
                this.zombiTact = 0;
            }
        }
        else {
            if (this.zombiTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;
            }
            else if (this.zombiTact >= 7 && norVandakzmb) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakzmb[1]][norVandakzmb[0]] = 4;

                this.x = norVandakzmb[0];
                this.y = norVandakzmb[1];
                this.zombiTact = 0;
            }
        }
    }

    utelZombi() {
        this.zombiTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakZombi = random(this.yntrelVandak(3));
        var norVandakZombi2 = random(this.yntrelVandak(3.1));
        var norVandakZombihnt = random(this.yntrelVandak(5));
        if (weather === 'winter') {

            if (this.zombiTact >= 24 && norVandak) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak[0], norVandak[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak[1]][norVandak[0]] = 4;
            }
            if (this.zombiTact >= 24 && norVandak2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak2[1]][norVandak2[0]] = 4;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak2[0], norVandak2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak2[1]][norVandak2[0]] = 4;
            }
            if (this.zombiTact >= 24 && norVandakZombi) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi[0], norVandakZombi[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;
            }
            if (this.zombiTact >= 24 && norVandakZombi2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi2[0], norVandakZombi2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;
            }

            if (this.zombiTact >= 24 && norVandakZombihnt) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombihnt[0], norVandakZombihnt[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;
            }
            else {
                this.sharjvelZombi();
            }
        }
        else {

            if (this.zombiTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak[0], norVandak[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak[1]][norVandak[0]] = 4;
            }
            if (this.zombiTact >= 7 && norVandak2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak2[1]][norVandak2[0]] = 4;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak2[0], norVandak2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak2[1]][norVandak2[0]] = 4;
            }
            if (this.zombiTact >= 7 && norVandakZombi) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi[0], norVandakZombi[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;
            }
            if (this.zombiTact >= 7 && norVandakZombi2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi2[0], norVandakZombi2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;
            }

            if (this.zombiTact >= 7 && norVandakZombihnt) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombihnt[0], norVandakZombihnt[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;
            }
            else {
                this.sharjvelZombi();
            }
        }
    }

}


class Hunter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 5;
        this.hunterTact = 0;

    }

    stanalNorKordinatnerHnt() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerHnt();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvelhnt() {
        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakhnt = random(this.yntrelVandak(1));
        if(weather === 'winter'){

        if (this.hunterTact >= 18 && norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.hunterTact = 0;
            this.energy--;
        }
        else if (this.hunterTact >= 18 && norVandakhnt) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakhnt[1]][norVandakhnt[0]] = 5;

            this.x = norVandakhnt[0];
            this.y = norVandakhnt[1];
            this.hunterTact = 0;
            this.energy--;
        }
    }
    else{

        if (this.hunterTact >= 6 && norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.hunterTact = 0;
            this.energy--;
        }
        else if (this.hunterTact >= 6 && norVandakhnt) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakhnt[1]][norVandakhnt[0]] = 5;

            this.x = norVandakhnt[0];
            this.y = norVandakhnt[1];
            this.hunterTact = 0;
            this.energy--;
        }
    }
    }

    krakel() {

        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakhn = random(this.yntrelVandak(3));
        var norVandakhn2 = random(this.yntrelVandak(3.1));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak, 1);
        }

        else if (norVandak2) {
            matrix[norVandak2[1]][norVandak2[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandak2, 1);
        }
        else if (norVandakhn2) {
            matrix[norVandakhn2[1]][norVandakhn2[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandakhn2, 1);
        }
        else if (norVandakhn) {
            matrix[norVandakhn[1]][norVandakhn[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandakhn, 1);
        }
        else {
            this.sharjvelhnt();
        }
    }

}



class Fire {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 6;
        this.firetact = 0;

    }

    stanalNorKordinatnerFire() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerFire();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvelFire() {
        this.firetact++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'winter') {

            if (this.firetact >= 27 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;
            }
        }
        else {
            if (this.firetact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;
            }
        }
    }

    utelFire() {
        this.firetact++;
        var norVandakxot = random(this.yntrelVandak(1));
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakZombi = random(this.yntrelVandak(3));
        var norVandakZombi2 = random(this.yntrelVandak(3.1));
        var norVandakZombihnt = random(this.yntrelVandak(5));
        if (weather === 'winter') {

            if (this.firetact >= 24 && norVandakxot) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;

                this.x = norVandakxot[0];
                this.y = norVandakxot[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakxot[0], norVandakxot[1]);
                FireArr.push(norFire);
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;
            } 
            if (this.firetact >= 24 && norVandak) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak[0], norVandak[1]);
                FireArr.push(norFire);
                matrix[norVandak[1]][norVandak[0]] = 6;
            }
            if (this.firetact >= 24 && norVandak2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak2[1]][norVandak2[0]] = 6;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak2[0], v[1]);
                FireArr.push(norFire);
                matrix[norVandak2[1]][norVandak2[0]] = 6;
            }
            if (this.firetact >= 24 && norVandakZombi) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi[0], norVandakZombi[1]);
                FireArr.push(norFire);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;
            }
            if (this.firetact >= 24 && norVandakZombi2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 6;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi2[0], norVandakZombi2[1]);
                FireArr.push(norFire);
                matrix[v[1]][norVandakZombi2[0]] = 6;
            }

            if (this.firetact >= 24 && norVandakZombihnt) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombihnt[0], norVandakZombihnt[1]);
                FireArr.push(norFire);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;
            }
            else {
                this.sharjvelFire();
            }
        }
        else {
            if (this.firetact >= 7 && norVandakxot) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;

                this.x = norVandakxot[0];
                this.y = norVandakxot[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakxot[0], norVandakxot[1]);
                FireArr.push(norFire);
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;
            }
            if (this.firetact >= 7 && norVandak) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak[0], norVandak[1]);
                FireArr.push(norFire);
                matrix[norVandak[1]][norVandak[0]] = 6;
            }
            if (this.firetact >= 7 && norVandak2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak2[1]][norVandak2[0]] = 6;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak2[0], norVandak2[1]);
                FireArr.push(norFire);
                matrix[norVandak2[1]][norVandak2[0]] = 6;
            }
            if (this.firetact >= 7 && norVandakZombi) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi[0], norVandakZombi[1]);
                FireArr.push(norFire);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;
            }
            if (this.firetact >= 7 && norVandakZombi2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 6;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi2[0], norVandakZombi2[1]);
                FireArr.push(norFire);
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 6;
            }

            if (this.firetact >= 7 && norVandakZombihnt) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.firetact = 0;
//inchi es mtel kodi mej. Chlini mi ban es stugum. De verjacru. Ari du indz anckacru ha
                var norFire = new Fire(norVandakZombihnt[0], norVandakZombihnt[1]);
                FireArr.push(norFire);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;
            }
            else {
                this.sharjvelFire();
            }
        }
    }

}

class Trip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 9;
        this.hunterTact = 0;

    }

    stanalNorKordinatnerHnt() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerHnt();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    krakel() {

        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakhn = random(this.yntrelVandak(3));
        var norVandakhn2 = random(this.yntrelVandak(3.1));
        var norVandakhn3 = random(this.yntrelVandak(5));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak, 1);
        }

        else if (norVandak2) {
            matrix[norVandak2[1]][norVandak2[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak2, 1);
        }
        else if (norVandakhn2) {
            matrix[norVandakhn2[1]][norVandakhn2[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandakhn2, 1);
        }
        else if (norVandakhn) {
            matrix[norVandakhn[1]][norVandakhn[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandakhn, 1);
        }
        else if (norVandakhn3) {
            matrix[norVandakhn3[1]][norVandakhn3[0]] = 0;

            this.hunterTact = 0;
            hunterArr.splice(norVandakhn3, 1);
        }
    }

}