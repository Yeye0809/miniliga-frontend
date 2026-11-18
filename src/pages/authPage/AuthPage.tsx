import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginMockUser, registerMockUser } from "../../auth/mockAuth";
import "./AuthPage.css";

interface AuthPageProps {
  mode: "login" | "register";
}

export function AuthPage({ mode }: AuthPageProps) {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setHasError(false);

    const formData = new FormData(event.currentTarget);
    if (isRegister && formData.get("password") !== formData.get("confirmPassword")) {
      setMessage("Las contraseñas no coinciden.");
      setHasError(true);
      return;
    }

    setIsSubmitting(true);
    try {
      if (isRegister) {
        await registerMockUser({
          firstName: String(formData.get("firstName")).trim(),
          lastName: String(formData.get("lastName")).trim(),
          identityNumber: String(formData.get("identityNumber")).trim(),
          phone: String(formData.get("phone")).trim(),
          email: String(formData.get("email")).trim(),
        }, String(formData.get("password")));
        setMessage("Cuenta creada. Ya puedes iniciar sesión con tu teléfono y contraseña.");
      } else {
        await loginMockUser(
          String(formData.get("phone")),
          String(formData.get("password")),
        );
        navigate("/torneos");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No se pudo completar la operación.");
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={`auth-page${isRegister ? " auth-page--register" : ""}`}>
      <section className={`auth-card${isRegister ? " auth-card--register" : ""}`} aria-labelledby="auth-title">
        <Link className="auth-brand" to="/" aria-label="MiniLiga, volver al inicio">
          <span className="auth-brand-mark" aria-hidden="true">M</span>
          <span>MINILIGA</span>
        </Link>

        <p className="auth-eyebrow">{isRegister ? "Únete a la comunidad" : "Qué bueno verte de nuevo"}</p>
        <h1 id="auth-title">{isRegister ? "Crea tu cuenta" : "Inicia sesión"}</h1>
        <p className="auth-description">
          {isRegister
            ? "Regístrate para empezar a organizar y disfrutar tus torneos."
            : "Ingresa con tu número de teléfono y contraseña."}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="auth-name-fields">
              <label className="auth-field">
                <span>Nombre</span>
                <input name="firstName" type="text" autoComplete="given-name" required />
              </label>
              <label className="auth-field">
                <span>Apellido</span>
                <input name="lastName" type="text" autoComplete="family-name" required />
              </label>
            </div>
          )}

          {isRegister && (
            <label className="auth-field">
              <span>Cédula</span>
              <input
                name="identityNumber"
                type="text"
                autoComplete="off"
                minLength={6}
                maxLength={20}
                required
              />
            </label>
          )}

          <label className="auth-field">
            <span>Número de teléfono</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Ej. +57 312 123 4567"
              pattern="(?=.*\d)[0-9+().\s-]{10,20}"
              title="Ingresa un teléfono válido con al menos 10 dígitos."
              required
            />
          </label>

          {isRegister && (
            <label className="auth-field">
              <span>Correo electrónico</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          )}

          <label className="auth-field">
            <span>Contraseña</span>
            <input
              name="password"
              type="password"
              autoComplete={isRegister ? "new-password" : "current-password"}
              minLength={8}
              required
            />
            {isRegister && <small>Debe tener al menos 8 caracteres.</small>}
          </label>

          {isRegister && (
            <label className="auth-field">
              <span>Confirmar contraseña</span>
              <input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required />
            </label>
          )}

          <button className="auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Procesando…" : isRegister ? "Crear cuenta" : "Iniciar sesión"}
          </button>
          {message && (
            <p className={`auth-message${hasError ? " auth-message--error" : ""}`} role={hasError ? "alert" : "status"}>
              {message}
            </p>
          )}
        </form>

        <p className="auth-switch">
          {isRegister ? "¿Ya tienes una cuenta?" : "¿Aún no tienes una cuenta?"}{" "}
          <Link to={isRegister ? "/iniciar-sesion" : "/registro"}>
            {isRegister ? "Inicia sesión" : "Regístrate"}
          </Link>
        </p>
        <Link className="auth-home-link" to="/">Volver al inicio</Link>
      </section>
    </main>
  );
}
