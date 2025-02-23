/**
 * 
 */
import { Vercel } from '@vercel/sdk';
export default class Tick {
    constructor() { }

    static async tick(req, res) {
        const vercel = new Vercel({
            bearerToken: process.env.VERCEL_TOKEN
        });
        const data2 = await vercel.projects.getProjects({});
        const projectDetails = [];
        for (const project of data2.projects) {
            const deployment = [];
            for (const dep of project.latestDeployments) {
                deployment.push({
                    url: dep.url,
                    createdAt: dep.createdAt,
                    buildingAt: dep.buildingAt,
                    readyState: dep.readyState
                })
            }
            projectDetails.push({
                projectName: project.name,
                updatedAt: project.updatedAt,
                deployment,
            })
        }
        res.status(200).json({
            projects: projectDetails
        })
    }
}