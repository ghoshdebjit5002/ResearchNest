const token = localStorage.getItem("token");
document.getElementById("assignForm").addEventListener("submit", async e => {
  e.preventDefault();
  const paperId = document.getElementById("paperId").value;
  const reviewerId = document.getElementById("reviewerId").value;
  try {
    const res = await fetch("http://localhost:4000/api/admin/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      body: JSON.stringify({ paperId, reviewerId }),
    });
    const data = await res.json();
    alert(res.ok ? data.message : data.error);
  } catch { alert("Server connection error."); }
});
document.getElementById("decisionForm").addEventListener("submit", async e => {
  e.preventDefault();
  const paperId = document.getElementById("paperIdDecision").value;
  const decision = document.getElementById("decision").value;
  const adminComment = document.getElementById("adminComment").value;
  try {
    const res = await fetch("http://localhost:4000/api/admin/decision", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      body: JSON.stringify({ paperId, decision, adminComment }),
    });
    const data = await res.json();
    alert(res.ok ? data.message : data.error);
  } catch { alert("Server connection error."); }
});
