import { graphql } from "relay-runtime";

export const RepeaterConfigFragment = graphql`
  fragment RepeaterConfigFragment on RepeaterConfig {
    method
    url
    headers {
      id
      key
      value
      enable
    }
    params {
      id
      key
      value
      enable
    }
    body
    response
  }
`;
