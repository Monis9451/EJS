const {faker} = require("@faker-js/faker")
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: 'Monis9451..com'
  });

  try{
    connection.query("SHOW TABLES", (err, results)=>{
      if(err) throw err
      console.log(results)
    })
  }
  catch(err){
    console.log(err)
  }

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

console.log(getRandomUser()) 