import { graphql } from "react-relay";

export const ThemeContextQuery = graphql`
  query ThemeContextQuery {
    appConfig {
      id
      themeMode
    }
  }
`;
