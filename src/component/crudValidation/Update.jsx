import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from 'formik';

export default function Edit() {
    const { id } = useParams();
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().min(3).max(15).required("This field is required"),
        email: Yup.string().email("Invalid email address").required("This field is required"),
        phone: Yup.string().min(10).max(12).required("This field is required")
    });

    const { handleChange, handleSubmit, values: formValues, touched, errors } = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: '',
            phone: '',
        },
        validationSchema,
        onSubmit: (values) => {
            axios.put(`http://localhost:3000/emp/${id}`, values)
                .then((res) => {
                    alert("Data edited");
                    navigate('/vhome');
                });
        }
    });

    useEffect(() => {
        // Fetch data when the component mounts
        axios.get(`http://localhost:3000/emp/${id}`)
            .then((res) => {
                setValues(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(()=>{
        formValues.id = values.id;
        formValues.name = values.name;
        formValues.email = values.email;
        formValues.phone = values.phone;
    },[values])

    return (
        <div>
            <div className="container p-5 d-flex justify-content-center">
                <form className="row g-3 card p-4" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label className="form-label lab">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="enter your name"
                            onChange={handleChange}
                            value={formValues.name}
                        />
                        {errors.name && touched.name && <div>{errors.name}</div>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label lab">Email ID</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="yourmail@email.com"
                            onChange={handleChange}
                            value={formValues.email}
                        />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label lab">Phone</label>
                        <input
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder="your phone number here"
                            onChange={handleChange}
                            value={formValues.phone}
                        />
                        {errors.phone && touched.phone && <div>{errors.phone}</div>}
                    </div>
                    <div className="col-12 m-4">
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
