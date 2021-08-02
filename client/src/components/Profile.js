import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { token, setUser } = useContext(UserContext);
  const [file, setFile] = useState("");
  const history = useHistory();
  useEffect(() => {
    fetch("/profile", {
      method: "GET",
      headers: { "auth-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [token]);

  console.log(token);

  const submitImage = () => {
    console.log(file);
    const formData = new FormData();
    formData.append("productImage", file);
    fetch("/picture", {
      method: "POST",
      headers: { "auth-token": token },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    history.push("/");
  };
  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={submitImage}>
        <input
          type="file"
          onChange={(ev) => {
            setFile(ev.target.files[0]);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
