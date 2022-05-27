var confLocs = [];
var confTheta = [];
var slider;

//function setup() {
//    createCanvas(900, 800, WEBGL);
//    angleMode(DEGREES);
//
//    for (var i = 0; i < 200; i++) {
//        var randX = random(-500, 500);
//        var randY = random(-800, 0);
//        var randZ = random(-500, 500);
//        var newConf = new createVector(randX, randY, randZ);
//        confLocs.push(newConf);
//        confTheta.push(random(0, 360));
//    }
//}

//function draw() {
//    background(125);
//    angleMode(DEGREES);
//
//    var xLoc = 800 * cos(frameCount / 7);
//    var zLoc = 800 * sin(frameCount / 7);
//    camera(xLoc * Math.sqrt(2), -600, zLoc * Math.sqrt(2), 0, 0, 0, 0, 1, 0);
//    normalMaterial();
//    stroke(0);
//    strokeWeight(2);
//
//    for (var i = -400; i <= 400; i += 50) {
//        for (var j = -400; j <= 400; j += 50) {
//            push();
//
//            var distance = dist(i, 0, j, 0, 0, 0);
//            var length = 100 * sin(distance + frameCount) + 200;
//            translate(i, 0, j);
//            box(50, length, 50);
//
//            pop();
//        }
//    }
//
//    confetti();
//}

function setup() {
    createCanvas(900, 800, WEBGL);
    angleMode(DEGREES);

    slider = createSlider(0.1, 5, 1, 0.1);
    slider.position(10, 10);
    slider.style('width', '80px');

    for (var i = 0; i < 200; i++) {
        var randX = random(-500, 500);
        var randY = random(-800, 0);
        var randZ = random(-500, 500);
        var newConf = new createVector(randX, randY, randZ);
        confLocs.push(newConf);
        confTheta.push(random(0, 360));
    }
}

function draw() {
    background(125);
    angleMode(DEGREES);

    var xLoc = 800 * cos(frameCount / 7);
    var zLoc = 800 * sin(frameCount / 7);
    camera(xLoc * Math.sqrt(2), -600, zLoc * Math.sqrt(2), 0, 0, 0, 0, 1, 0);
    normalMaterial();
    stroke(0);
    strokeWeight(2);

    for (var i = -400; i <= 400; i += 50) {
        for (var j = -400; j <= 400; j += 50) {
            push();


            var distance = dist(i, 0, j, 0, 0, 0);
            var length = 100 * sin(distance + frameCount);
            length *= noise(i, j) * slider.value();
            length += 200;
            length = constrain(length, 100, 500);
            translate(i, 0, j);
            box(50, length, 50);

            pop();
        }
    }

    confetti();
}

function confetti() {
    for (var i = 0; i < confLocs.length; i++) {
        push();

        translate(confLocs[i]);
        rotateX(confTheta[i]);
        noStroke();
        fill(255);
        normalMaterial();
        plane(15, 15);
        confLocs[i].y += 1;
        confTheta[i] += 10;

        if (confLocs[i].y >= 0) {
            confLocs[i].y = -800;
        }

        pop();
    }
}
