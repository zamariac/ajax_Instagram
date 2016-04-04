//this is the dropdown menu

$('.dropdown').hide();   

$('.plus').click(function(e){
	e.preventDefault();

	if ($('.dropdown').is(':visible')){
		$('.dropdown').toggle("hide")
	}
	else{
		$('.dropdown').toggle("show")
	}

});

//this is grabbing the input url and sending it to heroku

$('.add-image').click(function(e){
				e.preventDefault();
				
				var imageUrl = $('.image-url').val();
				var imageCaption = $('.image-caption').val();

				postImage(imageUrl, imageCaption);
			
				
			});

collectionUrl = 'http://small-tiyfe.herokuapp.com/collections/maria-ig';

//this ajax request  is posting to heroku
function postImage(image, caption){
	var addImages = {
		url: collectionUrl,
		type: 'POST',
		dataType: 'json',
		data: {imageUrl:image, imageCaption:caption},
		success: function(response){
			var imageSuccess = response.imageUrl;
			var imageCaptionSuccess = response.imageCaption;

			$("<div class='new-div'>" + imageCaptionSuccess + "</div>").prependTo('.image-place');
			$('<img src="' + imageSuccess + '">').prependTo('.image-place');

			$('.dropdown').toggle("hide")
			document.forms[0].reset();


			


			console.log(imageSuccess);
			console.log(imageCaptionSuccess);
		},


		
		error: function(error){
			console.log(error);
		} 

	};
	console.log(image);

	$.ajax(addImages);
}

//this  ajax request is getting images from heroku for user to see
var ajaxSettings = {
	url: collectionUrl, 
	type: 'GET',   
	dataType: 'json',
	success: function(data){
		//var container = $('.image-place');
		//var textBox = $('.image-caption-place');


		console.log(data);

		for (i=0; i < data.length; i++){

		console.log(data[i]);

		var image = data[i].imageUrl;
		var caption = data[i].imageCaption;
		console.log(caption);

		 $('<img src="' + image + '">').appendTo('.image-place');
		
		 $("<div class='new-div'>" + caption + "</div>").appendTo('.image-place');

			
};


},


	error: function(){
	},
	
}

$.ajax(ajaxSettings);