export default function handleContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form as HTMLFormElement);
    const button = form.querySelector("#contact-submit");
    button?.setAttribute("data-loading", "true");
    const browserData = JSON.stringify(
      // @ts-ignore
      window.navigator.userAgentData || {},
      null,
      2
    );
    +JSON.stringify(window.navigator.languages, null, 2);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message") + "\n" + browserData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async () => {
      // const data = await response.json();
      button?.removeAttribute("data-loading");
      alert("KELVIN ???");
      // alert(data.message || "Error sending message. Please try again.");
    });
  });
}
