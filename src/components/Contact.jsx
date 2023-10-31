import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Contact.css";




const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    done: false,
    notDone: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus({ done: false, notDone: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setFormStatus({ notDone: true, done: false });
    } else {
      emailjs
        .sendForm(
          "service_wncv86a",
"template_dhjw08x",
e.target,
"opnWbzjDibsOiqOhZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormStatus({ done: true, notDone: false });
            setFormData({ from_name: "", reply_to: "", message: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="bg-gray-100 py-8 md:py-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center text-3xl text-black mb-4">Contact Us</div>
        <form
          onSubmit={sendEmail}
          className="w-full max-w-md mx-auto bg-white rounded-lg p-4 shadow-lg"
        >
          <div className="mb-4">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="border rounded w-full p-2"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              className="border rounded w-full p-2"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded w-full p-2 h-32"
              placeholder="Message"
            />
          </div>
          {formStatus.notDone && (
            <div className="text-red-600 mb-4">
              Please fill in all the input fields.
            </div>
          )}
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white p-2 px-4 rounded cursor-pointer ${
              formStatus.done && "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={formStatus.done}
          >
            {formStatus.done ? "Sending..." : "Send"}
          </button>
          {formStatus.done && (
            <div className="text-green-600 mt-4">
              Thanks for contacting us. We have received your message.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
