# Contributing to Base App

First off, thank you for considering contributing to Base App! It's people like you that make this project better.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Welcome newcomers and encourage diverse contributions
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other applications if applicable**

### Pull Requests

- Fill in the required template
- Follow the coding style used in the project
- Include relevant tests if applicable
- Update documentation as needed
- Ensure the test suite passes
- Make sure your code lints (run `npm run lint`)

## Development Setup

1. Fork the repo
2. Clone your fork
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b my-feature`
5. Make your changes
6. Run tests: `npm test` (if applicable)
7. Run linter: `npm run lint`
8. Commit your changes: `git commit -m 'Add some feature'`
9. Push to your fork: `git push origin my-feature`
10. Create a Pull Request

## Coding Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas
- Follow Vue.js style guide for components
- Follow TypeScript best practices
- Write meaningful commit messages

## Project Structure

```
base-app/
├── app/              # Main application code
├── layers/           # Nuxt layers
│   ├── commerce-app/
│   ├── social-app/
│   ├── lists-app/
│   └── shared-app/
├── modules/          # Custom Nuxt modules
└── public/           # Static assets
```

## Testing

- Write tests for new features
- Ensure existing tests pass
- Follow testing best practices

## Documentation

- Update README.md if needed
- Document new features
- Add JSDoc comments to functions
- Update API documentation

## Questions?

Feel free to create an issue with your question, or reach out to the maintainers directly.

Thank you for contributing! 🎉
