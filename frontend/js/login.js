document.getElementById("loginForm").addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const res = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) { localStorage.setItem("token", data.token); localStorage.setItem("user", JSON.stringify(data.user)); window.location.href = "dashboard.html"; }
    else { alert(data.error || "Invalid credentials"); }
  } catch { alert("Server not reachable."); }
});
