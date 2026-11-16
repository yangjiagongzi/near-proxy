import { graphql } from "react-relay";

export const AppConfigFragment = graphql`
  fragment AppConfigFragment on AppConfig {
    id
    themeMode
    notification
  }
`;
