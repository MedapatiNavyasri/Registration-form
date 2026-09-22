import {useFormik} from "formik";
function App(){
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      mobileno:"",
      gender:"",
      department:"",
      salary:"",
      joiningDate:"",
      password:"",
      confirmPassword:"",
    },
    onSubmit:(values)=>{
      console.log(values);
      alert("Registered successfully");
    }
  });
  return(
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-center">Registration form</h2>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={formik.values.name} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">MobileNo</label>
              <input type="text" className="form-control" name="mobileno" value={formik.values.mobileno} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <input type="text" className="form-control" name="gender" value={formik.values.gender} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Department</label>
              <input type="text" className="form-control" name="department" value={formik.values.department} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input type="text" className="form-control" name="salary" value={formik.values.salary} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Joining Date</label>
              <input type="date" className="form-control" name="joiningDate" value={formik.values.joiningDate} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={formik.values.password} onChange={formik.handleChange}/> 
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange}/> 
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;