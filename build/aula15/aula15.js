"use strict";
function fsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    return s;
}
console.log(fsoma(3, 4, 7, 10, 3, 100));
