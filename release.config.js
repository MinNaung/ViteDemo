module.exports = {
    branches: [
        { name: 'main', prerelease: false, channel: false },
        { name: 'development', prerelease: 'next', channel: 'next' },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
    ],
};
