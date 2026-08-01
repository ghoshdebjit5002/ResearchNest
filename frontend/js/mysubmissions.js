async function loadMyPapers(){
  const token = localStorage.getItem('token');
  const body = document.getElementById('paperBody');
  try{
    const res = await fetch('http://localhost:4000/api/papers/mine',{ headers:{ Authorization:'Bearer '+token }});
    const list = await res.json();
    body.innerHTML='';
    if(!Array.isArray(list) || list.length===0){ body.innerHTML = '<tr><td colspan="5" class="text-muted">No submissions yet.</td></tr>'; return; }
    list.forEach(p=>{
      const tr = document.createElement('tr');
      const statusClass = { 'submitted':'badge-submitted','under-review':'badge-underreview','accepted':'badge-accepted','rejected':'badge-rejected','camera-ready':'badge-cameraready' }[p.status] || 'badge-submitted';
      const fileName = (p.filePath||'').split('/').pop();
      tr.innerHTML = `<td>${p.id}</td><td>${p.title||''}</td><td>${p.keywords||''}</td><td><span class="badge-chip ${statusClass}">${p.status}</span></td><td>${p.filePath?`<a class="btn btn-sm btn-outline-primary" href="http://localhost:4000/${p.filePath}" target="_blank">View PDF</a>`:'-'}</td>`;
      body.appendChild(tr);
    });
  }catch(e){ body.innerHTML = '<tr><td colspan="5" class="text-danger">Failed to load. Is the server running?</td></tr>'; }
}
