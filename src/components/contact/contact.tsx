import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import ContactForm from "../myform/form";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contacts" className="-translate-y-28">
      <div className="container mx-auto">
        <div>
          <div className="grid gap-[30px] mobile:grid-cols-2 laptop:grid-cols-3">
            <div className="rounded-[23px] bg-white shadow-card p-[30px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-custom-white-100 flex items-center justify-center mb-5">
                <img src={phone} alt="icon" />
              </div>
              <h3 className="text-xl font-bold mb-[10px] capitalize text-center">
                {t("contact-c-1")}
              </h3>
              <p className="text-[15px] text-gren-blue">+998 99 299 99 96</p>
            </div>

            <div className="rounded-[23px] bg-white shadow-card p-[30px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-custom-white-100 flex items-center justify-center mb-5">
                <img src={mail} alt="icon" />
              </div>
              <h3 className="text-xl font-bold mb-[10px] capitalize text-center">
                {t("contact-c-2")}
              </h3>
              <p className="text-[15px] text-gren-blue">
                zamonbiznestour@mail.ru
              </p>
            </div>

            <div className="rounded-[23px] bg-white shadow-card p-[30px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-custom-white-100 flex items-center justify-center mb-5">
                <img src={location} alt="icon" />
              </div>
              <h3 className="text-xl font-bold mb-[10px] text-center">
                {t("contact-c-3")}
              </h3>
              <p className="text-[15px] text-gren-blue">{t("contact-c-3-1")}</p>
            </div>
          </div>

          <div className="my-[70px] rounded-[25px] overflow-hidden bg-custom-white-10">
            <div className="w-full mb-[70px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5691.6382354085235!2d69.31055549482159!3d41.37500488520548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3143f4d9051%3A0xc321f45e05bb8a49!2z0K7QvdGD0YHQsNCx0LDQtC0xOSwgMTAwMTE0LCDQotCw0YjQutC10L3Rgiwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1720931400413!5m2!1sru!2s"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className="mb-[50px] text-[30px] text-center text-[#2a2a2a] font-bold px-[30px]">
              <h2>
                <span className="text-gren-blue">{t("contact-t-1")}</span>{" "}
                {t("contact-t-2")}{" "}
                <span className="text-gren-blue">{t("contact-t-3")}</span>{" "}
                {t("contact-t-4")}{" "}
                <span className="text-gren-blue">{t("contact-t-5")}</span>
              </h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
