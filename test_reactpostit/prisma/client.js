import { PrismaClient } from '@prisma/client'

// if it already exits: check on global env if prisma exists 
// /// --> no new client
// creating new prisma client
const client = globalThis.prisma || new PrismaClient()
// checking if its in production or not
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client