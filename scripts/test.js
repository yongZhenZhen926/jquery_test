$(document).ready(function(){
	var $search = $('.pest');
	$search.focus(function(){
		var test = $(this).val();
		if(test == this.defaultValue){
			$(this).val('');
		}
	}).blur(function(){
		var test = $(this).val();
		if(test == ''){
			$(this).val(this.defaultValue);
		}
	})

	var $list = $('.list li');
	$list.mouseover(function(){
		$(this).addClass('active')
		.siblings().removeClass('active');
	})
	

	var $tooltip = $('#right ul li');
	$tooltip.mouseover(function(e){
		var $element = $('<div id="myTitle">'+$(this).text()+'</div>');
		//alert($element.html());
		$('body').append($element);
		$('#myTitle').css('position','absolute');
		$('#myTitle').css('border','1px solid #ccc');
		$('#myTitle').css('backgroundColor','#ccc');
		$('#myTitle').css('fontSize','12px');
		$('#myTitle').css({
			'top':e.pageY + 'px',
			'left':e.pageX + 'px'
		})
	}).mouseout(function(){
		$('#myTitle').remove();
	}).mousemove(function(){
		$('#myTitle').css({
			'top':e.pageY + 'px',
			'left':e.pageX + 'px'
		})
	})

	//hover()方法
	$('.nike img').mouseover(function(e){
		var $myChar = $(this).attr('src');
		var $content = $(this).attr('src');
		var $quest = $content.substr(0,16);
		//alert($quest);
		var $elements = $('<img src="" alt="pic" id="myTest" />');
		
		$('body').append($elements);
		$('#myTest').attr('src',$quest);
		$('#myTest').css('position','absolute');
		$('#myTest').css('border','1px solid #ccc');
		$('#myTest').css('width','250px');
		$('#myTest').css('height','250px');
		var x = 10;y=20;
		$('#myTest').css({
			'top':(e.pageY + y) + 'px',
			'left':(e.pageX + x) + 'px'
		})
	}).mouseout(function(){
		$('#myTest').remove();
	}).mousemove(function(){
		$('#myTest').css({
			'top':(e.pageY + y) + 'px',
			'left':(e.pageX + x) + 'px'
		})
	})
	
	
	//皮肤切换
	var $skin = $('.container .header .rightSide button');
	$skin.click(function(){
		/*$(this).addClass('selected')
		.siblings().removeClass('selected');*/

		var $getClass = $(this).attr('id');
		//alert($getClass);
		$('#cssfile').attr('href', 'styles/' + $getClass + '.css');
		//alert($('#cssfile').attr('href'));
	})

})



