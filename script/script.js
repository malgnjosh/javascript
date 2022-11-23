$(function () {

    $("#ac").click(function() {
        $(".ball").addClass("ball-blue");
    });

    $("#hc").click(function() {
        if($(".ball").hasClass("ball-blue")) alert("찾았다!");
        else alert("없다!");
    })

    $("#rc").click(function() {
        $(".ball").removeClass("ball-blue");
    })

    $("#tc").click(function() {
        $(".ball").toggleClass("ball-blue");
    })
});
