$(function () {

    $("#ac").click(function() {
        $("#ca-ball").addClass("ball-blue");
    });

    $("#hc").click(function() {
        if($("#ca-ball").hasClass("ball-blue")) alert("찾았다!");
        else alert("없다!");
    })

    $("#rc").click(function() {
        $("#ca-ball").removeClass("ball-blue");
    })

    $("#tc").click(function() {
        $("#ca-ball").toggleClass("ball-blue");
    })

    $("#tc2").click(function() {
        $("#ca-ball").toggleClass("ball-blue ball-red");
        //$("#ca-ball").toggleClass(["ball-blue", "ball-red"]);
    })

    $("#tc3").click(function() {
        let state = $("#ca-ball").hasClass("ball-red");
        $("#ca-ball").toggleClass("ball-flat", state);
    })

    $("#tc4").click(function() {
        let state = $("#ca-ball").hasClass("ball-blue");
        $("#ca-ball").toggleClass(function() {
            if(state) return "ball-flat";
            else return "ball-large";
        });
    })
});
