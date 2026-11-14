import { invoke } from "@tauri-apps/api/core";
import type { FetchFunction, GraphQLResponse } from "relay-runtime";
import { Network } from "relay-runtime";

const tauriFetch: FetchFunction = async (operation, variables) => {
  const queryText = operation.text;
  if (!queryText) throw new Error("Missing graphql query text");

  const res = await invoke<{
    data?: Record<string, unknown>;
    errors?: Array<{
      message: string;
      locations?: unknown[];
      path?: unknown[];
    }>;
  }>("graphql_execute", {
    input: {
      query: queryText,
      variables,
    },
  });

  return {
    data: res.data ?? null,
    errors: res.errors,
  } as GraphQLResponse;
};

export const tauriNetwork = Network.create(tauriFetch);
