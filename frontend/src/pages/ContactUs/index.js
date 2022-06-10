import React, { useRef } from 'react';
import { GlobalStyle, StyledFormWrapper, StyledForm, StyledInput, StyledTextArea, StyledButton } from "./style";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2iqobe', 'template_81wr11f', form.current, 'ManIZzhZrsQFXRWHy')
      .then((result) => {
          console.log(result.text);
          alert("Your meeagse have been post SUCCESS!");
      }, (error) => {
          console.log(error.text);
          alert("Sorry FAILED to post your message", error);
      });
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <h1>Contact Us Form</h1>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            placeholder='Please enter your name here'
            required
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            placeholder='Please enter your email here'
            required
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            placeholder='Please enter your message here'
            required
          />
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactUs;