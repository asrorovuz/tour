import phone from "../../assets/icons/phone.svg";

const Contact = () => {
  return (
    <div id="contacts" className="-translate-y-28">
      <div className="container mx-auto">
        <div>
          <div className="grid gap-[30px] mobile:grid-cols-2 laptop:grid-cols-3">
            <div className="rounded-[23px] bg-white shadow-card p-[30px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-custom-white-100 flex items-center justify-center mb-5">
                <img src={phone} alt="icon" />
              </div>
              <h3 className="text-xl font-bold mb-[10px] capitalize">
                make a phone call
              </h3>
              <p className="text-[15px] text-gren-blue">+998 99 299 99 96</p>
            </div>

            <div className="rounded-[23px] bg-white shadow-card p-[30px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-custom-white-100 flex items-center justify-center mb-5">
                <img src={phone} alt="icon" />
              </div>
              <h3 className="text-xl font-bold mb-[10px] capitalize">
                make a phone call
              </h3>
              <p className="text-[15px] text-gren-blue">+998 99 299 99 96</p>
            </div>

            <div className="rounded-[23px] bg-white shadow-card p-[30px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-custom-white-100 flex items-center justify-center mb-5">
                <img src={phone} alt="icon" />
              </div>
              <h3 className="text-xl font-bold mb-[10px] capitalize">
                make a phone call
              </h3>
              <p className="text-[15px] text-gren-blue">+998 99 299 99 96</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
