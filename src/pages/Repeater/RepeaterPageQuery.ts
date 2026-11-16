import { graphql } from "react-relay";

export const RepeaterPageQuery = graphql`
  query RepeaterPageQuery {
    repeaterConfig {
      ...RepeaterConfigFragment
    }
  }
`;
