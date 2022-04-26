import React, { useState } from 'react';
import { GlobalStyle, StyledFormWrapper, StyledForm, StyledInput, StyledTextArea, StyledButton, StyledError} from "./style";

const initalState = {
  name: '',
  email: '',
  message: ''
};

function ContactUs() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test);

    var name = state.name;
    var email = state.email;
    var message = state.message;
    var body = 'Name: '+name+'<br/>Email: '+email+'<br/>Message: '+message;

    // eslint-disable-next-line no-undef
    Email.send({
        Host : "smtp.gmail.com",
        Username : "blendzcoltd@gmail.com",
        Password : "blendz123",
        To : 'blendzcoltd@gmail.com',
        From : email,
        Subject : "FAQs",
        Body : body
    }).then(
      message => alert(message)
    );
    

    console.log("Succeeded!!!")
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
          <h1>Contact Us Form</h1>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default ContactUs;