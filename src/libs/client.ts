import { createClient } from "microcms-js-sdk"
import { microCMSAPIKEY, microCMSDomain } from "../types/url"
//モジュール化されたロジックを配置する。
export const client = createClient({
  serviceDomain: microCMSDomain!,
  apiKey: microCMSAPIKEY!
})