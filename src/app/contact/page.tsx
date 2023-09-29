import Head from "next/head";
import ContactForm from "../components/contactForm/contactForm";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Contact Form Example" />
      </Head>

      <main>
        <h1 class="mt-10">Contact Us</h1>
        <ContactForm />
      </main>
    </div>
  );
}
