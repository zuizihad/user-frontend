import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    job: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">user name: {user.userName}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">fist name: {user.firstName}</li>
        <li className="list-group-item">lsat name: {user.lastName}</li>
        <li className="list-group-item">job: {user.job}</li>
        
      </ul>
    </div>
  );
};

export default User;
