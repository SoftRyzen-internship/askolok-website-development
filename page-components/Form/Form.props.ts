export type FormInputsType = Record<string, object>;

export interface IFieldParams {
  required?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

export interface IFieldsParams {
  name: IFieldParams;
  phone: IFieldParams;
  email: IFieldParams;
}
