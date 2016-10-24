import {NgModule} from "@angular/core";
import MirageModule from "../shared/mirage.module";
import {MessageService} from "./message.service";
import {MessageListComponent} from "./message-list.component";
import {messageRouting} from "./message.routing";
import {MessageDetailComponent} from "./message-detail.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, messageRouting],
    declarations: [MessageListComponent, MessageDetailComponent],
    providers: [MessageService]

})
export default class MessageModule {
}
