/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Box, Text } from 'ink';
import { theme } from '../semantic-colors.js';
import { Select } from '@inkjs/ui';
import { useUIState } from '../contexts/UIStateContext.js';

export function SwarmUI(): React.JSX.Element {
  const { isSwarmModeActive } = useUIState();
  const [paused, setPaused] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

  if (!isSwarmModeActive) {
    return null;
  }

  return (
    <Box
      borderStyle="round"
      borderColor={theme.border.default}
      flexDirection="column"
      padding={1}
      width="100%"
      height="100%"
    >
      <Text bold>Swarm Mode</Text>
      <Box marginTop={1}>
        <Text>Goal: [GOAL]</Text>
      </Box>
      <Box marginTop={1}>
        <Text>Agents:</Text>
        <Select
          options={[
            { label: 'frontend-dev', value: 0 },
            { label: 'backend-dev', value: 1 },
          ]}
          onChange={(value) => setSelectedAgent(value)}
        />
      </Box>
      <Box marginTop={1}>
        <Text>Status: {paused ? 'Paused' : 'Running'}</Text>
      </Box>
      <Box marginTop={1}>
        <Box flexGrow={1} />
        <Box>
          <Text>
            <Text
              color="yellow"
              bold
              onPress={() => setPaused(!paused)}
            >
              [{paused ? 'Resume' : 'Pause'}]
            </Text>{' '}
            <Text color="blue" bold>
              [Step]
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
