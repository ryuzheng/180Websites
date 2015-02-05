$(document).ready(function () {
	var d = new Date();
	var	day = d.getDay();
	var	msg = ["今天是星期天！好好休息！",
			   "星期一！啊啊，今天忘记起床啦！周末综合症。",
			   "星期二，昨天是星期一！",
			   "星期三！一周过了一半了！",
			   "星期四！什么时候才到星期五？！",
			   "星期五！明天就能放假啦！",
			   "哈哈终于到周末，明天不用起床啦！"]

	$('#' + day).attr('id', 'today');
	$("#message").text(msg[day]);
	
});