import InputText from "../../components/input/InputText";
import { loginFields } from "../../helpers/authFormFields";
import { useEffect, useState, useContext } from "react";
import PartialHeader from "../../components/partials/Header";
import PartialFooter from "../../components/partials/Footer";
import EventButton from "../../components/event/EventButton";
import { icons } from "../../constants";
import { useNavigate } from "react-router-dom";
import { validateValues } from "../../helpers/validation";
import { useMutation } from "@apollo/client";
import USER_LOGIN from "../../apollo/mutations/UserLogin";
import { UserContext } from "../../context/UserContext";

const fields = loginFields;
const fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LoginPage() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  const handleChange = (id: string, val: string) => {
    setLoginState({ ...loginState, [id]: val });
  };

  const signUserIn = () => {
    setErrors(validateValues(loginState));
    setSubmitting(true);
  };

  const [userLogin, { loading, error, reset }] = useMutation(USER_LOGIN, {
    errorPolicy: "all",
    onCompleted: (data) => {
      if (data && data.login) {
        userContext.setUser({
          id: data.login.user.id,
          name: data.login.user.name,
          email: data.login.user.email,
          votes: data.login.user.votes,
        });
        localStorage.setItem("authUser", JSON.stringify(data.login));
        navigate("/application");
      }
    },
  });

  const completeSignIn = () => {
    userLogin({ variables: { input: loginState } });
  };

  const closeAlert = () => reset();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      completeSignIn();
    }
  }, [errors]);

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <PartialHeader heading="Login to your account" icon={icons.logo} />
          {error ? (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <br />
              <p>
                {error.graphQLErrors.map(({ extensions }, i) => (
                  <span key={i}>{extensions.reason}</span>
                ))}
              </p>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={closeAlert}
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="mt-8 space-y-6">
            <div>
              {fields.map((field) => (
                <div key={field.id}>
                  <InputText
                    handleOnChange={(id: string, val: string) =>
                      handleChange(id, val)
                    }
                    value={loginState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    inputId={field.id}
                    name={field.name}
                    inputType={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    css={field.css}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 my-3">
                    {errors[field.id]}
                  </span>
                </div>
              ))}
            </div>

            <EventButton
              btnCss="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              btnTxt="Sign In"
              processing={loading}
              handleOnClick={() => signUserIn()}
            />
          </div>
          <PartialFooter
            paragraph="Don't have an account yet? "
            linkName="Register"
            linkUrl="/register"
          />
        </div>
      </div>
    </>
  );
}
