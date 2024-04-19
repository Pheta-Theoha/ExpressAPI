import { Get, Route } from "tsoa";

interface VotesResponse{
    message: string;
}

@Route("votes")
export default class VotesController {
    @Get("/")
    public async getVote(): Promise<VotesResponse> {
        return {
            message: "Vote"
        };
    }
}