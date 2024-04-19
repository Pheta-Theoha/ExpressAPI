import { Get, Route } from "tsoa";

interface VotersResponse{
    message: string;
}

@Route("voters")
export default class VotersController {
    @Get("/")
    public async getVoter(): Promise<VotersResponse> {
        return {
            message: "Voter"
        };
    }
}