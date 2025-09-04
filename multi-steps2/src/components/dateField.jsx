export const DateField = ({ label, error, onChange, placeholder, value }) => {
  return (
    <div>
      <p className="font-semibold text-[14px] text-[#334155] mb-2">
        {label} <span className="text-[#E14942]">*</span>
      </p>
      <input
        className={`w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px] ${
          error ? "border-[#E14942]" : ""
        }`}
        type="date"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        max="2012-12-31"
      />
      {error && <div className="text-[#E14942] text-[14px] mb-3">{error}</div>}
    </div>
  );
};
