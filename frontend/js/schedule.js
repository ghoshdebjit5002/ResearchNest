async function loadSessions(){
  const token = localStorage.getItem('token');
  try{
    const res = await fetch('http://localhost:4000/api/sessions', { headers: { Authorization: 'Bearer '+token }});
    const list = await res.json();
    const body = document.getElementById('sessionBody');
    body.innerHTML = '';
    list.forEach(s=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${s.id}</td><td>${s.name}</td><td>${new Date(s.startTime).toLocaleString()}</td><td>${new Date(s.endTime).toLocaleString()}</td>`;
      body.appendChild(tr);
    });
  }catch(e){ console.log(e); }
}
document.getElementById('sessionForm').addEventListener('submit', async e=>{
  e.preventDefault();
  const token = localStorage.getItem('token');
  const name = document.getElementById('sname').value;
  const start = document.getElementById('sstart').value;
  const end = document.getElementById('send').value;
  try{
    const res = await fetch('http://localhost:4000/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '+token },
      body: JSON.stringify({ name, startTime: start, endTime: end })
    });
    const data = await res.json();
    if(res.ok){ alert('Session created'); document.getElementById('sessionForm').reset(); loadSessions(); }
    else{ alert(data.error || 'Error creating session'); }
  }catch(e){ alert('Server error'); }
});
