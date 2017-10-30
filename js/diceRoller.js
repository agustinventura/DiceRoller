var dices = 1;

function init() {
    $("#dices").text(dices);
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

function decreaseDices() {
    if (dices > 1) {
        dices--;
        $("#dices").text(dices);
    }
}

function increaseDices() {
    dices++;
    $("#dices").text(dices);
}

function dicesSet() {
    document.addEventListener('rotarydetent', function (ev) {
        workRotaryControl(ev);
    });
    tau.changePage("#workTimePage");
}

$(document).ready(function () {
    init();
});
