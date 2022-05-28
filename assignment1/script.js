/*
	WEB 303 Assignment 1 - jQuery
	{Mohammed Qaasim Desai}
*/
$(function() {


	$("#price").on("keyup", function(){

			let $price = $("#price").val();
			let $t = $price * 0.13;
			let $finalTax = $t.toFixed(2);

			$("span").replaceWith(`<span id="tax">$<span>`);
			$("span").append($finalTax);

			
	});

	$("button").on("click", function() {

			let $price = $("#price").val();
			let $totprice = $price * 1.13;
			console.log($totprice);
			$("ul#price-list").append(`<li>Total Price is $ </li>`).append($totprice);
	})
});
