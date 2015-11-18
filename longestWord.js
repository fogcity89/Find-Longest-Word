function findLongestWord(str){
	var words = str.split(" ");
	var longestLength= 0;
	var longestWord;
	for(var i = 0; i < words.length; i++){
		if(words[i].length > longestLength){
			longestLength=words[i].length;
			longestWord = words[i];
		}
	}
	return longestWord;
  //return longestLength;	
}
findLongestWord();


