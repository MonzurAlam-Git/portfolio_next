"use client";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1>Contact with Me</h1>
        <p>
          I'm always excited to connect with fellow developers, potential
          collaborators, and anyone interested in web development. Whether you
          have a project in mind, a question, or just want to say hello, feel
          free to reach out!
        </p>
        <div className="contact-info">
          {/* Email */}
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:monzur.alam.16@gmail.com">
              monzur.alam.16@gmail.com
            </a>
          </p>
          {/* Linked In */}
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/monzuralam-webdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </p>
          {/* Github */}
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/MonzurAlam-Git"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MonzurAlam-Git
            </a>
          </p>
        </div>
        <style jsx>{`
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.2rem;
            line-height: 1.5;
          }
          .contact-info p {
            font-size: 1rem;
            margin: 0.5rem 0;
          }
          a {
            color: #0070f3;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Contact;
