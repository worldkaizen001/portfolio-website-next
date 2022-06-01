import React from "react";
import NavBar from "../navigation/NavBar";

export default function Layout(props) {
  // const WaitingScreen = () => {
  //     if (props.isError) {
  //       return <ErrorPage />;
  //     }
  //     if (props.isLoading) {
  //       return <PageLoading />;
  //     }
  //     if (props.dataCondition) {
  //       return props.children;
  //     }
  //   };

  const { className } = props;

  return (
    <div className={`bg-screen min-h-screen pt-[8rem]`}>
      <NavBar />
      <div className={`mt-[3.3rem] mx-auto bg-white ${className}`}>
        {props.children}
      </div>
    </div>
  );
}
