import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { getPhoto } from "../actions/Action_Unsplash";

//components
import { PhotoTile } from "../components/PhotoTile";

function App() {
  const photos = useSelector(state => state.photo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
    return () => {};
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: '25px', textAlign: 'center' }}>
      {photos &&
        <PhotoTile photos={photos}></PhotoTile>}
    </div>
  );
}

export default App;
