import { Dispatch, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import clsx from "clsx";
import { contactUs } from "@/api";

type ContactUsModalProps = {
  openContactUsModal: boolean;
  setOpenContactUsModal: Dispatch<boolean>;
};

const ContactUsModal: React.FC<ContactUsModalProps> = ({
  openContactUsModal,
  setOpenContactUsModal,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const notify = (
    text: string,
    type: "warn" | "success" | "error" | "info",
  ) => {
    let toastType = toast.warn;
    if (type === "success") {
      toastType = toast.success;
    } else if (type === "error") {
      toastType = toast.error;
    } else if (type === "info") {
      toastType = toast.info;
    }

    toastType(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const submitHandler = async () => {
    setIsLoading(true);
    const refs = [nameRef, emailRef, mobileRef, messageRef];
    const allFieldsFilled = refs.every(
      (ref) => ref.current && ref.current.value !== "",
    );

    if (allFieldsFilled) {
      const data = await contactUs({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        phone_number: mobileRef.current?.value,
        message: messageRef.current?.value,
      });

      if (data) {
        setOpenContactUsModal(false);
      }

      const message = data
        ? "پیام شما دریافت شد. منتظر تماس ما باشید"
        : "خطایی در سرور رخ داده است. لطفا مجددا امتحان کنید";

      const type = data ? "success" : "error";
      notify(message, type);
    } else {
      notify("لطفا همه فیلد ها را پر کنید", "info");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const clickhandler = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenContactUsModal(false);
      }
    };

    window.addEventListener("mousedown", clickhandler);
    return () => {
      window.removeEventListener("mousedown", clickhandler);
    };
  }, []);

  return (
    <div
      className={clsx(
        "backdrop-blur-custom bp768:px-[30px] fixed left-0 top-0 z-10 flex h-screen w-screen cursor-auto items-center justify-center bg-[#00000003] transition-opacity duration-300",
        openContactUsModal ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div
        className={clsx(
          "flex h-fit w-[600px] flex-col items-center gap-5 rounded-[20px] bg-gradient-to-r from-[#2E2E38] to-[#2E2E38] p-[30px] shadow-md transition-all",
          openContactUsModal
            ? "scale-100 opacity-100 duration-200 "
            : "scale-95 opacity-0 duration-300",
        )}
        ref={modalRef}
      >
        <span className="text-[20px] font-[700] text-[#fff] opacity-75">
          با ما در تماس باشید
        </span>
        <input
          ref={nameRef}
          type="text"
          placeholder="نام و نام خانوادگی"
          className="bp480:px-2 w-full rounded-[10px] bg-[#3B3B48] px-[45px] py-[18px] text-base text-white outline-none placeholder:text-[#A0A0A0] placeholder:opacity-50"
        />
        <input
          ref={emailRef}
          type="text"
          placeholder="ایمیل"
          className="bp480:px-2 w-full rounded-[10px] bg-[#3B3B48] px-[45px] py-[18px] text-base text-white outline-none placeholder:text-[#A0A0A0] placeholder:opacity-50"
        />
        <input
          ref={mobileRef}
          type="text"
          placeholder="شماره تماس"
          className="bp480:px-2 w-full rounded-[10px] bg-[#3B3B48] px-[45px] py-[18px] text-base text-white outline-none placeholder:text-[#A0A0A0] placeholder:opacity-50"
        />
        <textarea
          ref={messageRef}
          placeholder="متن پیام شما"
          className="bp480:px-2 h-[150px] w-full resize-none rounded-[10px] bg-[#3B3B48] px-[45px] py-[18px] text-base text-white outline-none placeholder:text-[#A0A0A0] placeholder:opacity-50"
        ></textarea>
        <div className="flex w-full justify-end">
          <button
            className="h-[48px] w-[148px] cursor-pointer rounded-[5px] bg-[#4E69FE] shadow-sm"
            onClick={submitHandler}
          >
            {" "}
            {isLoading ? (
              <BeatLoader className="mt-2" color="white" />
            ) : (
              "ارسال پیام"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
