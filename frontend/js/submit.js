document.getElementById("submitForm").addEventListener("submit", async e => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  const title = document.getElementById("title").value;
  const abstract = document.getElementById("abstract").value;
  const keywords = document.getElementById("keywords").value;
  const paperFile = document.getElementById("paperFile").files[0];
  const form = new FormData();
  form.append("title", title);
  form.append("abstract", abstract);
  form.append("keywords", keywords);
  form.append("paper", paperFile);
  try {
    const res = await fetch("http://localhost:4000/api/papers/submit", {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
      body: form
    });
    const data = await res.json();
    if (res.ok) { alert("Paper submitted successfully!"); document.getElementById("submitForm").reset(); }
    else { alert(data.error || "Submission failed"); }
  } catch { alert("Server connection failed."); }
});
