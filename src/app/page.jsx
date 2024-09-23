"use client";
import Image from "next/image";
import Header from "./components/header";
import {
  FaCss3,
  FaDocker,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaInstagram,
  FaLocationDot,
  FaNodeJs,
  FaReact,
  FaRegEnvelope,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("e:", e.target[0].value);
    const to = "umesh37kr@gmail.com";
    const subject = "I have something";
    const text = "my first email test";
    try {
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, text }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Email sent successfully!");
        // setStatus("Email sent successfully!");
      } else {
        console.log(`Failed to send email: ${data.error}`);
        // setStatus(`Failed to send email: ${data.error}`);
      }
    } catch (error) {
      console.log(`Failed to send email: ${error.message}`);
      // setStatus(`Failed to send email: ${error.message}`);
    }
  };
  return (
    <>
      <Header />

      {/* about me */}
      <section className="pt-10 overflow-hidden bg-zinc-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                About Me
                <hr class="w-60 h-px my-2 border-2 border-orange-200 dark:bg-gray-700"></hr>
              </h2>
              <h2 className="mt-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl lg:text-4xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                Umesh Kumar
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-justify text-gray-600 dark:text-gray-300 md:mt-8">
                Hello! {`I'm`} Umesh Kumar, a passionate and creative Web
                Developer with over four years of experience in building dynamic
                and responsive websites. I hold a {`Bachelor's`} degree in
                Computer Science from Rajiv Gandhi Proudyogiki Vishwavidyalaya,
                Madhya Pradesh (MP), My journey began with a fascination for how
                websites function and a desire to create attractive and great
                user experiences websites. Over the years,{` I've`} worked on
                diverse projects ranging from e-commerce platforms to personal
                blogs. I believe in continuous learning and staying updated with
                the latest industry trends. My work ethic revolves around
                diligence, creativity, and collaboration. Feel free to reach out
                to me. {`I'd`} love to hear from you!
              </p>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" /> Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <Image
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt="shape"
                width={900}
                height={900}
              />

              <Image
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt="girl"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>
      {/* my skills */}
      <section className="px-4 py-10 overflow-hidden bg-neutral-100 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            My Skills
          </h2>
          <p className="mt-5 text-lg text-center">
            these are the technology, I have worked with
          </p>
        </div>
        <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(217,_19,_36,_0.82)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <FaHtml5 className="text-red-500 text-6xl" />
            <p>HTML</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(39,_48,_213,_0.82)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <IoLogoCss3 className="text-blue-500 text-6xl" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(233,144,0,_0.92)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <RiJavascriptFill className="text-yellow-500 text-7xl" />
            <p>JavaScript</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(29,177,255,_0.82)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <FaReact className="text-sky-500 text-6xl" />
            <p>React</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(26,185,_13,_0.82)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center mt-5 h-32 w-60 transition-all duration-300 hover:scale-110">
            <FaNodeJs className="text-green-500 text-6xl" />
            <p>Node js</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(16,22,25,_0.92)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <RiNextjsFill className="text-black-400 text-6xl" />
            <p>Next js</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(43,149,207,_0.82)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <RiTailwindCssFill className="text-sky-600 text-6xl" />
            <p>Tailwind css</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(230,141,13,_0.98)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <FaGitlab className="text-orange-500 text-6xl" />
            <p>Gitlab</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(31,152,8,_0.98)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <BiLogoMongodb className="text-green-700 text-6xl" />
            <p>Mongodb</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(12,120,154,_0.98)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <BiLogoTypescript className="text-sky-700 text-7xl" />
            <p>TypeScript</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(255,156,84,_0.8)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <SiPostman className="text-orange-400 text-7xl" />
            <p>Postman</p>
          </div>

          <div className="flex flex-col shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_0px,_rgba(12,120,154,_0.98)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto rounded items-center justify-center h-32 w-60 mt-5 transition-all duration-300 hover:scale-110">
            <FaDocker className="text-sky-700 text-7xl" />
            <p>Docker</p>
          </div>
        </div>
      </section>

      {/* get in touch */}
      <section className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Duis nec ipsum orci.
                  Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        1230 Maecenas Street Donec Road
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        New York, EEUU
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mobile: +1 (123) 456-7890
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: tailnext@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Ready to Get Started?
                </h2>
                <form onSubmit={handleSubmit} id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="grid grid-cols-3 bg-gray-800 text-white py-5">
        <div>
          <div className="flex gap-2 items-center ml-2 lg:ml-10 lg:gap-4">
            <a href="https://www.instagram.com/umesh_kr_gupta/" target="_blank">
              <FaInstagram className="text-3xl transition-all duration-300 hover:scale-110" />
            </a>
            <a href="https://x.com/Umesh47252554" target="_blank">
              <FaXTwitter className="text-2xl transition-all duration-300 hover:scale-110" />
            </a>
            <a href="https://github.com/umesh37kr" target="_blank">
              <FaGithub className="text-3xl transition-all duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
