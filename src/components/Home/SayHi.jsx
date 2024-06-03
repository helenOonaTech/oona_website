import { useState } from "react";
import TextField from "../elements/TextField";

function SayHi() {
  const [color, setColor] = useState(false);
  const handleSelectColor = (e) => {
    if (e.target.value) {
      setColor(true);
    }
  };
  return (
    <section className="say_hi py-7 text-center mb-14">
      <section className="custom_container">
        <h1 className="text-white text-[60px] font-bold text-center leading-[70px]">
          Don't Be Shy! <br /> Say Hi
        </h1>
        <p className="text-white text-sm font-normal leading-[22px] mt-4">
          Shall we have a coffee...?
          <br />
          We have already taken the first step here. Now it's up to you! Without
          obligation. <br />
          And if something special comes out of it, we will of course be happy.
        </p>
        <form action="" className="md:w-[65%] mx-auto mt-6">
          <TextField type="text" name="name" placeholder="Your Name" />
          <TextField type="text" name="phone" placeholder="Phone Number" />
          <TextField type="email" name="email" placeholder="Email Address" />

          <select
            name=""
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

          <div className="col-3 text_input relative">
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              rows={6}
              className="effect-2 text-sm"
            ></textarea>
            <span className="focus-border"></span>
          </div>
          <button
            className={`text-white border border-white rounded-[30px] font-normal text-base py-[0.66rem] px-14 mt-4 `}
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}

export default SayHi;
