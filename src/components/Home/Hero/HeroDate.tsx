export default function HeroDate() {
  return (
    <div className="flex items-center justify-between px-4 h-10 border bg-white text-slate-500 shadow-xl rounded-md w-60 ">
      <div>Years</div>
      <div className="border-x h-full px-5 flex items-center justify-center">
        Months
      </div>
      <div>Days</div>
    </div>
  );
}
