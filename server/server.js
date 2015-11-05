var Games = new Meteor.Collection("games");

Meteor.startup(function () {
    if (Games.find().count() === 0)
    {
        Meteor.create_game();
    }
});

Meteor.methods({
    refersh_game: function () {
        console.log("refreshing");

        Games.update(this._id, { player1SelectedItem: "", player2SelectedItem: "", whoWon: ""})
    },
    create_game: function () {
        console.log("CREATING Game");

        Games.insert({
            player1SelectedItem: "",
            player2SelectedItem: "",
            whoWon: ""
        });
        
        return Games;
    }
});