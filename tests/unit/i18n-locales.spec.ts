import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

type JsonRecord = Record<string, unknown>

function loadLocale(file: string): JsonRecord {
  const fullPath = resolve(process.cwd(), 'i18n/locales', file)
  return JSON.parse(readFileSync(fullPath, 'utf-8')) as JsonRecord
}

function hasPath(record: JsonRecord, path: string): boolean {
  return path.split('.').every(segment => {
    if (record && typeof record === 'object' && segment in record) {
      record = record[segment] as JsonRecord
      return true
    }

    return false
  })
}

describe('i18n locale baseline', () => {
  const requiredPaths = [
    'headerNav.home',
    'headerNav.about',
    'home.title',
    'home.faq.one.q',
    'home.faq.two.a',
    'about.title',
    'about.workflowText'
  ]

  it('has required keys in uk locale', () => {
    const uk = loadLocale('uk.json')

    for (const path of requiredPaths) {
      expect(hasPath(uk, path), `Missing key in uk locale: ${path}`).toBe(true)
    }
  })

  it('has required keys in en locale', () => {
    const en = loadLocale('en.json')

    for (const path of requiredPaths) {
      expect(hasPath(en, path), `Missing key in en locale: ${path}`).toBe(true)
    }
  })
})
