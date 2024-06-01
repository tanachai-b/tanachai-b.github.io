import { Card, CardHeader, Container, DataHeader, DataRow } from "./components";

export default function App() {
  return (
    <Container>
      <Card>
        <CardHeader label="tanachai-b" />

        <DataHeader label="Vite.js - React - Typescript" />

        <DataRow
          label="Sticky Notes"
          website="https://tanachai-b.github.io/sticky-notes"
          gitHub="https://github.com/tanachai-b/sticky-notes"
        />

        <DataHeader label="Next.js - React - Typescript" />

        <DataRow
          label="Personal Finance"
          website="https://tanachai-b.github.io/personal-finance"
          gitHub="https://github.com/tanachai-b/personal-finance"
        />
        <DataRow
          label="Watch Face"
          website="https://tanachai-b.github.io/watch-face"
          gitHub="https://github.com/tanachai-b/watch-face"
        />
        <DataRow
          label="Color Palette"
          website="https://tanachai-b.github.io/color-palette"
          gitHub="https://github.com/tanachai-b/color-palette"
        />
        <DataRow
          label="Thai Keyboard"
          website="https://tanachai-b.github.io/thai-keyboard"
          gitHub="https://github.com/tanachai-b/thai-keyboard"
        />
        <DataRow
          label="Next.js"
          website="https://tanachai-b.github.io/calendar"
          gitHub="https://github.com/tanachai-b/calendar"
        />

        <DataHeader label="Plain Javscript" />

        <DataRow
          label="Equations 3D"
          website="https://tanachai-b.github.io/equations-3d"
          gitHub="https://github.com/tanachai-b/equations-3d"
        />
        <DataRow
          label="Starship Command"
          website="https://tanachai-b.github.io/starship-command"
          gitHub="https://github.com/tanachai-b/starship-command"
        />
        <DataRow
          label="Orbit Lines"
          website="https://tanachai-b.github.io/orbit-lines"
          gitHub="https://github.com/tanachai-b/orbit-lines"
        />
        <DataRow
          label="Car Simulator"
          website="https://tanachai-b.github.io/car-simulator"
          gitHub="https://github.com/tanachai-b/car-simulator"
        />
      </Card>
    </Container>
  );
}
