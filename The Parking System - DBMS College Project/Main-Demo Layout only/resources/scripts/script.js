/*
	By 
		Pawan Terdal		1PE15IS074
		Rahul Putcha Gautham	1PE15IS079
*/

//Global Variables
var carSpaceTaken = [];

//--------------------Function For Generating the Parking Sheet-------------------------------
function generateSheet() 
{

	
	//-------------------Creation of Slots----------------------
	var i,j;
	var array 	= [maxCar,maxBike,maxOther,maxReserved,maxExtra];
	var label 	= ['C','B','O','R','E'];
	var canvas 	= document.getElementsByClassName("slot");
	for(i=0;i<array.length;i++)
	{
		for(j=0;j<array[i].value;j++)
		{
			var slot   = document.createElement("div");
			var text   = document.createTextNode(label[i]+" "+j);
			slot.appendChild(text);
			canvas[i].appendChild(slot);
		}
	}


	//-------------JavaScript and J-Query For Slot Selection------------------
	//Note  : Function below will return the object that is selected in the sheet i.e. slot
		// Refer to Child Text Node for the Slot Label or Slot ID

	selectSlot("#car-space div","orange");
	selectSlot("#bike-space div","gray");
	selectSlot("#other-space div","yellow");
	selectSlot("#reserved-space div","red");
	selectSlot("#extra-space div","purple");


	//Build Slot Choosen Function
	//Build Remove Function



}

//---------------Changing SheetSize---------------
function magnify()
{
	var sheet = document.getElementsByClassName("slot");
	var focus = sheetSize.value/100;
	for(var i=0;i<sheet.length;i++)
		sheet[i].style.transform = "scale("+focus.toString()+")";
}

//----------------J-Query for Slot Selection---------------
function selectSlot(tag,color)
{
	var selected;
	$(document).ready
	(
		function()
		{
			$(tag).click
			(
				function()
				{
					//$(".#car-space div").css("background-color","white");
					selected = $(this).css("background-color",color);
				}
			);

		}
	);
	return selected;
}

