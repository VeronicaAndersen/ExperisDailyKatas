let dot = 0;
let validity;

function isValidIP(ip, bool) {
let result;

    for (let i = 0; i < ip.length; i++) {
        if (ip[i] === ".") {
            dot++;
        }
        if (dot === 3) {
            /* result = ip.split("."); */
            if (ip[i] >= 1 && ip[i] <= 255 && ip[ip.length - 1] !== "0" && ip[0] !== "0") {
                validity = true;
            } 
        }else {
            validity = false;
        }
    }
    dot = 0;
    console.log(validity, bool);
    console.log(ip);
}

//isValidIP("1.2.3.4", true) // ➞ true
//isValidIP("1.2.3", false) // ➞ false
//isValidIP("1.2.3.4.5", false) // ➞ false
//isValidIP("123.45.67.89", true) // ➞ true
//isValidIP("123.456.78.90", false) // ➞ false
isValidIP("0123.045.067.089", false) // ➞ false