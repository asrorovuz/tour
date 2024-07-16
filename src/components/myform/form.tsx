import axios from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IData {
  name: string;
  date: string;
  guests: string;
  phone: string;
  destination: string;
  visa_support: string;
}

const TOKEN = "7160474181:AAH3gUma-7m7XvwY0AYTbcKFaXjWLJ2MmUg";
const CHAT_ID = 467533539;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const ContactForm = () => {
  const sendMessage = async (data: IData) => {
    const messageContent = `Name: ${data.name}\nPhone: +${data.phone}\nGuests: ${data.guests}\nDate: ${data.date}\nDestination: ${data.destination}\nVisa Support: ${data.visa_support}`;

    try {
      await axios.post(TELEGRAM_API_URL, {
        chat_id: CHAT_ID,
        text: messageContent,
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();

  const onSubmit = (data: IData) => {
    sendMessage(data);
  };

  const {t} = useTranslation()

  return (
    <form
      className="px-[30px] pb-[45px] flex flex-wrap gap-x-5 justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full laptop:w-[48%] mb-[30px]">
        <label htmlFor="name" className="block text-[15px] text-text mb-3">
          {t("form-label-1")}
        </label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            pattern: { value: /^[A-Za-z\s]+$/i, message: "Invalid name" },
          })}
          id="name"
          placeholder={t("form-input-1")}
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 w-full focus-visible:outline focus-visible:outline-gren-blue"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="w-full laptop:w-[48%] mb-[30px]">
        <label htmlFor="phone" className="block text-[15px] text-text mb-3">
        {t("form-label-2")} +
        </label>
        <input
          type="text"
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9\s]+$/i, message: "Invalid phone number" },
          })}
          id="phone"
          placeholder={t("form-input-2")}
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 w-full focus-visible:outline focus-visible:outline-gren-blue"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="w-full laptop:w-[48%] mb-[30px]">
        <label htmlFor="guests" className="block text-[15px] text-text mb-3">
        {t("form-label-3")}
        </label>
        <select
          {...register("guests", {
            required: "Number of guests is required",
            pattern: { value: /^[0-9]+$/i, message: "Invalid number" },
          })}
          id="guests"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 w-full focus-visible:outline focus-visible:outline-gren-blue"
        >
          <option value="">{t("form-input-3")}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4+">4+</option>
        </select>
        {errors.guests && (
          <p className="text-red-500">{errors.guests.message}</p>
        )}
      </div>

      <div className="w-full laptop:w-[48%] mb-[30px]">
        <label htmlFor="date" className="block text-[15px] text-text mb-3">
        {t("form-label-4")}
        </label>
        <input
          type="date"
          {...register("date", {required: "Date is required"})}
          id="date"
          className="bg-transparent h-11 rounded-[23px] border text-text border-[#d0d0d0] px-5 w-full focus-visible:outline focus-visible:outline-gren-blue"
        />
        {errors.date && (
          <p className="text-red-500">{errors.date.message}</p>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="destination"
          className="block text-[15px] text-text mb-3"
        >
          {t("form-label-5")}
        </label>
        <select
          {...register("destination")}
          id="destination"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        >
          <option value="">Select destination</option>
          <option value="Antalya">Antalya</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Dubai">Dubai</option>
          <option value="Sharm EI-Sheikh">Sharm EI-Sheikh</option>
          <option value="Kuala Lumpur">Kuala Lumpur</option>
          <option value="Canada">Canada</option>
          <option value="England">England</option>
        </select>
      </div>

      <div className="w-full">
        <label
          htmlFor="visa_support"
          className="block text-[15px] text-text mb-3"
        >
          {t("form-label-6")}
        </label>
        <select
          {...register("visa_support")}
          id="visa_support"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        >
          <option value="">Select visa support</option>
          <option value="USA">USA</option>
          <option value="Europe">Europe</option>
          <option value="England">England</option>
          <option value="Japan">Japan</option>
          <option value="Oman">Oman</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Hong Kong">Hong Kong</option>
        </select>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="text-[14px] text-white bg-gren-blue border border-gren-blue py-3 px-[30px] w-full rounded-[25px] font-medium capitalize tracking-[0.5px] hover:opacity-90 transition"
        >
          {t("btn-contact")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
