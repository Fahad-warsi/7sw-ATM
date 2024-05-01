#! /usr/bin/env node

//generate userId
//generate Idpassword
//if userId && Idpassword are 0kay... funcation will open like withdraw & check amount...

import inquirer from "inquirer";
let userId: string = "Fahad Warsi";
let userPin: number = 1234;
const currentAmount: number = 10000;

const answer = await inquirer.prompt([
  {
    message: "Please enter your userID : ",
    type: "string",
    name: "userId",
  },
  {
    message: "Please enter your pin : ",
    type: "number",
    name: "userPin",
  },
]);

if (answer.userId === userId && answer.userPin === userPin) {
  console.log(`You have successfully login`);
  const ans = await inquirer.prompt([
    {
      message: "What do want to do? ",
      type: "list",
      name: "opts",
      choices: ["Fast cash", "withdraw", "check Balance"],
    },
  ]);
  if (ans.opts === "withdraw") {
    const ansWithDraw = await inquirer.prompt([
      {
        message: "Enter Amount ",
        type: "number",
        name: "withdrawAmount",
      },
    ]);
    console.log(
      `Your remaining balance is ${currentAmount - ansWithDraw.withdrawAmount} `
    );
  } else if (ans.opts === "Fast cash") {
    const ansWithDraw = await inquirer.prompt([
      {
        message: "Enter Amount ",
        type: "list",
        name: "withdrawAmount",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);
    console.log(
      `Your remaining balance is ${currentAmount - ansWithDraw.withdrawAmount} `
    );
  } else if (ans.opts === "check Balance") {
    console.log(`Your remaining balance is ${currentAmount}`);
  }
} else {
  console.log("You have entered wrong userID or pin");
}
