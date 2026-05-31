function capitalization(str: string){
    let result = "";
    let words = str.split(" ");

    for (let word of words) {

        let firstChar = word.charAt(0);
        let upperChar = firstChar.toUpperCase();
        let rest = word.slice(1);

        let newWord = upperChar + rest;

        result += newWord + " ";
    }
// console.log(result)
    // return result.trim();
}

capitalization("i love my india");


function printEachCharacter(str:string){
     let result = "";
for(let ch of str){
    result=result+ch;
}
    console.log(result)

}
printEachCharacter("sunil")
