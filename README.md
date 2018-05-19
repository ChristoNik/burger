# burger
Make sure you install all the dependencies you need for the project

Once you have Node.js installed on your computer

Navigate to the working directory and do the following in your terminal

###### Step 1<br>
> npm install <br>
The above command will install all the dependencies you need

###### Step 2<br>
> npm install -g nodemon<br>
The above command will install nodemon globally for you
nodemon will watch the files in the directory in which nodemon was started, and if any files 
change, nodemon will automatically restart your node application.

###### Step 3<br>
> change the password in the file connections.js,  which is in the config folder, to whatever password you have to accses 
your database server. Whithowt doing this the node.js accsess to the database will fail and show error

###### Step 4<br>
> nodemon server.js
The above command will start the server for you

###### Step 5<br>
> Open your browser to http://localhost:3000/
