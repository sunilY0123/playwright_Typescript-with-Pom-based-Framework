function capitalization(str) {
    var result = "";
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
    return result.trim();
}
console.log(capitalization("i love my india"));
