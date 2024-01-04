import { Controller, Post, Body, Param, Delete, Get, Put, ValidationPipe } from '@nestjs/common';
import { UserAccountService } from './userAccount.service';

@Controller('user')
export class UserAccountController {
    constructor(private userAccountService: UserAccountService) { }

    @Post()
    async create(
        @Body(new ValidationPipe()) createUserAccount: any,
        @Body(new ValidationPipe()) createProfile: any,
        ) {
        return this.userAccountService.create(createUserAccount);
    };

    @Get()
    async findAll() {
        return this.userAccountService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id') id: string) {
        return this.userAccountService.findOne(id);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: string) {
        return this.userAccountService.delete(id)
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) updateUserAccount: any) {
        return this.userAccountService
            .update(id, updateUserAccount);
    }
}