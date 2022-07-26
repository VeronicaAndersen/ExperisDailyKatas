// let validity = false;

// function isValidIP(ip) {
//     let dots = 0;
//     for (let i = 0; i < ip.length; i++) {
//         let ips = ip[i];

//         if (ip[ip.length - 1] === "0") {
//             validity = false
//         } else {
//             if (ips >= "1" && ips <= "255") {
//                 validity = true;
//             } else {
//                 if (ips === ".") {
//                     ips = ips.split(".");
//                     dots++;
//                 }
//                 if (dots === 3) {
//                     validity = true;
//                 }
//                 else {
//                     validity = false;
//                 }
//             }
//         }
//     }
//     console.log(validity);
//     //console.log("Number of dots: " + dots);
// }


let valid = false;
function isValidIP(correct) {
    
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.isValidIP(correct)) {
        valid = true
    }
    alert("You have entered an invalid IP address!")
    valid = false
    console.log(valid);
}



isValidIP("1.2.3.1") //➞ true
isValidIP("1.2.3") // ➞ false
isValidIP("1.2.3.4.5") // ➞ false
isValidIP("123.45.67.89") // ➞ true
isValidIP("123.456.78.90") // ➞ false
isValidIP("123.045.067.089") // ➞ false