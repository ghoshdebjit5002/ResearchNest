const app = require('./app');
const { sequelize, User } = require('./models');
require('dotenv').config();
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 4000;

async function seedDemoUsers(){
  const count = await User.count();
  if (count === 0){
    const users = [
      { name:'Admin User', email:'admin@example.com', password:'admin123', role:'admin' },
      { name:'Reviewer One', email:'reviewer@example.com', password:'review123', role:'reviewer' },
      { name:'Author One', email:'author@example.com', password:'author123', role:'author' },
    ];
    for (const u of users){
      const hash = await bcrypt.hash(u.password, 10);
      await User.create({ name:u.name, email:u.email, password:hash, role:u.role });
    }
    console.log('Seeded demo users.');
  }
}

(async ()=>{
  try{
    await sequelize.sync();
    await seedDemoUsers();
    app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
  }catch(e){ console.error(e); }
})();
