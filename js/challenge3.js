var answers=[2, 3, 3, 1, 1, 2, 3, 3, 3, 3];
var choice=[
	["Tobacco", "St. John’s Wart", "Scots Pine", "Wormwood", "White Willow", "Datura", "Kola nut", "relaxation of the nervous system", "Common Hop ", "Corn Poppy"],
	["Lavender", "Common Hop", "Chamomile", "Tea", "Lavender", "Arabica coffe", "Tea", "hallucinations", "Corn Poppy", "White Willow"],
	["Tea", "Greater Celandine", "Peppermint", "Tobacco", "Cannabis", "Passionflower", "Common hawthorn", "the stimulation of the nervous system", "Absinthium", "Tobacco"]
];
var array=[
	6,
	3,
	10,
	15,
	9,
	17,
	7,
	20,
	15,
	18
];
var questions=["A volatile oil, with sedative effect and soothing for migraines, can be extracted from which plant?", "One of the following plants contains yellow latex and can cause hallucinations if ingested in excessive quantities:", "Plant with a very distinctive taste, used as a sedative or tonic for the nervous system, depending on the quantity used:", "One of the following plants can be used as an antihelminthic, but causes convulsions, loss of consciousness and even death if ingested in excessive quantity:", "Salicin used for the making of aspirin is extracted from the bark of this plant:", "Normally used for increasing focus and concentration, this plant can cause insomnia and addiction if consumed in large quantity:", "What plant should be used for a person who suffers from palpitations and anxiety?", "The excessive consumption of coca cola can lead to:", "Neurotoxic plant belonging to the Asteraceae famil, used in the making of some alcoholic drinks and part of European flora ", "The red flowers and dark seeds of this plant are used for their sedative effect:"];
var currentQuestion=0;
function spawnQuestionAndAnswers () {
	if(currentQuestion<10){
		$("#status").hide();
		$("#question").text(questions[currentQuestion]);
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
	console.log(id);
	$('img').attr('src','img/'+(id+1)+'.jpg');
	$(".description").hide();
	$("#description"+id).show();
	$("#modalInfo").modal('show');
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