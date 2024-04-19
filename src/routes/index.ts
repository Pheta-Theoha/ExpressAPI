import express from "express";
import PingController from "../controllers/ping";
import NomineesController from "../controllers/nominees";
import VotersController from "../controllers/voters";
import RequestsController from "../controllers/requests";
import VotesController from "../controllers/votes";
import CategoriesController from "../controllers/categories";
import socialHandlesController from "../controllers/socialHandles";

const router = express.Router()

router.get('/ping', async(_req, res)=> {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

router.get('/nominees', async(_req, res) => {
    const controller = new NomineesController();
    const response = await controller.getNominee();
    return res.send(response);
});

router.get('/voters', async(_req, res) => {
    const controller = new VotersController();
    const response = await controller.getVoter();
    return res.send(response);
});

router.get('/requests', async(_req, res) => {
    const controller = new RequestsController();
    const response = await controller.getRequest();
    return res.send(response);
});

router.get('/categories', async(_req, res) => {
    const controller = new CategoriesController();
    const response = await controller.getCategory();
    return res.send(response);
});

router.get('/votes', async(_req, res) => {
    const controller = new VotesController();
    const response = await controller.getVote();
    return res.send(response);
});

router.get('/socialhandles', async(_req, res) => {
    const controller = new socialHandlesController();
    const response = await controller.getsocialHandle();
    return res.send(response);
});

export default router