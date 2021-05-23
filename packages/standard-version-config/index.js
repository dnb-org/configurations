module.exports = {
  // for available options see https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
  // skip: {
  //   changelog: true,
  // },
  scripts: {
    prerelease: "./bin/release-hook-prerelease.sh",
  },
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
  ],
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "docs", section: "Documentation" },
    { type: "style", section: "Styling" },
    { type: "refactor", section: "Refactors" },
    { type: "perf", section: "Performance" },
    { type: "test", section: "Tests" },
    { type: "build", section: "Build System" },
    { type: "ci", section: "CI" },
    { type: "chore", section: "Chore" },
    { type: "revert", section: "Reverts" },
  ],
};
