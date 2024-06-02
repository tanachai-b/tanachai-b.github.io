import { Card, CardHeader, Container, DataHeader, DataRow } from "./components";

export default function App() {
  return (
    <Container>
      <Card>
        <CardHeader label="tanachai-b" />

        <DataHeader label="Vite.js - React - Typescript" />

        <GitRow label="Sticky Notes" gitPath="sticky-notes" />

        <DataHeader label="Next.js - React - Typescript" />

        <GitRow label="Personal Finance" gitPath="personal-finance" />
        <GitRow label="Watch Face" gitPath="watch-face" />
        <GitRow label="Color Palette" gitPath="color-palette" />
        <GitRow label="Thai Keyboard" gitPath="thai-keyboard" />
        <GitRow label="Next.js" gitPath="calendar" />

        <DataHeader label="Plain Javscript" />

        <GitRow label="Equations 3D" gitPath="equations-3d" />
        <GitRow label="Starship Command" gitPath="starship-command" />
        <GitRow label="Orbit Lines" gitPath="orbit-lines" />
        <GitRow label="Car Simulator" gitPath="car-simulator" />
      </Card>
    </Container>
  );
}

function GitRow({ label, gitPath }: { label: string; gitPath: string }) {
  return (
    <DataRow
      label={label}
      subtitle={gitPath}
      website={`https://tanachai-b.github.io/${gitPath}`}
      gitHub={`https://github.com/tanachai-b/${gitPath}`}
    />
  );
}
