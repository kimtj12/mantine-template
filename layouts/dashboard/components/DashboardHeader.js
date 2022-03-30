import { ActionIcon, Box, Burger, Button, Header, MediaQuery, Title } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { User } from "tabler-icons-react";
import useAuth from "../../../hooks/useAuth";
import UserMenu from "./UserMenu";

export default function DashboardHeader({ opened, toggleOpened }) {
  const { logout } = useAuth();

  return (
    <Header height={60} p="md" sx={{ display: "flex", alignItems: "center" }}>
      {/* Header content */}
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
      </MediaQuery>
      <Title order={3}>Hello</Title>

      <Box sx={{ marginLeft: "auto" }}>
        <UserMenu
          control={
            <ActionIcon size="lg" variant="light">
              <User size={16} />
            </ActionIcon>
          }
        />
      </Box>
    </Header>
  );
}
