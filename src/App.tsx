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
  RepoGroup,
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
            title="tanachai-b"
            subtitle="GitHub Directories"
            links={
              <>
                <Link href="https://github.com/tanachai-b">GitHub</Link>
                <Link href="https://www.tbun.dev">TBUN.dev</Link>
              </>
            }
          />

          <CardBody isLargeScreen={isLargeScreen}>
            {repoGroups.map((repoGroup, index) => (
              <RepoGroup key={index}>
                <RepoGroupHeader>{repoGroup.name} </RepoGroupHeader>

                {repoGroup.repos.map((repo, index) => (
                  <Repo
                    key={index}
                    icon={repo.icon}
                    name={repo.name}
                    repo={repo.repo}
                    page={repo.page}
                    external={repo.external}
                  />
                ))}
              </RepoGroup>
            ))}
          </CardBody>
        </Card>
      </Body>

      <Copyright />
    </Container>
  );
}
