let targetUrl = "";

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  targetUrl = localStorage.getItem("link_" + id);

  if (!targetUrl) {
    document.querySelector(".container").innerHTML = "<p>Invalid or expired link!</p>";
  }
};

function startTimer() {
  document.getElementById("robotBtn").style.display = "none";
  document.getElementById("timerArea").style.display = "block";

  let count = 10;
  const interval = setInterval(() => {
    count--;
    document.getElementById("timer").innerText = count;
    if (count === 0) {
      clearInterval(interval);
      document.getElementById("timerArea").style.display = "none";
      document.getElementById("goBtn").style.display = "block";
    }
  }, 1000);
}

function goToLink() {
  window.location.href = targetUrl;
}
