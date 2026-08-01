const token = localStorage.getItem("token");
document.getElementById("reviewForm").addEventListener("submit", async e => {
  e.preventDefault();
  const paperId = document.getElementById("paperId").value;
  const score = parseInt(document.getElementById("score").value);
  const comments = document.getElementById("comments").value;
  const finalize = document.getElementById("finalize").checked;
  try {
    const res = await fetch("http://localhost:4000/api/reviews/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      body: JSON.stringify({ paperId, score, comments, finalize }),
    });
    const data = await res.json();
    alert(res.ok ? data.message : data.error);
  } catch { alert("Server error. Try again."); }
});
