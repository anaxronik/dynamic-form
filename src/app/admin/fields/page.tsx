import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Администрирование полей",
  description: "Создание и редактирование полей",
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Fields() {
  const items = await prisma.formField.findMany();

  return (
    <div>
      <div>Fields</div>
      <div>
        {items?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
