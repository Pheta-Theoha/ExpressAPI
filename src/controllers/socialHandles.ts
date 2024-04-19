import { Get, Route } from "tsoa";

interface socialHandlesResponse{
    message: string;
}

@Route("socialhandles")
export default class socialHandlesController {
    @Get("/")
    public async getsocialHandle(): Promise<socialHandlesResponse> {
        return {
            message: "Social Handle"
        };
    }
}