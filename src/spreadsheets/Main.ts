/* Sheets */

class MainSheet extends BaseSheetHandler {
  processSpend(spend: Spend) {
    const newRow = [
      new Date(),
      spend.date,
      spend.origin,
      spend.category,
      spend.subCategory,
      spend.description,
      spend.account,
      spend.value
    ]
    addRow(this.spreadSheetConfig.id, this.sheetConfig.name, newRow)
  }
}

/* Spreadsheet */

class Main extends BaseSpreadSheetHandler {
  constructor(spreadSheetConfig: SpreadSheetConfig) {
    super(spreadSheetConfig, [new MainSheet(spreadSheetConfig, spreadSheetConfig.sheets.main)])
  }
}

spreadSheetHandlers.push(new Main(spreadSheetConfig.main))

console.info("Class Main from src/spreadsheets/Main.ts loaded.")