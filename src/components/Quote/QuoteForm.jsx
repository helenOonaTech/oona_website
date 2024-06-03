import React from "react";
import { formImg } from "../../assets";

function QuoteForm() {
  return (
    <section className="custom_container flex justify-center mb-12">
      <div className="w-[50%]">
        <img src={formImg} alt="" className="w-full" />
      </div>
      <form action="" className="border border-[#E2DFDF] px-5 py-4 w-[50%]">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col  w-full">
            <label
              htmlFor=""
              className="text-[#202020] text-[13px] font-normal mb-1"
            >
              Name <span className="text-[#E16464]">*</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Abdulhmaid .."
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
              name=""
              id=""
              placeholder="info@oonatech.com .."
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
            name=""
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
            name=""
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
            name=""
            id=""
            className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
          >
            <option value="">Human Resources Pulse </option>
            <option value="">Human Resource </option>
          </select>
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal mb-1"
          >
            Modules you are interested in
            <span className="text-[#E16464]">*</span>
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="Central" id="" />{" "}
              <label
                htmlFor="Central"
                className="text-[#202020] text-[13px] font-normal "
              >
                Central workforce Hub
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="Self" id="" />{" "}
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="Self"
              >
                Employee Self Service
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="Attendance" id="" />{" "}
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
            name=""
            id=""
            className="outline-none border border-[#E3E3E3] text-sm px-3 py-2"
          >
            <option value="">United Arab Emirates </option>
            <option value="">Human Resource </option>
          </select>
        </div>
        <div className="flex flex-col  w-full mt-4">
          <label
            htmlFor=""
            className="text-[#202020] text-[13px] font-normal mb-1"
          >
            How did you hear about us
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="friend" id="" />{" "}
              <label
                htmlFor="friend"
                className="text-[#202020] text-[13px] font-normal "
              >
                Through a friend
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="LinkedIn" id="" />{" "}
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="LinkedIn"
              >
                LinkedIn
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="Social" id="" />{" "}
              <label
                className="text-[#202020] text-[13px] font-normal "
                htmlFor="Social"
              >
                Social Media
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="Others" id="" />{" "}
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
            <input type="checkbox" name="policy" id="" />{" "}
            <label
              htmlFor="policy"
              className="text-[#787878] text-[11px] font-normal leading-[18px]"
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
          className={`text-[#00A7E1] border border-[#00A7E1] rounded-[30px] font-normal text-sm py-3 px-11 mt-8 `}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default QuoteForm;
