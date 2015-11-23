$(document).ready(function(){
  var list;
  var currentIndex = 5;
  var source = $("#etaList").html();
  var template3 = Handlebars.compile(source);
//back button
  var back;
  var source1 = $("#back").html();
  var template1 = Handlebars.compile(source1);
//Next button
  var ahead;
  var source2 = $("#forward").html();
  var template2 = Handlebars.compile(source2);
  // var source = $('#etaList').html();
  // var template = Handlebars.compile(source);
  // var i = 5;
  // var context = {objects:cohort.eta};
  //var html = template(context);
  // $('main').html(html);


function getInfo(){
    $.ajax({
      url:'/data/eta.json'
    }) .done(function(json){
      storeList(json);
  });
}

function storeList(data) {
  var list = data.eta;
  displayList(list);
  console.log(list);
}
// pass in list array and displays it based on INDEX
function displayList(array){
  back = currentIndex - 1;
  ahead = currentIndex + 1;
  var students = template3(array[currentIndex]);
	$('.main').html(students);
  var student1= template1(array[back]);
  $('.back').html(student1);
  var student2 = template2(array[ahead]);
  $('.forward').html(student2);

}
getInfo();

$(".forward").on('click', 'button', function(){
	currentIndex += 1;
	
  getInfo();
})




});
