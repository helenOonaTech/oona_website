import { useRef, useState } from "react";
import TextField from "../elements/TextField";
import { Link } from "react-router-dom";
// import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

function SayHi() {
  const [color, setColor] = useState(false);
  const handleSelectColor = (e) => {
    if (e.target.value) {
      setColor(true);
    }
  };
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

          window.location.reload();
        },
        (error) => {
          console.log(error);
          // setContacterror(true);
        }
      );
  };
  return (
    <section className="say_hi py-9 text-center mb-14">
      <section className="custom_container">
        <h1 className="text-white md:text-[60px] text-3xl font-bold text-center md:leading-[70px]">
          Don't Be Shy! <br /> Say Hi
        </h1>
        <p className="text-white text-sm font-normal leading-[22px] mt-4">
          Shall we have a coffee...?
          <br className="md:block hidden" />
          We have already taken the first step here. Now it's up to you! Without
          obligation. <br className="md:block hidden" />
          And if something special comes out of it, we will of course be happy.
        </p>
        <form
          action=""
          className="md:w-[65%] mx-auto mt-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <div data-aos="fade-right">
            <TextField type="text" name="user_name" placeholder="Your Name" />
          </div>
          <div data-aos="fade-left">
            <TextField type="text" name="phone" placeholder="Phone Number" />
          </div>
          <div data-aos="fade-right">
            <TextField type="email" name="email" placeholder="Email Address" />
          </div>
          <div data-aos="fade-left">
            <select
              name="product"
              id=""
              onChange={handleSelectColor}
              className={`${color ? "text-[#272727]" : "text-[#a9a9a9]"}`}
            >
              <option value="" selected disabled>
                Select a value
              </option>
              <option value="Products">Products</option>
              <option value="Self">Self service</option>
            </select>
          </div>
          <div data-aos="fade-right">
            <div className="col-3 text_input relative mb-10">
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
                rows={6}
                className="effect-2 text-sm"
              ></textarea>
              <span className="focus-border"></span>
            </div>
          </div>
          {/* <div data-aos="fade-up"> */}
          {/* <button
              className={`text-white border border-white rounded-[30px] font-normal text-base py-[0.66rem] px-14 mt-4 `}
            >
              Submit
            </button> */}
          <div className="buttonBox ">
            <button className="button11 ">
              <div
                className={`text-white border border-white rounded-[30px] text-sm font-normal md:text-base py-[0.66rem] px-14  transition-all duration-300`}
              >
                Submit
              </div>
            </button>
          </div>
          {/* </div> */}
        </form>
      </section>
    </section>
  );
}

export default SayHi;
