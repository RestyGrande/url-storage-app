import { NavigatedData, Page,Frame ,ApplicationSettings, HttpContent} from '@nativescript/core'
import { Http, HttpResponse } from '@nativescript/core'
import {ListViewModel} from "../list/list-view-model"
let longUrl:any



export function onNavigatingTo(args: NavigatedData) {

  const page = <Page>args.object
  longUrl=page.getViewById("longUrl")
 
}
export function back(){
  Frame.topmost().navigate("./list/list-page")
}

export  function shorten(){
  if(longUrl.text){
console.log(urlChecker(longUrl.text));

  Http.request({
    url: `https://tinyurl.com/api-create.php?url=${urlChecker(longUrl.text)}`,
    method: 'GET'
  }).then(
    (response: HttpResponse) => {
      // Argument (response) is HttpResponse
      console.log(`Response Status Code: ${response.statusCode}`)
      console.log(`Response Headers: ${response.statusCode}`)
      console.log(`Response Content: ${response.content}`)
      if(response.statusCode == 200){
       const shortUrl = String(response.content)
       const listViewModel = new ListViewModel()
       listViewModel.add(longUrl.text,shortUrl)
        Frame.goBack()
      alert({title:"Success!",message:`${response.content}` ,okButtonText:"close"})
      }
      else{
        alert({title:"Warning!",message:"The URL must be valid!" ,okButtonText:"close"})
      }
    },
  
  )
  }
  else{
    alert({title:"Attention!",message:"The URL field cannot be empty!" ,okButtonText:"close"})
  }

}

function urlChecker(url):string{
  if(!url.includes(".")){
return `${url}.com`
  }else{
  const urlCheck =RegExp("^(http|https)://")
  return urlCheck.test(longUrl.text) ? longUrl.text :"http://"+longUrl.text

}
}