export default function handleContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form as HTMLFormElement);
    const button = form.querySelector("#contact-submit");
    button?.setAttribute("data-loading", "true");
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      button?.removeAttribute("data-loading");
      alert(data.message || "Error sending message. Please try again.");
    });
  });
}
