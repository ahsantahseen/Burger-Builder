import React, { useState, useEffect } from "react";

import Auxiliary from "../Auxiliary";
import Modal from "../../Components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    console.log("ERROR HANDLER RENDERED");
    const [error, seterror] = useState(null);

    useEffect(() => {
      axios.interceptors.request.use(
        (Request) => Request,
        (Request) => {
          seterror(null);
        }
      );

      axios.interceptors.response.use(null, (error) => {
        console.log(error);
        seterror(error);
        return Response;
      });
    }, []);

    const errorConfirmedHandler = () => {
      seterror(null);
    };
    return (
      <Auxiliary>
        <Modal show={error} clicked={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props}></WrappedComponent>
      </Auxiliary>
    );
  };
};

export default withErrorHandler;
