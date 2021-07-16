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

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  return (
    <Card>
      <CardContent>
        
      </CardContent>
    </Card>
  );
}
