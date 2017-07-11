$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    var quest1 = ["stomach", "mouth", "fatigue", "headache", "memory"]

    var counter = []


    counter += $("input:checkbox[name=health-symptoms]:checked").length.val();

    alert("the counter is " + counter);
  });
});
