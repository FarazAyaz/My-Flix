import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Loading } from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading" || navigation.state === "submitting") {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
