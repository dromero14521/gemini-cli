/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import type { TextBuffer } from './shared/text-buffer.js';

export function useAgentCompletion(buffer: TextBuffer) {
  const showSuggestions = useMemo(() => {
    return buffer.text.startsWith('@');
  }, [buffer.text]);

  const suggestions = useMemo(() => {
    if (!showSuggestions) {
      return [];
    }
    return [
      { label: 'frontend-dev', value: 'frontend-dev' },
      { label: 'backend-dev', value: 'backend-dev' },
    ];
  }, [showSuggestions]);

  return {
    showSuggestions,
    suggestions,
    activeSuggestionIndex: 0,
    navigateUp: () => {},
    navigateDown: () => {},
    handleAutocomplete: () => {},
    resetCompletionState: () => {},
    isLoadingSuggestions: false,
    visibleStartIndex: 0,
  };
}
