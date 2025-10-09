function removeLastChar(str) {

let newletters = ""

for (let i = 0; i < str.length - 1; i++){

newletters += str[i]

}

return newletters

}
    //input: abcde
    //output: abcd

console.log(removeLastChar("abcde"))


