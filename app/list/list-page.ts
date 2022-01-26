import { NavigatedData, Page,Frame,ApplicationSettings } from '@nativescript/core'
import { Utils } from '@nativescript/core'
import { ListViewModel } from './list-view-model'

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object
  page.bindingContext =new ListViewModel()
}
export function addItem(){
  Frame.topmost().navigate("./addItem/item-page")
}

export function launch(args){
  console.log(args.view.bindingContext.shortUrl);
  Utils.openUrl(args.view.bindingContext.shortUrl)
}
export function reset(){
  ApplicationSettings.setString("urlCollection","[]")
  Frame.topmost().navigate("./list/list-page")
}