### Electronic Medical Record System  
This React application is a work in progress which will eventually be a fully functional Electronic Medical Records System (EMR). As of now, users can enter patient data into the 'Admission' page which will be displayed as patient chart thumbnails on the 'All Charts' page. The data is stored in a SQLite database and consumed by the frontend by way of an Express API.  
  

### to Run:  
- clone this repo to your local machine  
- open terminal in project's root directory and type ```npm install```  
- start backend server by navigating to backend/ directory and type ```node app.js```  
- start frontend server by navigating to frontend/ directory and type ```npm run dev```  
- open 2 browser windows: http://127.0.0.1:3000/api/thumbnail (backend) and http://127.0.0.1:5173 (frontend)

