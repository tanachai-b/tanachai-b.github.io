import cx from "classnames";
import { useState } from "react";
import { Link } from "./common-components";
import { Card, Container, Copyright, DataHeader, DataRow } from "./components";

export default function App() {
  const [scroll, setScroll] = useState<number>(0);

  return (
    <Container onScroll={setScroll}>
      <Card
        title="tanachai-b"
        subtitle={<Link label="github.com/tanachai-b" href="https://github.com/tanachai-b" />}
        scroll={scroll}
      >
        <div className={cx("break-inside-avoid")}>
          <DataHeader title="Vite.js - React - Typescript" />

          <DataRow icon="palette" color="#ff6000" title="Color Swatches" path="color-swatches" />

          <DataRow icon="sticky_note_2" color="#ffd000" title="Sticky Notes" path="sticky-notes" />

          <DataRow icon="home" color="#c0c0c0" title="GitHub Page" path="tanachai-b.github.io" />
        </div>

        <div className={cx("break-inside-avoid")}>
          <DataHeader title="Next.js - React - Typescript" />

          <DataRow
            icon="account_balance"
            color="#00c080"
            title="Personal Finance"
            path="personal-finance"
          />

          <DataRow icon="watch" color="#80ff00" title="Watch Face" path="watch-face" />

          <DataRow icon="keyboard" color="#6000ff" title="Thai Keyboard" path="thai-keyboard" />

          <DataRow icon="code" color="#ff40e0" title="Next.js" path="next-js-projects" />
        </div>

        <div className={cx("break-inside-avoid")}>
          <DataHeader title="Plain Javascript" />

          <DataRow icon="deployed_code" color="#00c0ff" title="Equations 3D" path="equations-3d" />

          <DataRow
            icon="rocket_launch"
            color="#0000ff"
            title="Starship Command"
            path="starship-command"
          />
        </div>

        <div className={cx("break-inside-avoid")}>
          <DataHeader title="Archived / Unfinished" />

          <DataRow
            icon="public"
            color="#404040"
            title="Orbit Lines (Unfinished)"
            path="orbit-lines"
          />

          <DataRow
            icon="directions_car"
            color="#404040"
            title="Car Simulator (Unfinished)"
            path="car-simulator"
          />

          <DataRow
            icon="calendar_month"
            color="#404040"
            title="Diary Reader (Empty)"
            path="diary-reader"
          />

          <DataRow
            icon="palette"
            color="#404040"
            title="Color Palette (Archived)"
            path="color-palette"
          />
        </div>
      </Card>

      <Copyright />
    </Container>
  );
}
