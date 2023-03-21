// // how to connect to mysql database in nodejs?
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'example.org',
//   user     : 'bob',
//   password : 'secret',
// });

// connection.connect(function(err) {
//   // connected! (unless `err` is set)
// });


// var post  = {id: 1, title: 'Hello MySQL'};
// var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
//   // Neat!
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'




// //Source: https://stackoverflow.com/questions/5818312





// // how to reseive response angular from login form to nojdejs?
// import {Router} from '@angular/router';

// constructor(private router: Router) {
// }

// submitForm() {
//     const userName = this.clientForm.get('userName').value;
//     const password = this.clientForm.get('password').value;
//       this.contactService.client(userName, password)
//         .subscribe((response) => {
//           if (response.msg === 'sent') {
//             this.success = response.sucess;
//             // this.clientForm.reset();
//             this.router.navigate(['your route']);
//           }
//         });
    // }




//Source: https://stackoverflow.com/questions/66337315





