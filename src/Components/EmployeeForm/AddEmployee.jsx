import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../../Redux/actionCreators";
import { boolean } from "yup";


const AddEmployee = ({ close, editVal, editDataValue, editIndex }) => {
  const dispatch = useDispatch();



  const initialValues = {
    id:'',
    login:'',
    avatar_url:'',
    url:'',
    node_id:'',
    type:'',
    site_admin:boolean

  };

  const validationSchema = Yup.object().shape({
    id: Yup.number()
      .required("Required"),
    login: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    url: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
      avatar_url: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
      node_id: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    type: Yup.string()
    .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    site_admin: Yup.boolean()
      .required("Required"),
   
  });


  const submitHandler = (values) => {
    if (editVal) {
      dispatch(updateEmployee({ id: editIndex, value: values }));
    } else {
      dispatch(addEmployee(values))
    }
  

    close(false);
  };

  return (
    <Formik
      initialValues={editVal ? editDataValue : initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="Id"
              name="id"
            />
            <FormikControl
              control="input"
              type="text"
              label="Name"
              name="login"
            />
            <FormikControl
              control="input"
              type="text"
              label="Avatar_URL"
              name="avatar_url"
            />
            <FormikControl
              control="input"
              type="text"
              label="URL"
              name="url"
            />
            <FormikControl
              control="input"
              type="text"
              label="Node_id"
              name="node_id"
            />
            <FormikControl
              control="input"
              type="text"
              label="Type"
              name="type"
            />
            <FormikControl
              control="input"
              type="boolean"
              label="Site Admin"
              name="site_admin"
            />
            <button type="submit" disabled={!formik.isValid}>
              {editVal ? "Edit" : "Submit"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEmployee;
