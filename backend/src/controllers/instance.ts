import { Request, Response } from "express";
import os from "os";

export const getInstanceInfo = (req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        platform: os.platform(),
        architectre: os.arch(),
        hostname: os.hostname(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        homeDirectory: os.homedir(),
        tempDirectory: os.tmpdir(),
        cpuCores: os.cpus(),
        uptime: os.uptime(),
        loadAvg: os.loadavg(),
        userInfo: os.userInfo(),
        networkInterface: os.networkInterfaces(),
        endianness: os.endianness(),
        release: os.release(),
        eolChar: os.EOL,

    });
};

/**
 * Responds to a ping request with a pong message.
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object.
 * @returns {void}
 */
export const ping = (req: Request, res: Response) => {
  // Sends a 200 status code and a JSON response
  res.status(200).json({
    success: true,
    data: {
        message: "pong",
        hostname: os.hostname(),
        cpuCores: os.cpus(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
    }
  });
};
