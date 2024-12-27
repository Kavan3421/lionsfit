import React, { act, useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { contact } from "../api";


const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-left: 33%; 
  margin-right: 33%; 
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async () => {
  
    setButtonLoading(true);
    const token = localStorage.getItem("lionfit-app-token");
    if (validateInputs()) {
      try {
        await contact(token, { name, email, message}).then((res) => {
          setButtonLoading(false);
          setButtonLoading(false);
        })
        .catch((err) => {
          alert(err);
        })
      } catch (err) {
        alert(err);
      }
    } else {
      alert('Please ensure all fields are correctly filled.');
      setButtonDisabled(false);
      setButtonLoading(false);
    }
  };
  
  const validateInputs = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      return false;
    }
    return true;
  };
  
  return (
    <section class="contact-section" >
      <div class="container">
      <Container>
      <div>
        <Title></Title>
        <Span>We'd love to hear from you! Fill out the form below or reach us through our contact details.</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={name}
          handelChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Message"
          placeholder="Write your message"
          value={message}
          handelChange={(e) => setMessage(e.target.value)}
        />

      </div>
      <Button
        text="Submit"
        onClick={(event) => {
          if(handleSubmit(event) && validateInputs()) {
            alert("Message sent successfully");
          }
        }}
        isDisabled={buttonDisabled}
        isLoading={buttonLoading}
      />
    </Container>

        <div class="contact-details">
          <h3>Our Contact Details</h3>
          <ul>
            <li>
              <strong>Email:</strong> support@lionsfit.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9876543210
            </li>
            <li>
              <strong>Address:</strong> 52 LionsFit Building, Near RailWay Station,
              Mahemdabad
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
