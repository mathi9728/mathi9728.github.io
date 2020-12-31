function bookNow(guestName, guestEmail, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/33df2546c83db580bff2c6191c70da09/book/sheet1';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax,
            remarks: guestRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + "addded");
            GetBooking();
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;
        bookNow(userName, userEmail, userPax, userRemarks);
    });
});