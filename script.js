const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const joke = document.getElementById("joke");
const statusText = document.getElementById("status");

const steps = [10, 28, 54, 87, 99, 100];

let index = 0;

function startLoading() {

    if (index >= steps.length) {
        return;
    }

    let value = steps[index];

    progress.style.width = value + "%";
    percent.textContent = value + "%";

    if (value === 99) {

        joke.innerHTML = "Still 99%...<br>Just like your late replies. 😒";

        setTimeout(function () {
            index++;
            startLoading();
        }, 4000);

        return;
    }

    if (value === 100) {

        joke.innerHTML = "✅ Connection Established.";

        statusText.textContent = "Birthday Mission Ready";

        return;
    }

    index++;

    setTimeout(startLoading, 1000);
}

window.onload = startLoading;
