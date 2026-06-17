export default function SocialButton({ text }) {
  return (
    <button className="w-full bg-[#1e2024] hover:bg-[#2a2d33] py-3 rounded-lg mt-3 transition">
      {text}
    </button>
  );
}
