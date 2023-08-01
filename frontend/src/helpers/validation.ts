export const validateValues = (inputValues: any) => {
  const errors: any = {};
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputValues.firstname?.length === 0) {
      errors.firstname = "Please complete the first name field";
    }
    if (inputValues.firstname?.length > 0 && inputValues.firstname?.length < 2) {
      errors.firstname = "Name is too short";
    }
  if (inputValues.lastname?.length === 0) {
    errors.lastname = "Please complete the last name field";
  }
  if (inputValues.lastname?.length > 0 && inputValues.lastname?.length < 2) {
    errors.lastname = "Name is too short";
  }
  if (!inputValues.email.match(validEmail)) {
    errors.email = "Invalid email address";
  }
  if (inputValues.email.length === 0) {
    errors.email = "Please complete the email field.";
  }
  if (inputValues.password.length === 0) {
    errors.password = "Please complete the password field.";
  }
  if (inputValues.email.length > 0 && inputValues.email.length < 5) {
    errors.email = "Email is too short";
  }
  if (inputValues.password.length === 0) {
    errors.password = "Please complete the password field";
  }
  if (inputValues.password.length > 0 && inputValues.password.length < 6) {
    errors.password = "Confirm Password is too short";
  }

  if (inputValues.confirm_password?.length === 0) {
    errors.confirm_password = "Please complete the confirm password field";
  }
  if (
    inputValues.confirm_password?.length > 0 &&
    inputValues.confirm_password?.length < 6
  ) {
    errors.confirm_password = "Confirm Password is too short";
  }

  if (
    inputValues.confirm_password &&
    inputValues.password !== inputValues.confirm_password
  ) {
    errors.confirm_password = "Passwords do not match. Please try again.";
  }
  return errors;
};
