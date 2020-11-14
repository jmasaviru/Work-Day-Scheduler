var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");

//Time Blocks Data Attributes
$("#9Block").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Block").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Block").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Block").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Block").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Block").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Block").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Block").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Block").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

$(document).ready(function(){

    //get input events from stored local data
    //calls function
    renderEvents();

    //set current day
    var currentDay = moment().format("dddd,MMMM Do");
    $("#currentDay").text(currentDay);

    //change time block colors
    for (var i=1; i <=12; i++){
        var inputTime = $("#" + i + "Block").attr("data-time");
        var inputTimeInt = parseInt(inputTime);

        //if time block is current time
        if(currentTimeInt === inputTimeInt){
            $("#" + i + "Block").addClass("present");
        }

        //if time block is in the past
        if(currentTimeInt > inputTimeInt){
            $("#" + i + "Block").addClass("past");
        }

          //if time block is in the future
          if(currentTimeInt < inputTimeInt){
            $("#" + i + "Block").addClass("future");
        }
    }
    
    //button hover function
    saveBtn.on("mouseenter", function(){
        $(this).addClass("hover");
    });
    saveBtn.on("mouseleave", function(){
        $(this).removeClass("hover");
    });

    // button click to save event
    saveBtn.on("click", function(){
        var hour = $(this).attr("data-hour");
        var event = $("#" + hour + "Block").val();
        //save event to local storage
        localStorage.setItem(hour, event);
    });

    //retrieve stored local event input 
    function renderEvents(){
        for (var i=1; i <=12; i++){
            $("#" + i +"Block").val(localStorage.getItem(i));
        }
    }

});