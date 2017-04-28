


			//Business logic of code begins here
			//funny talk for the back end code hahha
			//..............................................................
			//................................................................

// //			var add = function() {
// 				ask_numbers();
//
// 				result=number1+ number2;
// 				alert("The answer is "+result+".");
// 			};
//
// 			var subtract = function(){
// 				ask_numbers();
//
// 				result=number1- number2;
// 				alert("The answer is "+result+".");
//
// 			}
//
// 			var division = function(){
// 				ask_numbers();
//
// 				result=number1/ number2;
// 				alert("The answer is "+result+".");
//
// 			}
//
// 			var multiplication = function(){
// 				ask_numbers();
//
// 				result=number1* number2;
// 				alert("The answer is "+result+".");
//
// 			}
//
// 			var remainder = function(){
// 			  ask_numbers();
// 				result=number1% number2;
// 				alert("The answer is "+result+".");



			//Front end code begins here.......................................................................
			//...................................................................................
			//
			//
			//
// $(document).ready(function(event){
// 	alert("after document ready")
// //	$("form#add").submit(function(){
// 		alert("after form#add")
// 		event.preventDefault();
// 		alert("after event default")
//
//
// 			var ask_numbers = function(){
// 				alert("after ask_numbers")
//
// 				var number1 = parseInt($("input#add1").val());
// 				var number2 = parseInt($("input#add2").val());
// 				var result= number1 + number2;
// 				alert("The answer is"+result)
// 			}
//
// 			ask_numbers();
//
// 			event.preventDefault();
//
// 			});
//
//
//
// });
$(document).ready(function() {
			 $("form#add").submit(function(event) {
				 event.preventDefault();
				 var number1 = parseInt($("input#add1").val());
				 var number2 = parseInt($("input#add2").val());
				 alert( number1+number2 );
			 });
		 });
