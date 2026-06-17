export default function Divider() {
  return (
    <div className="flex items-center my-6">
      <div className="flex-1 h-[1px] bg-gray-600"></div>
      <span className="px-4 text-gray-400 text-xs">OR</span>
      <div className="flex-1 h-[1px] bg-gray-600"></div>
    </div>
  );
}
