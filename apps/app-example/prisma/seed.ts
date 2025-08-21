import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed dos dados de UserRegistration...");

  // Limpar dados existentes (opcional)
  await prisma.userRegistration.deleteMany({});
  console.log("🗑️  Dados existentes removidos");

  // Criar dados de exemplo
  const users = [
    {
      firstName: "João",
      lastName: "Silva",
      email: "joao.silva@example.com",
      dateOfBirth: new Date("1990-05-15"),
      gender: "male" as const,
      country: "br",
      bio: "Desenvolvedor full-stack apaixonado por tecnologia e inovação. Gosto de criar soluções que impactem positivamente a vida das pessoas.",
      receiveNewsletter: true,
      receivePromotions: false,
      emailNotifications: true,
      smsNotifications: false,
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      firstName: "Maria",
      lastName: "Santos",
      email: "maria.santos@example.com",
      dateOfBirth: new Date("1985-08-22"),
      gender: "female" as const,
      country: "br",
      bio: "Designer UX/UI com mais de 10 anos de experiência. Foco na criação de experiências digitais inclusivas e acessíveis.",
      receiveNewsletter: true,
      receivePromotions: true,
      emailNotifications: true,
      smsNotifications: true,
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=400&h=400&fit=crop&crop=face",
    },
    {
      firstName: "Alex",
      lastName: "Johnson",
      email: "alex.johnson@example.com",
      dateOfBirth: new Date("1995-12-03"),
      gender: "other" as const,
      country: "us",
      bio: "Artista digital e content creator. Explorando as interseções entre arte, tecnologia e expressão pessoal através de meios digitais.",
      receiveNewsletter: false,
      receivePromotions: false,
      emailNotifications: false,
      smsNotifications: false,
      avatarUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
    },
    {
      firstName: "Ana",
      lastName: "García",
      email: "ana.garcia@example.com",
      dateOfBirth: new Date("1988-03-17"),
      gender: "female" as const,
      country: "es",
      bio: "Product Manager especializada em produtos digitais. Amo conectar necessidades dos usuários com soluções de negócio inovadoras.",
      receiveNewsletter: true,
      receivePromotions: true,
      emailNotifications: true,
      smsNotifications: false,
    },
    {
      firstName: "Carlos",
      lastName: "Mendes",
      email: "carlos.mendes@example.com",
      dateOfBirth: new Date("1992-09-30"),
      gender: "male" as const,
      country: "br",
      bio: "Engenheiro de software focado em arquiteturas cloud e DevOps. Sempre buscando otimizar processos e melhorar a performance dos sistemas.",
      receiveNewsletter: false,
      receivePromotions: true,
      emailNotifications: true,
      smsNotifications: true,
    },
  ];

  console.log("👥 Criando usuários de exemplo...");

  for (const userData of users) {
    const user = await prisma.userRegistration.create({
      data: userData,
    });
    console.log(
      `✅ Usuário criado: ${user.firstName} ${user.lastName} (${user.email})`
    );
  }

  console.log(
    `🎉 Seed concluído! ${users.length} usuários criados com sucesso.`
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Erro durante o seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
