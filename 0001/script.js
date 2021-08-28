function getRandomItem(fromItems) {
    return fromItems[Math.floor(Math.random() * fromItems.length)];
}

var foreGroundHexColor, backGroundHexColor, centerPointX, centerPointY, timeOfDay;

function setup() {
    var LIGHT_PALETTE = ["#809BCA", "#FEB8B7", "#ECC3AF", "#FEE2CD", "#E6E8C3", "#FBE99E", "#D76767", "#DA9E6E", "#A3837D", "#958C94", "#A6A080", "#C9C4AF", "#DA9E6E", "#A3837D", "#809BCA", "#EBAFAA", "#D6E6E4", "#F4DB89", "#EBD2AC", "#B7C5B3", "#DAD5DC"];
    var DARK_PALETTE = ["#AC3F3D", "#935B45", "#E1766F", "#E2AB5C", "#7077A5", "#B8AC87", "#B77045", "#6D6362", "#B49545", "#94575B", "#94575B", "#403E4D", "#5A5265", "#74938E", "#695641", "#5E824F", "#305089", "#803A46", "#92564D"];

    createCanvas(400, 400);

    var r = 200;
    var h = 23

    centerPointX = r + (r * Math.cos((h / 24) * (2 * Math.PI) + (Math.PI * 0.5)));
    centerPointY = r + ((r * 0.5) * Math.sin((h / 24) * (2 * Math.PI) + (Math.PI * 0.5)));
    timeOfDay = centerPointY < 200 ? "AM" : "PM";

    switch (timeOfDay) {
        case "AM":
            foreGroundHexColor = getRandomItem(DARK_PALETTE);
            backGroundHexColor = getRandomItem(LIGHT_PALETTE);
            break;
        case "PM":
            backGroundHexColor = getRandomItem(DARK_PALETTE);
            foreGroundHexColor = getRandomItem(LIGHT_PALETTE);
            break;
    }
}

function draw() {
    background(backGroundHexColor);
    noStroke();
    fill(foreGroundHexColor);
    ellipse(centerPointX, centerPointY, 400, 400);
    fill("rgba(0,0,0,0)");
    stroke("white")
    strokeWeight(30)
    rect(0, 0, 400, 400, 30);
}