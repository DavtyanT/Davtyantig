class Grass extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
    }
    bazmanal() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
}

class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
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
        return super.yntrelVandak(ch);
    }


    sharjvel() {
        this.moveTact++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.moveTact >= 5 && norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.moveTact = 0;
            this.energy--;

        }

    }


    utel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(1));
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
    bazmanalXt() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
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
        if (this.gishTact >= 5 && norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.gishTact = 0;
            this.energy--;
        }
        else if (this.gishTact >= 5 && norVandakxt) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakxt[1]][norVandakxt[0]] = 3;

            this.x = norVandakxt[0];
            this.y = norVandakxt[1];
            this.gishTact = 0;
            this.energy--;
        }
    }

    utelgs() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(2));
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
        else {
            this.sharjvelGsh();
        }
    }
    bazmanalGsh() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            GishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }

        this.energy = 0;
    }

    mernelGsh() {

        this.energy = 0;
        matrix[this.y][this.x] = 1;
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

    utelZombi() {
        this.zombiTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandakZombi = random(this.yntrelVandak(3));
        var norVandakZombihnt = random(this.yntrelVandak(5));
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

    krakel() {

        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandakhn = random(this.yntrelVandak(3));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak, 1);
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