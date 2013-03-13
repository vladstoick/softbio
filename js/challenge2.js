var array=[
	13,
	14,
	6,
	1,
	2,
	16,
	18,
	9,
	8,
]
function showModalc2 (numberOfFlower) {
	console.log(numberOfFlower);
	$(".description").hide();
	$('#description'+array[numberOfFlower]).show();
	$('#modalInfo').modal('show');
}