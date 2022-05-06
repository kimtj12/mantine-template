import { Container, Grid } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Layout from "../../layouts";
import GoogleMapReact from "google-map-react";
import { usePosition } from "use-position";

Reservation.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Reservation() {
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } = usePosition();

  if (error) {
    console.log("hi");
    alert(error);
  }

  return (
    <Container fluid pl={0} pr={0}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          center={{
            lat: latitude,
            lng: longitude,
          }}
          defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627,
          }}
          defaultZoom={11}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
      {/* <Grid>
        <Grid.Col span={4}>
          <h2>Hello</h2>
        </Grid.Col>

        <Grid.Col span={8}>
          <h2>Hello2</h2>
        </Grid.Col>
      </Grid> */}
    </Container>
  );
}
