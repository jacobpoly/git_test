/**
 * 
 */

$(window).load(function() { InitRoulet();});
$(document).ready(function() {
	InitRoulet();
	
	var event_yn = $("#event_yn").val();
	
	console.log(event_yn);

	if (event_yn == 'N') {

		console.log("미 응모자");

		$("#rouletcanvas_1").show();
		$("#bt_start").show();
		$("#point_arrow").show();
		$("#rouletcanvas_3").hide();

		$('.btn_join').click(function() {
			ActionSubmit('e_participation', 'event_form');
		});

	} else if (event_yn == 'Y') {

		console.log(" 응모자");

		$("#rouletcanvas_1").hide();
		$("#bt_start").hide();
		$("#point_arrow").show();
		$("#rouletcanvas_3").show();

	}

});

function test (){
	alert("${event_yn}");  // el 테스트
}
