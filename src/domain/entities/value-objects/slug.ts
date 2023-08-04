export class Slug {
  public value: string;
  constructor(value: string) {
    this.value = value;
  }

  /**
   * Receives a string and normalize it as a slug
   * 
   * Example: "An Example title" => "an-example-title"
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // getting out spaces
      .replace(/[^\w-]+/g, '') // getting out symbols
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText);
  }
}