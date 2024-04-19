import { Get, Route } from "tsoa";

interface CategoriesResponse{
    message: string;
}

@Route("nominees")
export default class CategoriesController {
    @Get("/")
    public async getCategory(): Promise<CategoriesResponse> {
        return {
            message: "Category"
        };
    }
}