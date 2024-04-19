import { Get, Route } from "tsoa";

interface NomineesResponse{
    message: string;
}

@Route("nominees")
export default class NomineesController {
    @Get("/")
    public async getNominee(): Promise<NomineesResponse> {
        return {
            message: "Nominee"
        };
    }
}