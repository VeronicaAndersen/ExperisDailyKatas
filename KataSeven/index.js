
function caesarCipher(str, k) {
    const alpha = "abcdefghijklmnopqrstuvwxyz"

    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/.test(str[i])) {


            for (let v = 0; v < alpha.length; v++) {

                if (str[i] === alpha[v]) {
                    if (v + k > alpha.length) {
                        result += alpha[(v + k) - alpha.length];
                    } else {
                        result += alpha[v + k];
                    }
                }
            }
        }
        else {
            result += str[i];
        }
    }
    return result;
}



console.log(caesarCipher("middle-Outz", 2)) // ➞ "okffng-Qwvb"
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)) // ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log(caesarCipher("A friend in need is a friend indeed", 20)) // ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"