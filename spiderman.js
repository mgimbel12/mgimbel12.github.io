function checkPassword() {
  const input = document.getElementById("vault-pass").value;
  const message = document.getElementById("vault-msg");
  if (input === "SpideyChristmas") {
    message.innerHTML = `
      <p>✅ Welcome to the Spider-Verse Vault!</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/lBdbttgfmRw?si=Gg4UmNkWoEc9zz9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zAd1QOKO0sA?si=WXEvyt_nsEC1aDw5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QGA4lH4RQoQ?si=KpAwwMTfKBvunxNq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/JQ93n1HQIIk?si=ltP3jnkmWKDj_eGl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   `;
  } else {
    message.innerHTML = "<p>❌ Incorrect password. Try again!</p>";
  }
}

