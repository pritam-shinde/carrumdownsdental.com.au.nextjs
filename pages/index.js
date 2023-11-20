import React, { useEffect, useState } from "react";
import Head from "next/head";
import { About, Address, AdvantageSec, Blogs, Hero, Offer, PaymentPlan, ServiceSec } from "../sections/sections";

const Home = ({ data }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Clinic</title>
                <meta name="description" content="Experience the best dental treatment from Carrum Downs Dental Group. Our Dentist knowledge and skills will provide you all Dental Care under one roof." />
                <meta name="robots" content="index" />
            </Head>
            <Hero />
            <main>
                <section className="my-md-5 mt-4">
                    <ServiceSec />
                </section>
                <section className="mt-md-5 mt-4">
                    <About />
                </section>
                <section className="mt-md-5 mt-4">
                    <AdvantageSec />
                </section>
                <section className="mt-md-5 mt-4">
                    <Offer />
                </section>
                <section className="mt-md-5 mt-4">
                    <PaymentPlan />
                </section>
                <section className="my-md-5 my-4">
                    <Address />
                </section>
            </main>
        </>
    );
};

export default Home;