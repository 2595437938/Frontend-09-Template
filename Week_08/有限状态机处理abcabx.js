var repratA = false;
var repratB = false;

function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c)
    }
    return state === end;
}


function start(c) {
    if (c === "a") {
        repratA = true;
        return foundA;
    }
    else
        return start;
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === "b") {
        repratB = true;
        return foundB;
    }
    else
        return start(c);
}
function foundB(c) {
    if (c === "c")
        return foundC;
    else
        return start(c);
}
function foundC(c) {
    if (c === "a" && repratA)
        return foundD;
    else
        return start(c)
}
function foundD(c) {
    if (c === "b" && repratB)
        return foundE;
    else
        return start(c);
}
function foundE(c) {
    if (c === "x")
        return end
    else
        return foundB(c);
}
// console.log(match("abcxabx"));
// console.log(match("abcabx"));
console.log(match("abcabcabx"));