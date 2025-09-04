export const ImageField = ({ label, preview, error, onChange, value }) => {
  return (
    <div>
      <p className="font-semibold text-[14px] text-[#334155] mb-2">
        {label} <span className="text-[#E14942]">*</span>
      </p>

      <div className="w-[416px] p-3  rounded-md  mt-[12px] bg-[rgba(127, 127, 128, 0.05)] h-[180px] bg-[#7F7F800D] mb-[12px] flex flex-col gap-2 items-center justify-center relative">
        <img src="./addImage.svg" />
        Add image
        {preview && (
          <img
            src={preview}
            className="absolute inset-0 h-full w-full object-cover rounded-md"
          />
        )}
        <input
          type="file"
          className=" absolute opacity-0 inset-0"
          onChange={onChange}
        />
      </div>

      {error && <div className="text-[#E14942] text-[14px] mb-3">{error}</div>}
    </div>
  );
};
