var answers=[1,3,3,1,3];
var choice=[
		["Chamomile","Tobacco","Tea","(Corn)Poppy","Poppies"],
		["Tea", "Willow", "Chamomile", "St. John’s Wart", "Lavender"],
		["Daisy", "Wormwood", "Lavender", "Tetterwort", "Violets"]
	];
var surse=["Source: Henry IV; Act II,Scene IV, 400","Source: The Rape of Lucrece","Source: The Winter's Tale; Act IV,Scene IV, 103 f","Source: Othello; Act III, Scene III, 330 ff","Source: Hamlet; Act IV, Scene v, 185"];
var array=[
	13,
	15,
	6,
	2,
	0,
];
var questions=["For though the ________, the more it is trodden on, the faster it grows, so youth, the more it is wasted, the sooner it wears.","Thy secret pleasure turns to open shame,<br> Thy private feasting to a public fast,<br> Thy smoothing titles to a ragged name,<br> Thy sugared tongue to bitter ______ taste.<br> Thy violent vanities can never last.<br> How comes it then, vile Opportunity,<br> Being so bad, such numbers seek for thee?",
	"Here's flowers for you;<br> Hot _______, mints, savoury, marjoram;<br> The marigold, that goes to bed wi' the sun<br> And with him rises weeping: these are flowers<br> Of middle summer, and I think they are given <br> To men of middle age.",
	"Not ______ nor mandragora<br> Nor all the drowsy syrups of the world,<br> Shall ever medicine thee to that sweet sleep<br> Which thou owedst yesterday.",
	"There’s a daisy. I would give you some ______, but they withered all when my father died."];
var currentQuestion=0;
function spawnQuestionAndAnswers () {
	if(currentQuestion<5){
		$(".source").text(surse[currentQuestion]);
		$("#status").hide();
		$("#question").html(questions[currentQuestion]);
		for(var i=0;i<3;i++)
			$('#btn'+i).text(choice[i][currentQuestion]);
	}
	else
	{
		$('.gameItems').hide();
		$('.finalItems').show();
	}
}
function showModal(id)
{
	if(id!=0)
	{
		console.log(id);
		$('.modalImg').attr('src','img/'+(id+1)+'.jpg');
		$(".description").hide();
		$("#description"+id).show();
		$(".source").text(surse[currentQuestion]);
		$("#modalInfo").modal('show');
	}
}
function clickedButton(id)
{
	if(id==answers[currentQuestion])
	{
		showModal(array[currentQuestion]);
		currentQuestion++;
		spawnQuestionAndAnswers();
		
	}
	else
	{
		$("#status").show();
	}

}
$(document).ready()
{
	spawnQuestionAndAnswers();
}