import cx from "classnames";
import { useState } from "react";
import { Link } from "./common-components";
import {
  Body,
  Card,
  CardBody,
  CardHeader,
  Container,
  Copyright,
  Repo,
  RepoGroupHeader,
} from "./components";
import { repoGroups } from "./data";

export default function App() {
  const [width, setWidth] = useState(0);

  const isLargeScreen = width >= 400;
  const columns = Math.min(Math.floor((width - (40 + 50) * 2) / 250), 3);

  return (
    <Container onResize={setWidth}>
      <Body isLargeScreen={isLargeScreen}>
        <Card isLargeScreen={isLargeScreen}>
          <CardHeader
            title={"tanachai-b"}
            subtitle={
              <>
                <Link label="github.com/tanachai-b" href="https://github.com/tanachai-b" />
                <Link label="tbun.dev" href="https://tbun.dev" />
              </>
            }
          />

          <CardBody columns={columns}>
            {repoGroups.map((repoGroup) => (
              <div className={cx("break-inside-avoid")}>
                <RepoGroupHeader>{repoGroup.name} </RepoGroupHeader>

                {repoGroup.repos.map((repo) => (
                  <Repo
                    icon={repo.icon}
                    name={repo.name}
                    repo={repo.repo}
                    page={repo.page}
                    external={repo.external}
                  />
                ))}
              </div>
            ))}
          </CardBody>
        </Card>
      </Body>

      <Copyright />
    </Container>
  );
}
