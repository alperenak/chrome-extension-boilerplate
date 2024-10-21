module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      // * These accepted branch names adhere to .husky/lint-branch:4
      ['exp', 'feat', 'fix', 'refactor', 'hotfix', 'risk', 'revert', 'docs', 'chore'],
    ],
    // 'scope-case': [2, 'always', 'upper-case'],
  },
};
