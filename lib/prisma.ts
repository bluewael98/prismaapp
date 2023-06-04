import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

// This 'if' statement checks if the current environment is set to 'production'.
if (process.env.NODE_ENV === 'production') {
  // If it is, a new instance of PrismaClient is created and assigned to the 'prisma' variable.
  prisma = new PrismaClient();
} else {
  // If the environment is not set to 'production', this 'if' statement checks if the global 'prisma' object is already defined.
  if (!global.prisma) {
    // If it's not defined, a new instance of PrismaClient is created and assigned to the global 'prisma' object.
    global.prisma = new PrismaClient();
  }
  // The 'prisma' variable is assigned the value of the global 'prisma' object.
  prisma = global.prisma;
}


export default prisma