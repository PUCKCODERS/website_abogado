import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const FormStyles = styled.form`
    width: 100%;
    .form-group {
        width: 100%;
        margin-bottom: 2rem;
    }
    label {
        font-size: 1.8rem;
    }
    input,
    textarea {
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: 2px solid var(--gray-1);
        border-radius: 8px;
        margin-top: 1rem;
        box-shadow: 17px 11px 23px #000;
    }
    textarea {
        min-height: 250px;
        resize: vertical;
    }
    button[type='submit'] {
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 17px 11px 23px #000;
    }
    .error {
        color: red;
        font-size: 1.6rem;
        margin-top: 1rem;
    }
    .success {
        color: green;
        font-size: 1.8rem;
        margin-top: 1rem;
    }
`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        setError("");

        const templateParams = {
            name: name, 
            email: email,
            message: message 
        };

        emailjs
            .send(
                "service_lmefptq", 
                "template_z3gyefo", 
                templateParams, 
                "xC2J6_hbEA6OStDWp"
            )
            .then(
                (response) => {
                    console.log("Correo enviado con éxito:", response);
                    setSuccess("Mensaje enviado con éxito.");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (err) => {
                    console.log("Error al enviar correo:", err);
                    setError("Error al enviar el mensaje, inténtalo más tarde.");
                }
            );
    };

    return (
        <FormStyles onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="name">
                    SU NOMBRE
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    SU CORREO
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="message">
                    SU MENSAJE
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button type="submit">ENVIAR</button>
        </FormStyles>
    );
}
