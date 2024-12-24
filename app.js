const express= require('express');
const cors= require('cors');
const dotenv= require('dotenv');
const connectDB= require('./config/db');
const authRoutes= require('./routes/userRoutes');

dotenv.config();
connectDB();
const app =express;
//middleware
app.request(cors()); 
app.use(express.json());
//routes
app.use('/api/user' , authRoutes);

//Demarer le serveur 
const Port= process.env.Port || 5000;
app.listen(8000, () =>{
    console.log(`serveur demarré sur le port ${PORT}`);
    
 });