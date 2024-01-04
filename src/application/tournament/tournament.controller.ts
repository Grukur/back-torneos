import { Controller, Post, Body, Param, Delete, Get, Put, ValidationPipe } from '@nestjs/common';
import { TournamentService } from './tournament.service';

@Controller('torneo')
export class TournamentController {
    constructor(private tournamentService: TournamentService) { }

    @Post()
    async create(@Body(new ValidationPipe()) createTournament: any) {      
        return this.tournamentService.create(createTournament);
    };

    @Get()
    async findAll() {
        return this.tournamentService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id') id: string) {
        return this.tournamentService.findOne(id);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: string) {
        return this.tournamentService.delete(id)
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) updateTodo: any) {
            return this.tournamentService.update(id, updateTodo);
    }
}


