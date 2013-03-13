var jQuery_1_6_2 = $.noConflict(true);
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "A plant with yellow flowers with strong and aromatic smell, which is commonly made into an infusion or tea ",
					answer: "chamomile",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 1
				},
				
			 	{
					clue: "A plant with pinkish-purple flowers used to extract a volatile oil, with a very distinctive smell",
					answer: "lavender",
					position: 2,
					orientation: "across",
					startx: 3,
					starty: 2
				},
				{
					clue: "An evergreen coniferous tree with leaves in fascicles of two",
					answer: "pine",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 3
				},
				{
					clue: "A plant with red petals which grows in fields and cereal crops, also a symbol for fallen soldiers",
					answer: "cornpoppy",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "An evergreen shrub or small tree whose leaves contain caffeine, and are used to produce a very popular beverage, mostly used as a tonic",
					answer: "tea",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 5
				},
				{
					clue: "A plant with large leaves containing nicotine",
					answer: "tobacco",
					position: 13,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: "A plant whose bark contains a substance that can be used to produce aspirin",
					answer: "salix",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "A tree with pleasant smelling flowers; an infusion of such flowers is antispasmodic, diaphoretic and sedative. ",
					answer: "silverlime",
					position: 17,
					orientation: "across",
					startx: 4,
					starty: 8
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery_1_6_2)