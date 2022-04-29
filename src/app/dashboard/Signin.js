import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import './Signin.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const  Signin=()=> {
    const [passwordShowns, setpasswordShown] = useState("false");

    const handle = () => {
      setpasswordShown(!passwordShowns);
    };
    
  //   const darkmode=()=>{
  //       var element = document.body;
  //  element.classList.toggle("darkmodes");

  //   }
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-7 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 bg-white">
                  <div className="coloradmins">
              <div className="linear"></div>
                <h4>ThyForm Admin</h4><div className="icon">
                <ArrowForwardSharpIcon /></div>
              </div>
                <h6 className="font-weight-light">Bootstrap 5 Responsive ThyForm templete</h6>
                {/* <div className='darkicon' onClick={darkmode}>dark</div> */}
                <form className="pt-3">
                  
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                 
                  <div className="form-group">
                  <div className="showlog" onClick={handle}>
                  {passwordShowns ? <VisibilityOffIcon />:<VisibilityIcon/>}
              </div>
                    <input type={passwordShowns ? "password" : "text"} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    
                  </div>

                  <div className="form-group">
                    <input type="Number" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Pin code" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link to="/forget">Forget Password ?</Link>
                  <div className="mt-3">
                    <div className='loginbutton'>
                    <Link className="btn btn-block  btn-lg font-weight-medium auth-form-btn loginbutton" to="/Register">SIGN Me IN</Link>
                  </div>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                  Not a member yet ? click <Link to="/Signup">here</Link> to SignUp
                  </div>
                  <hr/>
                  <div className='reserved'>ThyForm Admin All Right Reserved 2021</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Signin