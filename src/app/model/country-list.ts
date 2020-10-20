export class CountryList {
  constructor(
    public name : String ,
    public alpha2code:String ,
    public  alpha3code:String,
    public  latitude:DoubleRange,
    public  longitude:DoubleRange
    ){}
}
