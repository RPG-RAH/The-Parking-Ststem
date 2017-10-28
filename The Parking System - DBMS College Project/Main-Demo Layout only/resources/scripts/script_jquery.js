/*
	Using J-Query
	-------------
	By
		Pawan Terdal		1PE15IS074
		Rahul Gautham Putcha 	1PE15IS079
*/


$(document).ready
(


	//----------For animating the Auto Link Scroll in the Parking System HTML Document---------------
	function()
	{

		$('.home').click
		(
			function()
			{
				$('html,body').animate
				(
					{scrollTop : $('#Home').offset().top} , 1000
				);
			}
		);



		$('.new').click
		(
			function()
			{
				$('html,body').animate
				(
					{scrollTop : $('#New').offset().top} , 1000
				);
			}
		);



		$('.exist').click
		(
			function()
			{
				$('html,body').animate
				(
					{scrollTop : $('#Layout').offset().top} , 1000
				);
			}
		);


		$('.about').click
		(
			function()
			{
				$('html,body').animate
				(
					{scrollTop : $("#About").offset().top} , 1000
				);
			}
		);
	}



);
