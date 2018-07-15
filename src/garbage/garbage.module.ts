import { Module } from '@nestjs/common';
import { GarbageController } from './garbage.controller';


@Module({
    imports: [],
    controllers: [GarbageController],
    providers: [],
})
export class GarbageModule {    
}