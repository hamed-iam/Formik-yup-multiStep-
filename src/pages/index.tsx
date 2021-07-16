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
        <Formik
          validationSchema={object({
            money: mixed().when('millionaire', {
              is: true,
              then: number().required().min(1_000_000),
              otherwise: number().required(),
            }),
          })}
          initialValues={initialValues}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          <Form autoComplete="off">
            <Field name="first_name" component={TextField} label="First Name" />
            <Field name="last_name" component={TextField} label="Last Name" />
            <Field
              name="millionaire"
              type="checkbox"
              component={CheckboxWithLabel}
              Label={{ label: 'I am a millionaire' }}
            />
            <Field
              name="money"
              type="number"
              component={TextField}
              label="All The Money I Have"
            />
            <Field
              name="description"
              component={TextField}
              label="Description"
            />
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}
