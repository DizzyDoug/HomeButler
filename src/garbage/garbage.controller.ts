import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { json } from '../../node_modules/@types/body-parser';


@Controller('api/garbage')
export class GarbageController {

    @Get()
    findAll() {
        return [{date: 19700101, types: [{name: 'Papier', iconId: 'paper'}]}];
    }

    @Get('dates/:date')
    findByDate(@Param('date') date) {
        return 'finding entry for day of ' + date;
    }

    @Post('dates')
    createEntry(@Body() garbageEntry) {
        return 'creating entry in database ' + JSON.stringify(garbageEntry);
    }

    @Put('dates/:date')
    updateEntry(@Param('date') date) {
        return 'Updating date for ' + date;
    }

    @Get('years/:year')
    findByYear(@Param('year') year) {
        return 'finding entries for ' + year;
    }

    @Get('tomorrow')
    findTomorrow() {
        return "Getting next day";
    }
}