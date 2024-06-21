import { Card, Container, DataHeader, DataRow, Link } from "./components";

export default function App() {
  return (
    <Container>
      <Card
        title="tanachai-b"
        subtitle={
          <Link
            label="github.com/tanachai-b"
            href="https://github.com/tanachai-b"
          />
        }
      >
        <DataHeader title="Vite.js - React - Typescript" />

        <DataRow
          icon="home"
          color="#c0c0c0"
          title="GitHub Page"
          path="tanachai-b.github.io"
        />
        <DataRow
          icon="sticky_note_2"
          color="#ffd000"
          title="Sticky Notes"
          path="sticky-notes"
        />
        <DataRow
          icon="palette"
          color="#00c0ff"
          title="Color Swatches"
          path="color-swatches"
        />

        <DataHeader title="Next.js - React - Typescript" />

        <DataRow
          icon="account_balance"
          color="#00c080"
          title="Personal Finance"
          path="personal-finance"
        />
        <DataRow
          icon="watch"
          color="#80ff00"
          title="Watch Face"
          path="watch-face"
        />
        <DataRow
          icon="palette"
          color="#ff6000"
          title="Color Palette"
          path="color-palette"
        />
        <DataRow
          icon="keyboard"
          color="#6000ff"
          title="Thai Keyboard"
          path="thai-keyboard"
        />
        <DataRow
          icon="calendar_month"
          color="#ff40e0"
          title="Next.js"
          path="calendar"
        />

        <DataHeader title="Plain Javscript" />

        <DataRow
          icon="deployed_code"
          color="#00c0ff"
          title="Equations 3D"
          path="equations-3d"
        />
        <DataRow
          icon="rocket_launch"
          color="#0000ff"
          title="Starship Command"
          path="starship-command"
        />
        <DataRow
          icon="public"
          color="#6000ff"
          title="Orbit Lines"
          path="orbit-lines"
        />
        <DataRow
          icon="directions_car"
          color="#ff0000"
          title="Car Simulator"
          path="car-simulator"
        />
      </Card>
    </Container>
  );
}
