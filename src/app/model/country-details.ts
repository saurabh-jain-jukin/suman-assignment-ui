export class CountryDetails {
  constructor(
  public  country: String,
  public  code: String,
  public  confirmed:Number,
  public  recovered:Number,
  public  critical:Number,
  public  deaths:Number,
  public  latitude:DoubleRange,
  public  longitude:DoubleRange,
  public  lastChange: String,
  public  lastUpdate: String,
  public  favourite:Boolean,
  public comments: string[]){}
}
