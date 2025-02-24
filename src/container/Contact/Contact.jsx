
import './Contact.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, useFormik  } from 'formik';
import * as Yup from 'yup';
import {FaUser} from 'react-icons/fa'
import swal from 'sweetalert';
import { motion } from 'framer-motion';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      // переведёт промис в состояние fulfilled с результатом "result"
      resolve("result");
    }, 100);
  
  });

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string().max(30, "Must be 30 charachters or less").required("Required"),
      user_email: Yup.string()
      .max(30, "Must be 500 charachters or less")
      .email("Invalid email")
      .required("Required"),
      message: Yup.string().max(500, "Must be 500 charachters or less").required("Required"),
    }
    ),
    onSubmit: (values,  {resetForm  }) => {


      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
    promise
      .then((result ) => {
        resetForm({});
        swal( {title: "Your message has been successefully sent!", icon: "success"});
      }, (error) => {
          console.log(error.text);
      });
    },
   
  });



  return (
    <motion.div id="contact" className='contact'
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.1}}
    viewport={{once: true, amount: 0.3}}
    >

<h2>Contact me</h2>
<div >


<form className='contact-form' ref={form} onSubmit={formik.handleSubmit}>


<div className='contact-form-label-and-field'>
      <label className='contact-label'>Name </label>
      <input 
      className='contact-form-field'
      type="text" 
      name="user_name" 
      placeholder='Your name'
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.user_name}
      />
      <div className='contact-error'>{formik.touched.user_name && formik.errors.user_name ? formik.errors.user_name:null}</div>
      </div>
      <div className='contact-form-label-and-field'>
      <label className='contact-label'>Email</label>
      <input 
            className='contact-form-field'
      type="email" 
      name="user_email" 
      placeholder='Your email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.user_email}
      />
        <div className='contact-error'>{formik.touched.user_email && formik.errors.user_email ?formik.errors.user_email:null}</div>
        </div>

      <div className='contact-form-label-and-field'>

      <label className='contact-label'>Message</label>
      <textarea 
            className='contact-form-field'
      name="message" 
            placeholder='Your message'
            onBlur={formik.handleBlur}
      onChange={formik.handleChange}      
             value={formik.values.message}/>
                      <div className='contact-error'>{formik.touched.message && formik.errors.message ? formik.errors.message: null}</div>
                      </div>


      <input 
       className='contact-form-btn'
      type="submit" 
      value="Send"
    
      />
    </form>


    </div>
    </motion.div>
  )
}

export default Contact