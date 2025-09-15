// small helpers & hooks
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  // GSAP floating car animation: left-right with subtle rotation
  const car = document.getElementById("car");
  const tool = document.getElementById("tool");

  // horizontal glide
  gsap.to(car, {
    x: 40,
    duration: 3.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  // small tilt/float
  gsap.to(car, {
    rotation: 2,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
  });

  // tool hover reactive color change (example: change svg filter)
  tool.addEventListener("mouseenter", () => {
    gsap.to(tool, { scale: 1.08, duration: 0.3, rotation: 6 });
  });
  tool.addEventListener("mouseleave", () => {
    gsap.to(tool, { scale: 1, duration: 0.3, rotation: 0 });
  });

  // On hover, car reacts too
  car.addEventListener("mouseenter", () => {
    gsap.to(car, { scale: 1.04, duration: 0.25, rotation: 4 });
  });
  car.addEventListener("mouseleave", () => {
    gsap.to(car, { scale: 1, duration: 0.25, rotation: 0 });
  });

  // contact form submit (POST to backend)
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // show quick UX
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending...";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert("Message sent — we will contact you.");
        form.reset();
      } else throw new Error("Network error");
    } catch (err) {
      alert("Failed to send. You can also call us directly.");
    } finally {
      btn.disabled = false;
      btn.textContent = "Send";
    }
  });
});
