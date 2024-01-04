import { Controller, Post, Body, Param, Delete, Get, Put, ValidationPipe } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private gameService: GameService) { }

    @Post()
    async create(@Body(new ValidationPipe()) createGame: any) {
        return this.gameService.create(createGame);
    }

    @Get()
    async findAll() {
        return this.gameService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id') id: string) {
        return this.gameService.findOne(id);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: string) {
        return this.gameService.delete(id)
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) updateGame: any) {
            return this.gameService.update(id, updateGame);
    }
}
