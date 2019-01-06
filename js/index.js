$("#search").click(function(){
			$("#searchdiv").css({"display":"block"});
			$(".close").css({"display":"block"});
			$(this).css({"display":"none"});

		});

		$(".close").click(function(){
			$("#searchdiv").css({"display":"none"});
			$("#search").css({"display":"inline-block"});
			$(this).css({"display":"none"});

		});

		$(".tags").click(function(){
			$(".alltag").css({"display":"block"});
			$(this).css({"display":"none"});

		});