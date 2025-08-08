"use client";

import React from "react";
import { InventoryItem } from "./dashboard";
import { InventoryItemCard } from "./inventory-item";

interface InventoryListProps {
  items: InventoryItem[];
}

export function InventoryList({ items }: InventoryListProps) {
  if (items.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">
        No items in inventory yet. Add some above!
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <InventoryItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}