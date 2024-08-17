import React from "react"

import { Customer } from "@medusajs/medusa"
import Link from "next/link"
import AccountNav from "../components/account-nav"

interface AccountLayoutProps {
  customer: Omit<Customer, "password_hash"> | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
        <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4">¿Tienes preguntas?</h3>
            <span className="txt-medium">
              Contáctanos en:{" "}
              <Link
                className="underline text-ui-fg-interactive"
                href="mailto:megafruta20@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                megafruta20@gmail.com
              </Link>{" "}
              o escríbenos por WhatsApp al{" "}
              <Link
                className="underline text-ui-fg-interactive"
                href="https://wa.me/+50685187761"
                target="_blank"
                rel="noreferrer"
              >
                8518-7761
              </Link>
            </span>
          </div>
          {/* <div>
            <UnderlineLink href="/customer-service">
              Servicio al cliente
            </UnderlineLink>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
