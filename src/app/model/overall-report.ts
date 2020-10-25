export class OverallReport {

  constructor(
  public  confirmed : Number,
  public  deaths : Number,
  public  recovered: Number,
  public  lastChange:String,
  public  lastUpdate: String,
  public  critical:Number){}
}
