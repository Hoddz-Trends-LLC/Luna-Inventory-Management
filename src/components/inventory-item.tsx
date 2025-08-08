"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InventoryItem } from "./dashboard";

interface InventoryItemCardProps {
  item: InventoryItem;
}

export function InventoryItemCard({ item }: InventoryItemCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>Quantity: {item.quantity}</CardDescription>
      </CardHeader>
      {item.description && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </CardContent>
      )}
    </Card>
  );
}