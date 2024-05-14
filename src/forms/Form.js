import React from "react";
import classes from "./Form.module.css";
import SchlLogo from "../assets/school.png";

const Form = () => {
  return (
    <div style={{paddingBottom:'20px',paddingTop:'10px'}}>
    <div className={classes.formParentContainer}>
      <div style={{ borderBottom: "1px solid black" }}>
        <div className={classes.headerContainer}>
          <div className={classes.imageContainer}>
            <div>
              <img
                src={SchlLogo}
                style={{
                  maxWidth: "100px",
                  maxWidth: "100px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div>
              <p className={classes.headerText}>YSR EDUCATIONAL SERVICES</p>
              <p className={classes.address}>
                Flat No 6-36/4,Room No 4, kukatpally Bus stop,Moosapet
              </p>
              <div className={classes.phNoContainer}>
                <p className={classes.address1}>
                  Hyderabad-500-018,Cell:9955667788, 9876543210
                </p>
                {/* <p className={classes.phNo}>Cell:9955667788,9876543210</p> */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={classes.formContainer}>
        <p className={classes.preliminary}>
          <u style={{ fontSize: "bold" }}>PRELIMINARY APPLICATION FORM</u>
        </p>
        <div className={classes.dateContainer}>
          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "8px" }}>
            Date:
          </p>
          <input className={classes.dateText} type="text" />
        </div>
        <div className={classes.formContents}>
          <div className={classes.fieldContainer}>
            <div style={{ width: "100%" }}>
              <div className={classes.forMobileView}>
                <p className={classes.formFieldText}>
                  {" "}
                  1.Name Of The Applicant
                </p>{" "}
                <span className={classes.colanMobile}>:</span>
              </div>
              <p className={classes.formFieldText}>
                (IN Block Leeters As per SSC)
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div className={classes.forMobileView}>
              <p className={classes.formFieldText}> 2.Father's Name</p>{" "}
              <span className={classes.colanMobile}>:</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div className={classes.forMobileView}>
              <p className={classes.formFieldText}> 3.Date Of Birth</p>{" "}
              <span className={classes.colanMobile}>:</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div className={classes.forMobileView}>
              <p className={classes.formFieldText}>
                {" "}
                4.Address For Communication
              </p>{" "}
              <span className={classes.colanMobile}>:</span>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className={classes.colan}>:</div>
                <input
                  style={{ width: "100%" }}
                  className={classes.inputField}
                  type="text"
                />
              </div>
              <input
               
                className={classes.inputFieldAddress}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div className={classes.forMobileView}>
              <p className={classes.formFieldText}>5.Tel No/Mobile No</p>{" "}
              <span className={classes.colanMobile}>:</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div className={classes.forMobileView}>
              <p className={classes.formFieldText}>6.Aadhar No</p>{" "}
              <span className={classes.colanMobile}>:</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div style={{ width: "100%" }}>
              <div className={classes.forMobileView}>
                <p className={classes.formFieldText}>
                  7.Categorey Mangagement Quota/NRI
                </p>{" "}
                <span className={classes.colanMobile}>:</span>
              </div>
              <p className={classes.formFieldText}>
                Foreign Students (If Applicable)
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div className={classes.fieldContainer}>
            <div className={classes.forMobileView}>
              <p className={classes.formFieldText}>8.OC/BC (A,B,C,D) SC/ST</p>{" "}
              <span className={classes.colanMobile}>:</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.colan}>:</div>
              <input
                style={{ width: "100%" }}
                className={classes.inputField}
                type="text"
              />
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "8px" }}>
            <p className={classes.formFieldText}>
              9.Details of Qualifying Examination(10+2 degree)
             
            </p>
            <div style={{ overflowX: "auto" }}>
              <table className={classes.tableContainer}>
                <tr className={classes.tableRow}>
                  <th className={classes.tableColumn}>Course</th>
                  <th className={classes.tableColumn}>Board / University</th>
                  <th className={classes.tableColumn}>
                    Month & year of passing
                  </th>
                  <th className={classes.tableColumn}>Mark Obtained</th>
                  <th className={classes.tableColumn}>Percentage Of Marks</th>
                  <th className={classes.tableColumn}>
                    CEEP/EAMCET/ECET ICET/PGCET/H.NO
                  </th>
                  <th className={classes.tableColumn}>
                    CEEP/EAMCET/ECET ICET/PGCET/Rank
                  </th>
                </tr>
                <tr className={classes.tableRow}>
                  <th className={classes.tableColumn}>SSLC</th>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                </tr>
                <tr className={classes.tableRow}>
                  <th className={classes.tableColumn}>Diplamo</th>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                </tr>
                <tr className={classes.tableRow}>
                  <th className={classes.tableColumn}>Degree</th>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                </tr>
                <tr className={classes.tableRow}>
                  <th className={classes.tableColumn}>Intern</th>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                  <td className={classes.tableColumn}>
                    <input className={classes.tableInput} type="text" />
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ width: "100%", marginTop: "8px" }}>
              <p className={classes.formFieldText}>
                10.Name Of the Instution in which Admission is Required:
              </p>
              <div style={{ width: "100%" }}>
                <input
                  style={{ width: "100%" }}
                  className={classes.inputField}
                  type="text"
                />
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "8px" }}>
              <p className={classes.formFieldText}>
                11.Name Of the Course in which Admission is Required:
              </p>
              <div className={classes.formFields}>
                <div>
                  <p className={classes.formFieldText}>{`A) POLYTEACHNIC:`}</p>
                </div>
                <div className={classes.checkBoxContainer}>
                  <div>
                    <input type="checkbox" id="EEE" name="EEE" value="eee" />
                    <label className={classes.checkBoxLable} for="EEE">
                      {" "}
                      EEE
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ECE" name="ECE" value="ECE" />
                    <label className={classes.checkBoxLable} for="ECE">
                      {" "}
                      ECE
                    </label>
                  </div>
                  <div>
                    {" "}
                    <input type="checkbox" id="CSE" name="CSE" value="cse" />
                    <label className={classes.checkBoxLable} for="CSE">
                      {" "}
                      CSE
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="MEACH"
                      name="MEACH"
                      value="MEACH"
                    />
                    <label className={classes.checkBoxLable} for="MEACH">
                      {" "}
                      MEACH
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="CIVIL"
                      name="CIVIL"
                      value="civil"
                    />
                    <label className={classes.checkBoxLable} for="CIVIL">
                      {" "}
                      CIVIL
                    </label>
                  </div>
                </div>
              </div>
              <div className={classes.formFields}>
                <div>
                  <p className={classes.formFieldText}>{`B) B.TEACH:`}</p>
                </div>
                <div className={classes.checkBoxContainer}>
                  <div>
                    <input type="checkbox" id="EEE" name="EEE" value="eee" />
                    <label className={classes.checkBoxLable} for="EEE">
                      {" "}
                      EEE
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ECE" name="ECE" value="ECE" />
                    <label className={classes.checkBoxLable} for="ECE">
                      {" "}
                      ECE
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="MEACH"
                      name="MEACH"
                      value="meach"
                    />
                    <label className={classes.checkBoxLable} for="MEACH">
                      MEACH
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ECE" name="ECE" value="ECE" />
                    <label className={classes.checkBoxLable} for="ECE">
                      {" "}
                      ECE
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="CIVIL"
                      name="CIVIL"
                      value="civil"
                    />
                    <label className={classes.checkBoxLable} for="CIVIL">
                      {" "}
                      CIVIL
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="IT" name="IT" value="it" />
                    <label className={classes.checkBoxLable} for="IT">
                      {" "}
                      IT
                    </label>
                  </div>
                </div>
              </div>

              {/* <div className={classes.pharmacy}>
                <div>
                  <label
                    className={classes.checkBoxLable}
                    for="PHARMACY">{`C) B.PHARMACY:`}</label>
                  <input
                    type="checkbox"
                    id="PHARMACY"
                    name="PHARMACY"
                    value="pharmacy"
                  />
                </div>
                <div>
                  <label
                    className={classes.checkBoxLable}
                    for="PHARMACY">{`D) MBA:`}</label>
                  <input
                    type="checkbox"
                    id="PHARMACY"
                    name="PHARMACY"
                    value="pharmacy"
                  />
                </div>
              </div> */}
              <div className={classes.formFields}>
                <div>
                  <p className={classes.formFieldText}>{`C) M.TEACH:`}</p>
                </div>
                <div className={classes.checkBoxContainer}>
                  <div>
                    <input
                      type="checkbox"
                      id="CIVIL"
                      name="CIVIL"
                      value="civil"
                    />
                    <label className={classes.checkBoxLable} for="CIVIL">
                      {`CIVIL (SE,TE)`}
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ECE" name="ECE" value="ECE" />
                    <label className={classes.checkBoxLable} for="ECE">
                      {`ECE (VLSI,SI & ES)`}
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="EEE" name="EEE" value="eee" />
                    <label className={classes.checkBoxLable} for="ECE">
                      {" "}
                      EEE
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="MEACH"
                      name="MEACH"
                      value="meach"
                    />
                    <label className={classes.checkBoxLable} for="MEACH">
                      {`MEACH(CAD,CAM,AMS)`}
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="CSE" name="CSE" value="cse" />
                    <label className={classes.checkBoxLable} for="CSE">
                      {`CSE (CS,SE)`}
                    </label>
                  </div>
                </div>
              </div>
              <div className={classes.formFields}>
                <div>
                  <p className={classes.formFieldText}>{`D) M.PHARMACY:`}</p>
                </div>
                <div className={classes.checkBoxContainer}>
                  <div>
                    <input
                      type="checkbox"
                      id="PHARMOCALOGY"
                      name="PHARMOCALOGY"
                      value="pharmocalogy"
                    />
                    <label className={classes.checkBoxLable} for="PHARMOCALOGY">
                      {" "}
                      PHARMOCALOGY
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="PHARMACEUTICUS"
                      name="PHARMACEUTICUS"
                      value="PHARMACEUTICUS"
                    />
                    <label
                      className={classes.checkBoxLable}
                      for="PHARMACEUTICUS">
                      {" "}
                      PHARMACEUTICUS
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="PMRA" name="PMRA" value="PMRA" />
                    <label className={classes.checkBoxLable} for="PMRA">
                      {" "}
                      PMRA
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="PAQA" name="PAQA" value="PAQA" />
                    <label for="PAQA" className={classes.checkBoxLable}>
                      {" "}
                      PAQA
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="IP" name="IP" value="IP" />
                    <label className={classes.checkBoxLable} for="IP">
                      {" "}
                      IP
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "100%", marginTop: "8px" }}>
            <p
              className={
                classes.formFieldText
              }>{`12.Structure Of the payment:at a time:Year wise:`}</p>
          </div>
          <div style={{ width: "100%", marginTop: "8px" }}>
            <p className={classes.formFieldText}>{`13.with Referance of:`}</p>
          </div>
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              marginTop: "8px",
            }}>
            <p
              className={
                classes.formFieldText
              }>{`14.Referance:Mention the name of two persons known you with phone numbers of:`}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>1)</p> <input className={classes.inputField} type="text" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>2)</p> <input className={classes.inputField} type="text" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%",
                marginTop: "8px",
              }}>
              <div>
                <input
                  style={{ width: "100%" }}
                  className={classes.inputField}
                  type="text"
                />
                <p
                  className={
                    classes.formFieldText
                  }>{`SIGNATURE OF THE PARENT`}</p>
              </div>
              <div>
                <input
                  style={{ width: "100%" }}
                  className={classes.inputField}
                  type="text"
                />
                <p
                  className={
                    classes.formFieldText
                  }>{`SIGNATURE OF THE STUDENT`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
