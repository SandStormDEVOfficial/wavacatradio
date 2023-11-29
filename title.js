<button id="start">Запустить</button>
<button id="stop">Остановить</button>
 
<script>
var timer;
var start_title = document.title;
 
$('#start').click(function(){
	for (i = 0; i < 5; i++) {
		document.title = document.title + ' | ' + start_title;
	}	
	
	timer = setInterval(function(){
		lenta = document.title;
		if (lenta.length == 100){
			lenta = lenta + ' | ' + start_title;
		}
		document.title = lenta.substr(1, lenta.length);
	}, 100);
});
 
$('#stop').click(function(){
	clearInterval(timer);
	document.title = start_title;
});
</script>