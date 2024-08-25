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

  const isLargeScreen = width >= 500;

  return (
    <Container onResize={setWidth}>
      <Body isLargeScreen={isLargeScreen}>
        <Card isLargeScreen={isLargeScreen}>
          <CardHeader
            title={
              <>
                <div>tanachai-b</div>
                <div className={cx("text-[12px]")}>GitHub Directories</div>
              </>
            }
            subtitle={
              <>
                <Link label="GitHub" href="https://github.com/tanachai-b" />
                <Link label="TBUN.dev" href="https://tbun.dev" />
              </>
            }
          />

          <CardBody isLargeScreen={isLargeScreen}>
            {repoGroups.map((repoGroup) => (
              <>
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
              </>
            ))}
          </CardBody>
        </Card>
      </Body>

      <Copyright />
    </Container>
  );
}
