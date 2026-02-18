import DashboardLayout from "@/layouts/DashboardLayout"
import { FC } from "react"
import { Card, Table, Button, Pagination } from "@/shared/components/ui"

const OrdersPage: FC = () => {
  const orders = [
    { id: 101, user: "Alice", total: "$50", status: "Pending", date: "2026-02-18" },
    { id: 102, user: "Bob", total: "$120", status: "Shipped", date: "2026-02-17" },
    { id: 103, user: "Charlie", total: "$75", status: "Delivered", date: "2026-02-16" },
  ]

  const statusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-200 text-yellow-800"
      case "Shipped": return "bg-blue-200 text-blue-800"
      case "Delivered": return "bg-gre
