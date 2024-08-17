import { Metadata } from "next"

import { listCustomerOrders } from "@lib/data"
import OrderOverview from "@modules/account/components/order-overview"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Ordenes",
  description: "Administra tus pedidos",
}

export default async function Orders() {
  const orders = await listCustomerOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Ordenes</h1>
        <p className="text-base-regular">
          Consulte sus pedidos anteriores y su estado. También puede crear
          devoluciones o cambios de sus pedidos si es necesario.
        </p>
      </div>
      <div>
        <OrderOverview orders={orders} />
      </div>
    </div>
  )
}
