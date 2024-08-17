"use client"

import { Order } from "@medusajs/medusa"
import { Button, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import OrderCard from "../order-card"

const OrderOverview = ({ orders }: { orders: Order[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h2 className="text-large-semi">No hay nada que mostrar</h2>
      <p className="text-base-regular">
        Aún no has realizado ningún pedido. ¿Qué tal si echas un vistazo a
        nuestros productos?
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button
            size="large"
            variant="primary"
            className={clx("bg-red-500 hover:bg-red-500/80 shadow-md")}
          >
            Continuar comprando
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
