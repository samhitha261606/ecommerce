function navwomenSection() {
    var womenSection = document.getElementById('womenSection');
    womenSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navcategorySection() {
    var categorySection = document.getElementById('categorySection');
    categorySection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navmenSection() {
    var menSection = document.getElementById('menSection');
    menSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navkidsSection() {
    var kidsSection = document.getElementById('kidsSection');
    kidsSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navelectronicSection() {
    var electronicsSection = document.getElementById('electronicsSection');
    electronicsSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navbeautySection() {
    var beautySection = document.getElementById('beautySection');
    beautySection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navshoesSection() {
    var shoesSection = document.getElementById('shoesSection');
    shoesSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function navwatchesSection() {
    var watchesSection = document.getElementById('watchesSection');
    watchesSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function countdown() {
    var endDate = new Date("2023-07-07T23:59:59"); // Set your desired end date and time here
    var now = new Date();

    var distance = endDate - now;

    if (distance < 0) {
        // Deal has ended
        document.getElementById("countdown").innerHTML = "Deal Closed";
    } else {
        // Calculate remaining time
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display remaining time
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
}

// Update countdown every second
setInterval(countdown, 1000);