function getToken(){ return localStorage.getItem('token'); }
function getUser(){ try{ return JSON.parse(localStorage.getItem('user')||'{}'); }catch(e){ return {}; } }
function isLoggedIn(){ return !!getToken(); }
function requireAuth(){ if(!isLoggedIn()) window.location.href='login.html'; }
function requireRole(roles){
  const u = getUser();
  if(!u.role || !roles.includes(u.role)){
    alert('You are not authorized to view this page'); window.location.href='dashboard.html';
  }
}
function logout(){ localStorage.removeItem('token'); localStorage.removeItem('user'); window.location.href='login.html'; }
