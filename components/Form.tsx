"use client"
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function ContactForm() {
    const [state, handleSubmit] = useForm("xvgakjpd"); // Replace with your form ID

    if (state.succeeded) {
        return (
            <div className="mt-6 rounded-md bg-green-100 p-4 text-center text-green-800 shadow-md">
                <h2 className="text-lg font-semibold">Message Sent Successfully!</h2>
                <p className="mt-2 text-sm">
                    Thank you for reaching out. We’ll get back to you as soon as possible.
                </p>
                <div></div>
                <Image src="/sent.png" alt="Success" width={100} height={100} className="mx-auto my-4" />
            </div>);
    }

    if (state.errors && Object.keys(state.errors).length > 0) {
        return (
            <div className="mt-6 rounded-md bg-red-100 p-4 text-center text-red-800 shadow-md">
                <h2 className="text-lg font-semibold">Error Sending Message</h2>
                <p className="mt-2 text-sm">
                    Please check your input and try again.
                </p>
                {Object.entries(state.errors).map(([field, error], index) => (
                    <p key={index}>{error.message}</p>
                ))}
            </div>);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`mb-[35px] w-[200px] sm:w-[445px] ${lato.className}`}
        >
            <div className="flex flex-col gap-6 sm:flex-row">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name" // Add name attribute
                        placeholder="Your Name*"
                        className="mb-[35px] h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[255px]"
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email" // Add name attribute
                        placeholder="Your E-mail*"
                        className="mb-[35px] h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[255px]"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div>
                <input
                    type="text"
                    id="subject"
                    name="subject" // Add name attribute
                    placeholder="Subject*"
                    className="mb-[45px] h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[534px]"
                />
                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                />
            </div>
            <div>
                <textarea
                    id="message"
                    name="message" // Add name attribute
                    placeholder="Type Your Message*"
                    rows={5}
                    className="h-[197px] w-[200px] rounded-[5px] border p-2 sm:w-[534px]"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button
                type="submit"
                className="mx-auto h-[41px] w-[157px] rounded-[2px] bg-[#FB2E86] font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] lg:mx-0 lg:w-[135px]"
                disabled={state.submitting} // Disable button while submitting
            >
                Send Mail
            </button>
        </form>
    );
}

export default ContactForm;
