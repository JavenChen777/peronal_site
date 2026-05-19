import type { Tool } from '@/types/tool';

export const tools: Tool[] = [
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate and minify JSON with syntax highlighting.',
    longDescription: `## JSON Formatter

A clean, fast JSON formatter and validator built for developers.

## Features

- **Format & Prettify** — Instantly beautify minified JSON with configurable indent size
- **Validate** — Real-time error detection with line/column indicators
- **Minify** — Strip whitespace for production use
- **Syntax Highlighting** — Color-coded keys, strings, numbers, and booleans
- **Copy to Clipboard** — One-click copy of formatted output
- **Dark Mode** — Easy on the eyes during late-night debugging

## Use Cases

- Debugging API responses
- Formatting config files
- Sharing readable JSON snippets with teammates

## Tech Used

React · TypeScript · CodeMirror`,
    category: 'developer',
    tags: ['json', 'formatter', 'validator', 'cli'],
    icon: '🧩',
    url: 'https://github.com',
    githubUrl: 'https://github.com',
    status: 'stable',
    featured: true,
  },
  {
    slug: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test regular expressions with live match highlighting.',
    longDescription: `## Regex Tester

An interactive regular expression playground with real-time feedback.

## Features

- **Live Matching** — See matches highlighted as you type
- **Flag Controls** — Toggle global, case-insensitive, multiline flags
- **Match Details** — View capture groups and match indices
- **Common Patterns** — Prebuilt patterns for email, URL, phone, etc.
- **Export** — Copy the final regex pattern for use in code

## Tech Used

React · TypeScript · Vite`,
    category: 'developer',
    tags: ['regex', 'testing', 'pattern', 'string'],
    icon: '🔍',
    githubUrl: 'https://github.com',
    status: 'stable',
    featured: true,
  },
  {
    slug: 'color-palette',
    name: 'Color Palette Generator',
    description: 'Generate beautiful accessible color palettes from a base color.',
    longDescription: `## Color Palette Generator

Create harmonious color systems for your next project.

## Features

- **Palette Generation** — Analogous, complementary, triadic, and monochromatic schemes
- **Accessibility Check** — WCAG contrast ratio for every color pair
- **CSS Export** — Export as CSS custom properties, Tailwind config, or SCSS variables
- **HEX / RGB / HSL** — Toggle between color formats
- **Dark Mode Preview** — See how your palette looks on dark backgrounds

## Tech Used

React · TypeScript · Chroma.js`,
    category: 'design',
    tags: ['color', 'palette', 'design', 'accessibility', 'css'],
    icon: '🎨',
    url: 'https://github.com',
    githubUrl: 'https://github.com',
    status: 'stable',
    featured: true,
  },
  {
    slug: 'markdown-preview',
    name: 'Markdown Preview',
    description: 'Live markdown editor with GitHub-flavored rendering.',
    longDescription: `## Markdown Preview

A split-pane Markdown editor with real-time GFM preview.

## Features

- **GFM Support** — Tables, task lists, strikethrough, and fenced code blocks
- **Syntax Highlighting** — Code blocks highlighted via highlight.js
- **Split View** — Editor and preview side by side or stacked
- **Export** — Download rendered HTML or PDF
- **Local Storage** — Auto-saves your work in the browser

## Tech Used

React · TypeScript · react-markdown · remark-gfm`,
    category: 'developer',
    tags: ['markdown', 'editor', 'preview', 'writing'],
    icon: '📝',
    githubUrl: 'https://github.com',
    status: 'stable',
    featured: true,
  },
  {
    slug: 'base64-tool',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings and files instantly.',
    longDescription: `## Base64 Encoder / Decoder

Simple, fast Base64 encoding and decoding for text and files.

## Features

- **Text Encode/Decode** — Paste text and get Base64 output instantly
- **File Encode** — Drag & drop any file to get its Base64 data URI
- **URL-safe Mode** — Toggle URL-safe Base64 variant (+/ → -_)
- **Validation** — Detects invalid Base64 input before decoding

## Tech Used

React · TypeScript · Vite`,
    category: 'developer',
    tags: ['base64', 'encode', 'decode', 'binary'],
    icon: '🔐',
    githubUrl: 'https://github.com',
    status: 'stable',
  },
  {
    slug: 'timestamp-converter',
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and human-readable dates.',
    longDescription: `## Timestamp Converter

Stop mentally calculating Unix timestamps — just paste and convert.

## Features

- **Bidirectional** — Unix ↔ ISO 8601 ↔ local date string
- **Milliseconds & Seconds** — Handles both formats automatically
- **Timezone Aware** — Converts to any IANA timezone
- **Relative Time** — Shows "3 days ago" style display
- **Now Button** — Instantly get the current timestamp

## Tech Used

React · TypeScript · date-fns`,
    category: 'developer',
    tags: ['timestamp', 'unix', 'date', 'time', 'converter'],
    icon: '⏱️',
    githubUrl: 'https://github.com',
    status: 'stable',
    featured: true,
  },
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images in the browser with no data sent to servers.',
    longDescription: `## Image Compressor

Client-side image compression — your images never leave your browser.

## Features

- **Privacy First** — All processing happens in-browser via Canvas API
- **Bulk Compression** — Drop multiple images at once
- **Quality Slider** — Fine-tune the quality/size trade-off
- **Format Conversion** — Convert between JPEG, PNG, WebP
- **Before/After** — Visual comparison with file size delta

## Tech Used

React · TypeScript · browser-image-compression`,
    category: 'media',
    tags: ['image', 'compress', 'webp', 'png', 'jpeg', 'privacy'],
    icon: '🖼️',
    githubUrl: 'https://github.com',
    status: 'beta',
  },
  {
    slug: 'csv-viewer',
    name: 'CSV Viewer',
    description: 'Visualize and filter CSV files with a spreadsheet-like interface.',
    longDescription: `## CSV Viewer

Upload any CSV and explore it like a mini spreadsheet.

## Features

- **Column Sorting** — Click column headers to sort ascending/descending
- **Search & Filter** — Fuzzy search across all rows
- **Pagination** — Handles large files smoothly
- **Stats** — Row count, column count, null value detection
- **Export** — Download filtered results as a new CSV

## Tech Used

React · TypeScript · Papa Parse`,
    category: 'data',
    tags: ['csv', 'data', 'table', 'spreadsheet', 'viewer'],
    icon: '📊',
    githubUrl: 'https://github.com',
    status: 'beta',
  },
];

export default tools;
