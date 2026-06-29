import { createContext } from 'react'
import type { TranslationContextValue } from './types'

export const TranslationContext = createContext<TranslationContextValue | undefined>(undefined)
