import { marked } from 'marked'

/**
 * Format a string as Markdown, with support for tables.
 *
 * @param {string | string[]} text
 * @returns {string}
 */
export function md(text) {
  if (!text) {
    return ''
  }

  if (!Array.isArray(text)) {
    text = [text]
  }

  return marked(text.join('\n'), { breaks: true })
}
