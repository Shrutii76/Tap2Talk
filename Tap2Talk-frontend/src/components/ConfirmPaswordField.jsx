import { useState } from "react";

export default function  ConfirmPasswordField() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder="Confirm Password"
        className="w-full bg-[#333539] p-3 rounded-lg outline-none"
      />

      <button
        onClick={() => setShow(!show)}
        type="button"
        className="absolute right-3 top-3 text-gray-400"
      >
      
      </button>
    </div>
  );
}
