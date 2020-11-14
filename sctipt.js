var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");

//Time Blocks Data Attributes
$("#7Block").attr("data-time", moment("7:00 am", "h:mm a").format("HH"));
$("#8Block").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
$("#9Block").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Block").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Block").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Block").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#13Block").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#14Block").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#15Block").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#16Block").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#17Block").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
$("#18Block").attr("data-time", moment("6:00 pm", "h:mm a").format("HH"));
$("#19Block").attr("data-time", moment("7:00 pm", "h:mm a").format("HH"));
$("#20Block").attr("data-time", moment("8:00 pm", "h:mm a").format("HH"));

$(document).ready(function(){