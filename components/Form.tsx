"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function ContactForm() {
    const [state, handleSubmit] = useForm("xvgakjpd");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateInputs = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
        const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
        const newErrors: { [key: string]: string } = {};

        if (!name) newErrors.name = "Name is required";
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid email required";
        if (!subject) newErrors.subject = "Subject is required";
        if (!message) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    };

    const handleValidatedSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateInputs(e)) return;
        await handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <div className="mt-6 rounded-md bg-green-100 p-4 text-center text-green-800 shadow-md">
                <h2 className="text-lg font-semibold">Message Sent Successfully!</h2>
                <p className="mt-2 text-sm">Thank you for reaching out. We’ll get back to you as soon as possible.</p>
                <Image src="/sent.png" alt="Success" width={100} height={100} className="mx-auto my-4" />
            </div>
        );
    }

    if (state.errors && Object.keys(state.errors).length > 0) {
        return (
            <div className="mt-6 rounded-md bg-red-100 p-4 text-center text-red-800 shadow-md">
                <h2 className="text-lg font-semibold">Error Sending Message</h2>
                <p className="mt-2 text-sm">Please check your input and try again.</p>
                {Object.entries(state.errors).map(([error], index) => (
                    <p key={index}>{error}</p>
                ))}
            </div>
        );
    }

    return (
        <form
            onSubmit={handleValidatedSubmit}
            className={`mb-[35px] w-[200px] sm:w-[445px] ${lato.className}`}
        >
            <div className="flex flex-col gap-6 sm:flex-row">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name*"
                        className="mb-2 h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[255px]"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your E-mail*"
                        className="mb-2 h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[255px]"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>
            <div>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject*"
                    className="mb-2 h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[534px]"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>
            <div>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type Your Message*"
                    rows={5}
                    className="mb-2 h-[197px] w-[200px] rounded-[5px] border p-2 sm:w-[534px]"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
                type="submit"
                className="mx-auto h-[41px] w-[157px] rounded-[2px] bg-[#FB2E86] font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] lg:mx-0 lg:w-[135px]"
                disabled={state.submitting}
            >
                Send Mail
            </button>
        </form>
    );
}

export default ContactForm;
