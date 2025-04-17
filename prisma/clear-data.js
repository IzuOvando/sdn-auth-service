const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function clearAllData() {
    try {
        await prisma.user.deleteMany({});
        console.log('Todos los users han sido eliminados.');
    } catch (error) {
        console.error('Error al eliminar los registros:', error);
    } finally {
        await prisma.$disconnect();
    }
}

clearAllData();
