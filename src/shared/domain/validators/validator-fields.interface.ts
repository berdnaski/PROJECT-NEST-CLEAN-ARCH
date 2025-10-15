export type FieldsError = {
  [field: string]: string[];
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsError | null
  validatedData: PropsValidated | null
  validate(data: any): boolean
}
