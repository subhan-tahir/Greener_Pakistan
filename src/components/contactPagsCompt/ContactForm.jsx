import React from "react";
import InputField from "./InputField";
import OptionField from "./OptionField";

const ContactForm = () => {
  let optionsData1 = [
    "None",
    "Facebook",
    "TV Commercial",
    "Radio",
    "Bill Boards",
    "Print Advertisement",
    "Youtube",
    "LinkedIn",
    "Twitter",
    "Trade Show",
    "Road Show",
    "Website Advertisement",
  ];
  let optionsData2 = ["None", "Residential", "Commercial"];
  let optionsData3 = [
    "None",
    5000,
    1000,
    15000,
    2000,
    25000,
    30000,
    35000,
    40000,
    45000,
    50000,
    60000,
    70000,
    70000 + " +",
  ];
  let optionsData4 = ["None", 1, 2, 3, 4, 5, 5 + "+"];
  let optionsData5 = [
    "None",
    "0 to 5 marla or 125 sq yd",
    "10 to 19 marla or 250 to 475 sq yd",
    "1 kanal or 500 sq yd",
    "2 kanal or 1000 sq yd",
    "3 kanal & above or 1500 sq yd & Above",
    "6 to 9 marla or 1500 to 2250 sq yd",
  ];
  let optionsData6 = [
    "None",
    "House",
    "Apartment",
    "Factory roof",
    "Commercial",
    "Farm",
    "Shop/Office",
  ];
  return (
    <>
      <div className="w-full justify-center items-center flex p-[8%] ">
        <div
          className="m-auto  flex flex-col gap-5 sm:w-[900px] w-full p-[30px] 
        rounded-[20px]"
          style={{ boxShadow: "3px 3px 15px #ddd" }}
        >
          <div>
            <h1 className="text-[--darkGreyColor] text-[45px] font-[700] text-center">
              Get In Touch With Us
            </h1>
          </div>
          <div className="w-full">
            <form action="https://github.com" method="post">
              <div className="flex sm:flex-row gap-4 mb-4 flex-col">
                <InputField type={"text"} placeholder={"First Name"} />
                <InputField type={"text"} placeholder={"Last Name"} />
              </div>
              <div className="flex sm:flex-row  gap-4  mb-4  flex-col">
                <InputField type={"email"} placeholder={"Email Address"} />
                <InputField type={"tel"} placeholder={"Contact Number"} />
              </div>
              <div className="flex sm:flex-row gap-4 mb-4  flex-col">
                <InputField type={"text"} placeholder={"Company"} />
                <InputField type={"text"} placeholder={"City"} />
              </div>
             
              <div className="flex sm:flex-row gap-4 mb-4  flex-col">
                <OptionField
                  labelText={"How did you hear about us?"}
                  optionsData={optionsData1}
                />
                <OptionField
                  labelText={"Customer Type"}
                  optionsData={optionsData2}
                />
              </div>
              <div className="flex sm:flex-row gap-4 mb-4  flex-col">
                <OptionField
                  labelText={"Maximum Summer Electricity Bill?"}
                  optionsData={optionsData3}
                />
                <OptionField
                  labelText={"How many Inverter AC do you want to run?"}
                  optionsData={optionsData4}
                />
              </div>
              <div className="flex sm:flex-row gap-4  mb-4 flex-col">
                <OptionField
                  labelText={"Property Size"}
                  optionsData={optionsData5}
                />
                <OptionField
                  labelText={"Property Type"}
                  optionsData={optionsData6}
                />
              </div>

              <div>
                <button type="submit" className="block m-auto bg-[--primaryColor] rounded-full px-4 py-3">Request a meeting</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
