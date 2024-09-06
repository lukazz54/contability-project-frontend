import { UserRole } from "../../enums/UserRole.enum";
import { Job } from "../job/Job";

export interface SignInResponse {
  username: string;
  name: string;
  role: UserRole;
  token: string;
  current_jobs: Array<Job>;
}
