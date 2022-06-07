import { Controller, Get } from '@nestjs/common';
import { AppService, Words } from './app.service';

@Controller('words')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAutoCompleteWords(): Words {
    return this.appService.getAutoCompleteWords();
  }
}
