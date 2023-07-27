export default function HeroCustomer() {
  return (
    <div className="border-2  rounded-lg p-4 bg-white shadow-xl hover:bg-slate-100 w-96 text-sm">
      <div className="flex items-center justify-between mb-1">
        Existing customers
      </div>
      <div className="text-gray-600 mb-5">Last message sent an hour ago</div>
      <div>1200 users</div>
    </div>
  );
}
