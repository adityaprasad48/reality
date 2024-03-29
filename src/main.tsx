import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./creative.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Swipe from "./routes/Swipe.tsx";
import Touch from "./routes/Touch.tsx";
import ThrowBall from "./routes/BaloonBurst.tsx";
import Apps from "./routes/Apps.tsx";
import CanvasPanel from "./routes/CanvasPanel.tsx";
import { CursorInBox } from "./routes/CursorInBox.tsx";
import FocusElement from "./routes/FocusElement.tsx";
import JustTransform from "./routes/JustTransform.tsx";
import BaloonBurst from "./routes/BaloonBurst.tsx";
import NameSearch from "./routes/NameSearch.tsx";
import App from "./App.tsx";
import Playground from "./routes/Playground.tsx";
import { Tooltip } from "react-tooltip";
import ImageEffects from "./routes/ImageEffects.tsx";
import SlideShow from "./routes/SlideShow.tsx";
import AquaNote from "./routes/AquaNote.tsx";
import Navbar from "./components/Navbar.tsx";
import Timer from "./components/Timer.tsx";
import { ScreenPopProvider } from "./ctx/ScreenPopProvider.tsx";
import MusicPlay from "./components/MusicPlay.tsx";

export const appsChild = [
  {
    name: "Swipe",
    date: "14 Mar",
    path: "apps/swipe",
    element: <Swipe />,
  },
  {
    name: "Transform It",
    date: "15 Mar",
    path: "apps/just",
    element: <JustTransform />,
  },
  {
    name: "Alphabet Hover Search",
    path: "apps/hover-search",
    date: "16 Mar",
    element: <NameSearch />,
  },
  {
    name: "Touch Enable",
    path: "apps/touch",
    date: "17 Mar",
    element: <Touch />,
  },
  {
    name: "Throw Ball",
    date: "18 Mar",
    path: "apps/throw",
    element: <ThrowBall />,
  },
  {
    name: "Canvas Panel",
    date: "19 Mar",
    path: "apps/canvas",
    element: <CanvasPanel />,
  },
  {
    name: "Cursor In Box",
    date: "20 Mar",
    path: "apps/cursor-in-box",
    element: <CursorInBox />,
  },
  {
    name: "Focus Element",
    date: "21 Mar",
    path: "apps/select-resize",
    element: <FocusElement />,
  },
  {
    name: "Baloon Burst",
    date: "22 Mar",
    path: "apps/baloon",
    element: <BaloonBurst />,
  },

  {
    name: "SlideShow",
    path: "apps/slide-show",
    element: <SlideShow />,
    date: "25 Mar",
  },
  {
    name: "ImageEffects",
    path: "apps/image-effects",
    element: <ImageEffects />,
    date: "26 Mar",
  },
  {
    name: "Aqua Notes",
    path: "apps/notes",
    element: <AquaNote />,
    date: "27 Mar",
  },
  {
    name: "PlayGround",
    path: "apps/play",
    element: <Playground />,
    date: "anydate",
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
    <ScreenPopProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Timer />
      <MusicPlay/>
      <Tooltip id="my-tooltip" />
    </ScreenPopProvider>
  </React.StrictMode>
);
