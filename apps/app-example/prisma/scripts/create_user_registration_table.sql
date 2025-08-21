-- Criação da tabela UserRegistration para o formulário de registro de usuários
-- Este script corresponde ao modelo UserRegistration no schema.prisma

-- Criar enum para Gender se não existir
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Gender') THEN
        CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');
    END IF;
END
$$;

-- Criar tabela user_registrations se não existir
CREATE TABLE IF NOT EXISTS "user_registrations" (
    "id" TEXT NOT NULL,
    
    -- Avatar
    "avatarUrl" TEXT,
    
    -- Basic Information  
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    
    -- Date of Birth
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    
    -- Gender
    "gender" "Gender" NOT NULL,
    
    -- Country
    "country" TEXT NOT NULL,
    
    -- Bio
    "bio" TEXT NOT NULL,
    
    -- Preferences
    "receiveNewsletter" BOOLEAN NOT NULL DEFAULT false,
    "receivePromotions" BOOLEAN NOT NULL DEFAULT false,
    
    -- Notifications
    "emailNotifications" BOOLEAN NOT NULL DEFAULT true,
    "smsNotifications" BOOLEAN NOT NULL DEFAULT false,
    
    -- Timestamps
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_registrations_pkey" PRIMARY KEY ("id")
);

-- Criar índice único no email se não existir
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE indexname = 'user_registrations_email_key'
    ) THEN
        CREATE UNIQUE INDEX "user_registrations_email_key" ON "user_registrations"("email");
    END IF;
END
$$;

-- Comentários para documentação
COMMENT ON TABLE "user_registrations" IS 'Tabela para armazenar dados de registro de usuários do formulário user-registration';
COMMENT ON COLUMN "user_registrations"."avatarUrl" IS 'URL opcional da foto de perfil do usuário';
COMMENT ON COLUMN "user_registrations"."firstName" IS 'Nome do usuário (mínimo 2 caracteres)';
COMMENT ON COLUMN "user_registrations"."lastName" IS 'Sobrenome do usuário (mínimo 2 caracteres)';
COMMENT ON COLUMN "user_registrations"."email" IS 'Email único do usuário';
COMMENT ON COLUMN "user_registrations"."dateOfBirth" IS 'Data de nascimento do usuário';
COMMENT ON COLUMN "user_registrations"."gender" IS 'Gênero do usuário: male, female ou other';
COMMENT ON COLUMN "user_registrations"."country" IS 'País do usuário';
COMMENT ON COLUMN "user_registrations"."bio" IS 'Biografia do usuário (10-500 caracteres)';
COMMENT ON COLUMN "user_registrations"."receiveNewsletter" IS 'Preferência para receber newsletter';
COMMENT ON COLUMN "user_registrations"."receivePromotions" IS 'Preferência para receber promoções';
COMMENT ON COLUMN "user_registrations"."emailNotifications" IS 'Preferência para notificações por email';
COMMENT ON COLUMN "user_registrations"."smsNotifications" IS 'Preferência para notificações por SMS';
