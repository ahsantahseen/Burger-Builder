import React, { useState, useEffect, useRef, createRef } from "react";
import Auxiliary from "../Auxiliary";
import Modal from "../../Components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    console.log("ERROR HANDLER RENDERED");
    let [error, seterror] = useState(null);

    useEffect(() => {
      let reqInterceptors = axios.interceptors.request.use((req) => {
        seterror(null);
        return req;
      });
      let resInterceptors = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          seterror(error);
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
