# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.0.7   | :white_check_mark: |
| < 0.0.7 | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability within this project, please follow these steps:

1. **Do Not** disclose the vulnerability publicly until it has been addressed.

2. Email your findings to: [your-security-email@example.com]
   - Include detailed steps to reproduce the vulnerability
   - Potential impact of the vulnerability
   - Any suggested fixes if available

3. You should receive a response within 48 hours acknowledging your report.

4. Once the vulnerability is confirmed, we will:
   - Work on a fix
   - Keep you updated on our progress
   - Credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

When using this application:

1. **Environment Variables**: Never commit `.env` files to version control
2. **Secrets**: Use secure methods to store and access API keys and tokens
3. **Dependencies**: Regularly update dependencies to patch security vulnerabilities
4. **HTTPS**: Always use HTTPS in production
5. **Authentication**: Implement strong authentication mechanisms
6. **Input Validation**: Validate all user inputs
7. **CORS**: Configure CORS appropriately for your use case
8. **Headers**: Security headers are configured via the nuxt-security module

## Known Security Features

This application includes:
- Content Security Policy (CSP) via nuxt-security
- XSS Protection
- Rate Limiting configuration
- CORS handling
- Secure headers
- Cloudflare Turnstile for bot protection

## Security Updates

Security updates will be released as patch versions and announced in:
- GitHub Security Advisories
- Release notes
- Project README

## Responsible Disclosure

We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.
