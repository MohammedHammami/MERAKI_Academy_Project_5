const {Pool}=require('pg')
const connectionString=process.env.DB_URL
const pool=new Pool({
    connectionString
})
pool
  .connect()
  .then((res) => {
    console.log(`DB connected to ${res.database}`);
console.log(10);

  })

  .catch((err) => {
    console.log(err);
  });

module.exports = pool;