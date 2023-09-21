import { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const ContactUs = props => {
    const name = useRef('');
    const email = useRef('');
    const phone = useRef('');

    const submitHandler = e => {
        e.preventDefault();
        const formData = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value
        }
        fetch('https://react-http-36281-default-rtdb.firebaseio.com/form.json',{
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return <Form className="w-50 text-center m-auto my-5" onSubmit={submitHandler}>
        <h1>Contact Us</h1>
    <FloatingLabel
      controlId="floatingInput"
      label="Name"
      className="my-3"
    >
      <Form.Control type="text" ref={name} placeholder="Enter Name" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
      <Form.Control type="email" ref={email} placeholder="Email" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
      <Form.Control type="tel" ref={phone} placeholder="Phone" />
    </FloatingLabel>
    <Button type="submit">Submit</Button>
  </Form>
}

export default ContactUs;