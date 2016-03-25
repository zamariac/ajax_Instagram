// $('.dropdown').hide();

// $('.plus').click(function(e){
// 	e.preventDefault();

// 	if ($('.dropdown').is(':visible')){
// 		$('dropdown').hide()
// 	}
// 	else{
// 		$('.dropdown').show()
// 	}

// });

function postImages(){
	var addImages = {
		url: 'http://small-tiyfe.herokuapp.com/collections/maria-ig/',
		type: 'POST',
		dataType: 'json',
		success: function(data){
			
			

			$('.add-image').click(function(e){
				e.preventDefault();

				var imageUrl = $('.input-url');

				$('<img src="' + imageUrl + '">').load(function(){
				$(this).appendTo.$('.image-place');
				console.log(imageUrl);


					})
			})

			
		},
		
		error: function(error){
			console.log(error);
		}


	};


	$.ajax(addImages);
}


function onGetSuccess(data){
	



}

function onGetError(data){

}


var ajaxSettings = {
	url: 'http://small-tiyfe.herokuapp.com/collections/maria-ig/',
	type: 'GET',
	dataType: 'json',
	success: onGetSuccess,
	error: onGetError
};

$.ajax(ajaxSettings);