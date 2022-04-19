function Faiz() {

    let mebleg = document.getElementById('mebleg').value;
    mebleg = Number.parseInt(mebleg);
    console.log(typeof mebleg)



    let faiz = document.getElementById('faiz').value;
    faiz = Number.parseInt(faiz);
    console.log(typeof faiz)


    let credit = document.getElementById('credit').value;
    credit = Number.parseFloat(credit)
    console.log(typeof credit)

    alert(((mebleg * faiz / 100) + mebleg) / credit + ' manat pul odemelisiniz');

}


var netice = document.getElementById("netice");


function topla() {

    netice.textContent = parseInt(netice.textContent) + 1;

}

function azalt() {

    if (((netice.textContent = parseInt(netice.textContent) - 1) < 1)) {
        netice.textContent = parseInt(netice.textContent) + 1;

    }
}

function sifirla() {
    let reset = 1;
    netice.textContent = reset;
}