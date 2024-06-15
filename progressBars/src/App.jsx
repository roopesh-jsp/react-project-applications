import Progress1 from "./components/Progress1";
import Stepper from "./components/stepper/Stepper";
import { stepperData } from "../data";
export default function App() {
  //   return <Progress1 />;
  return <Stepper data={stepperData} />;
}
