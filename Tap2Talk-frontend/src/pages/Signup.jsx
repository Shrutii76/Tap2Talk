import React from 'react';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import ConfirmPasswordField from '../components/ConfirmPaswordField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import { useDispatch } from 'react-redux';

const Signup = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    terms: false,
  });
 const navigate = useNavigate();
  const handleChange =(e)=>{
    const {name,value,type,checked} = e.target;
    setForm({
        ...form,
        [name]:type==="checkbox"? checked:value ,
       })
  }
const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const data = await registerUser(form);

    dispatch(setUser(data));

    navigate("/chat");
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111317] text-white relative oerflow-hidden">
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-pink-500/20 rounded-full blur-[100px]" />

      <div className="w-full max-w-[470px] px-6 relative z-10">
        <div className="bg-[#1a1c20]/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
              Tap2Talk
            </h1>
            <h2 className="text-lg mt-2">Join the Network</h2>
            <p className="text-sm text-gray-400">
              Experience next-gen communication.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <InputField
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
            />
            <InputField
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
            />
            <PasswordField
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <ConfirmPasswordField
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />

            <label className="flex items-start gap-2 text-sm text-gray-400">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />{" "}
              I agree to Terms & Privacy Policy
            </label>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-orange-500 font-semibold"
            >
              Create Account →
            </button>
          </form>
          <p className="text-center text-sm mt-6 text-gray-400">
            Already have an account?{" "}
            <span
              className="text-purple-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
