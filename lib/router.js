Router.configure(
{
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});


Router.route("/", {
    name: "homeIndex",
    data: function () {
        return {
            welcomeMessage : "Let the Game Begin!!!"
        }
    }    
})


Router.route("/player1", {
    name: "player1"
})



Router.route("/player2", {
    name: "player2"
})