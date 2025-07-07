import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { serverSecurity } from "./security";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Easter Egg: Hidden security endpoint for researchers
  app.get("/api/security/stats", (req, res) => {
    // Only allow this in development or for specific user agents
    const userAgent = req.get('User-Agent') || '';
    const isDev = process.env.NODE_ENV === 'development';
    const isSecurityResearcher = userAgent.includes('security') || userAgent.includes('researcher');

    if (isDev || isSecurityResearcher) {
      res.json({
        ...serverSecurity.getSecurityStats(),
        easteregg: '🥚 You found the hidden security endpoint!',
        quote: '"The art of war teaches us to rely not on the likelihood of the enemy\'s not coming, but on our own readiness to receive him." - Sun Tzu',
        team: 'ZowT Digital Forensics Team',
        motto: 'Protecting digital assets through advanced forensic analysis'
      });
    } else {
      res.status(404).json({ 
        error: 'Not Found',
        hint: '🔍 Try adding "security" to your User-Agent header'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
