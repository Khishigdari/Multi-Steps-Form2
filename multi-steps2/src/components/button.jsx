export const Button = ({ children, variant, gotoNext }) => {
  let classes =
    "rounded-[6px] px-3 py-[10px] mt-[82px] flex justify-center gap-1 cursor-pointer";
  if (variant === "primary") {
    classes += " bg-[#121316] w-[416px] text-white";
  } else if (variant === "secondary") {
    classes += " w-[128px] border-[#CBD5E1] border-1";
  }
  return (
    <button onClick={gotoNext} className={classes}>
      {children}
      {/* <img className="w-6 h-6" src="chevron_right.svg" /> */}
    </button>
  );
};
