const config = {
  scripts: {
    prerelease: "./bin/release/prerelease",
    // prerelease:
    // prebump / postbump
    // prechangelog / postchangelog
    // precommit/ postcommit
    // pretag / posttag
  },
  releaseCount: 1,
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
  ],
  skip: {
    // changelog: true
  },
  // for available options in the conventional changelog configuration spec see
  // https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md
  header: "Changelog",
  types: [
    { type: "feat", section: "Features" },
    { type: "theme", section: "Theme" },
    { type: "style", section: "Styling" },
    { type: "content", section: "Content" },
    { type: "docs", section: "Documentation" },
    { type: "fix", section: "Bug Fixes" },
    { type: "perf", section: "Performance" },
    { type: "refactor", section: "Refactors" },
    { type: "revert", section: "Reverts" },
    { type: "test", section: "Tests" },
    { type: "chore", section: "Chore" },
    { type: "build", section: "Build System" },
    { type: "ci", section: "CI" },
  ]
};
module.exports = config;
