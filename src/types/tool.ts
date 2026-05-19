export type ToolStatus = 'stable' | 'beta' | 'archived';

export type ToolCategory = 'productivity' | 'developer' | 'design' | 'data' | 'media' | 'other';

export interface Tool {
  /** URL-friendly unique identifier, e.g. "json-formatter" */
  slug: string;
  /** Display name */
  name: string;
  /** Short tagline — max 80 characters */
  description: string;
  /** Full Markdown body shown on the detail page */
  longDescription?: string;
  category: ToolCategory;
  /** Searchable keywords */
  tags: string[];
  /** Absolute path under /public/icons/ or a single emoji character */
  icon: string;
  /** Live demo / deployment URL */
  url?: string;
  /** GitHub repository URL */
  githubUrl?: string;
  status: ToolStatus;
  /** Appears in the Hero "Featured" section (max 6) */
  featured?: boolean;
  /** Paths under /public/screenshots/ */
  screenshots?: string[];
}
