function postImages(){
	var addImages = {
		url: 'http://small-tiyfe.herokuapp.com/collections/maria-ig',
		type: 'POST',
		dataType: 'json',
		success: function(data){
			console.log(data);
		}
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
	url: 'http://small-tiyfe.herokuapp.com/collections/maria-ig',
	type: 'POST',
	dataType: 'json',
	success: onGetSuccess,
	error: onGetError
};

$.ajax(ajaxSettings);