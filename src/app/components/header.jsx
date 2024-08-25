"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { GiCrossedBones } from "react-icons/gi";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <header class="px-4 lg:px-16 flex flex-wrap items-center py-4 shadow-lg">
        <div class="flex-1 flex justify-between items-center">
          <a
            href="#"
            class="text-3xl font-semibold tracking-widest font-serif text-blue-700"
          >
            UMESH
          </a>
        </div>
        <button
          onClick={handleNav}
          for="menu-toggle"
          className="pointer-cursor md:hidden block"
        >
          <svg
            class="fill-current text-gray-700 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <input class="hidden" type="checkbox" id="menu-toggle" />
        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 dark:text-gray-100 pt-4 md:pt-0">
              <li>
                <a
                  class="md:p-4 py-3 px-0 block text-blue-700 hover:text-blue-700"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block hover:text-blue-700" href="#">
                  About Me
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block hover:text-blue-700" href="#">
                  Education
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block hover:text-blue-700" href="#">
                  Experience
                </a>
              </li>
              <li>
                <a
                  class="md:p-4 py-3 px-0 block hover:text-blue-700 md:mb-0 mb-2"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* responsive navbar for mobile */}
        {openNav && (
          <div className="h-screen w-2/3 fixed z-10 top-0 left-0 bg-blue-400">
            <button
              onClick={() => {
                setOpenNav(false);
              }}
              className="absolute top-5 right-6 ml-12"
            >
              <GiCrossedBones className="text-3xl" />
            </button>
            <ul className="pl-5 gap-8">
              <li className="text-xl pt-5 font-bold">
                <a href="">Home</a>
              </li>
              <li className="text-xl pt-5 font-bold">
                <a href="">About me</a>
              </li>
              <li className="text-xl pt-5 font-bold">
                <a href="">Education</a>
              </li>
              <li className="text-xl pt-5 font-bold">
                <a href="">Experience</a>
              </li>
              <li className="text-xl pt-5 font-bold">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div class="px-4 w-full h-screen relative">
        <div class="w-full h-full xl:px-16 xs:px-8 flex gap-4 justify-center items-center">
          <div class="w-full">
            <h4 class="sm:text-2xl text-gray-600 dark:text-gray-300">
              Hello, My name is
              <span class="text-blue-500 sm:text-2xl xs:text-xl font-semibold font-serif">
                &nbsp; Umesh Kumar
              </span>
            </h4>
            <h1 class="mt-4 text-2xl lg:text-4xl dark:text-white">
              {`I'm`} &nbsp;
              <ReactTyped
                strings={[
                  "FullStack Developer,",
                  "Frontend Developer,",
                  "Backend Developer.",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              >
                <span class="font-extrabold font-libre text-blue-700"></span>
              </ReactTyped>
            </h1>
            <p class="mt-4 sm:text-lg xs:text-md capitalize dark:text-gray-200">
              Experienced full-stack developer with 4+ years of expertise in
              HtML, CSS, Tailwind, React, Next.js, NodeJS, ExpressJS, MongoDB.
            </p>
            <button class="p-2 px-6 mt-6 bg-blue-700 text-white rounded-full">
              Hire Me
            </button>
          </div>

          <div class="xl:max-w-[30%] md:max-w-[30%] h-fit hidden md:block ">
            <Image
              class="rounded-sm rounded-br-[5rem] rounded-tl-[5rem]"
              src={"https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"}
              width={900}
              height={900}
              alt="My Pic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
