const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const validity = document.getElementById('valid');
const destination = document.getElementById('destination');
const payment = document.getElementById('payment');

name.innerHTML = localStorage.getItem('Name')
email.innerHTML = localStorage.getItem('email')
mob.innerHTML = localStorage.getItem('mobno')
destination.innerHTML = localStorage.getItem('Destination')
payment.innerHTML = "Rs " + localStorage.getItem('Payment') + "/-"


var valid = localStorage.getItem('Expire')
if (valid == 1) {
    validity.innerHTML = localStorage.getItem('Expire') + " Month"
}
else {
    validity.innerHTML = localStorage.getItem('Expire') + " Months"
}



document.getElementById('pdf').onclick = function () {
    var doc = new jsPDF('l', 'pt', [610, 310]);
    var res = doc.autoTableHtmlToJson(document.getElementById('table'));
    // console.log(res)
    var height = doc.internal.pageSize.height;
    doc.setFontType('bold');
    doc.text("Bus Pass", 250, 30);
    doc.line(250, 35, 350, 35);
    doc.setFontType('normal');
    doc.autoTable(res.columns, res.data, {
        // startX: 150,
        styles: { fontSize: 11 },
        margin: { left: 200 },
        startY: 50,
        theme: 'plain'
    });

    doc.save('Bus Pass.pdf');
}

function done() {
    if (window.confirm("Your Pass has been Registered!")) {
        window.location.href = "BusPass.html";
    }
}



// document.getElementById('button').onclick = function () {
//     var doc = new jsPDF('p', 'pt');
//     var res = doc.autoTableHtmlToJson(document.getElementById('receipt'));
//     var height = doc.internal.pageSize.height;
//     doc.text("Bus Pass", 50, 50);
//     // function pdf() {
//     //     // let doc = new jsPDF()

//     //     // doc.autoTable({ html: '#receipt' })
//     //     // doc.save('  Receipt.pdf')

//     //     var doc = new jsPDF();
//     //     doc.autoTable({ html: '#receipt' });
//     //     doc.save('table.pdf');
//     // }




//     // document.getElementById('pdf').onclick = function () {
//     //     var doc = new jsPDF('p', 'pt');
//     //     var res = doc.autoTableHtmlToJson(document.getElementById('table'));
//     //     var height = doc.internal.pageSize.height;
//     //     doc.text("Generated PDF", 50, 50);
//     //     doc.autoTable(res.columns, res.data, {
//     //         startY: 200
//     //     });
//     //     doc.autoTable(res.columns, res.data, {
//     //         startY: doc.autoTableEndPosY() + 50
//     //     });
//     //     doc.autoTable(res.columns, res.data, {
//     //         startY: height,
//     //         afterPageContent: function (data) {
//     //             doc.setFontSize(20)
//     //             doc.text("After page content", 50, height - data.settings.margin.bottom - 20);
//     //         }
//     //     });
//     doc.save('BusPass.pdf');


// function done() {
//     alert("Your Pass has been Registered!");
//     if (isConfirm) {
//         window.location.href = "index.html";
//     }
// };

// function done({
//     title: 'Warning!',
//     text: 'Invalid user or password!',
//     type: 'warning'
// }, function (isConfirm) {
//     alert('ok');
// });
// $('.swal2-confirm').click(function () {
//     window.location.href = 'index.html';
// });

