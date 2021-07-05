export class UpperCaseValueConverter {

  public toView(value: string): string {
    return value?.toUpperCase();
  }
}
