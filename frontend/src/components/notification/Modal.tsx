import React, { useState, useEffect } from "react";
import EventButton from "../event/EventButton";
import { movieCreateFields } from "../../helpers/movieFormFields";
import InputText from "../input/InputText";
import ADD_MOVIE from "../../apollo/mutations/AddMovie";
import { useMutation } from "@apollo/client";
import { validateValues } from "../../helpers/validation";

const fields = movieCreateFields;
const fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [movieState, setMovieState] = useState(fieldsState);

  const handleChange = (id: string, val: any) => {
    setMovieState({ ...movieState, [id]: val });
  };

  const [processFormData, { loading }] = useMutation(ADD_MOVIE, {
    errorPolicy: "all",
    onCompleted: (data) => {
      if (data && data.movieCreate) {
        setMovieState({});
        setShowModal(false);
      }
    },
  });

  const processFrom = () => {
    setErrors(validateValues(movieState));
    setSubmitting(true);
  };

  const completeFormProcess = () => {
    processFormData({ variables: { input: movieState } });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      completeFormProcess();
    }
  }, [errors]);

  return (
    <>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="mb-3 block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Movie Quote
      </button>
      {showModal ? (
        <>
          <div className="w-full h-full fixed block top-0 left-0 bg-black opacity-75 z-50"></div>
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-modal="true"
            role="dialog"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
          >
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => {
                    setErrors({});
                    setShowModal(false);
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Add new movie quote.
                  </h3>

                  {fields.map((field) => (
                    <div key={field.id}>
                      <InputText
                        handleOnChange={(id: string, val: string) =>
                          handleChange(id, val)
                        }
                        value={movieState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        inputId={field.id}
                        name={field.name}
                        smallText={field.smallText}
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

                  <EventButton
                    btnCss="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
                    btnTxt="Add Movie"
                    processing={loading}
                    handleOnClick={() => processFrom()}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
