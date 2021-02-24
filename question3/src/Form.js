import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Button, Select, DatePicker } from "antd";
import moment from "moment";

const Form = (props) => {
  const { onSubmit } = props;
  const { Option } = Select;
  const inputStyle = { width: "100%" };

  const stateList = [
    {
      value: "NSW",
      text: "NSW",
    },
    {
      value: "VIC",
      text: "VIC",
    },
    {
      value: "WA",
      text: "WA",
    },
    {
      value: "NT",
      text: "NT",
    },
    {
      value: "ACT",
      text: "ACT",
    },
    {
      value: "TAS",
      text: "TAS",
    },
    {
      value: "SA",
      text: "SA",
    },
    {
      value: "QLD",
      text: "QLD",
    },
  ];

  const submitForm = (values) => {
    const dobFormated = moment(values.dob).format("MM/DD/YYYY");
    const payload = {
      ...values,
      dob: dobFormated,
    };
    onSubmit(payload);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: undefined,
      state: undefined,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(50, "Must be 50 characters or less"),
      lastName: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      dob: Yup.date()
        .min(new Date("01/01/2015"), "Date of Birth: min date - 01/01/2015")
        .required("Required"),
      state: Yup.string().required("Required"),
    }),
    onSubmit: submitForm,
  });

  const renderErrorMessage = (key) => {
    return formik.touched[key] && formik.errors[key] ? (
      <div className="error-message">{formik.errors[key]}</div>
    ) : null;
  };

  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="input-group">
          <Input
            placeholder="First Name"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {renderErrorMessage("firstName")}
        </div>
        <div className="input-group">
          <Input
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {renderErrorMessage("lastName")}
        </div>
        <div className="input-group">
          <DatePicker
            style={inputStyle}
            block
            placeholder="Date of Birth"
            id="dob"
            name="dob"
            onChange={(date) => {
              formik.setFieldValue("dob", date);
            }}
            value={formik.values.dob}
          />
        </div>
        {renderErrorMessage("dob")}
        <div className="input-group">
          <Select
            id="state"
            name="state"
            placeholder="State"
            style={inputStyle}
            value={formik.values.state}
            onChange={(value) => {
              formik.setFieldValue("state", value);
            }}
          >
            {stateList.map((item) => {
              return (
                <Option key={item.value} value={item.value}>
                  {item.text}
                </Option>
              );
            })}
          </Select>
          {renderErrorMessage("state")}
        </div>
        <div>
          <div className="input-group">
            <Button type="primary" onClick={formik.handleSubmit} block>
              Submit
            </Button>
          </div>
          <div className="input-group">
            <Button type="default" onClick={formik.handleReset} block>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
