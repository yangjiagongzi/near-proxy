import { graphql } from "react-relay";

export const SettingsPageQuery = graphql`
  query SettingsPageQuery {
    appConfig {
      ...AppConfig_appConfig
    }
  }
`;
