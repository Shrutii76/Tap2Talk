import { useState } from "react";

export default function PasswordField({ name, value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-[#333539] p-3 rounded-lg"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-3 text-gray-400"
      >
   
      </button>
    </div>
  );
}
