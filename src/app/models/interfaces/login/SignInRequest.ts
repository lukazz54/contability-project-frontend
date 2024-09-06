import { MethodLoginEnum } from "../../enums/MethodLogin.enum";

export interface SignInRequest {
  username?: string;
  password?: string;
  methodLogin?: MethodLoginEnum;
}
