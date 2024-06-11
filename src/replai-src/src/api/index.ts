import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://alefba-backend.darkube.app/api", // in develope mode just use /api
  headers: {
    "Content-Type": "application/json",
  },
});

export const contactUs = async (contactForm: ContactUsProps) => {
  try {
    const bodyData = {
      name: contactForm.name,
      email: contactForm.email,
      phone_number: contactForm.phone_number,
      message: contactForm.message,
    };
    const { data } = await axios.post("/contact-form/", bodyData);
    return data;
  } catch (err) {
    console.log(err);
  }
};
