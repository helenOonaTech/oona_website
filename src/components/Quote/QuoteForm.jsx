import React, { useRef } from "react";
import {
  facebookBorder,
  formImg,
  instagramBorder,
  linkedBorder,
  modalImg,
} from "../../assets";
import { Link } from "react-router-dom";
import CheckBox from "../elements/CheckBox";
import emailjs from "@emailjs/browser";
function QuoteForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_2w87pup",
        "template_7in9vw9",
        form.current,
        "mNFUpAFgLkzCcIv2s"
      )
      .then(
        (result) => {
          console.log(result);
          // setContact(true);

          // window.location.reload();
          document.getElementById("my_modal_1").showModal();
        },
        (error) => {
          console.log(error);
          // setContacterror(true);
        }
      );
  };
  return (
    <section className="custom_container flex justify-center mb-12 quote_form">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box md:w-[34%] text-center">
          <img src={modalImg} alt="" className="mx-auto w-[250px]" />
          <h3 className="font-bold text-[#202020] text-[20px] mb-3">
            Thank you for your request
          </h3>
          <p className="text-[#787878] text-base font-normal leading-[22px]">
            We have received your submission and our team will reach out to you
            soon. Have a great day!
          </p>

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal md:text-sm text-xs md:py-2 py-2 px-16 mt-8 mb-4  `}
            >
              Go Back
            </button>
          </form>
          <span className="text-[#202020] text-base font-normal leading-[22px]">
            Follow Us
          </span>
          <div className="flex items-center gap-7 mx-auto w-full justify-center mt-5">
            <Link to="#">
              <img src={facebookBorder} alt="" />
            </Link>
            <Link to="#">
              <img src={instagramBorder} alt="" />
            </Link>
            <Link to="#">
              <img src={linkedBorder} alt="" />
            </Link>
          </div>
        </div>
      </dialog>
      <div className="w-[50%] md:flex hidden">
        <img src={formImg} alt="" className="w-full" />
      </div>
      <form
        onSubmit={sendEmail}
        ref={form}
        action=""
        className="border border-[#E2DFDF] px-5 md:py-4 py-4 md:w-[50%]"
      >
        <div className="flex justify-between gap-4 md:flex-row flex-col">
          <div className="flex flex-col  w-full">
            <label
              htmlFor=""
              className="text-[#202020] text-[13px] font-normal mb-1"
            >
              Name <span className="text-[#E16464]">*</span>
            </label>
            <input
              type="text"
              name="name"
              id=""
              // placeholder="Abdulhmaid .."
              className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
            />
          </div>
          <div className="flex flex-col  w-full">
            <label
              htmlFor=""
              className="text-[#202020] text-[13px] font-normal mb-1"
            >
              Email Address <span className="text-[#E16464]">*</span>
            </label>
            <input
              type="text"
              name="email"
              id=""
              // placeholder="info@oonatech.com .."
              className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal mb-1"
          >
            Phone Number (with country code)
            <span className="text-[#E16464]">*</span>
          </label>
          <input
            type="text"
            name="phone"
            id=""
            placeholder=""
            className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
          />
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal mb-1"
          >
            Company Name
            <span className="text-[#E16464]">*</span>
          </label>
          <input
            type="text"
            name="company"
            id=""
            placeholder=""
            className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
          />
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal mb-1"
          >
            Products
            <span className="text-[#E16464]">*</span>
          </label>
          <select
            name="product"
            id=""
            className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
          >
            <option value="Resources">Human Resources Pulse </option>
            <option value="Human">Human Resource </option>
          </select>
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal md:mb-1 mb-3"
          >
            Modules you are interested in
            <span className="text-[#E16464]">*</span>
          </label>
          <div className="flex md:items-center md:flex-row flex-col md:gap-0 gap-3 justify-between">
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="Central" id="" />{" "} */}
              <CheckBox name="workforce" />
              <label
                htmlFor="Central"
                className="text-[#202020] text-[13px] font-normal "
              >
                Central workforce Hub
              </label>
            </div>
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="Self" id="" />{" "} */}
              <CheckBox name="Self" />
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="Self"
              >
                Employee Self Service
              </label>
            </div>
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="Attendance" id="" />{" "} */}
              <CheckBox name="Attendance" />
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="Attendance"
              >
                Attendance
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal mb-1"
          >
            Country
            <span className="text-[#E16464]">*</span>
          </label>
          <select
            name="country"
            id=""
            className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
          >
            <option value="">United Arab Emirates </option>
            <option value="">syria </option>
            <option value="">SA </option>
          </select>
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal md:mb-1 mb-3"
          >
            How did you hear about us
          </label>
          <div className="flex md:items-center md:flex-row flex-col md:gap-0 gap-3 justify-between">
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="friend" id="" /> */}
              <CheckBox />
              <label
                htmlFor="friend"
                className="text-[#202020] text-[13px] font-normal "
              >
                Through a friend
              </label>
            </div>
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="LinkedIn" id="" />{" "} */}
              <CheckBox />
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="LinkedIn"
              >
                LinkedIn
              </label>
            </div>
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="Social" id="" />{" "} */}
              <CheckBox />
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="Social"
              >
                Social Media
              </label>
            </div>
            <div className="flex items-center gap-1">
              {/* <input type="checkbox" name="Others" id="" />{" "} */}
              <CheckBox />
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="Others"
              >
                Others
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full mt-6">
          <div className="flex items-start gap-2">
            {/* <input type="checkbox" name="policy" id="" />{" "} */}
            <CheckBox />
            <label
              htmlFor="policy"
              className="text-[#787878] text-[11px] font-normal md:leading-[18px] md:mt-0 -mt-1"
            >
              Yes, I would like to receive marketing communication
              regarding oona products, services, and events from oona and its
              regional partners.
            </label>
          </div>
        </div>
        <p className="text-[#787878] text-[11px] font-normal leading-[18px] mt-3">
          By submitting this form, you agree to the processing of personal data
          according to our Privacy Policy.
        </p>
        <button
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
          className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal md:text-sm text-xs md:py-3 py-2 px-11 mt-8 `}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default QuoteForm;
