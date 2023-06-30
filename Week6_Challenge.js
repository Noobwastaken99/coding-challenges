function charCount(myChar, str) {
	str = str.split("");
	let num = 0;
	
	for (i=0; i<=str.length; i++) {
		if (myChar == str[i]) {
			num++;
		}
	}
	return num;
}
