
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); // Correct hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Clicked");
        axios.post("https://66bcb6ca24da2de7ff6b99ba.mockapi.io/crudyoutube", {
            name: name,
            email: email,
        })
        .then(() => {
            navigate("/read"); // Navigate to the read page after successful post
        })
        .catch((error) => {
            console.error("There was an error!", error); // Handle any errors
        });
    };

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default Create;
