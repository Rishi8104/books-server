import mysql from 'mysql';


const connectDB = mysql.createConnection({
host:"localhost",
user:"root",
password:"admin",
database:"test"
})
connectDB.connect((err) => {
    if(err) throw err;
    console.log("Connected to database!!!!!");
})

export default connectDB;