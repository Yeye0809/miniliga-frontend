export interface MockUser {
  firstName: string;
  lastName: string;
  identityNumber: string;
  phone: string;
  email: string;
}

interface StoredUser extends MockUser {
  salt: string;
  passwordHash: string;
}

const usersKey = "miniliga:users";
const sessionKey = "miniliga:session";

function readUsers(): StoredUser[] {
  const storedUsers = localStorage.getItem(usersKey);
  if (storedUsers === null) return [];

  const users: unknown = JSON.parse(storedUsers);
  if (!Array.isArray(users)) {
    throw new Error("Los datos locales de usuarios no tienen un formato válido.");
  }
  return users as StoredUser[];
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const value = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", value);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function registerMockUser(
  user: MockUser,
  password: string,
): Promise<void> {
  const users = readUsers();
  const email = user.email.trim().toLowerCase();
  const phone = user.phone.replace(/\D/g, "");
  const identityNumber = user.identityNumber.trim();

  if (users.some((existing) =>
    existing.email.toLowerCase() === email
    || existing.phone.replace(/\D/g, "") === phone
    || existing.identityNumber === identityNumber
  )) {
    throw new Error("Ya existe una cuenta con ese correo, teléfono o cédula.");
  }

  const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  const storedUser: StoredUser = {
    ...user,
    email,
    salt,
    passwordHash: await hashPassword(password, salt),
  };
  localStorage.setItem(usersKey, JSON.stringify([...users, storedUser]));
}

export async function loginMockUser(
  phone: string,
  password: string,
): Promise<MockUser> {
  const normalizedPhone = phone.replace(/\D/g, "");
  const user = readUsers().find((candidate) =>
    candidate.phone.replace(/\D/g, "") === normalizedPhone,
  );

  if (!user || (await hashPassword(password, user.salt)) !== user.passwordHash) {
    throw new Error("El teléfono o la contraseña son incorrectos.");
  }

  const sessionUser: MockUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    identityNumber: user.identityNumber,
    phone: user.phone,
    email: user.email,
  };
  localStorage.setItem(sessionKey, JSON.stringify(sessionUser));
  return sessionUser;
}

export function logoutMockUser(): void {
  localStorage.removeItem(sessionKey);
}
