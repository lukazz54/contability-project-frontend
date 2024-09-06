import { MethodLoginEnum } from "../../enums/MethodLogin.enum";

export interface RegisterRequest {
  methodLogin?: MethodLoginEnum,
  username: string,
  email: string,
  password: string
}
