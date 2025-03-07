// Columns numbers starts with 1

const forms:  FormConfig = {
  spreadSheetId: "",
  spreadSheetName: "",
  sheets: {
    main: {
      name: "",
      class: "",
      columns: {
        category: 3,
        date: 2,
        amount: 9,
        subCategory: 4,
        account: 8,
        description: 9
      }
    },
    reimbursements: {
      name: "",
      class: "",
      columns: {
        category: 3,
        date: 2,
        amount: 9,
        subCategory: 4,
        account: 8,
        description: 9
      }
    }
  }
}

const spreadSheets : { [name: string]: SpreadSheetConfig } = {
  main: {
    id: "1r93R3hKOCV6St4sac_88YZRM6OuYO9LxaxwMa2gWomE",
    name: "Principal",
    class: SpreadSheetClass.Main,
    sheets: {
      main: {
        name: "Principal",
        class: MainSheetClass.Main,
        columns: {
          category: 1,
          subCategory: 1,
          date: 1,
          amount: 1,
          account: 1,
          origin: 1
        }
      },
      recurrentSpends: {
        name: "Recurrentes",
        class: MainSheetClass.Main,
        columns: {
          timestamp: 1,
          taskId: 1,
          category: 1,
          subCategory: 1,
          description: 1,
          account: 1,
          amount: 1,
          completed: 1
        }
      }
    }
  },
  monthly: {
    id: "1nE0j6lgMZdimaLtO_31OKIpzVNNGBkVGB_xiPeAHoOw",
    name: "Mensual",
    class: SpreadSheetClass.Monthly,
    sheets: {
      all_categories: {
        name: "Categorías",
        class: MonthlySheetClass.AllCategories,
        columns: {
          "Column A": 0,
          "Column B": 0,
          Total: 0
        }
      },
      category1: {
        name: "",
        class: MonthlySheetClass.Category,
        columns: {
          "Column A": 0,
          "Column B": 0,
          Total: 0
        }
      },
      category2: {
        name: "",
        class: MonthlySheetClass.Category,
        columns: {
          "Column A": 0,
          "Column B": 0,
          Total: 0
        }
      },
      account1: {
        name: "Account 1",
        class: MonthlySheetClass.Accounts,
        columns: {
          "Column A": 0,
          "Column B": 0,
          Total: 0
        }
      },
      account2: {
        name: "Account 2",
        class: MonthlySheetClass.Accounts,
        columns: {
          "Column A": 0,
          "Column B": 0,
          Total: 0
        }
      },
      account3: {
        name: "Account 3",
        class: MonthlySheetClass.Accounts,
        columns: {
          "Column A": 0,
          "Column B": 0,
          Total: 0
        }
      }
    }
  }
}

const defaultIncome = 10

const recurrentSpendsMailRecipient = "asd@asd.com"

const recurrentSpendsTaskList = "xxx"

const recurrentSpendsLanguage = "en"

const recurrentSpends: RecurrentSpend[] = [
  {
    amount: 1,
    category: "Category x",
    subCategory: "Subcategory x",
    account: "Account x",
    description: "X",
    dayOfMonth: 4,
    sendTask: true,
    sendMail: true,
    taskTitle: "Check ...",
    taskDescription: "Check ... ...",
    mailSubject: "Check ...",
    mailBody: "Check ... ...",
    type: "Automatic"
  }
]
