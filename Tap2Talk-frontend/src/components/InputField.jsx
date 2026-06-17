export default function InputField({ name, value, onChange, placeholder }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-[#333539] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
}
