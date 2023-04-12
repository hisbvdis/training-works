import { useId } from "react";

const App = () => {
  const random = useId();
  return (<>
    {random}
  </>);
}

export default App;