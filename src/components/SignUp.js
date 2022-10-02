import React from 'react'
import { Formik, Form } from "formik"
import { TextField } from './TextField'
export const SignUp = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmedPassword: ""
        }}
      >
        {
          formik => (
            <div>
              <h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
              {
                console.log(formik)
              }
              <Form>
                <TextField />
              </Form>

            </div>
          )
        }
      </Formik>
    </div>
  )
}
