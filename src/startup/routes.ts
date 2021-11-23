import * as authLoginRoutes from "../components/authLogin/authLoginRoutes";
import express from "express";

export const appRouter = (app: any) => {
    app.use('api/auth', authLoginRoutes);
}