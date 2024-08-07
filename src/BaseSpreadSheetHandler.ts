abstract class BaseSpreadSheetHandler {
  public config: SpreadSheetConfig

  private sheetHandlers: BaseSheetHandler[]

  constructor(config: SpreadSheetConfig, sheetHandlers: BaseSheetHandler[]) {
    this.sheetHandlers = sheetHandlers
    this.config = config
  }

  processSpend(spend: Spend): void {
    this.sheetHandlers.forEach((sheetHandler) => {
      sheetHandler.processSpend(spend)
    })
  }

  processReimbursement(spend: Reimbursement): void {
    this.sheetHandlers.forEach((sheetHandler) => {
      sheetHandler.processReimbursement(spend)
    })
  }

  validate() {
    console.log(`Validating spreadsheet '${this.config.name}' ...`)
    this.sheetHandlers.forEach((sheetHandler) => {
      console.log(`Validating sheet '${sheetHandler.sheetConfig.name}'...`)
      try {
        sheetHandler.validate()
      } catch (ex) {
        console.error((ex as Error).stack)
      }
    })
  }

}
