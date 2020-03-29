function hamburger(x) {
    if (x.matches) {
        document.getElementById("hamburgerwrapper").innerHTML =
            '<a href="/">' +
            '<img id="logo-navbar" src="/image/logo home evolty-03.png" alt="" srcset="">' +
            "</a>" +
            '<nav class="navbar navbar-dark" id="idNavbar" style="height: fit-content; margin-right: 0; padding: 0; width: fit-content;">' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="#navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
            "</button>" +
            "</nav>";
    } else {
        document.getElementById("hamburgerwrapper").innerHTML =
            '<a href="/">' +
            '<img id="logo-navbar" src="/image/logo home evolty-03.png" alt="" srcset="">' +
            "</a>" +
            '<div class="isi-wrapper" id="isiwrapper" style="">' +
            '<a href="https://zeniora.education" style="text-decoration:none;">' +
            '<div class="tulisan-1"><span>Tryout Electra</span></div>' +
            "</a>" +
            '<a href="/news" style="text-decoration:none;">' +
            '<div class="tulisan-1"><span>News</span></div>' +
            "</a>" +
            '<a href="/contact" style="text-decoration:none;">' +
            '<div class="tulisan-1"><span>Contact Us</span></div>' +
            "</a>" +
            '<div class="dropdown">' +
            '<div class="tulisan-1 dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Event</span></div>' +
            '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">' +
            '<a class="dropdown-item" href="https://mage-its.com">Mage</a>' +
            '<a class="dropdown-item" href="/electra">Electra</a>' +
            '<a class="dropdown-item" href="/baronas">Baronas</a>' +
            '<a class="dropdown-item" href="/evolve">Evolve</a>' +
            "</div>" +
            "</div>" +
            '<a href="/login" style="text-decoration:none;">' +
            '<div class="tulisan-1" style="border: 0; font-weight: 500;"><span>Login</span></div>' +
            "</a>" +
            "</div>";
    }
}

var x = window.matchMedia("(max-width: 768px)");
hamburger(x); // Call listener function at run time
x.addListener(hamburger);
