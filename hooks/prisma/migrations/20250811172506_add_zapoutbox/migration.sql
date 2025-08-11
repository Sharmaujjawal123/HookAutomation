-- CreateTable
CREATE TABLE "public"."ZapRunOutbox" (
    "id" TEXT NOT NULL,
    "zapRunid" TEXT NOT NULL,

    CONSTRAINT "ZapRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZapRunOutbox_zapRunid_key" ON "public"."ZapRunOutbox"("zapRunid");

-- AddForeignKey
ALTER TABLE "public"."ZapRunOutbox" ADD CONSTRAINT "ZapRunOutbox_zapRunid_fkey" FOREIGN KEY ("zapRunid") REFERENCES "public"."ZapRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
