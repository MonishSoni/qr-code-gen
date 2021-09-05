const canvas = document.getElementById('canvas');
const message = document.getElementById('message');
const generate = document.getElementById('gen');
const download = document.getElementById('dow');
const errormsg = document.getElementById('errormsg');


generate.addEventListener('click', () => {
    if (message.value !== "") {
        QRCode.toCanvas(canvas, message.value, { width: 1000 });
    } 
    else {
        errormsg.innerHTML = "Please Enter Valid Message !!!";
        setTimeout(()=>errormsg.classList.add('hide'),3000);
        errormsg.classList.remove('hide')
    }
});

download.addEventListener('click', () => {
    if (message.value !== "") {
        const link = document.createElement("a");
        link.download = "qrcode_" + Date.now();
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
        link.remove();
    }
    else {
        errormsg.innerHTML = "Please Generate QR Code First !!!";
        setTimeout(()=>errormsg.classList.add('hide'),3000);
        errormsg.classList.remove('hide')
    } 
});