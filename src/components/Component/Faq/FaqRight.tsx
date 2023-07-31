import FaqCom from "./FaqCom";
import FaqGen from "./FaqGen";
import FaqLic from "./FaqLic";
import FaqSupport from "./FaqSupport";

export default function FaqRight() {
  return (
    <div className="flex flex-col gap-12">
      <FaqGen />
      <FaqCom />
      <FaqLic />
      <FaqSupport />
    </div>
  );
}
