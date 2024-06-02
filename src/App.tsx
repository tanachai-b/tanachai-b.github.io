import { Card, CardHeader, Container, DataHeader, DataRow } from "./components";

export default function App() {
  return (
    <Container>
      <Card>
        <CardHeader title="tanachai-b" />

        <DataHeader title="Vite.js - React - Typescript" />

        <GitRow
          icon="sticky_note_2"
          color="#ffd000"
          label="Sticky Notes"
          gitPath="sticky-notes"
        />

        <DataHeader title="Next.js - React - Typescript" />

        <GitRow
          icon="account_balance"
          color="#00c080"
          label="Personal Finance"
          gitPath="personal-finance"
        />
        <GitRow
          icon="watch"
          color="#80ff00"
          label="Watch Face"
          gitPath="watch-face"
        />
        <GitRow
          icon="palette"
          color="#ff6000"
          label="Color Palette"
          gitPath="color-palette"
        />
        <GitRow
          icon="keyboard"
          color="#6000ff"
          label="Thai Keyboard"
          gitPath="thai-keyboard"
        />
        <GitRow
          icon="calendar_month"
          color="#ff40e0"
          label="Next.js"
          gitPath="calendar"
        />

        <DataHeader title="Plain Javscript" />

        <GitRow
          icon="deployed_code"
          color="#00c0ff"
          label="Equations 3D"
          gitPath="equations-3d"
        />
        <GitRow
          icon="rocket_launch"
          color="#0000ff"
          label="Starship Command"
          gitPath="starship-command"
        />
        <GitRow
          icon="public"
          color="#6000ff"
          label="Orbit Lines"
          gitPath="orbit-lines"
        />
        <GitRow
          icon="directions_car"
          color="#ff0000"
          label="Car Simulator"
          gitPath="car-simulator"
        />
      </Card>
    </Container>
  );
}

function GitRow({
  icon,
  color,
  label,
  gitPath,
}: {
  icon: string;
  color: string;
  label: string;
  gitPath: string;
}) {
  return (
    <DataRow
      icon={icon}
      color={color}
      title={label}
      subtitle={gitPath}
      gitHub={`https://github.com/tanachai-b/${gitPath}`}
      website={`https://tanachai-b.github.io/${gitPath}`}
    />
  );
}
