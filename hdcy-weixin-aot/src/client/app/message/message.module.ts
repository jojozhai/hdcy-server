import {NgModule} from "@angular/core";
import {MessageService} from "./message.service";
import {MessageListComponent} from "./message-list.component";
import {messageRouting} from "./message.routing";
import {MessageDetailComponent} from "./message-detail.component";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [SharedModule, messageRouting],
    declarations: [MessageListComponent, MessageDetailComponent],
    providers: [MessageService]

})
export class MessageModule {
}
