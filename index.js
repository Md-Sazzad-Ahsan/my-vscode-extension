#!/usr/bin/env node

const inquirer = require("inquirer");
const { exec } = require("child_process");

console.log("🚀 Install your VS Code extensions\n Pressing Enter selects Yes by default...\n");

const extensions = [
  { name: "ESLint", id: "dbaeumer.vscode-eslint" },
  { name: "Prettier", id: "esbenp.prettier-vscode" },
  { name: "npm Intellisense", id: "christian-kohler.npm-intellisense" },
  { name: "Auto Close Tag", id: "formulahendry.auto-close-tag" },
  { name: "Auto Rename Tag", id: "formulahendry.auto-rename-tag" },
  { name: "Better Comments", id: "aaron-bond.better-comments" },
  { name: "Path Intellisense", id: "christian-kohler.path-intellisense" },
  { name: "vscode-icons", id: "vscode-icons-team.vscode-icons" },
  { name: "Material Icons", id: "PKief.material-icon-theme" },
  { name: "React/Redux Snippets", id: "dsznajder.es7-react-js-snippets" },
  { name: "HTML CSS Support", id: "ecmel.vscode-html-css" },
  { name: "Live Server", id: "ritwickdey.LiveServer" },
  { name: "Indent Rainbow", id: "oderwat.indent-rainbow" },
  { name: "HTML Boilerplate", id: "sidthesloth.html5-boilerplate" },
  { name: "Tailwind CSS IntelliSense", id: "bradlc.vscode-tailwindcss" },
  { name: "Lorem Ipsum Generator", id: "Tyriar.lorem-ipsum" },
  { name: "PDF Viewer", id: "tomoki1207.pdf" },
  { name: "Markdown All in One", id: "yzhang.markdown-all-in-one" },
  { name: "GitHub Copilot", id: "GitHub.copilot" },
  { name: "GitHub Codespaces", id: "GitHub.codespaces" },
  { name: "GitHub Pull Requests", id: "GitHub.vscode-pull-request-github" },
  { name: "GitLens", id: "eamodio.gitlens" },
  { name: "MongoDB for VS Code", id: "mongodb.mongodb-vscode" },
  { name: "Python", id: "ms-python.python" },
  { name: "Pylance", id: "ms-python.vscode-pylance" },
  { name: "Python Debugger", id: "donjayamanne.python-extension-pack" },
  { name: "Jupyter", id: "ms-toolsai.jupyter" },
  { name: "C/C++", id: "ms-vscode.cpptools" },
  { name: "IntelliCode", id: "VisualStudioExptTeam.vscodeintellicode" },
  { name: "TODO Tree", id: "Gruntfuggly.todo-tree" },
  { name: "Thunder Client", id: "rangav.vscode-thunder-client" },
  { name: "Live Preview", id: "ms-vscode.live-server" },
  { name: "Color Highlight", id: "naumovs.color-highlight" }
];

function installExtension(id) {
  return new Promise((resolve) => {
    exec(`code --install-extension ${id}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Failed: ${id}`);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

async function installExtensions() {
  for (const extension of extensions) {
    const answer = await inquirer.prompt([{
      type: "confirm",
      name: "install",
      message: `Install ${extension.name}?`,
    }]);

    if (answer.install) {
      process.stdout.write(`📦 Installing ${extension.name}... `);
      const success = await installExtension(extension.id);
      if (success) {
        console.log(`✅`);
      } else {
        console.log(`❌`);
      }
    }
  }
}

installExtensions();
