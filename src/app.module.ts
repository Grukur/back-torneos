import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentModule } from './application/tournament/tournament.module';
import { UserAccountModule } from './application/userAccount/userAccount.module';
import { HistoryModule } from './application/histories/histories.module';
import { GameModule } from './application/game/game.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://Wolf:Wolf@wolfdevs.0tgnyjc.mongodb.net/?retryWrites=true&w=majority'),
    UserAccountModule,
    TournamentModule,
    HistoryModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
