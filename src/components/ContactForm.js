import React, { useState } from "react";
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
`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
        <FormStyles>
            
            <form>
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
                        type="text"
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
                        type="text"
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">ENVIAR</button>
            </form> 
            
        </FormStyles>
        </div>
    )
}