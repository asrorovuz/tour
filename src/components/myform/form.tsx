const ContactForm = () => {
  return (
    <form className="px-[30px] pb-[45px] flex flex-wrap gap-x-5 justify-between">
      <div className="w-full laptop:w-[48%]">
        <label htmlFor="name" className="block text-[15px] text-text mb-3">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ex. John Smithee"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        />
      </div>

      <div className="w-full laptop:w-[48%]">
        <label htmlFor="phone" className="block text-[15px] text-text mb-3">
          Your Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Ex. +99899 999 99 99"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        />
      </div>

      <div className="w-full laptop:w-[48%]">
        <label htmlFor="guests" className="block text-[15px] text-text mb-3">
          Number of Guests
        </label>
        <select
          name="guests"
          id="guests"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        >
          <option value="ex">ex. 3 or 4 or 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4+">4+</option>
        </select>
      </div>

      <div className="w-full laptop:w-[48%]">
        <label htmlFor="date" className="block text-[15px] text-text mb-3">
          Check In Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="bg-transparent h-11 rounded-[23px] border text-text border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="destination"
          className="block text-[15px] text-text mb-3"
        >
          Choose Your Destination
        </label>
        <select
          name="destination"
          id="destination"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        >
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
          htmlFor="visa-support"
          className="block text-[15px] text-text mb-3"
        >
          Choose Your Visa Support
        </label>
        <select
          name="visa-support"
          id="visa-support"
          className="bg-transparent h-11 rounded-[23px] border border-[#d0d0d0] px-5 mb-[30px] w-full focus-visible:outline focus-visible:outline-gren-blue"
        >
          <option value="Country">Country</option>
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
          Make Your Reservation Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
