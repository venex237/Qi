function set_welcome_click_listeners(){
	$("#gotoreg_login").bind("click", function () {
		$(".loginpanel").replaceWith($(".registerpanel"));
		$(".registerpanel").show();
	});

	$("#gotologin_reg").bind("click", function () {
		$(".registerpanel").replaceWith($(".loginpanel"));
		$(".loginpanel").show();
	});

	$("#regbutton_reg").click(function(){
		register();
	});
}
