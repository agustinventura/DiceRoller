var dices = 1;
var sides = 6;
var results = [];

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
    $("#decreaseSides").click(function () {
        decreaseSides();
    });
    $("#increaseSides").click(function () {
        increaseSides();
    });
    $("#setSides").click(function () {
        sidesSet();
    });
    $("#rollAgain").click(function () {
        rollAgain();
    });
    $("#beginning").click(function () {
        goDices();
    });
    document.addEventListener('rotarydetent', function (ev) {
        dicesRotaryControl(ev);
    });
    $("#menu").click(function () {
        showMenu();
    });
    window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {
			var activePageId = tau.activePage.id;
			if( activePageId === "dicesPage" ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	} );
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
            $("#increaseSidesText").html("6&gt;");
            $(".left-arrow").hide();
            $("#decreaseSidesText").hide();
            break;
        case 8:
            sides = 6;
            $("#increaseSidesText").html("8&gt;");
            $("#decreaseSidesText").html("&lt;4");
            break;
        case 10:
            sides = 8;
            $("#increaseSidesText").html("10&gt;");
            $("#decreaseSidesText").html("&lt;6");
            break;
        case 12:
            sides = 10;
            $("#increaseSidesText").html("12&gt;");
            $("#decreaseSidesText").html("&lt;8");
            break;
        case 20:
            sides = 12;
            $("#increaseSidesText").html("20&gt;");
            $("#decreaseSidesText").html("&lt;10");
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
            $("#increaseSidesText").html("8&gt;");
            $("#decreaseSidesText").html("&lt;4");
            $(".left-arrow").show();
            $("#decreaseSidesText").show();
            break;
        case 6:
            sides = 8;
            $("#increaseSidesText").html("10&gt;");
            $("#decreaseSidesText").html("&lt;6");
            break;
        case 8:
            sides = 10;
            $("#increaseSidesText").html("12&gt;");
            $("#decreaseSidesText").html("&lt;8");
            break;
        case 10:
            sides = 12;
            $("#increaseSidesText").html("20&gt;");
            $("#decreaseSidesText").html("&lt;10");
            break;
        case 12:
            sides = 20;
            $("#increaseSidesText").hide();
            $(".right-arrow").hide();
            $("#decreaseSidesText").html("&lt;12");
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
    $("#sides").text(sides);
    tau.changePage("#sidesPage");
}

function sidesSet() {
    roll();
    showThrows();
    tau.changePage("#resultsPage");
}

function roll() {
    results = [];
    for (i = 0; i < dices; i++) {
        var randomNumber = Math.floor(Math.random() * sides) + 1;
        results.push(randomNumber);
    }
}

function showThrows() {
	$(".ui-listview").empty();
    for (i = 0; i < results.length; i++) {
        $(".ui-listview").append("<li>" + results[i] + "</li>");
    }
}

function rollAgain() {
    $(".ui-listview").empty();
    tau.closePopup();
    roll();
    showThrows();
}

function goDices() {
    tau.closePopup();
    dices = 1;
    sides = 6;
    tau.changePage("#dicesPage");
}

function showMenu() {
    tau.openPopup("#menuPopup");
}

$(document).ready(function () {
    init();
});
