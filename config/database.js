const mongoose = require('mongoose');

require("dotenv").config();

//This function establishes connection
//between app and database.
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,
    //{
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //}
    //NO LONGER REQD IN THE UPDATED VERSION
)
    .then(() => console.log('DB ka Connection is Successful'))
    .catch((error) => {
        console.log('Issue in DB connection');
        console.error(error.message);
        process.exit(1); //exit(1) -- process exit hoga with an error
        //exit(0)--process exit without error
    });
}

module.exports = dbConnect;