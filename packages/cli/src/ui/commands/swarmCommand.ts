/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SlashCommand } from './types.js';
import { CommandKind } from './types.js';

export const swarmCommand: SlashCommand = {
  name: 'swarm',
  kind: CommandKind.BUILT_IN,
  description: 'Activate Swarm Mode',
  action: async ({ actions }) => {
    actions.openSwarmDialog();
  },
};
