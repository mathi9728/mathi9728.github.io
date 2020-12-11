function getRandomUser() {
    let xhttp = new XMLHttpRequest();//create request obj

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSoN.parse(this.response);
            let elFirstName = document.getElementById("firstName");
            let eljsonResult = document.getElementById("jsonResult");
            let elUserImage = document.getElementById("usrImage");
            let elAddress = document.getElementById("address");
            let elEmail = document.getElementById("email");

            eljsonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
}

let elGetRandomUser = document.getElementById("getRandomUserBtn")
elGetRandomUser.addEventListener("click", function () {
    getRandomUser();
});