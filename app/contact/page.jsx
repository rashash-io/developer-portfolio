"use client";

//UI
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "../../components/";

// HOOKS
import { useRef } from "react";

//Icons
import { BiSolidContact } from "react-icons/bi";
import { BsFillSendFill, BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail, MdOpenInNew } from "react-icons/md";

//LIBS
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contactLinksAndInfo } from "../../lib";
import dotenv from "dotenv";
dotenv.config();

const Contact = () => {
  const form = useRef();

   const sendEmail = (e) => {
    let data = {
      key: process.env.NEXT_PUBLIC_EMAILJS_KEY,
      template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
      service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
    };
    e.preventDefault();
    emailjs
      .sendForm(data.service, data.template, form.current, {
        publicKey: data.key,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 bg-darkbg"
    >
      <div className="container  mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none bg-[url('/bg.png')] bg-no-repeat bg-blend-color-dodge">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-black/40 rounded-xl shadow-lg"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Leave me a message & I'll get back to you asap.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 gap-6 ">
                <div className="relative ">
                  <div className="overflow-hidden rounded-l-md box-border absolute border border-white/10  h-full  ">
                    <IoPersonSharp className="h-full text-2xl px-2 box-content text-primary  bg-accent " />
                  </div>
                  <Input
                    type="name"
                    name="name"
                    className="pl-12 border-2 w-full bg-darkernavy"
                    placeholder="Name"
                  />
                </div>

                <div className="relative">
                  <div className="overflow-hidden rounded-l-md box-border absolute border border-white/10  h-full ">
                    <BsFillTelephoneFill className="h-full text-2xl px-2 box-content text-primary  bg-accent " />
                  </div>
                  <Input
                    type="phone"
                    name="phone"
                    className="pl-12 w-full bg-darkernavy "
                    placeholder="Phone number"
                  />
                </div>

                <div className="relative ">
                  <div className=" overflow-hidden rounded-l-md box-border absolute border border-white/10  h-full ">
                    <MdEmail className="h-full text-2xl px-2 box-content text-primary  bg-accent " />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    className="pl-12 w-full bg-darkernavy"
                    placeholder="Email address"
                  />
                </div>
              </div>

              {/* Selects */}
              <Select>
                <SelectTrigger className="w-full bg-darkernavy border-2">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Web Hosting</SelectItem>
                    <SelectItem value="mst">Penetration Testing</SelectItem>
                    <SelectItem value="wst">SEO</SelectItem>
                    <SelectItem value="nst">Other inquiry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Text Area */}
              <Textarea
                required
                name="message"
                className="h-[200px] bg-darkernavy border-2"
                placeholder="Type your message here ...."
              />

              {/* Button */}
              <Button
                type="submit"
                size="md"
                className="rounded-full flex gap-2 justify-center items-center max-w-60 self-center"
              >
                <span className="text-2xl">
                  <BsFillSendFill />
                </span>
                <span>Send message</span>
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1  justify-center flex items-center  order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 self-center ">
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-3xl">My contact info</h3>
                <p className=" text-white/60 text-xs text-center">
                  To make things easier, click the <br />
                  button to add my vcard to your contacts
                </p>
                <Button
                  variant="outline"
                  className="flex transition-all text-primary  rounded-md bg-gradient-to-r from-purple to-teal-300 hover:from-pink-500 hover:to-teal-400 "
                >
                  <span className="text-2xl pr-3">
                    <BiSolidContact />
                  </span>
                  <a
                    href="https://rashash.io/rashash-contact.vcf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    save my contact
                  </a>
                </Button>
              </div>
              {contactLinksAndInfo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] bg-black/50 text-accent rounded-md flex items-center justify-center">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <div className="flex gap-2 items-center">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MdOpenInNew className="text-accent hover:text-white border-b-2 border-accent/35 " />
                        </a>
                        <h3>{item.description}</h3>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
