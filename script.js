function generateLink() {
  const originalUrl = document.getElementById("originalUrl").value.trim();
  if (!originalUrl) return alert("Please enter a URL");

  // ইউনিক আইডি তৈরি
  const id = Math.random().toString(36).substr(2, 6);

  // LocalStorage-এ সংরক্ষণ
  localStorage.setItem("link_" + id, originalUrl);

  // শর্ট লিংক তৈরি
  const shortLink = `${window.location.origin}/redirect.html?id=${id}`;
  document.getElementById("shortenedLink").innerHTML = `
    <p>Shortened URL:</p>
    <a href="${shortLink}" target="_blank">${shortLink}</a>
  `;
}
