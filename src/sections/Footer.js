import React, { useState } from "react";

export default function Footer() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([
        [name, email, message, new Date().toLocaleDateString()],
      ]),
    };

    await fetch(
      "https://v1.nocodeapi.com/chelsea/google_sheets/wXLkBpwBOKEqfphS?tabId=Sheet1",
      requestOptions
    )
      .then((response) => {
        response.text();
        setData({ name: "", email: "", message: "" });
      })
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const { name, email, message } = data;

  return (
    <div className="mt-12 px-8 flex flex-col items-center">
      <div className="w-full md:w-1/2 bg-gray-200 font-medium font-sans mb-9 pt-7 pb-5 px-6 md:px-16">
        <h2 className="mb-2 text-3xl text-blue">Want to work with me?</h2>
        <p className="mb-7 text-xl">Reach out through this form:</p>
        <form className="text-xl mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows={9}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={message}
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-gray-700 bg-blue rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
