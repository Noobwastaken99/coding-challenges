function LongestWord(sen) { 
  sen = sen.replace(/[^a-z-A-Z ]/g, "").split(" ");
  let big = "";
  for (i=0; i < sen.length; i++) {
    if (sen[i].length > big.length) {
      big = sen[i];
    }
  }
  // code goes here  
  return sen = big; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
