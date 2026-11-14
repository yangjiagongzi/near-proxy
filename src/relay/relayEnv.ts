import { Environment, RecordSource, Store } from "relay-runtime";
import { tauriNetwork } from "./relayTauriNetwork";

export const relayEnv = new Environment({
  network: tauriNetwork,
  store: new Store(new RecordSource()),
});
