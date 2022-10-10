
import './App.css';


function handleSubmit(e){
  const fname=e.target.fname.value;
  const lname=e.target.lname.value;
  const email =e.target.email.value;
  const phone=e.target.phone.value;
  const experieance=e.target.experiance.value;
  const address=e.target.address.value;
  e.preventDefault();
  console.log({
    "fname": fname,
    "lname":lname,
    "email":email,
    "phone":phone,
    "experieance":experieance,
    "address":address,}

  );


}





function App() {
  return (
    <>
    <div className="container">
<div className="card">
  <div className="card-header form-control">
    <h1 className="text-center text-uppercase">  Employee Information</h1>
  </div>
  <div className="card-body ">
    <form onSubmit={handleSubmit}>
    <input type="text" name="fname" placeholder="please enter your first name" className="form-control" /><br/>
    <input type="text" name="lname" placeholder="please enter your last name" className="form-control"/><br/>
    <input type="email" name="email" placeholder="please enter your email" className="form-control" /><br/>
    <input type="text" name="phone" placeholder="please enter your phone number" className="form-control" /><br/>
    <input type="text" name="experiance" placeholder="please enter your experiance" className="form-control" /><br/>
    <input type="text" name="address" placeholder="please enter your address" className="form-control" /><br/>
    <button type="submit" className="btn btn-primary btn-lg"   > Save</button>
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
