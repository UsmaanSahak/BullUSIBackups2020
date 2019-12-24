import App from "./pages";

$(".expandable").click(function() {
	if (this.width > 300) {
		this.width = 300;
	} else {
		$(this).attr("width","100%");
	}
	console.log(this.width);
});
/*
$(document).click(function() {
	let sa = 1.0;
	var I = setInterval(function() {
		if (sa > 0.7) {
			sa -= 0.1;
			//$("#Intro").css("opacity",sa);

			$("#Intro").css("transform","scale(" + sa + ")");

		}
		else {
			clearInterval(I);
			let sb = 0.7;
			var F = setInterval(function() {
				if (sb < 1.0) {
				sa += 0.1;
				$("#Dragbird").css("transform","scale(" + sb + ")");

				}
				else {
					clearInterval(F);
				}
		
			},50);
			
		},50);
		///*
	
});
*/
