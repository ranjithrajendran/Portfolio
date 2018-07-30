$(document).ready(function() {
    $(location).attr('href', '#top')
    $(".card").show();
    $(function() {
        $("#tabs").tabs();
    });
    $("#edu").click(function() {
        $(".study").css({ height: "700px" });
        $("#education").hide();
        $(".card").hide();
        $(".mark").css({ width: "25px" });
        $("#education").slideDown();
        $(".card").eq(0).slideDown(1500);
        $(".mark").eq(0).delay(1000).animate({ width: "121.25px" }, 1000);
        $(".card").eq(1).delay(1000).slideDown(1500);
        $(".mark").eq(1).delay(2000).animate({ width: "113.75px" }, 1000);
        $(".card").eq(2).delay(2000).slideDown(1500);
        $(".mark").eq(2).delay(3000).animate({ width: "93.75px" }, 1000);
    });
    $(".professionalSkills h3").click(function() {
        $(".professionalSkills h3").css({ border: "0", outline: "0" });
    });
    $("#tabs li").click(function() {
        $("#tabs a").css({ border: "0", outline: "0" });
        $("#tabs li").css({ border: "0", outline: "0" });
    });
});