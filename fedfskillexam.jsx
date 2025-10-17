import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// StudentForm Component
function StudentForm() {
  const [formData, setFormData] = useState({ name: '', age: '', className: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nAge: ${formData.age}\nClass: ${formData.className}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Class: </label>
          <input type="text" name="className" value={formData.className} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </div>
  );
}

// App Component with Routing
function App() {
  return (
    <Router>
      <nav style={{ margin: '10px' }}>
        <Link to="/studentform">Student Form</Link>
      </nav>
      <Routes>
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
