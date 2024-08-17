"use client"

import { useFormState } from "react-dom"

import { signUp } from "@modules/account/actions"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">
        Conviértete en miembro de Mega Fruta 🍉
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Regístrate para tener acceso a tus pedidos, direcciones y más. No te
        preocupes, aún puedes seguir comprando sin una cuenta.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nombre"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Apellido"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Correo"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Teléfono" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Contraseña"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Al unirte a Mega Fruta, aceptas nuestros{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Política de Privacidad
          </LocalizedClientLink>{" "}
          y{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Términos de Uso
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6">Unirse</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        ¿Ya eres miembro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Inicia sesión
        </button>
        .
      </span>
    </div>
  )
}

export default Register
