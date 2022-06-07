import { Injectable } from '@nestjs/common';

export type Words = {
  Words: string[];
};

@Injectable()
export class AppService {
  getAutoCompleteWords(): Words {
    console.log('remember that arrays need types too');
    return { Words: ['pancake', 'delicous'] };
  }
}
