document.getElementById("registerForm").addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.querySelector("input[name='role']:checked").value;
  try {
    const res = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role })
    });
    const data = await res.json();
    if (res.ok) { alert("Registered successfully!"); window.location.href = "login.html"; }
    else { alert(data.error || "Registration failed"); }
  } catch { alert("Server error"); }
});
