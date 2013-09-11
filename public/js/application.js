
$(document).ready(function() {

  $('.awesomeness_teller ').on('click', function() {

  	var how_awesome = $(this).data("heading")


  	$.ajax({
  		url: '/', 
  		method: 'GET',
  	}).done(function(){
  		$("#awesomeness_holder").html(how_awesome)
  	})
  });

  $('.skill_teller').on('click', function(){
  	
  	$.ajax({	
  		url: this.url,
  		method: this.method,
      data: $(this).data("name")
  	}).done(function(server_data){
  		console.log(server_data)
  		$('.findme').text($("#skill_holder").data("name"))
  	})

  });


  $(".meal_teller").on("click", function(){

    $.ajax({
      url: '/meals',
      method: 'get',
            }).done(function(server_data){
              console.log(server_data);
              $("#meal_holder").html(meals)
      })
    })
});
