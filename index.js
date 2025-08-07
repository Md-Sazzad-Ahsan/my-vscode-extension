#!/usr/bin/env node

const inquirer = require("inquirer");
const { exec, execSync } = require("child_process");



const categories = {
  "Web & App Development": {
    "Frontend Development": [
      { name: "Prettier - Code formatter", id: "esbenp.prettier-vscode" },
      { name: "ESLint", id: "dbaeumer.vscode-eslint" },
      { name: "Live Server", id: "ritwickdey.LiveServer" },
      { name: "Path Intellisense", id: "christian-kohler.path-intellisense" },
      { name: "Auto Close Tag", id: "formulahendry.auto-close-tag" },
      { name: "Auto Rename Tag", id: "formulahendry.auto-rename-tag" },
      { name: "CSS Peek", id: "pranaygp.vscode-css-peek" },
      { name: "Bracket Pair Colorizer 2", id: "coenraads.bracket-pair-colorizer-2" },
      { name: "IntelliSense for CSS class names in HTML", id: "Zignd.html-css-class-completion" },
      { name: "JavaScript (ES6) code snippets", id: "xabikos.javascriptsnippets" },
      { name: "npm Intellisense", id: "christian-kohler.npm-intellisense" },
      { name: "Import Cost", id: "wix.vscode-import-cost" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" },
      { name: "Tailwind CSS IntelliSense", id: "bradlc.vscode-tailwindcss" },
      { name: "ES7+ React/Redux/React-Native snippets", id: "dsznajder.es7-react-js-snippets" },
      { name: "Jest", id: "Orta.vscode-jest" },
      { name: "npm Script Runner", id: "eg2.vscode-npm-script" },
      { name: "Project Manager", id: "alefragnani.project-manager" },
      { name: "REST Client", id: "humao.rest-client" }
    ],
    "Backend Development": [
      { name: "Thunder Client", id: "rangav.vscode-thunder-client" },
      { name: "MongoDB for VS Code", id: "mongodb.mongodb-vscode" },
      { name: "Docker", id: "ms-azuretools.vscode-docker" },
      { name: "YAML", id: "redhat.vscode-yaml" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" },
      { name: "Prettier - Code formatter", id: "esbenp.prettier-vscode" },
      { name: "ESLint", id: "dbaeumer.vscode-eslint" },
      { name: "Path Intellisense", id: "christian-kohler.path-intellisense" },
      { name: "Import Cost", id: "wix.vscode-import-cost" },
      { name: "Node.js Extension Pack", id: "waderyan.nodejs-extension-pack" },
      { name: "Jest", id: "Orta.vscode-jest" },
      { name: "npm Script Runner", id: "eg2.vscode-npm-script" }
    ],
  },
  "DSA & Competitive Coding": {
    "LeetCode Setup": [
      { name: "LeetCode", id: "shengchen.leetcode" },
      { name: "C/C++", id: "ms-vscode.cpptools" },
      { name: "Python", id: "ms-python.python" },
      { name: "Code Runner", id: "formulahendry.code-runner" },
      { name: "Bracket Pair Colorizer 2", id: "coenraads.bracket-pair-colorizer-2" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" }
    ],
    "Competitive Programming Setup": [
      { name: "Competitive Programming Helper", id: "cph-general.cph" },
      { name: "C/C++ TestMate", id: "matepek.vscode-catch2-test-adapter" },
      { name: "Code Runner", id: "formulahendry.code-runner" },
      { name: "Better Comments", id: "aaron-bond.better-comments" },
      { name: "Bracket Pair Colorizer 2", id: "coenraads.bracket-pair-colorizer-2" }
    ],
  },
  "AI & ML Development": {
    "Python & Jupyter Tools": [
      { name: "Python", id: "ms-python.python" },
      { name: "Pylance", id: "ms-python.vscode-pylance" },
      { name: "Python Debugger", id: "donjayamanne.python-extension-pack" },
      { name: "Jupyter", id: "ms-toolsai.jupyter" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" },
      { name: "Visual Studio IntelliCode", id: "VisualStudioExptTeam.vscodeintellicode" }
    ],
    "ML Snippets & IntelliSense": [
      { name: "IntelliCode", id: "VisualStudioExptTeam.vscodeintellicode" },
      { name: "Python", id: "ms-python.python" },
      { name: "Jupyter", id: "ms-toolsai.jupyter" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" }
    ],
  },
  "Database & APIs": {
    "MongoDB Tools": [
      { name: "MongoDB for VS Code", id: "mongodb.mongodb-vscode" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" },
      { name: "Prettier - Code formatter", id: "esbenp.prettier-vscode" }
    ],
    "SQL & PostgreSQL Tools": [
      { name: "SQLTools", id: "mtxr.sqltools" },
      { name: "PostgreSQL", id: "ms-ossdata.vscode-postgresql" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" },
      { name: "Prettier - Code formatter", id: "esbenp.prettier-vscode" }
    ],
    "REST & GraphQL Tools": [
      { name: "Thunder Client", id: "rangav.vscode-thunder-client" },
      { name: "REST Client", id: "humao.rest-client" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" }
    ],
  },
  "DevOps & Deployment": {
    "Docker & YAML Tools": [
      { name: "Docker", id: "ms-azuretools.vscode-docker" },
      { name: "YAML", id: "redhat.vscode-yaml" },
      { name: "GitLens — Git supercharged", id: "eamodio.gitlens" }
    ],
    "Git Tools": [
      { name: "GitLens", id: "eamodio.gitlens" },
      { name: "GitHub Pull Requests", id: "GitHub.vscode-pull-request-github" },
      { name: "GitHub Copilot", id: "GitHub.copilot" }
    ],
    "CI/CD & Deployment Helpers": [
      { name: "GitHub Actions", id: "github.vscode-github-actions" },
      { name: "GitHub Codespaces", id: "GitHub.codespaces" },
      { name: "GitHub Copilot", id: "GitHub.copilot" }
    ],
  },
  "General & Utilities": [
    { name: "Better Comments", id: "aaron-bond.better-comments" },
    { name: "vscode-icons", id: "vscode-icons-team.vscode-icons" },
    { name: "Material Icons", id: "PKief.material-icon-theme" },
    { name: "Indent Rainbow", id: "oderwat.indent-rainbow" },
    { name: "Lorem Ipsum Generator", id: "Tyriar.lorem-ipsum" },
    { name: "PDF Viewer", id: "tomoki1207.pdf" },
    { name: "Markdown All in One", id: "yzhang.markdown-all-in-one" },
    { name: "GitHub Copilot", id: "GitHub.copilot" },
    { name: "IntelliCode", id: "VisualStudioExptTeam.vscodeintellicode" },
    { name: "TODO Tree", id: "Gruntfuggly.todo-tree" },
  ],
};



function clearConsole() {
  // Use the native clear command for a more reliable result
  const command = process.platform === "win32" ? "cls" : "clear";
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    // Fallback for environments where execSync might fail
    console.clear();
  }
}

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

async function installCategory(extensions) {
  for (const extension of extensions) {
    const answer = await inquirer.prompt([
      {
        type: "confirm",
        name: "install",
        message: `Install ${extension.name}?`,
      },
    ]);

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

async function main() {
  while (true) {
    clearConsole();
    console.log("🚀 Install your VS Code extensions\n Pressing Enter selects Yes by default...\n");

    const categoryNames = Object.keys(categories);
    const numberedCategoryChoices = categoryNames.map((name, index) => `${index + 1}. ${name}`);

    const categoryChoice = await inquirer.prompt([
      {
        type: "list",
        name: "category",
        message: "Which Extensions do you want to install now?",
        choices: [...numberedCategoryChoices, `${categoryNames.length + 1}. Exit`],
      },
    ]);

    const selectedChoice = categoryChoice.category;

    if (selectedChoice.endsWith(". Exit")) {
      break;
    }

    const selectedCategoryName = selectedChoice.replace(/^\d+\.\s/, "");
    const selectedCategory = categories[selectedCategoryName];

    if (Array.isArray(selectedCategory)) {
      await installCategory(selectedCategory);
    } else {
      const subCategoryNames = Object.keys(selectedCategory);
      const numberedSubCategoryChoices = subCategoryNames.map((name, index) => `${index + 1}. ${name}`);
      const subCategoryChoices = [
        ...numberedSubCategoryChoices,
        `${subCategoryNames.length + 1}. Install All`,
        `${subCategoryNames.length + 2}. Back`,
      ];

      const subCategoryChoice = await inquirer.prompt([
        {
          type: "list",
          name: "subCategory",
          message: "Select a sub-category:",
          choices: subCategoryChoices,
        },
      ]);

      const selectedSubChoice = subCategoryChoice.subCategory;

      if (selectedSubChoice.endsWith(". Install All")) {
        const allExtensions = Object.values(selectedCategory).flat();
        await installCategory(allExtensions);
      } else if (!selectedSubChoice.endsWith(". Back")) {
        const selectedSubCategoryName = selectedSubChoice.replace(/^\d+\.\s/, "");
        await installCategory(selectedCategory[selectedSubCategoryName]);
      }
    }
    console.log("\n"); // Add a newline for better readability
  }
}

main();
