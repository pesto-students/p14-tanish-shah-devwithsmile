function displayWindowProperties() {
    console.log("navigator =" + navigator.userAgent)
    console.log("screen width = " + screen.width);
    console.log("screen height = " + screen.height);
    console.log("location href = "+ location.href);
    console.log("location pathname = "+ location.pathname);

    let myName = "Dev Saini";
    let profession = "developer";

    sessionStorage.setItem("myName", myName);
    console.log("myName from Session storage is : " + sessionStorage.getItem("myName"));

    localStorage.setItem("profession",profession);
    console.log("my profession is : "+ localStorage.getItem("profession"));


}


document.addEventListener("DOMContentLoaded",displayWindowProperties);

