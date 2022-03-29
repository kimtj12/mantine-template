import React, { useState, useEffect } from "react";
import { MainHeader } from "./MainHeader";

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
