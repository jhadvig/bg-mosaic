$(window).ready(function(){



	var window_width = $(this).width(),
			window_height = $(this).height()

	$(window).resize(function(){
		window_width = $(this).width(),
		window_height = $(this).height()
		JS_Init(window_width, window_height);
	});

	JS_Init(window_width, window_height);
	$('#box1').trigger('click')
});

function JS_Init(window_width, window_height){
		console.log(window_width);
		console.log(window_height);

	  var maxHeight = 0;

    $('.slidingDiv').each(function() {
        if($(this).height() > maxHeight) maxHeight = $(this).height();
    });
    $('#wrapper').height(maxHeight);

    $('#box1').on("click",function () {
    		var dir = random_slide();
        $('#box1').hide("slide", {direction: dir}, 1000, function(){
        	$(this).find('img').attr("src", "carousel_photos/" + switch_image() + ".jpg");
        });
        $('#box2').show("slide", {direction: oposite_dir(dir)}, 1000);
      	setTimeout(function(){
					$('#box2').trigger('click');
				}, image_switch_time());

    });
    $('#box2').on("click",function () {
    		var dir = random_slide();
        $('#box2').hide("slide", {direction: dir}, 1000, function(){
        	$(this).find('img').attr("src", "carousel_photos/" + switch_image() + ".jpg");
        });
        $('#box1').show("slide", {direction: oposite_dir(dir)}, 1000);
        setTimeout(function(){
					$('#box1').trigger('click');
				}, image_switch_time());
    });

}

function oposite_dir(dir) {
	switch (dir) {
		case 'left':
			return 'right';
		case 'right':
			return 'left';
		case 'up':
			return 'down';
		case 'down':
			return 'up';
	}
}

function get_image(){
	var images = $('.row1').find('img');
	return images[Math.floor(Math.random() * images.length)];
}

function random_slide(){
	var success_message = ["left", "right","up","down"];
	return success_message[Math.floor(Math.random() * success_message.length)];
}

function image_switch_time() {
	return (Math.ceil(Math.random() * 5) + 2) * 500 ;
}

function switch_image() {
	return Math.ceil(Math.random() * 11) +1 ;
}