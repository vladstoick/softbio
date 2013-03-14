var isCorrect=0;
var left=10;
var array = [-1, 1, 10, 14, 0, 2, 6, 13, 15, 9, 8 ];
function showModal(id)
{
	console.log(id);
	$('img').attr('src','img/'+(id+1)+'.jpg');
	$(".description").hide();
	$("#description"+id).show();
	$("#modalInfo").modal('show');
}
function finishGame()
{
	$(".gameElements").hide();
	$(".finishElements").show();
}
function setupInitial () {

	for(var i=1;i<=10;i++)
	{
		$( "#d"+i ).draggable({
			revert :function(event,ui)
			{
				
				if(isCorrect==0)
				{
					$("#wrongStatus").show();
					return true;
				}
				else
				{
					$("#wrongStatus").hide();
					left--;
					if(left==0)
						finishGame();
					return false;

				}
			},
			start: function (event,ui) {
				isCorrect=0;
			},

		});
		$( "#t"+i ).droppable({
  			drop: function(event,ui) {

  				var draggableId = ui.draggable.attr("id");
  				var droppableId = $(this).attr("id");
  				$('#'+draggableId).html(" ")
  				$('#'+droppableId).html(" ");
  				$('#'+draggableId).draggable( 'disable' );
  				$('#'+droppableId).html(" ");
  				isCorrect=1;
  				var id=0;
  				if(draggableId.length==3)
  					id=10;
  				else
  					id=parseInt(draggableId[1]);
  				showModal(array[id]);
  			},
  			accept: '#d'+i
});
	}
}
$(document).ready(function(){
	console.log("hello")
	setupInitial();
});