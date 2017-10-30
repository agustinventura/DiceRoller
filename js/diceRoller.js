var dices = 1;
var sides = 6;

function init() {
    $("#dices").text(dices);
    $(".left-arrow").hide();
    $("#decreaseDicesText").hide();
    $("#setDices").click(function () {
        dicesSet();
    });
    $("#decreaseDices").click(function () {
        decreaseDices();
    });
    $("#increaseDices").click(function () {
        increaseDices();
    });
    document.addEventListener('rotarydetent', function (ev) {
        dicesRotaryControl(ev);
    });
}

function dicesRotaryControl(ev) {
    var direction = ev.detail.direction;
    if (direction === "CW") {
        increaseDices();
    } else {
        decreaseDices();
    }
}

function sidesRotaryControl(ev) {
    var direction = ev.detail.direction;
    if (direction === "CW") {
        increaseSides();
    } else {
        decreaseSides();
    }
}

function decreaseDices() {
    if (dices > 1) {
        dices--;
        $("#dices").text(dices);
    }
    if (dices == 1) {
        $(".left-arrow").hide();
        $("#decreaseDicesText").hide();
    }
}

function increaseDices() {
    if (dices == 1) {
        $(".left-arrow").show();
        $("#decreaseDicesText").show();
    }
    dices++;
    $("#dices").text(dices);
}

function decreaseSides() {
    switch (sides) {
        case 6:
            sides = 4;
            $("#increaseSidesText").text("6");
            $(".left-arrow").hide();
            $("#decreaseSidesText").hide();
            break;
        case 8:
            sides = 6;
            $("#increaseSidesText").text("8");
            $("#decreaseSidesText").text("4");
            break;
        case 10:
            sides = 8;
            $("#increaseSidesText").text("10");
            $("#decreaseSidesText").text("6");
            break;
        case 12:
            sides = 10;
            $("#increaseSidesText").text("12");
            $("#decreaseSidesText").text("8");
            break;
        case 20:
            sides = 12;
            $("#increaseSidesText").text("20");
            $("#decreaseSidesText").text("10");
            $("#increaseSidesText").show();
            $(".right-arrow").show();
            break;
        default:
            break;
    }
    $("#sides").text(sides);
}

function increaseSides() {
    switch (sides) {
        case 4:
            sides = 6;
            $("#increaseSidesText").text("8");
            $("#decreaseSidesText").text("4");
            $(".left-arrow").show();
            $("#decreaseSidesText").show();
            break;
        case 6:
            sides = 8;
            $("#increaseSidesText").text("10");
            $("#decreaseSidesText").text("6");
            break;
        case 8:
            sides = 10;
            $("#increaseSidesText").text("12");
            $("#decreaseSidesText").text("8");
            break;
        case 10:
            sides = 12;
            $("#increaseSidesText").text("20");
            $("#decreaseSidesText").text("10");
            break;
        case 12:
            sides = 20;
            $("#increaseSidesText").hide();
            $(".right-arrow").hide();
            $("#decreaseSidesText").text("12");
            break;
        default:
            break;
    }
    $("#sides").text(sides);
}

function dicesSet() {
    document.addEventListener('rotarydetent', function (ev) {
        sidesRotaryControl(ev);
    });
    $("#decreaseSides").click(function () {
        decreaseSides();
    });
    $("#increaseSides").click(function () {
        increaseSides();
    });
    $("#sides").text(sides);
    tau.changePage("#sidesPage");
}

$(document).ready(function () {
    init();
});
