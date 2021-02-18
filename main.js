polar_bear=[];

function submit(){
    var display_student=[];
    for (var j=1;j<=4;j++)
    {
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log (name);
        polar_bear.push(name);
    }
    console.log (polar_bear);
    var length=polar_bear.length;
    console.log (length);
    for (var o=0;o<length;o++) {
        display_student.push("<h4>NAME - "+ polar_bear[o] + "</h4>");
         console.log(polar_bear[o]);
    }
    console.log (display_student);
    document.getElementById("display_name_with_commas").innerHTML = display_student;
     var remove_commas = display_student.join(" ");
      console.log(remove_commas); 
      document.getElementById("display_name_without_commas").innerHTML = remove_commas;
       document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() { polar_bear.sort(); console.log(polar_bear); var display_student_array_sorting = []; var lenght_of_name_of_students_array = name_of_the_student_array.length; console.log(lenght_of_name_of_students_array); for (var k = 0; k < lenght_of_name_of_students_array; k++) { display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>"); console.log(display_student_array_sorting); }