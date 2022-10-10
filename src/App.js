
import './App.css';
import {useState} from 'react';






function App() {
  const [valuesSubmit,setValues]=useState({
    fname:"",
    lname:"",
    email :"",
    phone:"",
    experieance:"",
    address:"",
    });
   const handleSubmit=(e)=>{
    e.preventDefault();
     console.log(valuesSubmit);
  }
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setValues(prevValues=>({...prevValues,[name]:value}));
  }
  
  return (
    <>
    <div className="container">
<div className="card">
  <div className="card-header form-control">
    <h1 className="text-center text-uppercase">  Employee Information</h1>
  </div>
  <div className="card-body ">
    <form onSubmit={handleSubmit}>
    <input type="text" name="fname" placeholder="please enter your first name" className="form-control" onChange={handleChange} /><br/>
    <input type="text" name="lname" placeholder="please enter your last name" className="form-control" onChange={handleChange}/><br/>
    <input type="email" name="email" placeholder="please enter your email" className="form-control" onChange={handleChange} /><br/>
    <input type="text" name="phone" placeholder="please enter your phone number" className="form-control" onChange={handleChange} /><br/>
    <input type="text" name="experiance" placeholder="please enter your experiance" className="form-control" onChange={handleChange} /><br/>
    <input type="text" name="address" placeholder="please enter your address" className="form-control" onChange={handleChange} /><br/>
    <button type="submit" className="btn btn-primary btn-lg"    > Save</button>
    </form>
  </div>
  <div className="card-footer">

  </div>
</div>
</div>
    </>
  );
}

export default App;
