import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function Createuser() {
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "please Enter a value";
      }
      if ((values.name && values.name.length <= 2) || values.name.length > 15)
        error.name = "username must be between 3 to 5 characters";
      if (!values.email) {
        error.email = "please enter a email";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "please enter a Valid email";
      }
      if (values.phone.toString().length !== 10) {
        error.phone = "please enter a valid phonenumber";
      }
      let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0]);
      if (age < 18) {
        error.dob = "you must be above 18";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://660269239d7276a755532ba5.mockapi.io/users",
          values
        );
        alert("success");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username *</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                    formik.touched.name && formik.errors.name ? "error-box" : ""
                }
                ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }
                `}
              />
              { formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email *</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                    formik.touched.email &&formik.errors.email ? "error-box" : ""
                }
                ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                } 
                `}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option>India</option>
                <option>Usa</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
              >
                <option>TamilNadu</option>
                <option>Kerala</option>
                <option>Karnataka</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
                <option>Chennai</option>
                <option>madurai</option>
                <option>salem</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                    formik.touched.phone && formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                className={`form-control ${
                    formik.touched.dob && formik.errors.dob ? "error-box" : ""
                } ${
                  formik.touched.dob && !formik.errors.dob ? "success-box" : ""
                }`}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Submit</label>
              <input
                type={"submit"}
                className=" form-control btn btn-primary"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
