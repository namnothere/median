import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
    @ApiProperty()
    title: string;

    @ApiProperty({required: true})
    description?: string

    @ApiProperty()
    body: string

    @ApiProperty({default: false, required: false})
    published: boolean = false;
}
