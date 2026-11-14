import { graphql } from "react-relay";

export const AppConfigFragment = graphql`
  fragment AppConfig_appConfig on AppConfig {
    id
    themeMode
    notification
  }
`;
