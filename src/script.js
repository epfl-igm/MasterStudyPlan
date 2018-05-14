var $ = require( 'jquery' );
//require( 'datatables.net' )();
var dt = require( 'datatables.net-bs4' )();
//require( 'datatables.net-fixedheader-bs4' )();
//require( 'datatables.net-responsive-bs4' )();
//require( 'datatables.net-scroller-bs4' )();

$(document).ready(function() {
  // Make sure script is loaded
  console.log("Document loaded");

  // Define some variables
  var coursesTable = $('#coursesTable')
  var coursesTableAPI // Will contain DataTables API for courses

  // Populate table and start DataTables when it's done
  $.getJSON("data/courses.json", function(data) {
    var courses = [];
    $.each(data, function(index, course) {
      //console.log(course);
      var newRow = '<tr><td>' + course.Cours + '</td><td>' + course.Code + '</td><td>' + course.Enseignant + '</td><td>' + course.Sem + '</td><td>' + course.ECTS + '</td><td>' + course.Exam + '</td></tr>';
      $(newRow).appendTo($('#coursesTable #coursesList'));
    })
  })
  .done(function() {
    coursesTable.DataTable({
      paging: false,
      scrollY: 600,
      dom: "ltir"
    })
    coursesTableAPI = coursesTable.dataTable().api()
  });

  // Custom search field
  $('#searchCourses').keyup(function(){
    coursesTableAPI.search($(this).val()).draw()
  })
});
