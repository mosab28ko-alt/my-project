import * as Beginning from "./beginning";
import Conc from "./conc";

const End = () => {
  return (
    <div className="flex gap-4">
      <Beginning.Layout data={Beginning.data} />
      <Conc />
    </div>
  );
};

export default End;
