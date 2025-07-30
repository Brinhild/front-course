// Problem -> console 10 times 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
// }

for (var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    })(i);
}
