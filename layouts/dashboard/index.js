import React, { useState, useEffect } from "react";
import { AppShell, Navbar, Header, Title, Burger, MediaQuery, Button } from "@mantine/core";
import { DashboardSidebar } from "./components/DashboardSidebar";
import useAuth from "../../hooks/useAuth";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardLayout({ children }) {
  const [opened, setOpened] = useState(false);
  const { logout } = useAuth();

  const toggleOpened = () => setOpened(!opened);

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<DashboardSidebar opened={opened} />}
      header={<DashboardHeader opened={opened} toggleOpened={toggleOpened} />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          minHeight: "calc(100vh)",
        },
      })}
    >
      {children}
    </AppShell>
  );
}
