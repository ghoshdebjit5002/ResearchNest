const token = localStorage.getItem("token");
document.getElementById("certForm").addEventListener("submit", async e => {
  e.preventDefault();
  const paperId = document.getElementById("paperId").value;
  try {
    const res = await fetch(`http://localhost:4000/api/certificates/paper/${paperId}`, { headers: { Authorization: "Bearer " + token } });
    if (!res.ok) { const err = await res.json(); alert(err.error || "Error generating certificate"); return; }
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a"); link.href = url; link.download = `Certificate-${paperId}.pdf`; document.body.appendChild(link); link.click(); link.remove();
  } catch { alert("Server not reachable."); }
});
