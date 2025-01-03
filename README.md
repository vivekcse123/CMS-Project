This is an Angular application (Customer Management System for Booking). 
I have used JSON-Server as a database to store all the customers' records and manipulate their data through RESTful web services.
The following are steps to start the application:

1. Make sure node.js should be installed in your system.
2. Open your friendly code editor, such as VS code.
3. Select and open the project folder.
4. open the terminal in the code editor and navigate to your application directory: cd myApp
5. install angular CLI: npm install @angular/cli
6. run your application: ng serve
7. Add one more terminal and redirect to cd myApp -> src -> assets -> data
8. Now start the server: npx json-server --watch db.json
