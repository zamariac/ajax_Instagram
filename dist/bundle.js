(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//this is the dropdown menu

$('.dropdown').hide();

$('.plus').click(function (e) {
	e.preventDefault();

	if ($('.dropdown').is(':visible')) {
		$('.dropdown').toggle("hide");
	} else {
		$('.dropdown').toggle("show");
	}
});

//this is grabbing the input url and sending it to heroku

$('.add-image').click(function (e) {
	e.preventDefault();

	var imageUrl = $('.image-url').val();
	var imageCaption = $('.image-caption').val();

	postImage(imageUrl, imageCaption);
});

collectionUrl = 'http://small-tiyfe.herokuapp.com/collections/maria-ig';

//this ajax request  is posting to heroku
function postImage(image, caption) {
	var addImages = {
		url: collectionUrl,
		type: 'POST',
		dataType: 'json',
		data: { imageUrl: image, imageCaption: caption },
		success: function (response) {
			
			var imageSuccess = response.imageUrl;
			var imageCaptionSuccess = response.imageCaption;

			$('<img src="' + imageSuccess + '">').appendTo('.image-place');

			$("<div class='new-div'>" + imageCaptionSuccess + "</div>").appendTo('.image-place');


		},

		error: function (error) {
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
	success: function (data) {
		//var container = $('.image-place');
		//var textBox = $('.image-caption-place');

		console.log(data);

		for (i = 0; i < data.length; i++) {

			console.log(data[i]);

			var image = data[i].imageUrl;
			var caption = data[i].imageCaption;
			console.log(caption);

			$('<img src="' + image + '">').appendTo('.image-place');

			$("<div class='new-div'>" + caption + "</div>").appendTo('.image-place');
		};
	},

	error: function () {}

};

$.ajax(ajaxSettings);

},{}]},{},[1]);
