$(function () { // $(document).ready(function() {}) 와 같다.

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
        //$("#ca-ball").toggleClass(["ball-blue", "ball-red"]); 배열도 가능
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

    $("#btn-a-1").click(function() {
        let opt = $("#selectbox option:selected").val();
        let temp = $("#ga-ball").attr(opt);
        $(this).attr("value", `attr("${opt}")`);
        $("#ga-result").text(temp);
    })

    $("#btn-a-2").click(function() {
        $("#ga-ball").attr("class", "ball-blue");
    })

    $("#btn-a-3").click(function() {
        $("#ga-ball").attr("class", "ball ball-blue");
    })

    $("#btn-a-4").click(function() {
        $("#ga-ball").removeAttr("class");
    })

    $("#checkbox").click(function() {
        $("#prop-result").text("attr(\"checked\") => " + $(this).attr("checked"));
        $("#prop-result2").text("prop(\"checked\") => " + $(this).prop("checked"));
    })

    $("#btn-p-1").click(function() {
        $("#checkbox2").removeProp("checked");
        $("#checkbox2").removeProp("프로퍼티");
    })
    $("#btn-p-2").click(function() {
        $("#checkbox2").prop("checked", true);
        $("#checkbox2").prop("프로퍼티", 0);
    })
    let color = $("#style-square").css("background");
    //  $("#style-square").css("background", "black");
    let width = $("#style-square").width();
    let innerWidth = $("#style-square").innerWidth(); // padding 포함
    let outerWidth = $("#style-square").outerWidth(); // border 포함
    let realOuterWidth = $("#style-square").outerWidth(true); // margin 포함 
    let height = $("#style-square").height();
    
    $("#style-result").text(realOuterWidth);
 

});
