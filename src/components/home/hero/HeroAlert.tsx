import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FiTerminal } from "react-icons/fi";

export default function HeroAlert() {
  return (
    <Alert>
      <FiTerminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You have got a new notification</AlertDescription>
    </Alert>
  );
}
