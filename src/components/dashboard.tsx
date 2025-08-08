"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddItemForm } from "@/components/add-item-form";
import { InventoryList } from "@/components/inventory-list";
import { toast } from "sonner";
import { ModeToggle } from "@/components/mode-toggle";

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  description?: string;
}

export function Dashboard() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  const handleAddItem = (newItem: Omit<InventoryItem, "id">) => {
    const itemWithId = { ...newItem, id: crypto.randomUUID() };
    setInventory((prev) => [...prev, itemWithId]);
    toast.success(`Added "${newItem.name}" to inventory.`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Luna Inventory Management Tool</h1>
        <ModeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Item</CardTitle>
          </CardHeader>
          <CardContent>
            <AddItemForm onAddItem={handleAddItem} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <InventoryList items={inventory} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}