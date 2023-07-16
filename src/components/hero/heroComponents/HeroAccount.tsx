import HeroToggle from "./HeroToggle";
import HeroToggleTwo from "./HeroToggleTwo";

export default function HeroAccount() {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-xl text-sm w-[28rem]">
      <div>
        <div>Account</div>
        <div className="text-gray-600 mt-3">
          Manage how information is displayed in your account.
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 border-y py-4">
        <div>Language</div>
        <div>English</div>
      </div>
      <div className="flex items-center justify-between border-b py-4">
        <div>Automatic timezone</div>
        <div className=" scale-75">
          <HeroToggle />
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>Auto-update applicant data</div>
        <div className="scale-75">
          <HeroToggleTwo />
        </div>
      </div>
    </div>
  );
}
