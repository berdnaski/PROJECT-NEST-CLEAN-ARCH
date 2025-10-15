export type FieldsError = {
  [field: string]: string[];
}

export interface ValidatorFieldsInterface<PropsValidated> {
  erros: FieldsError,
  validatedData: PropsValidated,
  validate(data: any): boolean
}
