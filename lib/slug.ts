// lib/slug.ts
/** Turn "Banking & Finance", "banking_and_finance", "Banking  Finance"
 *  into "banking-and-finance" so comparisons are robust. */
export function toSlug(input: string): string {
    return input
      .toLowerCase()
      .trim()
      .normalize("NFKD")            // handle accents safely
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")  // any run of non-alnum -> hyphen
      .replace(/^-+|-+$/g, "");     // trim leading/trailing hyphens
  }
  
  export function equalSlugish(a: string, b: string): boolean {
    return toSlug(a) === toSlug(b);
  }
  