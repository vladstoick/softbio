var array=[
	13,
	6,
	1,
	2,
	16,
	18,
	9,
	8,
	5,
]
function showModalc2 (numberOfFlower) {
	console.log(numberOfFlower);
	$(".description").hide();
	$('#description'+array[numberOfFlower]).show();
	$('#modalInfo').modal('show');
	$('#imgModal').attr('src','img/'+(array[numberOfFlower]+1)+'.jpg');
}
function showCannabis()
{
	//$('#btnCannabis').onClick(function()
	// {
	// 	showModalc2(9);
	// });
	$('.sloved').show();
}