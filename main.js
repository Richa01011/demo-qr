import "./style.css";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
function onScanSuccess(decodedText, decodedResult) {
    const result = document.querySelector("#result");
    // handle the scanned code as you like, for example:
    result.innerHTML = `<p>${decodedText}</p><br><p>${decodedResult}</p>`;
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
