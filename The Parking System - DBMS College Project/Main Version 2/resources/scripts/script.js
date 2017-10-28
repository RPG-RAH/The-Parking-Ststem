/*
		By
			Pawan Terdal		-	1PE15IS073
			Rahul Putcha Gautham	-	1PE15IS079
		JavaScript File for Inclusion of Dynamic HTML DOM Objects
*/

//Global Variables
var currentlySelected,currentlySelectedObj;
var slotTakenLabel = [],slotTakenObj = [];
var available = true;

//Function Definitions

//For Generating Parking Sheet Easily
function generateSheet()
{
	var i;
	var numSlots = 100 , revSlots = 30; // Number of Normal Slots , Number of Reserved Slots
	var label = "P";	//<---NOTE : This is the Label for Normal Parking

	//Creating Slots on the Parking Sheet Area(div) with id = "sheet"
	sheet = document.getElementById('sheet');
	//--------------Normal Slot Creation------------
	var header = document.createElement("h4");
	header.appendChild(document.createTextNode("Normal Parking"));
	sheet.appendChild(header);
	for(i=0;i<numSlots;i++)
	{
		var slot   = document.createElement("div");
		var text   = document.createTextNode(label+" "+(i+1));
		slot.appendChild(text);
		sheet.appendChild(slot);
	}

	//------------Reserved Slot Creation-----------
	var header = document.createElement("h4");
	header.appendChild(document.createTextNode("Reserved Parking"));
	sheet.appendChild(header);
	for(i=0;i<revSlots;i++)
	{
		var slot   = document.createElement("div");
		var text   = document.createTextNode("R "+(i+1)); //<---NOTE : Reserved Parking Label is Defined Here
		slot.appendChild(text);
		sheet.appendChild(slot);
	}

	selectSlot("#sheet div" , "orange"); //<--Slot Layout and Features Here 
}

//--------------Slot Effects-----------
function selectSlot(tag,color)
{
	$(document).ready
	(
		function()
		{
			$(tag).click //Called When any of the slots Created is clicked (individually)
			(
				function()
				{
					$("#sheet div").css("background-color","white");	//<--For Toggling Effects for Slot Selection
					for(i=0;i<slotTakenObj.length;i++)	//<---For Preserving Slots that are Not Empty
						$(slotTakenObj[i]).css("background-color",color)

					//Preserving Current Slot that is Selected(Until Submit)
					$(this).css("background-color",color)
					currentlySelected	= this.textContent;
					currentlySelectedObj	= this;
				}
			);
		}
	);
}


//----------Submit Button Events------------
function onClickSubmit()
{
	var i;
	available = true;
	if(currentlySelected)	//Is any Slot is Selected??
	{
		for(i=0;i<slotTakenLabel.length;i++)
		{
			if(slotTakenLabel[i] == currentlySelected)	//<---is Currently Selected Slot is already Empty / Booked Before?? 
			{
				available = false;
				alert("Choose the Slot Available\n in the Parking Sheet"); // Just Warning Pop-up Message
			}
		}
		if(available)
		{
			//----------------Form Validation------------------------------
			var regVerify   = document.forms["detail_form"]["reg_id"].value;
			var nameVerify  = document.forms["detail_form"]["owner_name"].value;
			var phoneVerify = document.forms["detail_form"]["phone_no"].value;
			if (regVerify == "" || nameVerify == "" || phoneVerify == "") 
			{
				alert("Fill all Details Properly");
			}
			else	//After Form Validation is sucessful
			{
				//The Slot is Booked 
				slotTakenLabel.push(currentlySelected);
				slotTakenObj.push(currentlySelectedObj);
			}
		}
	}
	else
		alert("Choose a Slot\n in the Parking Sheet");
}


//--------------Reset Button------------
function onClickReset()
{
	document.forms["detail_form"]["state"].value  		=
	document.forms["detail_form"]["region_code"].value 	=
	document.forms["detail_form"]["region"].value 		=
	document.forms["detail_form"]["reg_id"].value 		= 
	document.forms["detail_form"]["owner_name"].value 	= 
	document.forms["detail_form"]["phone_no"].value 	= "";
	document.forms["detail_form"]["vehicle_type"].value 	= "car";
}

//----------Main Program----------
generateSheet();

//----------For Ticket Preview---- : Using J-Query
$(document).ready
(
	function()
	{
		$("input[type='submit']").click		//<--- On Submit Button Clicked
		(
			function()
			{
				if(available)	//<--- if chosen Slot is Available then
				{
					var box   = $("#preview-box").empty();		//<---Clean the Preview Box Container

					//Write the Ticket Containing Elements into it
					var para0 = document.createElement("p");
					var line  = document.createTextNode("Slot Number : " + currentlySelected);
					para0.append(line);
					var para1 = document.createElement("p");
					var line  = document.createTextNode("Registration Plate : " + 
							state.value +" "+region_code.value+" " + region.value+" "+reg_id.value);
					para1.append(line);
					var para2 = document.createElement("p");
					var line  = document.createTextNode("Name : " + owner_name.value);
					para2.append(line);
					var para3 = document.createElement("p");
					var line  = document.createTextNode("Phone No : " + phone_no.value);
					para3.append(line);
					var para4 = document.createElement("p");
					//---------NOTE : Radio Button Here-----------
					var vtype = document.querySelector('input[name = "vehicle_type"]:checked').value;
					var line  = document.createTextNode("Vehicle Type : " + vtype);
					para4.append(line);
					//---------NOTE : Normal/Reserved Decision Here-----
					var para5 = document.createElement("p");
					slot_type = (currentlySelected[0]=='R')?"reserved":"normal";
					var line  = document.createTextNode("Slot Type : " + slot_type);
					para5.append(line);
					box.append(para0,para1,para2,para3,para4,para5);
				}
			}
		);
	}
);
