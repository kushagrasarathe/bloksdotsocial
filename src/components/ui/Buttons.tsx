const PrimaryBtn = ({ title }: { title: string }) => {
  return (
    <button className=" active:scale-95 transition-all ease-in-out rounded-full  border shadow-[0px_2px_2px_0px_rgba(255,255,255,0.48)_inset,0px_-2px_2px_0px_rgba(0,0,0,0.48)_inset] border-solid border-[rgba(255,255,255,0.24)] bg-[#64ae9d] text-black font-[500] px-4 py-2">
      {title}
    </button>
  );
};

const SecondaryBtn = ({ title }: { title: string }) => {
  return (
    <button className="  active:scale-95 transition-all ease-in-out  rounded-full  border shadow-[0px_2px_2px_0px_rgba(255,255,255,0.48)_inset,0px_-2px_2px_0px_rgba(0,0,0,0.48)_inset] border-solid border-[rgba(255,255,255,0.24)] text-white font-[500] px-4 py-2">
      {title}
    </button>
  );
};

export { PrimaryBtn, SecondaryBtn };
