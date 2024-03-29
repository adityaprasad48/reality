import { audioUrls, names } from "./data";

export const audioData = audioUrls.map((audio) => ({
  name: audio
    .replace("https://static.canva.com/preso/music/", "")
    .replace("%20", "")
    .replace(/_v0\d.mp3+/g, ""),
  url: audio,
}));


export function getBoundingRect(node: any) {
  const rect = node?.getBoundingClientRect();
  let top, left, bottom, right;
  if (rect) {
    top = rect?.top;
    left = rect?.left;
    bottom = rect?.bottom;
    right = rect?.right;
  }
  return {
    top,
    left,
    bottom,
    right,
  };
}


export const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

export const groupNames = () => {
  const gNames: Record<string, string[]> = {};
  names.sort().forEach((name) => {
    const firstLtr = name.charAt(0).toUpperCase();
    if (!gNames[firstLtr]) {
      gNames[firstLtr] = [];
    }
    gNames[firstLtr].push(name);
  });
  return gNames;
};
