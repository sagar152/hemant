import React, { useState } from "react";
import "./Signup.css";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import VisibilityIcon from "@material-ui/icons/Visibility";
const Signup = () => {
  const [passwordShown, setpasswordShown] = useState("false");
const [radio,setRadio] = useState(false);
const handleradio = ()=>{
  setRadio(true);
}

const handleradio1 = ()=>{
  setRadio(false);
}
  const handles = () => {
    setpasswordShown(!passwordShown);
  };
  const [hide, setHide] = useState(true);
  const [secondhide, setsecondhide] = useState(false);
  const [thirdhide, setthirdhide] = useState(false);

  const firstbtn = () => {
    setHide(false);
    setsecondhide(true);
    setthirdhide(false);
  };
  const secondbtn = () => {
    setHide(false);
    setsecondhide(false);
    setthirdhide(true);
  };
  const threebtn = () => {
    setHide(true);
    setsecondhide(false);
    setthirdhide(false);
  };
  return (
    <div className="row justify-content-center w-100">
      {/* <Col sm={4}></Col> */}
      <div className="col-md-10 bg-white">
        <div className="row w-100 mx-0">
          <div className="col-md-12">
            {" "}
            <h1 className="pb-2 mt-5 text-center">SignUp</h1>
          </div>
          <div className="col-md-12">
            <h2 className="yourbusiness">Your Business</h2>
          </div>
          <div className="col-md-12">
            {" "}
            <h5 className="pleaseselect">Please select your business type:</h5>
          </div>
          <div className="col-md-9">
            {" "}
            <div className="radiobutton">
              <div class="form-check pl-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => {
                    setHide(true);
                    setsecondhide(false);
                    setthirdhide(false);
                  }}
                />
                <label
                  className="form-check-label label1"
                  for="flexRadioDefault1"
                >
                  Limited Company
                </label>
              </div>
              <div className="radiosecond">
                <div className=" ml-5" class="form-check">
                  <input
                    className="ml-5"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onChange={() => {
                      setHide(false);
                      setsecondhide(true);
                      setthirdhide(false);
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    <h6 className="label1">Solo Trader</h6>
                  </label>
                </div>
              </div>
              <div className="radiosecond">
                <div className=" ml-5 otherpartnership" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onChange={() => {
                      setHide(false);
                      setsecondhide(false);
                      setthirdhide(true);
                    }}
                    // checked
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault2"
                    className="otherpartnership"
                  >
                    <h6>Other(e.g.Partnership)</h6>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="auth-form-light text-left px-4 px-sm-5 ">
              {/* <div className="row justify-content-between">
             
              </div> */}

              {hide && (
                <>
                  <div className="mb-5 abc">
                    <div>
                      {" "}
                      <div className="row w-100 ml-0">
                        <div className="col-md-12">
                          <h4 className="serachbys">Search by</h4>
                        </div>
                      </div>
                    </div>
                    <div className="radiobutton xyz">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                    
                          name="flexRadioDefault2"
                          id="flexRadioDefault1"
                          onChange={(e)=>{handleradio()}}
                        />
                        <label
                          class="form-check-label pb-4"
                          for="flexRadioDefault1"
                          className="label1"
                        >
                          <h6 className="pr-5">Business name</h6>
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault1"
                         onChange={(e)=>{handleradio1()}}
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioDefault1"
                          className="label1 pr-5 mr-5"
                        >
                          <h6>Company Register Number</h6>
                        </label>
                      </div>
                    </div>

                    <div className="row w-100 mx-0 d-flex">
                      <div className="col-md-6 ">
                        <div className="companydetails">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg companyinput"
                              placeholder="Enter your Business name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 ">
                        <button type="button" className="searchbutton1 ">
                          Search
                        </button>
                      </div>
                      <div className="col-md-4   ">
                      {radio ? <div className="comRegn  ">
                          Enter at least the first three Characters of your
                          Company name of your full Company registration number
                          and press search to locate your company details
                        </div> : <div className="comRegn  ">
                        Enter your full 8 digit company registration number. If your registration number is only seven digits, add a zero to the beginning. Companies registered in Scotland and Northern Ireland must add SC or NI to the beginning.
                        </div>}  
                      </div>
                      <div></div>
                    </div>

                    <div className="row w-100 mx-0 d-flex mt-3">
                      <div className="col-md-5 serachby">Select business*</div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <select className="selecttype ">
                            <option value="opel"></option>
                            <option value="volvo"></option>
                            <option value="saab">Saab</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 mx-0 d-flex">
                      <div className="col-md-5 serachby">Select director*</div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <select className="selecttype ">
                            <option value="opel"></option>
                            <option value="volvo"></option>
                            <option value="saab">Saab</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 mx-0 d-flex mt-3">
                      <div className="col-md-5 serachby ">
                        {" "}
                        Company registration number
                      </div>
                      <div className="col-md-7 ">
                        <div className="label1">None selected </div>
                      </div>
                    </div>
                    <div className="row w-100 mx-0 d-flex mt-3">
                      <div className="col-md-5 serachby ">
                        Registration business number
                      </div>
                      <div className="col-md-7 ">
                        <div className="label1">None selected </div>
                      </div>
                    </div>

                    <div className="firstemail">
                      <div className="form-group pt-3 serachby ">
                        <label>
                          <h6 className="label2" >Email:</h6>
                        </label>

                        <input
                          type="email"
                          className="form-control form-control-lg passwordinput"
                          id="exampleInputEmail1"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="firstemail">
                      <div className="form-group serachby">
                        <label>
                          <h6 className="label2">password:</h6>
                        </label>
                        <div className="signupicon " onClick={handles}>
                          {passwordShown ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </div>
                        <input
                          type={passwordShown ? "password" : "text"}
                          className="form-control form-control-lg passwordinput"
                          id="exampleInputUsername1"
                          placeholder="your password"
                        />
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="text-right">
                      <button
                        onClick={firstbtn}
                        type="button"
                        class="btn btn-success "
                      >
                        Next
                        <ArrowForwardIosIcon fontSize="inherit" />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* second tab ---2 */}
              {secondhide && (
                <>
                  <div className="pqr">
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">Business Name*</div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg emailsinput"
                            placeholder="Enter your Business name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">Industry*</div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <select className="selecttype2 mt-3 mb-3">
                            <option value="opel"></option>
                            <option value="volvo">Mining</option>
                            <option value="saab">manufacutring</option>
                            <option value="opel">
                              information and communication
                            </option>
                            <option value="audi">constructor</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">
                        Number of employees*
                      </div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <input
                            type="Number"
                            className="form-control form-control-lg numberinput"
                            placeholder="Enter "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">
                        {" "}
                        Are you a Contractore or freelancer ?*
                      </div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <select className="selecttype2 mt-1 ">
                            <option value="opel"></option>
                            <option value="volvo">yes</option>
                            <option value="saab">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">
                        {" "}
                        What's your expected monthly spend for this account*
                      </div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <input
                            type="Number"
                            className="form-control form-control-lg emailsinput"
                            placeholder="Enter "
                          />
                          <div className="label1">Please enter number only</div>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">
                        {" "}
                        Does your organisation have a website ?*
                      </div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <select className="selecttype2 mb-4">
                            <option value="volvo"></option>
                            <option value="saab">yes</option>
                            <option value="opel">no</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 d-flex">
                      <div className="col-md-5 serachby">
                        {" "}
                        Business name as it should appear on card*
                      </div>
                      <div className="col-md-7 ">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg emailsinput"
                            placeholder="Enter "
                          />
                          <div className="label1">
                            Please enter the company name exactly as you like to
                            appear on your card
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="firstemail2">
                      <div className="form-group">
                        <label>
                          <h6 className="label2">Email:</h6>
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg passwordinput"
                          id="exampleInputEmail1"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="firstemail2">
                      <div className="form-group">
                        <label>
                          <h6 className="label2">password:</h6>
                        </label>
                        <div className="signupicon " onClick={handles}>
                          {passwordShown ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </div>
                        <input
                          type={passwordShown ? "password" : "text"}
                          className="form-control form-control-lg passwordinput"
                          id="exampleInputUsername1"
                          placeholder="your password"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={secondbtn}
                        type="button"
                        class="btn btn-success "
                      >
                        Next
                        <ArrowForwardIosIcon fontSize="inherit" />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {thirdhide && (
                <>
                  {/* Three----3 */}
                  <div className="lmn">
                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby"> Business type*</div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <select className="selecttype2 mb-4">
                          <option value="volvo"></option>
                          <option value="saab">Charity</option>
                          <option value="opel">Public Sector</option>
                          <option value="opel">Partnership</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby">Industry*</div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <select className="selecttype2 mb-4">
                          <option value="volvo"></option>
                          <option value="saab">Education</option>
                          <option value="opel">Household</option>
                          <option value="opel">constructor</option>
                          <option value="opel">Mining</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby">
                      Number of employees*
                    </div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <input
                          type="Number"
                          className="form-control form-control-lg emailsinput"
                          placeholder="Enter "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 d-flex">
                    <div className="col-md-4 serachby">Business postcode*</div>
                    <div className="col-md-5 pl-2 ">
                      <div className="form-group ml-5">
                      <div className="inputicon ">£</div>
                      {/* <span class="glyphicon glyphicon-gbp"></span> */}
                        <input
                       
                          type="Number"
                          className="form-control form-control-lg ml-2 emailsinput3"
                          placeholder="Enter "
                        />
                        
                        <div className="pt-3 pl-5 label1">Enter Manually</div>
                      </div>
                    </div>
                    <div className="col-md-3 pl-3 ">
                      <button type="button" class="btnfind ml-4">
                        Find
                        <SearchTwoToneIcon />
                      </button>
                    </div>
                  </div>
                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby">
                      {" "}
                      Are you a Contractore or freelancer ?*
                    </div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <select className="selecttype3 ">
                          <option value="volvo"></option>
                          <option value="saab">yes</option>
                          <option value="opel">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby">
                      What's your expected monthly spend for this account*
                    </div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <input
                          type="Number"
                          className="form-control form-control-lg emailsinput"
                          placeholder="Enter "
                        />
                        <div className="label1"> Please enter number only</div>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby">
                      Does your organisation have a website ?*
                    </div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <select className="selecttype3 mt-2 ">
                          <option value="volvo"></option>
                          <option value="saab">yes</option>
                          <option value="opel">No</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row w-100 d-flex">
                    <div className="col-md-5 serachby">
                      {" "}
                      Business name as it should appear on card*
                    </div>
                    <div className="col-md-7 ">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg emailsinput"
                          placeholder="Enter "
                        />
                        <div className="pt-2 label1">
                          Please enter the company name exactly as you like to
                          appear on your card
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="firstemail3">
                    <div className="form-group">
                      <label>
                        <h6 className=" serachby">Email:</h6>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg passwordinput"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="firstemail3">
                    <div className="form-group">
                      <label>
                        <h6 className=" serachby">password:</h6>
                      </label>
                      <div className="signupicon " onClick={handles}>
                        {passwordShown ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </div>
                      <input
                        type={passwordShown ? "password" : "text"}
                        className="form-control form-control-lg  passwordinput"
                        id="exampleInputUsername1"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <div className="text-right ">
                    <button
                      onClick={threebtn}
                      type="button"
                      class="btn btn-success "
                    >
                      Next <ArrowForwardIosIcon fontSize="inherit" />
                    </button>
                  </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
