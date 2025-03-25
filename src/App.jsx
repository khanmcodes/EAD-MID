import CountdownLightSwitch from "./components/CountdownLightSwitch";
import "./index.css";

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  return (
    <CountdownLightSwitch />
  );
}

export default App;