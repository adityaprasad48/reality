import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import React from "react";

interface Prop {
  children: React.ReactNode;
}

const layout = ({ children }: Prop) => {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
