
// const Capitalizemethod = "azer is";
// console.log(Capitalizemethod.charAt(0).toUpperCase() + Capitalizemethod.slice(1));








// let Reversedstring = "azer";
//  for (let i = Reversedstring.length - 1; i >= 0; i--) {
//     Reversedstring += Reversedstring.charAt(i);
//   }
//   console.log(Reversedstring)




function capitalizeVowel (string) {
    return string.toLowerCase ().replace (/[aouie]/g, function(l){
        return l.toUpperCase();
    });
 }
console.log(capitalizeVowel("azer"));



  

 
   
   







