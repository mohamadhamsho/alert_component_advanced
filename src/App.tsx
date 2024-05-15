import "./App.css";
import Alert from "./components/ui/Alert";
import {
  MessageSquare,
  Aperture,
  OctagonAlert,
  X,
  BellRing,
  CircleCheckBig,
} from "lucide-react";

const data = [
  {
    id: 1,
    type: "alert-default",
    title: "Default Alert",
    description: (
      <p>
        rem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptate
        cum estrem ipsum <a href="#">This is a link</a> dolor sit amet,
        consectetur adipisicing elit. Cumque voluptate cum est
      </p>
    ),
    icon: <MessageSquare />,
    iconClose: <X />,
  },
  {
    id: 2,
    type: "alert-danger",
    title: "Danger Alert",
    description: (
      <p>
        rem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptate
        cum estrem ipsum dolor sit<a href="#">This is a link</a>
        amet, consectetur adipisicing elit. Cumque voluptate cum est
      </p>
    ),
    icon: <BellRing />,
    iconClose: <X />,
  },
  {
    id: 3,
    type: "alert-warn",
    title: "Warning Alert",
    description: (
      <p>
        rem ipsum dolor sit <a href="#">This is a link</a> amet, consectetur
        adipisicing elit. Cumque voluptate cum estrem ipsum dolor sit amet,
        consectetur adipisicing elit. Cumque voluptate cum est
      </p>
    ),
    icon: <OctagonAlert />,
    iconClose: <X />,
  },
  {
    id: 4,
    type: "alert-info",
    title: "Info Alert",
    description: (
      <p>
        rem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptate
        cum estrem ipsum dolor sit amet,
        <a href="#">This is a link</a> consectetur adipisicing elit. Cumque
        voluptate cum est
      </p>
    ),
    icon: <Aperture />,
    iconClose: <X />,
  },
  {
    id: 5,
    type: "alert-success",
    title: "Success Alert",
    description: (
      <p>
        rem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptate
        cum estrem ipsum dolor sit amet, consectetur adipisicing{" "}
        <a href="#">This is a link</a> elit. Cumque voluptate cum est
      </p>
    ),
    icon: <CircleCheckBig />,
    iconClose: <X />,
  },
];
function App() {
  return (
    <>
      {data.map((item, index) => (
        <Alert
          key={index}
          type={`${item.type}`}
          title={item.title}
          icon={item.icon}
          iconClose={item.iconClose}
        >
          {item.description}
        </Alert>
      ))}
    </>
  );
}

export default App;
