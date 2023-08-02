let ans;
let right = 0;
let wrong = 0;
let total = 0;

function gtrndm(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ques_change(){
    var first = gtrndm(1, 1000);
    var second = gtrndm(1, 1000);

    var state1 = "what is " + first + "  +  " + second + "  ? ";
    var st = document.getElementById("state");
    st.textContent = state1;

    var answer = first + second;

    ans = answer;

    var rt_idx = gtrndm(1,4);

    var o1 = answer;
    var o2 = answer + gtrndm(1, 140);
    var o3 = answer * gtrndm(2,4);
    var o4 = answer + gtrndm(1,30);


    if(rt_idx === 1){
        var o = document.getElementById("op1");
        o.textContent = o1;
        var oo = document.getElementById("op2");
        oo.textContent = o2;
        var ooo = document.getElementById("op3");
        ooo.textContent = o3;
        var oooo = document.getElementById("op4");
        oooo.textContent = o4;
    }

    else if(rt_idx === 2){
        var o = document.getElementById("op1");
        o.textContent = o2;
        var oo = document.getElementById("op2");
        oo.textContent = o1;
        var ooo = document.getElementById("op3");
        ooo.textContent = o3;
        var oooo = document.getElementById("op4");
        oooo.textContent = o4;
    }

    else if(rt_idx === 3){
        var o = document.getElementById("op1");
        o.textContent = o2;
        var oo = document.getElementById("op2");
        oo.textContent = o3;
        var ooo = document.getElementById("op3");
        ooo.textContent = o1;
        var oooo = document.getElementById("op4");
        oooo.textContent = o4;
    }

    else{
        var o = document.getElementById("op1");
        o.textContent = o2;
        var oo = document.getElementById("op2");
        oo.textContent = o3;
        var ooo = document.getElementById("op3");
        ooo.textContent = o4;
        var oooo = document.getElementById("op4");
        oooo.textContent = o1;
    }
    chk();
}

function auth(given){
    var given_idx = document.getElementById(given);
    var given_ans = parseInt(given_idx.innerText);

    if(given_ans === ans){
        right = right + 1;
    }
    else{
        wrong++;
    }
    total++;
    chk();
    ques_change();
}

function chk(){
    var cr = document.getElementById("cr");
    cr.textContent = right;

    var wr = document.getElementById("wr");
    wr.textContent = wrong;

    var tt = document.getElementById("tt");
    tt.textContent = total;
}

ques_change();

