/**
 * 
 */
import { Vercel } from '@vercel/sdk';
export default class Tick {
    constructor() { }
    static async tick(req, res) {
        const { return_url, settings } = req.body;
        try {
            let token;
            for (const setting of settings) {
                if (setting.label.toLowerCase() === 'vercel token') {
                    token = setting.default
                }
            }
            if (!token) {
                throw new Error('VERCEL_TOKEN is required');
            }
            const vercel = new Vercel({
                bearerToken: token
            });
            const vercel_data = await vercel.projects.getProjects({});
            let projectDetails ="";//[]
            for (const project of vercel_data.projects) {
                let deployment = "";//[]
                for (const dep of project.latestDeployments) {
                    deployment+=`
                    Created At: ${new Date(dep.createdAt).toLocaleString()},
                    Building At: ${new Date(dep.buildingAt).toLocaleString()},
                    Ready State: ${dep.readyState}
                    `;
                }
                projectDetails+=`
                Project Name:  ${project.name},
                Last Update:  ${new Date(project.updatedAt).toLocaleString()},
                Deployment URL:  ${project.latestDeployments[0].alias[0]},
                Deployment Count: ${project.latestDeployments.length},
                Recent Delpoyment: 
                ${deployment}
                `
            }
            const data = {
                message: projectDetails,
                username: "Vercel Server Performance Integrator",
                event_name: "Vercel Server Performance Report",
                status: "success"
            }
      
            const result = await fetch(`${return_url}`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            return res.status(202).json({ status: 202, description: "Data received successfully!" });
        } catch (error) {
            const data = {
                message: "Failed to generate report",
                username: "Vercel Server Performance Integrator",
                event_name: "Vercel Server Performance Report",
                status: "error"
              }
              
            await fetch(`${return_url}`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            return res.json({ status: 500, description: "Failed to send notification" });
        }
    }
}