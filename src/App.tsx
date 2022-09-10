import "./styles/pamodals.styles.vite.css";
import ViteModal from "./components/ViteModal";
import { useEffect, useState } from "react";
import { Modal } from "./types/Modal";
function getDataParam() {
  var vals = new Array();
  if (location.search != "") {
    vals = location.search.substr(1).split("&");
    for (var i in vals) {
      vals[i] = vals[i].replace(/\+/g, " ").split("=");
    }
    for (var i in vals) {
      if (vals[i][0].toLowerCase() == "data") {
        return JSON.parse(decodeURIComponent(vals[i][1]));
      }
    }
  }
}

function App() {
  const [modal, setModal] = useState<Modal>({
    icon: "",
    labels: [],
    inputs: [],
    buttons: [],
  });
  useEffect(() => {
    setModal(getDataParam());
  }, []);
  return (
    <div className="App">
      <ViteModal modal={modal} />
    </div>
  );
}

export default App;
