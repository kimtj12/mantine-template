import React, { useState, useEffect } from "react";
import { AppShell, Navbar, Header, Title, Burger, MediaQuery } from "@mantine/core";
import { DashboardSidebar } from "./DashboardSidebar";

export default function DashboardLayout({ children }) {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(!opened);

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<DashboardSidebar opened={opened} />}
      header={
        <Header height={60} p="sm" sx={{ display: "flex", alignItems: "center" }}>
          {/* Header content */}
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
          </MediaQuery>
          <Title order={3}>Hello</Title>
        </Header>
      }
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
