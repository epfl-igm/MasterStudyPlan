var $  = require( 'jquery' );
var dt = require( 'datatables.net' )();

$(document).ready(function() {
  console.log("Document loaded");
  $.getJSON("data/courses.json", function(data) {
    var courses = [];
    $.each(data, function(index, course) {
      //console.log(course);
      var newRow = '<tr><td>' + course.Cours + '</td><td>' + course.Code + '</td><td>' + course.Enseignant + '</td><td>' + course.Sem + '</td><td>' + course.ECTS + '</td><td>' + course.Exam + '</td></tr>';
      $(newRow).appendTo($('#coursesTable #coursesList'));
    })
  })
  .done(function() {
    $('#coursesTable').DataTable();
  });
});
