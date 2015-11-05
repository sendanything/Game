
var Games = new Meteor.Collection("games");

Template.player1.helpers({
    game: function () {
        var g = Games.findOne();
        return g;
    }
});

Template.player1.events({
    'click button.selected': function (e) {
        e.preventDefault();

        var id = $(event.target).attr("id");
        $(".selected").hide();
        Games.update(this._id, { $set: { player1SelectedItem: id } })

        $(".play1").show();

        var player2Val = Games.findOne().player2SelectedItem;
        console.log(player2Val)
        if (player2Val != "") {                                       
            check(this._id, id, player2Val);
            $(".play2").show();
        }
    }
});

Template.player2.helpers({
    game: function () {
        return Games.findOne();
    }
});

Template.player2.events({
    'click button.selected': function (e) {
        e.preventDefault();

        var id = $(event.target).attr("id");
        $(".selected").hide();        
        Games.update(this._id, { $set: { player2SelectedItem: id } })

        $(".play2").show();
        var player1Val = Games.findOne().player1SelectedItem;
        if (player1Val != "") {
            check(this._id, player1Val, id);
            $(".play1").show();
        }
    }
});


function check(id, player1Val, player2Val) {    

    if (player2Val == player1Val)
        Games.update(id, { $set: { whoWon: "Its a tie" } })

    if (player2Val == "Rock" && player1Val == "Scissors")
        Games.update(id, { $set: { whoWon: "Player2 Won!" } })

    if (player2Val == "Scissors" && player1Val == "Rock")
        Games.update(id, { $set: { whoWon: "Player1 Won!" } })

    if (player2Val == "Paper" && player1Val == "Scissors")
        Games.update(id, { $set: { whoWon: "Player1 Won!" } })

    if (player2Val == "Scissors" && player1Val == "Paper")
        Games.update(id, { $set: { whoWon: "Player2 Won!" } })

    if (player2Val == "Rock" && player1Val == "Paper")
        Games.update(id, { $set: { whoWon: "Player1 Won!" } })

    if (player2Val == "Paper" && player1Val == "Rock")
        Games.update(id, { $set: { whoWon: "Player1 Won!" } })

    console.log("Game END");

}
