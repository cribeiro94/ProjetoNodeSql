import React from 'react';

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
       axios.post('http://localhost:3333/signin', values)
       .then(resp => console.log(resp))
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    return (
     <>
     <h1>Acesse a sua conta</h1>
     <p>Insira seus dados e clique "Entrar" para continuar.</p>
     <Formik 
        initialValues={{}} 
        onSubmit={handleSubmit}
        validationSchema={validations}
        >
        <Form className="Login">
          <div className="Login-Group">
             <Field 
                name="email" 
                className="Login-Field"
             />
             <ErrorMessage 
             component="span" 
             name="email" 
             className="Login-Error"
             />
          </div>
          <div className="Login-Group">
             <Field 
                name="password" 
                className="Login-Field"
             />
             <ErrorMessage 
             component="span" 
             name="password" 
             className="Login-Error"
             />
          </div>
          <button className="Login-Btn" type="submit">Entrar</button>
        </Form>
     </Formik>
     </>
   )
}

export default Login