import React from 'react';
import Header from '../Other/Header'; // Assuming Header component exists
import CreateTask from '../Other/CreateTask';
import AllTasks from '../Other/AllTasks';


const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-8 font-sans">
      <Header />
        
      <CreateTask/>

      <AllTasks />
      
    </div>
    
  );
};

export default AdminDashboard;