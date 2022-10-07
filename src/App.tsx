import "./styles/pamodals.styles.vite.css";
import ViteModal from "./components/ViteModal";
import { useEffect } from "react";
import useModalStore from "./store/modal";
import { Modal } from "./types/Modal";
function sample() {
  return {
    icon: "success",
    labels: [
      { text: "Published!", type: "h1" },
      {
        text: "Your record is published, please identify the category",
        type: "h2",
      },
    ],
    inputs: [
      {
        id: "choiceexample",
        label: "Category",
        type: "choice",
        multi: true,
        required: true,
        options: [
          { id: "opt1", label: "Customer" },
          { id: "opt2", label: "Prospect" },
          { id: "opt3", label: "Partner" },
        ],
      },
    ],
    buttons: [
      {
        id: "button-cancel", //used to know what button was clicked, retunred with modal return object
        label: "Cancel",
        type: "white", //blue //red
        cancel: true,
      },
      {
        id: "button-submit",
        label: "Submit",
        type: "blue",
      },
    ],
  };
}
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
  const { modal, setModal } = useModalStore();
  useEffect(() => {
    //setModal(getDataParam());
    setModal(sample() as Modal);
  }, []);
  return (
    <div className="App">
      <ViteModal modal={modal} />
    </div>
  );
}

export default App;
