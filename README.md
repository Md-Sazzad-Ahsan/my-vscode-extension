# 🚀 Auto-Install VS Code Extensions with One Command

Setting up a new VS Code environment? Don't waste time installing your favorite extensions one by one. With `my-vscode-extension`, you can install a complete set of recommended extensions interactively in just a few seconds.

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org)
[![VS Code](https://img.shields.io/badge/VS%20Code-%3E%3D1.0.0-blue.svg)](https://code.visualstudio.com)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Extension Categories](#extension-categories)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 📖 Overview

This CLI tool streamlines the setup of Visual Studio Code development environments by providing an interactive installer for categorized, recommended extensions. Instead of manually searching for and installing extensions one by one, developers can quickly set up their preferred tooling with just a few simple commands.

## ✨ Features

- **Interactive Installation**: Choose which extensions to install from categorized lists
- **Categorized Extensions**: Organized by development domain and use case
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Fast Setup**: Install multiple extensions with a single command
- **Extensible**: Easy to add new extensions to the predefined lists

## 🧰 Requirements

Before you begin, make sure the following tools are installed on your system:

- **Node.js** (v14 or higher recommended) – [Download Node.js](https://nodejs.org)
- **Git** – [Download Git](https://git-scm.com)
- **Visual Studio Code** – [Download VS Code](https://code.visualstudio.com)

> ⚠️ Make sure `code` command is available globally. You can enable this from:
> **VS Code → Command Palette → Shell Command: Install 'code' command in PATH**

## 📦 Installation

To install the CLI globally:

```bash
npm install -g my-vscode-extension
```

## 🚀 Usage

Once installed, run:

```bash
my-vscode-extension
```

Follow the interactive prompts to select categories and extensions you want to install.

## 🗂️ Extension Categories

The tool organizes extensions into the following categories and subcategories:

```
├── Web & App Development
│   ├── Frontend Development
│   └── Backend Development
├── DSA & Competitive Coding
│   ├── LeetCode Setup
│   └── Competitive Programming Setup
├── AI & ML Development
│   ├── Python & Jupyter Tools
│   └── ML Snippets & IntelliSense
├── Database & APIs
│   ├── MongoDB Tools
│   ├── SQL & PostgreSQL Tools
│   └── REST & GraphQL Tools
├── DevOps & Deployment
│   ├── Docker & YAML Tools
│   ├── Git Tools
│   └── CI/CD & Deployment Helpers
└── General & Utilities
```

### Web & App Development

#### Frontend Development

| Extension | ID |
|----------|----|
| Prettier - Code formatter | `esbenp.prettier-vscode` |
| ESLint | `dbaeumer.vscode-eslint` |
| Live Server | `ritwickdey.LiveServer` |
| Path Intellisense | `christian-kohler.path-intellisense` |
| Auto Close Tag | `formulahendry.auto-close-tag` |
| Auto Rename Tag | `formulahendry.auto-rename-tag` |
| CSS Peek | `pranaygp.vscode-css-peek` |
| Bracket Pair Colorizer 2 | `coenraads.bracket-pair-colorizer-2` |
| IntelliSense for CSS class names in HTML | `Zignd.html-css-class-completion` |
| JavaScript (ES6) code snippets | `xabikos.javascriptsnippets` |
| npm Intellisense | `christian-kohler.npm-intellisense` |
| Import Cost | `wix.vscode-import-cost` |
| GitLens — Git supercharged | `eamodio.gitlens` |
| Tailwind CSS IntelliSense | `bradlc.vscode-tailwindcss` |
| ES7+ React/Redux/React-Native snippets | `dsznajder.es7-react-js-snippets` |
| Jest | `Orta.vscode-jest` |
| npm Script Runner | `eg2.vscode-npm-script` |
| Project Manager | `alefragnani.project-manager` |
| REST Client | `humao.rest-client` |

#### Backend Development

| Extension | ID |
|----------|----|
| Thunder Client | `rangav.vscode-thunder-client` |
| MongoDB for VS Code | `mongodb.mongodb-vscode` |
| Docker | `ms-azuretools.vscode-docker` |
| YAML | `redhat.vscode-yaml` |
| GitLens — Git supercharged | `eamodio.gitlens` |
| Prettier - Code formatter | `esbenp.prettier-vscode` |
| ESLint | `dbaeumer.vscode-eslint` |
| Path Intellisense | `christian-kohler.path-intellisense` |
| Import Cost | `wix.vscode-import-cost` |
| Node.js Extension Pack | `waderyan.nodejs-extension-pack` |
| Jest | `Orta.vscode-jest` |
| npm Script Runner | `eg2.vscode-npm-script` |

### DSA & Competitive Coding

#### LeetCode Setup

| Extension | ID |
|----------|----|
| LeetCode | `shengchen.leetcode` |
| C/C++ | `ms-vscode.cpptools` |
| Python | `ms-python.python` |
| Code Runner | `formulahendry.code-runner` |
| Bracket Pair Colorizer 2 | `coenraads.bracket-pair-colorizer-2` |
| GitLens — Git supercharged | `eamodio.gitlens` |

#### Competitive Programming Setup

| Extension | ID |
|----------|----|
| Competitive Programming Helper | `cph-general.cph` |
| C/C++ TestMate | `matepek.vscode-catch2-test-adapter` |
| Code Runner | `formulahendry.code-runner` |
| Better Comments | `aaron-bond.better-comments` |
| Bracket Pair Colorizer 2 | `coenraads.bracket-pair-colorizer-2` |

### AI & ML Development

#### Python & Jupyter Tools

| Extension | ID |
|----------|----|
| Python | `ms-python.python` |
| Pylance | `ms-python.vscode-pylance` |
| Python Debugger | `donjayamanne.python-extension-pack` |
| Jupyter | `ms-toolsai.jupyter` |
| GitLens — Git supercharged | `eamodio.gitlens` |
| Visual Studio IntelliCode | `VisualStudioExptTeam.vscodeintellicode` |

#### ML Snippets & IntelliSense

| Extension | ID |
|----------|----|
| IntelliCode | `VisualStudioExptTeam.vscodeintellicode` |
| Python | `ms-python.python` |
| Jupyter | `ms-toolsai.jupyter` |
| GitLens — Git supercharged | `eamodio.gitlens` |

### Database & APIs

#### MongoDB Tools

| Extension | ID |
|----------|----|
| MongoDB for VS Code | `mongodb.mongodb-vscode` |
| GitLens — Git supercharged | `eamodio.gitlens` |
| Prettier - Code formatter | `esbenp.prettier-vscode` |

#### SQL & PostgreSQL Tools

| Extension | ID |
|----------|----|
| SQLTools | `mtxr.sqltools` |
| PostgreSQL | `ms-ossdata.vscode-postgresql` |
| GitLens — Git supercharged | `eamodio.gitlens` |
| Prettier - Code formatter | `esbenp.prettier-vscode` |

#### REST & GraphQL Tools

| Extension | ID |
|----------|----|
| Thunder Client | `rangav.vscode-thunder-client` |
| REST Client | `humao.rest-client` |
| GitLens — Git supercharged | `eamodio.gitlens` |

### DevOps & Deployment

#### Docker & YAML Tools

| Extension | ID |
|----------|----|
| Docker | `ms-azuretools.vscode-docker` |
| YAML | `redhat.vscode-yaml` |
| GitLens — Git supercharged | `eamodio.gitlens` |

#### Git Tools

| Extension | ID |
|----------|----|
| GitLens | `eamodio.gitlens` |
| GitHub Pull Requests | `GitHub.vscode-pull-request-github` |
| GitHub Copilot | `GitHub.copilot` |

#### CI/CD & Deployment Helpers

| Extension | ID |
|----------|----|
| GitHub Actions | `github.vscode-github-actions` |
| GitHub Codespaces | `GitHub.codespaces` |
| GitHub Copilot | `GitHub.copilot` |

### General & Utilities

| Extension | ID |
|----------|----|
| Better Comments | `aaron-bond.better-comments` |
| vscode-icons | `vscode-icons-team.vscode-icons` |
| Material Icons | `PKief.material-icon-theme` |
| Indent Rainbow | `oderwat.indent-rainbow` |
| Lorem Ipsum Generator | `Tyriar.lorem-ipsum` |
| PDF Viewer | `tomoki1207.pdf` |
| Markdown All in One | `yzhang.markdown-all-in-one` |
| GitHub Copilot | `GitHub.copilot` |
| IntelliCode | `VisualStudioExptTeam.vscodeintellicode` |
| TODO Tree | `Gruntfuggly.todo-tree` |

## 📁 Project Structure

```
my-vscode-extension/
├── index.js          # Main CLI application
├── package.json      # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── README.md         # Project documentation
├── .gitignore        # Git ignore rules
└── node_modules/     # Installed dependencies
```

### Key Components

- **`index.js`**: The main entry point that contains the CLI logic, extension categories, and installation functions
- **`package.json`**: Defines the project metadata, dependencies, and CLI command registration

## 🤝 Contributing

Contributions are welcome! To add new extensions:

1. Fork the repository
2. Add your extension to the appropriate category in `index.js`
3. Update the README if necessary
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Md. Sazzad Ahsan (Ahsan Himu)**

- GitHub: [Md Sazzad Ahsan](https://github.com/Md-Sazzad-Ahsan)
- LinkedIn: [Md Sazzad Ahsan](https://www.linkedin.com/in/md-sazzad-ahsan)
- Portfolio: [Md Sazzad Ahsan](https://ahsan.lunitech.co)

---

<p align="center">Made with ❤️ for the developer community</p>
