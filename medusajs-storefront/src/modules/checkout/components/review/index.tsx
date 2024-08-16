"use client"

import { Heading, Text, clx } from "@medusajs/ui"

import { Cart } from "@medusajs/medusa"
import { useSearchParams } from "next/navigation"
import PaymentButton from "../payment-button"

const Review = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}) => {
  const searchParams = useSearchParams()

  const isOpen = searchParams.get("step") === "review"

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    cart.payment_session

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Aceptar y pagar
        </Heading>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Al hacer clic en el botón Realizar Pedido, usted confirma que ha
                leído, entendido y aceptado nuestras Condiciones de Uso,
                Condiciones de Venta y Política de Devoluciones y reconoce que
                ha leído la Política de Privacidad de Mega Fruta.
              </Text>
            </div>
          </div>
          <PaymentButton cart={cart} />
        </>
      )}
    </div>
  )
}

export default Review
