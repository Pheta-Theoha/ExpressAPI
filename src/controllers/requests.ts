import { Get, Route } from "tsoa";

interface RequestsResponse{
    message: string;
}

@Route("requests")
export default class RequestsController {
    @Get("/")
    public async getRequest(): Promise<RequestsResponse> {
        return {
            message: "Request"
        };
    }
}