import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppChat } from 'src/app/models/chat';
import { ChatsService } from 'src/app/services/chats.service';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss'],
})
export class ChatInfoComponent {

  chat: AppChat;
  id = '';

  editMode = false;

  constructor(
    public panel: PanelService,
    private route: ActivatedRoute,
    private chats: ChatsService
  ) {
    const params = this.route.snapshot.params;
    if (params.chat) {
      this.id = params.chat;
      this.chats.items$.subscribe(all => {
        this.chat = all.find(e => e.id === this.id);
      });
    } else {
      this.chat = null;
    }
  }

  ionViewWillEnter() {
    this.chats.subscribe();
    this.panel.show('chats', false);
  }

  ionViewWillLeave() {
    this.chats.unsubscribe();
    this.panel.show();
  }
}
