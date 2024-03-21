import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.tsx";
import Swipe from "./routes/Swipe.tsx";
import Touch from "./routes/Touch.tsx";
import ThrowBall from "./routes/BaloonBurst.tsx";
import Apps from "./routes/Apps.tsx";
import CanvasPanel from "./routes/CanvasPanel.tsx";
import { CursorInBox } from "./routes/CursorInBox.tsx";
import FocusElement from "./routes/FocusElement.tsx";
import JustTransform from "./routes/JustTransform.tsx";
import BaloonBurst from "./routes/BaloonBurst.tsx";
import App from "./App.tsx";
import NameSearch from "./routes/NameSearch.tsx";

export const appsChild = [
  {
    name: "Swipe",
    date: "14 March",
    path: "apps/swipe",
    element: <Swipe />,
  },
  {
    name: "Transform It",
    date: "20 March",
    path: "apps/just",
    element: <JustTransform />,
  },
  {
    name: "Alphabet Hover Search",
    path: "apps/hover-search",
    element: <NameSearch />,
  },
  {
    name: "Touch Enable",
    path: "apps/touch",
    element: <Touch />,
  },
  {
    name: "Throw Ball",
    path: "apps/throw",
    element: <ThrowBall />,
  },
  {
    name: "Canvas Panel",
    path: "apps/canvas",
    element: <CanvasPanel />,
  },
  {
    name: "Cursor In Box",
    path: "apps/cursor-in-box",
    element: <CursorInBox />,
  },
  {
    name: "Focus Element",
    path: "apps/select-resize",
    element: <FocusElement />,
  },
  {
    name: "Baloon Burst",
    path: "apps/baloon",
    element: <BaloonBurst />,
  },
];

export const includeFields = (fileds: any, arryOfObj: any) => {
  const apps = [];

  for (const obj of arryOfObj) {
    const newObj = {};
    for (const f of fileds) {
      newObj[f] = obj[f];
    }
    apps.push(newObj);
  }

  return apps;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "apps",
    element: <Apps />,
  },
  ...includeFields(["path", "element"], appsChild),
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
