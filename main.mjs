import fetch from "node-fetch";
import qs from "querystring";
import chalk from "chalk";

async function login({ username, password, rememberMe = true }) {
  const body = qs.stringify({
    chkRememberMe: rememberMe,
    txtUsername: username,
    txtPassword: password,
  });

  try {
    const response = await fetch("https://wifi.ais.co.th/login", {
      body,
      cache: "default",
      credentials: "omit",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.15",
        "X-Requested-With": "XMLHttpRequest",
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin",
    });
    const responseData = await response.json();
    console.log(responseData);

    console.log("Login status:", chalk.green("Success"));
  } catch (error) {
    console.error("Login status:", chalk.red("Failed"));
    console.error("Error:", error);
  }
}

async function main() {
  await login({
    username: process.env.username,
    password: process.env.password,
  });
}

main();
