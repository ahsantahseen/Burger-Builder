import React, { useState, useEffect } from "react";
import Auxiliary from "../Auxiliary";
import Modal from "../../Components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    //console.log("ERROR HANDLER RENDERED");

    const [error, seterror] = useState(null);
    useEffect(() => {
      let reqInterceptors = axios.interceptors.request.use((req) => {
        seterror(null);
        console.log(req);
        return req;
      });
      let resInterceptors = axios.interceptors.response.use(
        (res) => {
          console.log(res);
        },
        (error) => {
          seterror(error);
          console.log(error);
        }
      );
      return () => {
        console.log("Unmount");
        axios.interceptors.request.eject(reqInterceptors);
        axios.interceptors.response.eject(resInterceptors);
      };
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
