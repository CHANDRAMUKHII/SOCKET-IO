import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import Submitted from "./Submitted";
import '../style/form.css'

const socket = io.connect("http://10.1.48.46:8090");
const Form = () => {
  const [issubmit, submitopen] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    socket.on("connect");
  }, []);

  const formsubmit = (e) => {
    e.preventDefault();
    submitopen(true);
    socket.emit("submit", id);
  };
  if (issubmit) {
    return <Submitted />;
  }
  return (
  <div className="container">
    <form onSubmit={formsubmit}>
      <label>
        Name
        <input type="text" name="first-name" />
      </label><br/>
      <label>
        Roll No
        <input type="text" name="first-name" />
      </label><br/>
<label>
        Deparment
        <input type="text" name="first-name" />
      </label><br/>
      <button type="submit" onClick={formsubmit}>
        Submit
      </button>
    </form>
</div>
  );
};

export default Form;
