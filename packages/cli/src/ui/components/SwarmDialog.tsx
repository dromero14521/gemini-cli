/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Box, Text } from 'ink';
import { theme } from '../semantic-colors.js';
import { TextInput, Select } from '@inkjs/ui';
import { useUIActions } from '../contexts/UIActionsContext.js';

interface SwarmDialogProps {
  onClose: () => void;
}

export function SwarmDialog({
  onClose,
}: SwarmDialogProps): React.JSX.Element {
  const { setSwarmModeActive } = useUIActions();
  const [goal, setGoal] = useState('');
  const [agents, setAgents] = useState<{ name: string; task: string }[]>([]);
  const [newAgentName, setNewAgentName] = useState('');
  const [newAgentTask, setNewAgentTask] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

  const handleAddAgent = () => {
    if (newAgentName.trim() !== '') {
      setAgents([
        ...agents,
        { name: newAgentName.trim(), task: newAgentTask.trim() },
      ]);
      setNewAgentName('');
      setNewAgentTask('');
    }
  };

  const handleStartSwarm = () => {
    setSwarmModeActive(true);
    onClose();
  };

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
        <Text>Goal:</Text>
        <TextInput value={goal} onChange={setGoal} />
      </Box>
      <Box marginTop={1}>
        <Text>Agents:</Text>
        <Box flexDirection="column">
          {agents.map((agent, index) => (
            <Box key={index}>
              <Text>
                - {agent.name}: {agent.task}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box marginTop={1}>
        <Text>New Agent Name:</Text>
        <TextInput value={newAgentName} onChange={setNewAgentName} />
      </Box>
      <Box marginTop={1}>
        <Text>New Agent Task:</Text>
        <TextInput
          value={newAgentTask}
          onChange={setNewAgentTask}
          onSubmit={handleAddAgent}
        />
      </Box>
      <Box marginTop={1}>
        <Select
          options={agents.map((agent, index) => ({
            label: agent.name,
            value: index,
          }))}
          onChange={(value) => setSelectedAgent(value)}
        />
      </Box>
      <Box marginTop={1}>
        <Box flexGrow={1} />
        <Box>
          <Text>
            <Text color="green" bold onPress={handleStartSwarm}>
              [Start Swarm]
            </Text>{' '}
            <Text color="red" bold onPress={onClose}>
              [Cancel]
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
