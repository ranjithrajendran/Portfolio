$(document).ready(function() {
    $(location).attr('href', '#top')
    $(".card").show();
    $(function() {
        $("#tabs").tabs();
    });
    $("#navTop").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });
    $("#navProfession").click(function() {
        $(".profession div").hide();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#profession").offset().top
        }, 1000);
        $(".profession div").delay(1000).fadeIn(1000);
    });
    $("#navEducation").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#education").offset().top
        }, 1000);
        $(".study").css({ height: "766px" });
        $(".card").hide();
        $(".mark").css({ width: "25px" });
        $(".card").eq(0).delay(1000).slideDown(1500);
        $(".mark").eq(0).delay(2000).animate({ width: "121.25px" }, 1000);
        $(".card").eq(1).delay(2000).slideDown(1500);
        $(".mark").eq(1).delay(3000).animate({ width: "113.75px" }, 1000);
        $(".card").eq(2).delay(3000).slideDown(1500);
        $(".mark").eq(2).delay(4000).animate({ width: "93.75px" }, 1000);
    });
    $("#navSkills").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
        $("#accordion").hide();
        $("#accordion").delay(1000).slideDown(1000);
    });
    $("#navContact").click(function() {
        $(".contact img").css({ width: "30px", height: "30px" });
        $(".contact span").hide();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
        $(".contact img").delay(1000).animate({ width: "60px", height: "60px" }, 500);
        $(".contact span").delay(1500).fadeIn();
    });
    $("#tabs li").eq(0).click(function() {
        $("#tabs-1").hide();
        $("#tabs-1").fadeIn(800);
    });
    $("#tabs li").eq(1).click(function() {
        $("#tabs-2").hide();
        $("#tabs-2").fadeIn(800);
    });
    $("#tabs li").eq(2).click(function() {
        $("#tabs-3").hide();
        $("#tabs-3").fadeIn(800);
    });
    $("header a").click(function() {
        $("header a").removeClass("colo");
        $(this).addClass("colo");
    });
    $(".heading li").click(function() {
        $("a").attr("id", "color1");
        $(this).addClass("color1");
    });
});