import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import {getPhoto} from '../actions/Action_Unsplash'


function App() {
  const photo = useSelector(state=>state.photo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
    console.log("hi");
    return () => {};
  }, []);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input])

  return <div>hi{photo && console.log(photo)}</div>;
}

export default App;
