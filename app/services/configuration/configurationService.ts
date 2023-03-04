import RestAPIClient from "../RestAPIClient";
import type { IConfiguration } from "./typings";

class ConfigurationService extends RestAPIClient {
  constructor() {
    super("configuration");
  }

  getConfiguration = (): Promise<IConfiguration> => {
    return this.get();
  };
}

export default new ConfigurationService();
