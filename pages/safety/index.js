import { Container, Title } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Layout from "../../layouts";

Safety.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Safety() {
  return (
    <>
      <Container size="xl">
        <Title>Hello</Title>
      </Container>
    </>
  );
}
