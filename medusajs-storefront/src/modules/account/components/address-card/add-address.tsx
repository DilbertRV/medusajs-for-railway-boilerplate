"use client"

import { Plus } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Button, Heading } from "@medusajs/ui"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import useToggleState from "@lib/hooks/use-toggle-state"
import { addCustomerShippingAddress } from "@modules/account/actions"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"

const AddAddress = ({ region }: { region: Region }) => {
  const [successState, setSuccessState] = useState(false)
  const { state, open, close: closeModal } = useToggleState(false)

  const [formState, formAction] = useFormState(addCustomerShippingAddress, {
    success: false,
    error: null,
  })

  const close = () => {
    setSuccessState(false)
    closeModal()
  }

  useEffect(() => {
    if (successState) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successState])

  useEffect(() => {
    if (formState.success) {
      setSuccessState(true)
    }
  }, [formState])

  return (
    <>
      <button
        className="border border-ui-border-base rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between"
        onClick={open}
      >
        <span className="text-base-semi">Nueva dirección</span>
        <Plus />
      </button>

      <Modal isOpen={state} close={close}>
        <Modal.Title>
          <Heading className="mb-2">Añadir dirección</Heading>
        </Modal.Title>
        <form action={formAction}>
          <Modal.Body>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
                <Input
                  label="Nombre"
                  name="first_name"
                  required
                  autoComplete="given-name"
                />
                <Input
                  label="Apellidos"
                  name="last_name"
                  required
                  autoComplete="family-name"
                />
              </div>
              {/* <Input
                label="Company"
                name="company"
                autoComplete="organization"
              /> */}
              <Input
                label="Dirección"
                name="address_1"
                required
                autoComplete="address-line1"
              />
              {/* <Input
                label="Color "
                name="address_2"
                autoComplete="address-line2"
              /> */}
              <div className="grid grid-cols-[144px_1fr] gap-x-2">
                {/* <Input
                  label="Postal code"
                  name="postal_code"
                  required
                  autoComplete="postal-code"
                /> */}
                <Input
                  disabled
                  label="City"
                  name="city"
                  required
                  autoComplete="locality"
                  value={"Liberia"}
                />
              </div>
              <Input
                disabled
                label="Province / State"
                name="province"
                autoComplete="address-level1"
                value={"Guanacaste"}
              />
              {/* <CountrySelect
                region={region}
                name="country_code"
                required
                autoComplete="country"
              /> */}
              <Input label="Teléfono" name="phone" autoComplete="phone" />
            </div>
            {formState.error && (
              <div className="text-rose-500 text-small-regular py-2">
                {formState.error}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="flex gap-3 mt-6">
              <Button
                type="reset"
                variant="secondary"
                onClick={close}
                className="h-10"
              >
                Cancelar
              </Button>
              <SubmitButton>Guardar</SubmitButton>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddAddress
