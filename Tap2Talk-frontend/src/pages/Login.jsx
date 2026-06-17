import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import SocialButton from "../components/SocialButton";
import Divider from "../components/Divider";
import LogoHeader from "../components/LogoHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginUser } from "../services/api";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      dispatch(setUser(data));

      navigate("/chat");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111317] text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-pink-500/20 rounded-full blur-[100px]" />

      <div className="w-full max-w-[470px] px-6 relative z-10">
        <div className="bg-[#1a1c20]/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl">
          <LogoHeader />

          <form onSubmit={handleLogin} className="space-y-4">
            <InputField
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordField
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Options */}
            <div className="flex justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-purple-400 cursor-pointer">Forgot?</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold shadow-lg hover:scale-[0.98] transition"
            >
              Sign In →
            </button>
          </form>

          <Divider />

          <SocialButton text="Continue with Google" />

          <p className="text-center text-sm mt-6 text-gray-400">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-400 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
