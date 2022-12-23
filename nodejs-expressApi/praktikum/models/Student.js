// import database
const db = require("../config/database");

// membuat class model student
// class Student {
//     static all(callback){
//         const query = "SELECT * from students";
//         db.query(query, (err, result) => {
//             callback(results);
//         });
//     };
// };

// solution menggunakan promise
class Student {
        static all(){
            return new Promise((resolve, reject)=>{
            const query = "SELECT * from students";
            db.query(query, (err, result) => {
                callback(results);
            });
        });
    };
};


// export students
module.exports = Student;