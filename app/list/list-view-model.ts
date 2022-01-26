import { Observable ,ApplicationSettings} from '@nativescript/core'
interface List{
shortUrl:string,
longUrl:string
}
export class ListViewModel {
private urlCollection = JSON.parse(ApplicationSettings.getString("urlCollection","[]"))
private url:List[]=this.urlCollection

get getUrl():List[]{
  return this.url
}
add(longUrl,shortUrl):void{
  this.url.push({longUrl,shortUrl})
  ApplicationSettings.setString("urlCollection",JSON.stringify(this.urlCollection))

}

}
