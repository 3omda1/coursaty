

$(document).ready(function(){
		/** Traversing Documents **/
		//$("#first").children().css("border","2px solid green"); //get all childern of this section 
				
		//var sp = $("span:contains('n3')").css("border","3px solid yellow"); //just get the wanted element
		//sp.prev().css("border","2px solid blue"); //previous element
		//sp.next().css("border","2px solid pink"); //next element
		//sp.parents().css("border","2px solid green"); //all parents of element(here is the body and html)
		//sp.parentsUntil($("body")).css("border","2px solid black"); //all parents of element until body tag 
		// sp.parent().css("border","2px solid red");//the parent of element

		//$("#first").find(".head").css("border","2px solid red");
		//$("#first").find(":contains('n3')").css("border","2px solid red"); //will select two items
				
		// var strings = ["aaa","bbb","ccc","aaa","yyyy","ooooo"]
		// $("#first div span").each(function(index,item){
				// $color = "#00ff1"+index;
				// $(item).text(strings[index]);
				// $(item).css("color",$color);
			// });

		//$("#first div span").text("span changed again").css("color","green"); //more faster



		/** create & change content **/
		//var h1Tag = $("<h1>");  //create element in js
		//var h1Tag = $("<h1 class='head' data-color='black' >");  //what will happen
		//h1Tag.append("Hello Everyone");
		
		//$("#content").html(h1Tag);  //clear all in content and put the new content
		$("#content").html("<h1> HELLO HELLO </h1>");
		//$("#content").text("<h1> HELLO HLLO </h1>"); //escape html tag(put to the content directly).
		
		//$("#content h1").append(" text after  "); // put new content to the end of the selector
		//$("#content h1").append("<h1>text after </h1>"); //appending 
		//$("<p> aaaaa </p>").appendTo("#content h1"); // put new element to the end of the selector
		
		//$("#content h1").prepend(" text before "); // put new content to the beginning  of the selector
		//$("#first h4").prependTo("#content h1"); // put new element to the beginning of the selector
		
		//$("#content h1").before("<p> text before </p>");
		//$("<p> text before </p>").insertBefore("#content h1");
		
		//$("#content h1").after(" text after ");
		//$("<p> text after </p>").insertAfter("#content h1");
		
		
		/** altering **/
		//$("#content h1").unwrap();
		//$("#content h1").wrap("<div class='bg-danger' ></div>");
		//$("#first span").wrap("<div class='bg-danger' ></div>");
		//$("#first span").wrapAll("<div class='bg-danger' ></div>");
		//$("#first span").empty();
		//$("#first>div").empty();
		//$("#first>span").remove();
		//$("#first span").remove();
		//$("#first span").detach();
		//$("#first").children("span").detach();
		//$("#first span").replaceWith("<article>aaa</article>");
		//$("#first>span").replaceWith("<article>aaa</article>");
		//$("<article>aaa</article>").replaceAll("#first span");
		//$("<article>aaa</article>").replaceAll("#first>span");
		
		
		/** attributes **/
		
		/** get **/
		//console.log($("#first h1").attr("class"));
		//console.log($("#first p").attr("class"));//Will get just the firt element
		// $("#first p").each(function(){
			// console.log($(this).attr("class"));
		// });
		// $("#first p").each(function(){
			// console.log($(this).attr("data-color"));
		// });
		
		$("#first p").each(function(){
			//$(this).css("color",$(this).data("color"));
			
			//$(this).data("color","brown");
			//$(this).css("color",$(this).attr("data-color"));
			//$(this).css("color",$(this).data("color"));
			
			//$(this).addClass("bg-success").removeClass("head");	
		});
		
		/** set & create **/
		//$("#first p").attr("data-color","brown");
		//$("#first p").attr({"data-color":"brown", "data-type":"type", "data-secret":"secret",});
		
		/** remove **/
		// $("#first p").each(function(){
			// $(this).removeAttr("data-color");
		// });
		//$("#first p").removeAttr("data-color");
		
		
		
		/** embedding data **/
		/** get data **/
		//console.log($("#first p").data());
		// $("#first p").each(function(){
			// console.log($(this).data());
		// });
		
		// $("#first p").each(function(){
			// console.log($(this).data("color"));
		// });
		
		/** set & create **/
		//$("#first p").data("date","2020/7/456");
		// $("#first p").each(function(){
			// console.log($(this).data("date"));
		// });
		
		// $("#first p").each(function(){
			// $(this).data("date","2020");
			// $(this).data("color","yellow");
			// console.log($(this).data());
		// });
		/** remove **/
		// $("#first p").removeData();
		// $("#first p").each(function(){
			// console.log($(this).data());
		// });
		
		// $("#first p").removeData("date");
		// $("#first p").each(function(){
			// console.log($(this).data());
		// });
		
		/** events  mouse hover **/
		//$("#mouse-hover").hover(mouseHover);
		//$("#mouse-hover").click(clicked);
		//$("#mouse-hover").dblclick(dblclicked);
		//$("#mouse-hover").mouseover(function(){mouseOver($(this));});
		// $("#mouse-hover").mouseenter(function(){$(this).css("background","red");});
		// $("#mouse-hover").mouseleave(function(){$(this).css("background","gray");});
		// function mouseHover()
		// {
			// $("#mouse-hover").toggleClass("mouse-hover");
		// }
		// function clicked()
		// {
			// $("#mouse-hover").html("clicked");
		// }
		// function dblclicked()
		// {
			// $("#mouse-hover").html("dblclicked");
		// }
		// function mouseOver(el)
		// {
			// el.html("mouse over now ");
		// }


		
		/** div example1**/
		$("button[data-color='red']").click(function(){
			$(".square").css("backgroundColor","red");
		});

		$("button[data-color='green']").one("click",function(){
			$(".square").css("backgroundColor","green");
		});
		
		$("button[data-color='blue']").on("click",function(){
			$(".square").css("backgroundColor","blue");
		});
		
		$("button[data-color='yellow']").on("click",function(){
			$(".square").css("backgroundColor","yellow");
			$("button[data-color='blue']").off("click");
			$("button[data-color='red']").off("click");
		});
		
		// $("button").on("click",function(){
			// $(".square").css("backgroundColor",$(this).attr("data-color"));
			// if($(this).attr("data-color")=="yellow")
			// {
				// $("button[data-color='blue']").off("click");
				// $("button[data-color='red']").off("click");
			// }
		// });
		
		
			/** add classes bootstrap **/
		$("#register-form input").wrap("<div class='form-group'></div>");
		$("input:not([type='checkbox'],[type='submit'])").addClass("form-control");
		/// //$(".form-control").parent().prev().css("border","2px solid red");
		// //$(".form-control").parent().prev().prependTo(".form-group");// bad
		$(".form-control").parent().prev().each(function(index,item){
			//console.log(item);
			$(this).addClass("form-control-label");
			let next = $(this).next();
			$(this).prependTo(next);
		});
		let checkContainer = $("input[type='checkbox']").parent();
		checkContainer.next().appendTo(checkContainer);
		
		$("input[type='submit']").addClass("btn btn-primary");
		$("input[type='submit']").parent().	addClass("text-right");
		
			// /** add tooltip attribute and popover **/
			
			//$('[data-toggle="tooltip"]').tooltip();

			
		$("input:not([type='submit'])").attr("data-toggle","tooltip");
		$('[data-toggle="tooltip"]').tooltip({ //activating tooltip
			placement:"left",
			html:true,
		});
		
		
		
		// $("#register-form").on("submit",function(){
			// event.preventDefault();
		// });
		
		// $("input[type='submit']").attr("data-toggle","popover");
		
		// $('[data-toggle="popover"]').popover({ //activating tooltip
			// placement:"left",
			// html:true,
		// });
		
		// /**validation**/
		$("#register-form input:not([type='submit'])").on("focus",function(){
			$(this).css("border","2px solid cyan");
		});
		
		$("#register-form input:not([type='submit'])").on("blur",function(){toValidate($(this))});
		
		$("#register-form").on("submit",function(){
			//let inputs = $(this).children().children("input:not([type='submit'])");
			let inputs = $(this).find("input:not([type='submit'])");
			var valid = true;
			inputs.each(function()
			{
				if(!toValidate($(this)))
				{
					$(this).css("border","2px solid red");
					$(this).tooltip('show');
					valid = false;
				}
			});
			if(!valid)
			{
				console.log(valid);
				event.preventDefault();
			}
			
		});
		
		function toValidate(el)
		{
			console.log(el);
			if(!validate(el))
			{
				el.css("border","2px solid red");
				el.tooltip('show');
				return false;
			}
			else
			{
				el.css("border","2px solid green");
				el.tooltip('hide');
				return true;
			}
		}
		
		
		function validate(el)
		{
			//console.log(el.attr("name"));
			if(el.attr("name") == "name_ar")
			{
				if(el.val().trim().match(/^[\u0621-\u064A ]+$/) == null)//only arabic letters
				return false;
			}
			else if(el.attr("name") == "name_en")
			{
				if(el.val().trim().match(/^[a-zA-Z ]+$/) == null)
				return false;
			}
			else if(el.attr("name") == "email")
			{
				if(el.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) == null)
				return false;
			}
			else if(el.attr("name") == "address")
			{
				if(el.val().trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/) == null)
				return false;
			}
			else if(el.attr("name") == "phone")
			{
				if(el.val().trim().match(/^\+?\d{10,}$/) == null)
				return false;
			}
			else if(el.attr("name") == "password")
			{
				if(el.val().trim().length < 8 )
				return false;
			}
			else if(el.attr("name") == "confirm-password")
			{
				if(el.val().trim().length < 8)
					return false;
				if(el.val().trim() != $("#register-form input[name='password']").val().trim())
					return false;
			}
			else if(el.attr("name") == "agree")
			{
				if(!el.is(":checked"))
				return false;
			}
			else if(el.has("required").val() == "")
			{
				return false;
			}
			return true;
		}
		
		

		/** delegation **/
		
		$("button[data-color='addBlack']").on("click",function(){
			$(this).before("<button data-color='black'>black</black>")
		});
		
		// $("button[data-color='black']").on("click",function(){
			// $(".square").css("backgroundColor","black");
		// }); 
		
		$(document).on("click","button[data-color='black']",function(){
			$(".square").css("backgroundColor","black");
		});
		
		
		/** normal ajax **/
		$("#normal").on("click",function(){
			$.ajax
			({
				type: "GET", 
				url: "content3.txt",
				dataType: 'text',
				data: [],
				async: false, // to make js wait unitl ajax finish
				processData: false,
				contentType: false,

				success: function (message) 
				{
					//console.log(data);
					$("#content-to-load").html(message);
				},
				error:function(error)
				{ 
					console.log(error);
					console.log(error.responseJSON);
				}
			});
		});
		
		$( document ).ajaxStart(function() 
		{
		  console.log("ajaxStart");
		});
		$( document ).ajaxSend(function() 
		{
		  console.log("ajaxSend");
		});
		$( document ).ajaxSuccess(function() 
		{
		  console.log("ajaxSuccess");
		});
		$( document ).ajaxError(function() 
		{
		  console.log("ajaxError");
		});
		$( document ).ajaxComplete(function() 
		{
		  console.log("ajaxComplete");
		});
		$( document ).ajaxStop(function() 
		{
		  console.log("ajaxStop");
		});


		
		/** load **/
		$("#load-btn").on("click",function(){
			//$("#content-to-load").load("content1.txt");
			$("#content-to-load").load("content1.txt #h3");
		});
		
		/** get **/
		$("#get-btn").on("click",function(){
			$.get("content1.txt",function(result){
				$("#content-to-load").html(result);
			});
		});
		
		/** get json  **/
		$("#get-json-btn").on("click",function(){
			$.getJSON("data.json",function(data){
				//console.log(data.products);
				$("#content-to-load").html("");
				$.each(data.products,function(index,item){
					var mainDiv = $("<div>");
					
					var img = $("<img>");
					img.attr({"src":item.img, "class":"img-thumbnail"});
					mainDiv.append(img);
					
					var productName = $("<a href='#' class='d-block'>");
					productName.append(item.product_name);
					mainDiv.append(productName);
					
					var category = $("<span class='h6 d-block'>");
					category.append(item.category);
					mainDiv.append(category);
					
					var price = $("<span class='h6'>");
					price.append(item.price);
					mainDiv.append(price);
					
					$("#content-to-load").attr('class','row row-cols-2 border border-primary mx-auto').append(mainDiv);
				});
				
				
			});
		});
		
		
		
			/** get films **/
	$(document).on("submit","#search-film",function(event){
		event.preventDefault();
		var query = $(this).find("input[type='search']").val();
		var url = "https://api.themoviedb.org/3/search/movie?api_key=ba6568452d30160e5ccdcb2b34ddd7a8&language=en-US&page=1&include_adult=false&query="+query;
		
		$.ajax
		({
			type:"GET",
			url: url,
			dataType:"json",
			success:displayFilms,
		});
	});

	function displayFilms(result)
	{
		console.log(result.results);
		
		var filterButtons = []; // film year 
		var filmItem = []; // film div 
		$.each(result.results,function(index,item){
			
			let year = item.release_date.slice(0,4); //get releasd year
			filterButtons.push(year); //push year to be uniqued and sorted
			
			filmItem[index] = $("<div class='film-item text-center' data-year='"+year+"'>"); //film item container
			//image
			let img = $("<img class='img-thumbnail' src='https://image.tmdb.org/t/p/w500/"+item.poster_path +"'>");
			$(img).appendTo(filmItem[index]);
			
			//title
			let title = $("<a href='#' class='d-block'>"+item.title+"</a>");
			$(title).appendTo(filmItem[index]);
			
			//date
			let date = $("<span class='badge badge-primary' data-year='"+year+"' >"+item.release_date+"</a>");
			$(date).appendTo(filmItem[index]);
			
			
		});
		$(".films-container").html(filmItem);
		
		
		filterButtons = [...new Set(filterButtons)]; //get unique value of years
		filterButtons.sort(); // sort years
		$.each(filterButtons,function(index,item){
			filterButtons[index] = $("<a href='#' class='btn btn-primary' data-year='"+item+"'>"); //create anchor
			filterButtons[index].append(item); // put value
		});
		$(".btn-group a:not(:first-child)").remove();
		$(".btn-group a:first-child").after(filterButtons);
		//console.log(filterButtons);
		
		console.log(result);
	}
	
	
	/** sorting by year **/
	$(document).on("click","#films-section .btn-group a",function(event){
		event.preventDefault();
		if($(this).attr("data-year") == "all")
		{
			console.log("aa");
			$(".films-container .film-item[data-year]").hide("slow");
			$(".films-container .film-item[data-year]").show("slow");
		}
		else
		{
			$(".films-container .film-item:not([data-year='"+$(this).attr("data-year")+"'])").hide("slow");
			$(".films-container .film-item[data-year='"+$(this).attr("data-year")+"']").show("fast");
			$(this).off("click");
			console.log($(this).attr("data-year"));
		}
	});
	
	
	function getAJAX(url)
	{
		var results;
		$.ajax
		  ({
			type: 'GET', 
			url: url,
			dataType: 'json',
			data: {},
			async:false,
			success: function (data) 
			{
			  //console.log(data);
			  results = data;
			},
			error:function(data)
			{ 
			  console.log(data);
			  results = data;
			}
		  });
		return results;
	}
	
	var language= $("html").attr("lang"); //get language from html set lang="en" or lang ="ar" if you don't set it
	
		/** countries **/
	var conutriesURL = 'http://api.geonames.org/countryInfoJSON?q=&country=&lang=ar&username=abdulnaser_mohsen'; //url that get your conuntries
	var countries = getAJAX(conutriesURL); // the importance of async test without aync or aync is true
	//console.log(countries);
	//console.log(countries.geonames);
	$(countries.geonames).each(function(index,item){
		//console.log(item.countryName , item.geonameId);
		var selectOption = $("<option>")
		selectOption.attr("value",item.geonameId).append(item.countryName);
		$('#countryId').append(selectOption);
	});


		/** states **/
	$(document).on("change","#countryId",function(){
		
		$('#stateId option:not(option:first)').remove(); // clear states
		
		var geonameid= $(this).val(); //get country id
		var statesURL = 'http://api.geonames.org/childrenJSON?lang='+language+'&geonameId='+geonameid+'&username=abdulnaser_mohsen'; //url that get your states
		
		var states = getAJAX(statesURL); 
		//console.log(states);
		//console.log(states.geonames);
		
		$(states.geonames).each(function(index,item){
			//console.log(item.name , item.geonameId);
			var selectOption = $("<option>")
			selectOption.attr("value",item.geonameId).append(item.name);
			$('#stateId').append(selectOption);
		});
	});


	$(document).on("change","#stateId",function(){
		$('#cityId option:not(option:first)').remove(); // clear cities
		
		var geonameid= $(this).val(); //get country id
		var citiesURL = 'http://api.geonames.org/childrenJSON?lang='+language+'&geonameId='+geonameid+'&username=abdulnaser_mohsen'; //url that get your cities
		
		var cities = getAJAX(citiesURL); 
		//console.log(cities);
		//console.log(cities.geonames);
		
		$(cities.geonames).each(function(index,item){
			//console.log(item.name , item.geonameId);
			var selectOption = $("<option>")
			selectOption.attr("value",item.geonameId).append(item.name);
			$('#cityId').append(selectOption);
		});
	});
	






		
		

});	

		
		/** load vs ready **/
		$(document).ready(function(){
			console.log("ready");
		});
		$( window ).on("load",function() {
		  console.log("load");
		});





		
		(function($) {

	

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);





		
		
		
		







