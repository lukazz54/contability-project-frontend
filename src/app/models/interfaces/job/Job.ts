import { JobStatus } from "../../enums/JobStatus.enum";
import { Client } from "../client/Client";

export interface Job {
  job_id: number;
  delivery: Date;
  client_infos: Client
  status: JobStatus
}
