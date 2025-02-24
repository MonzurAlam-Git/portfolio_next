"use client";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1>Contact with Me</h1>
        <p>
          I am always excited to connect with fellow developers, potential
          collaborators, and anyone interested in web development. Whether you
          have a project in mind, a question, or just want to say hello, feel
          free to reach out!
        </p>
        <div className="flex justify-center gap-3  ">
          {/* Email */}
          <p>
            <a href="mailto:monzur.alam.16@gmail.com">
              <Image
                className="w-8"
                alt=""
                width={32} // You need to provide the actual width in pixels
                height={32} // You need to provide the actual height in pixels
                src="https://i.ibb.co/tm3b7kr/gmail-270021.png"
              />
            </a>
          </p>
          {/* Linked In */}
          <p>
            <a
              href="https://www.linkedin.com/in/monzuralam-webdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-8"
                alt=""
                width={32} // You need to provide the actual width in pixels
                height={32} // You need to provide the actual height in pixels
                src="https://i.ibb.co/PCPfGKc/linkedin-2504923.png"
              />
            </a>
          </p>
          {/* Github */}
          <p>
            <a
              href="https://github.com/MonzurAlam-Git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-8"
                alt="github"
                width={32} // You need to provide the actual width in pixels
                height={32} // You need to provide the actual height in pixels
                src="https://i.ibb.co/RcwfNSP/github-2504911.png"
              />
            </a>
          </p>
          {/* facebook */}
          <p>
            <a
              href="https://facebook.com/monzuradler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-8"
                alt=""
                width={32} // You need to provide the actual width in pixels
                height={32} // You need to provide the actual height in pixels
                src="https://i.ibb.co/3hhmj42/facebook-2504903.png"
              />
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
