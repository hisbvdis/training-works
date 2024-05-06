import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { PrismaClient, apartment } from '@prisma/client';
import { Response } from "express";

const prisma = new PrismaClient();

@Controller('apartments')
export class ApartmentsController {
  @Get()
  async findAll(@Query() searchParams:{price:"asc"|"desc", rooms:string}):Promise<apartment[]> {
    const dbData = prisma.apartment.findMany({
      where: {
        rooms: Number(searchParams?.rooms) ? Number(searchParams?.rooms) : undefined
      },
      orderBy: {
        price: searchParams?.price ?? undefined
      }
    })
    return dbData;
  }

  @Get(':id')
  async findById(@Param() param:{id:string}):Promise<apartment> {
    const dbData = await prisma.apartment.findUnique({
      where: {
        id: param.id
      }
    })
    return dbData;
  }

  @Post()
  async post(@Res() res:Response, @Body() body:{[key:string]:string}):Promise<void> {
    upsert(res, body)
  }

  @Put(':id')
  async put(@Param() param:{id:string}, @Res() res:Response, @Body() body:{[key:string]:string}):Promise<void> {
    upsert(res, body, param.id)
  }

  @Delete(':id')
  async delete(@Res() res:Response, @Param() param:{id:string}):Promise<void> {
    try {
      await prisma.apartment.delete({
        where: {
          id: param.id
        }
      })
      res.status(HttpStatus.OK).send("Deleted");
    } catch(e) {
      res.status(HttpStatus.NOT_FOUND).send("Fault");
    }
  }
}

async function upsert(res, body, id?){
  try {
    await prisma.apartment.upsert({
      where: {
        id: id ?? "-1"
      },
      create: {
        name: body?.name,
        rooms: Number(body.rooms) || undefined,
        price: Number(body.price) || undefined,
        description: body?.description
      },
      update: {
        name: body?.name,
        rooms: Number(body.rooms) || undefined,
        price: Number(body.price) || undefined,
        description: body?.description,
        is_rented: body?.is_rented
      },
    })
    res.status(HttpStatus.OK).send("Successful");
  } catch (e) {
    console.log( e )
    res.status(HttpStatus.NOT_FOUND).send("Wrong data type");
  }
}