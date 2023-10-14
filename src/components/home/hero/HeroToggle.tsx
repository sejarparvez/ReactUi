"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function HeroToggle() {
  const [isChecked, setIsChecked] = useState(true);

  const handleSwitchToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Switch checked={isChecked} onClick={handleSwitchToggle} />
    </div>
  );
}
