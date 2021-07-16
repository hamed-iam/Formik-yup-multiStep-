import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';

const initialValues = {
  first_name: '',
  last_name: '',
  millionaire: false,
  money: 0,
  description: '',
};

export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          validationSchema={object({
            money: mixed().when('millionaire', {
              is: true,
              then: number()
                .required()
                .min(1_000_000, 'You need to have at least a million'),
              otherwise: number().required(),
            }),
          })}
          initialValues={initialValues}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          <div>
            <Field name="first_name" component={TextField} label="First Name" />
            <Field name="last_name" component={TextField} label="Last Name" />
            <Field
              name="millionaire"
              type="checkbox"
              component={CheckboxWithLabel}
              Label={{ label: 'I am a millionaire' }}
            />
          </div>
          <div>
            <Field
              name="money"
              type="number"
              component={TextField}
              label="All The Money I Have"
            />
          </div>
          <div>
            <Field
              name="description"
              component={TextField}
              label="Description"
            />
          </div>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export const FormikStepper = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);

  const currentChild = childrenArray[step];

  console.log(`currentChild`, currentChild);

  console.log(`childrenArray`, childrenArray);
  return (
    <Formik {...props}>
      <Form autoComplete="off">{currentChild}</Form>
    </Formik>
  );
};
