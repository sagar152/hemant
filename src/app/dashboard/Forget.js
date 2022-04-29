import { Link } from "react-router-dom";
import React, {useState} from "react";
import "./Forget.css";
 import OtpTimer from 'otp-timer'
 

const Forget = () => {
  const [ timerStart, setTimerStart] = useState(false);

  const startTimer = () => {
    setTimerStart(true);
  }


  const handleClick = () =>{
    
  }

  return (
    <div>
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-6 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 bg-white">
                <form className="pt-3">
                  <h3>Forget Password</h3>
                  <div className="form-group pt-3">
                    <label>
                      <h5>Email:</h5>
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="resend">
                    {timerStart ? <OtpTimer seconds= {5} minutes={0} resend={handleClick} ButtonText="Resend" /> :  <div  onClick={startTimer}> Resend</div>}
        
      </div>
      
                 

                  <div className="mt-3">
                    <Link
                      className="btn btn-block  btn-lg font-weight-medium auth-form-btn forgetbutton"
                      to="/"
                    >
                      Continue
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forget;
