/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // do these steps manually
    // await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // // eslint-disable-next-line no-console
    // console.log("Building started...");
    // await execa("npm", ["run", "build"]);
    // MANUALLY copy index.html and rename it to 404.html to avoid site refresh 404 redirects, but use 404 as the actual index.html
    // maybe work on this: await execa("cp index.html 404.html")
    // await execa.command("cd dist && cp index.html 404.html")
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();