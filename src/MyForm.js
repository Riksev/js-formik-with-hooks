import { useFormik } from "formik";
import * as Yup from "yup";

function MyForm() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      email: "",
      gender: "male",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      first_name: Yup.string().required("First Name is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        onChange={formik.handleChange}
      />
      {formik.errors.first_name ? (
        <div className="error">{formik.errors.first_name}</div>
      ) : null}
      <input
        type="email"
        name="email"
        placeholder="Email address"
        onChange={formik.handleChange}
      />
      {formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <select name="gender" placeholder="Your Gender">
        <option value="male" defaultValue>
          Male
        </option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default MyForm;
