//this is the dropdown menu

$('.dropdown').hide();   

$('.plus').click((e) => {
	e.preventDefault();

	if ($('.dropdown').is(':visible')){
		$('.dropdown').toggle("hide")
	}
	else{
		$('.dropdown').toggle("show")
	}

});

//cancel button and form clearing

$('.cancel').click((e) => {
	e.preventDefault();

	$('.dropdown').toggle("hide")
	document.forms[0].reset();

});

//error validation 

function validate(e){
	var foundError = false;
	var $imageUrl = $('.image-url').val();
	 console.log($imageUrl)
	var $imageCaption = $('.image-caption').val();

	if ($imageUrl === ""){
		$(".url-error").html("Please enter a URL.");
		console.log($imageUrl)
		return foundError = true;
	}else if ($imageUrl === "https://"){
		$(".url-error").html("Please enter a valid URL.");
		return foundError = true;
	} 

}


//this is grabbing the input url and sending it to heroku


$('.add-image').click((e) => {
				e.preventDefault();
				var hasError = validate(); //validate before post image so you're not posting the error
				 if (hasError === true){
				 	console.log('there was an error')
				 }

				var imageUrl = $('.image-url').val();
				var imageCaption = $('.image-caption').val();

				  if (hasError !== true){
				  	postImage(imageUrl, imageCaption);

				  }

				

				

				
				
				
			});

collectionUrl = 'https://small-tiyfe.herokuapp.com/collections/maria-ig';

//this ajax request  is posting to heroku and on success grabbing the image/caption and posting to the page while resetting the form
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

	
			document.forms[0].reset();
			//$('.dropdown').toggle("hide");

		},


		
		error: function(error){
			console.log(error);
		} 

	};

	$.ajax(addImages);
}

//this  ajax request is getting images from heroku for user to see
var ajaxSettings = {
	url: collectionUrl, 
	type: 'GET',   
	dataType: 'json',
	success: function(data){

		for (i=0; i < data.length; i++){

		//console.log(data[i]);

		var image = data[i].imageUrl;
		var caption = data[i].imageCaption;
		//console.log(caption);

		 $('<img src="' + image + '">').appendTo('.image-place');
		
		 $("<div class='new-div'>" + caption + "</div>").appendTo('.image-place');

			
};

},

	error: function(){
	},
	
}

$.ajax(ajaxSettings);