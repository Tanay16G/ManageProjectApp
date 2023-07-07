const express = require("express");

const app = express();

app.use(express.json());

let projects = [
  {
    title: "Project1",
    summary: "Some quick text to summarize your Project",
    department: "RES",
    budget: 100000,
    startedDate: "02/25/2022",
    closingDate: "02/25/2023",
    closedOnDate: "07/25/2023",
    id: "P1",
    userId: "tejas",
  },
  {
    title: "Project2",
    summary: "Some quick text to summarize your Project",
    department: "Municipality",
    budget: 200000,
    startedDate: "02/25/2022",
    closingDate: "02/25/2023",
    closedOnDate: "07/25/2023",
    id: "P2",
    userId: "tejas",
  },
];

let expenses = [
  {
    title: "Test",
    toPayment: "Abhishek",
    fromPayment: "Tanay",
    amount: 10000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "E01",
    projectId: "P1",
  },
  {
    title: "Test",
    toPayment: "Rutuja",
    fromPayment: "Tanay",
    amount: 10000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "E02",
    projectId: "P1",
  },
  {
    title: "Test",
    toPayment: "Rutuja",
    fromPayment: "Tanay",
    amount: 10000,
    date: "02/25/23022",
    paymentMode: "Account Deposit",
    id: "E03",
    projectId: "P1",
  },
  {
    title: "Test",
    toPayment: "Rutuja",
    fromPayment: "Tanay",
    amount: 10000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "E04",
    projectId: "P1",
  },
  {
    title: "Test",
    toPayment: "Rutuja",
    fromPayment: "Tanay",
    amount: 10000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "E05",
    projectId: "P1",
  },
  {
    title: "Test",
    toPayment: "Rutuja",
    fromPayment: "Tanay",
    amount: 10000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "E06",
    projectId: "P1",
  },
];

let paymentsReceived = [
  {
    title: "Test",
    toPayment: "Abhishek",
    fromPayment: "Tanay",
    amount: 1000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "PR01",
  },
  {
    title: "Test",
    toPayment: "Rutuja",
    fromPayment: "Tanay",
    amount: 1000,
    date: "02/25/2022",
    paymentMode: "Account Deposit",
    id: "PR02",
  },
];

app.get("/expenses/:id", (req, res) => {
  const { id } = req.params;

  res.json(expenses.find((expense) => expense.id === id));
});

app.post("/expenses/:id", (req, res) => {
  const { id } = req.params;
  const { expense: updatedExpense } = req.body;

  expenses = expenses.map((expense) =>
    expense.id === id ? updatedExpense : expense
  );

  res.json(expenses.find((expense) => expense.id === id));
});

app.get("/expenses", (req, res) => {
  res.json(expenses);
});

app.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  res.json(projects.find((project) => project.id === id));
});

app.post("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { project: updatedProject } = req.body;

  projects = projects.map((project) =>
    project.id === id ? updatedProject : project
  );

  res.json(projects.find((project) => project.id === id));
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
