/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Medication } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function MedicationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    medName: undefined,
    medQuanitity: undefined,
    daysLeft: undefined,
    medStrength: undefined,
    dailyDose: undefined,
  };
  const [medName, setMedName] = React.useState(initialValues.medName);
  const [medQuanitity, setMedQuanitity] = React.useState(
    initialValues.medQuanitity
  );
  const [daysLeft, setDaysLeft] = React.useState(initialValues.daysLeft);
  const [medStrength, setMedStrength] = React.useState(
    initialValues.medStrength
  );
  const [dailyDose, setDailyDose] = React.useState(initialValues.dailyDose);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMedName(initialValues.medName);
    setMedQuanitity(initialValues.medQuanitity);
    setDaysLeft(initialValues.daysLeft);
    setMedStrength(initialValues.medStrength);
    setDailyDose(initialValues.dailyDose);
    setErrors({});
  };
  const validations = {
    medName: [],
    medQuanitity: [],
    daysLeft: [],
    medStrength: [],
    dailyDose: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          medName,
          medQuanitity,
          daysLeft,
          medStrength,
          dailyDose,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Medication(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "MedicationCreateForm")}
    >
      <TextField
        label="Med name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              medName: value,
              medQuanitity,
              daysLeft,
              medStrength,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.medName ?? value;
          }
          if (errors.medName?.hasError) {
            runValidationTasks("medName", value);
          }
          setMedName(value);
        }}
        onBlur={() => runValidationTasks("medName", medName)}
        errorMessage={errors.medName?.errorMessage}
        hasError={errors.medName?.hasError}
        {...getOverrideProps(overrides, "medName")}
      ></TextField>
      <TextField
        label="Med quanitity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              medQuanitity: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              medName,
              medQuanitity: value,
              daysLeft,
              medStrength,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.medQuanitity ?? value;
          }
          if (errors.medQuanitity?.hasError) {
            runValidationTasks("medQuanitity", value);
          }
          setMedQuanitity(value);
        }}
        onBlur={() => runValidationTasks("medQuanitity", medQuanitity)}
        errorMessage={errors.medQuanitity?.errorMessage}
        hasError={errors.medQuanitity?.hasError}
        {...getOverrideProps(overrides, "medQuanitity")}
      ></TextField>
      <TextField
        label="Days left"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              daysLeft: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              medName,
              medQuanitity,
              daysLeft: value,
              medStrength,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.daysLeft ?? value;
          }
          if (errors.daysLeft?.hasError) {
            runValidationTasks("daysLeft", value);
          }
          setDaysLeft(value);
        }}
        onBlur={() => runValidationTasks("daysLeft", daysLeft)}
        errorMessage={errors.daysLeft?.errorMessage}
        hasError={errors.daysLeft?.hasError}
        {...getOverrideProps(overrides, "daysLeft")}
      ></TextField>
      <TextField
        label="Med strength"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              medStrength: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              medName,
              medQuanitity,
              daysLeft,
              medStrength: value,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.medStrength ?? value;
          }
          if (errors.medStrength?.hasError) {
            runValidationTasks("medStrength", value);
          }
          setMedStrength(value);
        }}
        onBlur={() => runValidationTasks("medStrength", medStrength)}
        errorMessage={errors.medStrength?.errorMessage}
        hasError={errors.medStrength?.hasError}
        {...getOverrideProps(overrides, "medStrength")}
      ></TextField>
      <TextField
        label="Daily dose"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              dailyDose: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              medName,
              medQuanitity,
              daysLeft,
              medStrength,
              dailyDose: value,
            };
            const result = onChange(modelFields);
            value = result?.dailyDose ?? value;
          }
          if (errors.dailyDose?.hasError) {
            runValidationTasks("dailyDose", value);
          }
          setDailyDose(value);
        }}
        onBlur={() => runValidationTasks("dailyDose", dailyDose)}
        errorMessage={errors.dailyDose?.errorMessage}
        hasError={errors.dailyDose?.hasError}
        {...getOverrideProps(overrides, "dailyDose")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
