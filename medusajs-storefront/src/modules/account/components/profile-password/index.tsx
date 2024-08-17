"use client"

import { Customer } from "@medusajs/medusa"
import React, { useEffect } from "react"

import Input from "@modules/common/components/input"

import { updateCustomerPassword } from "@modules/account/actions"
import { useFormState } from "react-dom"
import AccountInfo from "../account-info"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [successState, setSuccessState] = React.useState(false)

  const [state, formAction] = useFormState(updateCustomerPassword, {
    customer,
    success: false,
    error: false,
  })

  const clearState = () => {
    setSuccessState(false)
  }

  useEffect(() => {
    setSuccessState(state.success)
  }, [state])

  return (
    <form action={formAction} onReset={() => clearState()} className="w-full">
      <AccountInfo
        label="Contraseña"
        currentInfo={<span>La no se muestra por razones de seguridad.</span>}
        isSuccess={successState}
        isError={!!state.error}
        errorMessage={state.error}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Contraseña actual"
            name="old_password"
            required
            type="password"
          />
          <Input
            label="Nueva contraseña"
            type="password"
            name="new_password"
            required
          />
          <Input
            label="Confirmar contraseña"
            type="password"
            name="confirm_password"
            required
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileName
