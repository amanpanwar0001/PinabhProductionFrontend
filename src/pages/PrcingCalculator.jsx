import React, { useRef, useState } from "react";
import "./Pricing.css";
import { LiaCopyright } from "react-icons/lia";
import emailjs from "emailjs-com"; // Import EmailJS SDK
// import logo from "./assets/logo2.png"; // Import the image

const PrcingCalculator = () => {
  const [addOns, setAddOns] = useState({
    RemovePostProduction: false,
    teleprompter: false,
    soundrecordist: false,
    voiceover: false,
    Studio: false,
    AdditionalLighting: false,
    Makeup: false,
    Stylist: false,
  });
  const [secondAdd, setSecondAdd] = useState({
    RemovePostProduction: false,
    teleprompter: false,
    soundrecordist: false,
    voiceover: false,
    Studio: false,
    AdditionalLighting: false,
    Makeup: false,
    Stylist: false,
  });
  const [thirdAdd, setThirdAdd] = useState({
    RemovePostProduction: false,
  });

  const basePrice = 60000;
  const addOnsPrice = {
    RemovePostProduction: 10000,
    teleprompter: 5000,
    soundrecordist: 7000,
    voiceover: 10000,
    Studio: 12000,
    AdditionalLighting: 9000,
    Makeup: 8000,
    Stylist: 10000,
  };
  const professionalPrice = 100000;
  const secondAddPrice = {
    RemovePostProduction: 20000,
    teleprompter: 5000,
    voiceover: 9000,
    Studio: 15000,
    AdditionalLighting: 15000,
    Makeup: 10000,
    Stylist: 12000,
  };
  const premiumPrice = 200000;
  const thirdAddPrice = {
    RemovePostProduction: 40000,
  };

  const calculateTotal = () => {
    let total = basePrice;

    if (addOns.RemovePostProduction) {
      total -= addOnsPrice.RemovePostProduction;
    }

    Object.keys(addOnsPrice).forEach((key) => {
      if (addOns[key] && key !== "RemovePostProduction") {
        total += addOnsPrice[key];
      }
    });

    return total;
  };
  const calculateTotal1 = () => {
    let total = professionalPrice;

    if (secondAdd.RemovePostProduction) {
      total -= secondAddPrice.RemovePostProduction;
    }
    Object.keys(secondAddPrice).forEach((key) => {
      if (secondAdd[key] && key !== "RemovePostProduction") {
        total += secondAddPrice[key];
      }
    });
    return total;
  };
  const calculateTotal2 = () => {
    let total = premiumPrice;
    if (thirdAdd.RemovePostProduction) {
      total -= thirdAddPrice.RemovePostProduction;
    }
    Object.keys(thirdAddPrice).forEach((key) => {
      if (thirdAdd[key] && key !== "RemovePostProduction") {
        total += thirdAddPrice[key];
      }
    });
    return total;
  };

  const handleThirdOnChange = (event) => {
    const { id, checked } = event.target;
    setThirdAdd((prevthirdAdd) => ({
      ...prevthirdAdd,
      [id]: checked,
    }));
  };

  const handleSecondOnChange = (event) => {
    const { id, checked } = event.target;
    setSecondAdd((prevsecondAdd) => ({
      ...prevsecondAdd,
      [id]: checked,
    }));
  };

  const handleAddOnChange = (event) => {
    const { id, checked } = event.target;
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [id]: checked,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Collect the form data
    const formData = new FormData(form.current);
    const formProps = Object.fromEntries(formData.entries());

    // Create a summary of selected add-ons for each package
    const selectedAddOns = {
      Basic: Object.keys(addOns)
        .filter((key) => addOns[key])
        .join(", "),
      Professional: Object.keys(secondAdd)
        .filter((key) => secondAdd[key])
        .join(", "),
      Premium: Object.keys(thirdAdd)
        .filter((key) => thirdAdd[key])
        .join(", "),
    };

    // Determine which package is selected
    const selectedPackage = formProps.package_type; // Ensure this field is part of your form

    let packageDetails;
    let packageTotal;
    let addOnsList;

    switch (selectedPackage) {
      case "Basic":
        packageDetails =
          "Selected Basic Package Add-Ons: " + selectedAddOns.Basic;
        packageTotal = calculateTotal();
        addOnsList = selectedAddOns.Basic;
        break;
      case "Professional":
        packageDetails =
          "Selected Professional Package Add-Ons: " +
          selectedAddOns.Professional;
        packageTotal = calculateTotal1();
        addOnsList = selectedAddOns.Professional;
        break;
      case "Premium":
        packageDetails =
          "Selected Premium Package Add-Ons: " + selectedAddOns.Premium;
        packageTotal = calculateTotal2();
        addOnsList = selectedAddOns.Premium;
        break;
      default:
        packageDetails = "No package selected";
        packageTotal = 0;
        addOnsList = "None";
    }

    // Construct the email content
    const emailContent = `
      Name: ${formProps.from_name}\n
      Email: ${formProps.from_email}\n
      Message: ${formProps.message}\n\n
      ${packageDetails}\n
      TOTAL ${selectedPackage.toUpperCase()}: ${packageTotal}\n
    `;

    // Send the email
    emailjs
      .send(
        "service_ew4dphz",
        "template_trxb8zl",
        {
          from_name: formProps.from_name,
          from_email: formProps.from_email,
          message: emailContent,
        },
        "JarB-0qJ360Q5T0bU"
      )
      .then(
        () => {
          console.log("Email sent successfully");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  const Click = () => {
    alert("Details Submitted Succesfully....!");
  };

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <h1 className="heading" style={{ textAlign: "center", color: "red" }}>
            Corporate Videos Production Services
          </h1>
          <h2 className="heading2" style={{ color: "red", fontWeight: "600" }}>
            Welcome to I Next IT Solutions
          </h2>
          <p>
            where we transform your corporate vision into compelling visual
            stories. Our Corporate Video Production Services are designed to
            enhance your brand's identity, engage your audience, and drive
            business growth.
          </p>
          <h2 className="heading2" style={{ color: "red", fontWeight: "600" }}>
            Why Choose Our Corporate Video Production?
          </h2>
          <h3>Professional Quality:</h3>
          <p>
            Our team of experienced videographers and editors uses
            state-of-the-art equipment to ensure your corporate video meets the
            highest standards of quality. From crisp visuals to clear audio, we
            focus on every detail to deliver a polished final product.
          </p>

          <h3>Customized Solutions:</h3>
          <p>
            We understand that each business has unique needs. Our approach is
            tailored to fit your specific goals, whether it's showcasing company
            culture, presenting a product, or delivering a corporate message. We
            collaborate closely with you to craft a video that aligns with your
            brand's voice and vision.
          </p>

          <h3>Comprehensive Services:</h3>
          <p>
            From concept development and scriptwriting to filming and
            post-production, we handle every aspect of video production. Our
            end-to-end service ensures a seamless process and a final product
            that exceeds expectations.
          </p>

          <h3>Engaging Content:</h3>
          <p>
            Our creative team excels at creating videos that captivate and
            retain viewer attention. We use storytelling techniques and engaging
            visuals to make sure your message resonates with your target
            audience.
          </p>
          <h3>Timely Delivery:</h3>
          <p>
            We value your time and understand the importance of deadlines. Our
            efficient production process ensures that your video is delivered on
            time, allowing you to meet your marketing and communication
            objectives without delay.
          </p>
          <h2
            className="cal"
            style={{ fontSize: "xx-large", margin: "50px 0 25px 0" }}
          >
            Video Production Pricing Calculator
          </h2>
        </div>
      </div>
      <div className="container1">
        <div className="inner-container1">
          <div className="container2">
            <div className="header">
              <h2>Basic Package</h2>
              <p>Corporate | Industrial | Product Video</p>
              <h5>Price: 60000 INR + GST</h5>
            </div>
            <div className="content">
              <h4>What is Included:</h4>
              <p>Basic preproduction</p>
              <p>Professional crew</p>
              <p>Sony 4K camera system</p>
              <p>Single camera interview setup</p>
              <p>Professional video editing and licensed music</p>
              <p>One week of post-production (Maximum three revisions)</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <div className="content1">
                <h2>Add-ons</h2>
                {Object.keys(addOnsPrice).map((key) => (
                  <div style={{ marginBottom: "10px" }} key={key}>
                    <label htmlFor={key} style={{ lineHeight: "1.8rem" }}>
                      {key
                        .replace(/([A-Z])/g, "$1")
                        .toLowerCase()
                        .replace(/^./, (str) => str.toUpperCase())}{" "}
                      ({addOnsPrice[key]} INR):
                    </label>
                    <input
                      type="checkbox"
                      id={key}
                      checked={addOns[key]}
                      onChange={handleAddOnChange}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="header">
              <h3>Total (Excluding GST) INR: {calculateTotal()}</h3>
            </div>
          </div>
          <div className="container2">
            <div className="header">
              <h2>Professional Package</h2>
              <p>Corporate | Industrial | Product Video</p>
              <h5>Price: 100000 INR + GST</h5>
            </div>
            <div className="content">
              <h4>What is Included:</h4>
              <p>Deatailed preproduction and voiceover script</p>
              <p>Location scouting prior to the shoot</p>
              <p>Highly experienced crew</p>
              <p>Sony cinema line cameras</p>
              <p>Professional LED lighting</p>
              <p>Dual camera interview setup</p>
              <p>Professional editing</p>
              <p>Color grading in DaVinci Resolve</p>
              <p>Licensed music and sound mastering</p>
              <p>Dedicated sound recordist</p>
              <p>Professional TimeCode work flow</p>
              <p>Two weeks of post production(Maximum Three Revisions)</p>
              <p>Final video duration up to 5 minutes</p>
              <p>.</p>
              <div className="content1">
                <h2>Add-ons</h2>
                {Object.keys(secondAddPrice).map((key) => (
                  <div style={{ marginBottom: "10px" }} key={key}>
                    <label htmlFor={key} style={{ lineHeight: "1.8rem" }}>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .replace(/^./, (str) => str.toUpperCase())}{" "}
                      ({secondAddPrice[key]} INR):
                    </label>
                    <input
                      type="checkbox"
                      id={key}
                      checked={secondAdd[key]}
                      onChange={handleSecondOnChange}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="header">
              <h3>Total (Excluding GST) INR: {calculateTotal1()}</h3>
            </div>
          </div>
          <div className="container2">
            <div className="header">
              <h2>Premium Package</h2>
              <p>Corporate | Industrial | Product Video</p>
              <h5>Price: 200000 INR + GST</h5>
            </div>
            <div className="content">
              <h4>What is Included:</h4>
              <p>Detailed preproduction and voiceover script</p>
              <p>Location scouting prior to the shoot</p>
              <p>Highly experienced crew</p>
              <p>Professional raw cinema cameras</p>
              <p>Advanced lighting setups and crew</p>
              <p>Makeup artist and stylist</p>
              <p>Dual camera interview setup</p>
              <p>Professional editing</p>
              <p>Color grading in DaVinci Resolve</p>
              <p>Premium music and AI sound mastering</p>
              <p>
                Dedicated sound recordist with professional cinema equipment
              </p>
              <p>Professional TimeCode work flow</p>
              <p>Dedicated hard drive with raw footage</p>
              <p>Final video duration up to 5 minutes</p>
              <div className="content1">
                <h2>Add-ons</h2>
                {Object.keys(thirdAddPrice).map((key) => (
                  <div style={{ marginBottom: "10px" }} key={key}>
                    <label htmlFor={key} style={{ lineHeight: "1.8rem" }}>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .replace(/^./, (str) => str.toUpperCase())}{" "}
                      ({thirdAddPrice[key]} INR):
                    </label>
                    <input
                      type="checkbox"
                      id={key}
                      checked={thirdAdd[key]}
                      onChange={handleThirdOnChange}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="header">
              <h3>Total (Excluding GST) INR: {calculateTotal2()}</h3>
            </div>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-fields">
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="package-fields">
              <label className="radio-container">
                <input
                  type="radio"
                  name="package_type"
                  value="Basic"
                  required
                />
                Basic Package
              </label>
              <label>
                <input
                  type="radio"
                  name="package_type"
                  value="Professional"
                  required
                />
                Professional Package
              </label>
              <label>
                <input
                  type="radio"
                  name="package_type"
                  value="Premium"
                  required
                />
                Premium Package
              </label>
            </div>

            <button type="submit" onClick={() => Click()}>
              Submit Form
            </button>
          </form>
        </div>
        <div className="footer">
          <h2>Contact Us Today</h2>
          <p>
            Ready to elevate your corporate communications with high-quality
            video content? Get in touch with our team at I Next IT Solutions to
            discuss your project and get a quote. We look forward to bringing
            your vision to life!
          </p>
        </div>
      </div>
    </>
  );
};

export default PrcingCalculator;