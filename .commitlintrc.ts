import type { UserConfig } from '@commitlint/types'

const Config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['test', 'fix', 'update', 'release']],
  },
}

module.exports = Config
