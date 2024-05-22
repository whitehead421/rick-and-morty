import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const AppLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container flex flex-col  min-h-screen">
      <AppHeader />
      <main className="flex-grow">{children}</main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
