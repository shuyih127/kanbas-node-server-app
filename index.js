import express from 'express'
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js"
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import "dotenv/config";
import AssignmentRoutes from './Kanbas/Assignments/route.js';
import EnrollmentRoutes from './Kanbas/Enrollments/route.js';

const app = express()
app.use(
        cors({
          credentials: true,
          origin: process.env.NETLIFY_URL || "http://localhost:3000",
        })
       );       
const sessionOptions = {
        secret: "any string",
        resave: false,
        saveUninitialized: false,
      };
      app.use(
        session(sessionOptions)
      );  
if (process.env.NODE_ENV !== "development") {
        sessionOptions.proxy = true;
        sessionOptions.cookie = {
          sameSite: "none",
          secure: true,
          domain: process.env.NODE_SERVER_DOMAIN,
        };
}
app.use(session(sessionOptions));
app.use(express.json());
Lab5(app);
Hello(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
app.listen(process.env.PORT || 4000)