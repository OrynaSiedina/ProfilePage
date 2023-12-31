import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";

const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {

        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        (error) => {
                alert("Something went wrong. Please try again.")
                console.log(error.message);
                setLoading(false);
            },
            emailjs.send('service_hu8z518', 'template_9ksfexo', {
            from_name: form.name,
            to_name: 'Arina-porfdolio',
            reply_to: form.email,
            message: form.message,
        },'4WpoAarGJiFLzZjcI')
            .then(() => {
                alert("Your message has been sent successfully. I'll get back to you soon!")
                setLoading(false);
                setForm({
                    name: "",
                    email: "",
                    message: "",
                })
            })
    }
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hiden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-1 bg-black-100 rounded-2xl p-8"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className=" flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-2xl
                            outline-none border-none font-medium
                            focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black-100"
                        />
                    </label>
                    <label className=" flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-2xl
                            outline-none border-none font-medium"
                        />
                    </label>
                    <label className=" flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows="3"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="How can I help you?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-2xl
                            outline-none border-none font-medium
                            focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black-100"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rotate-xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");