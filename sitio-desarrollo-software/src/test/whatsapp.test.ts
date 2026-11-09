import { describe, expect, it } from "vitest";
import { whatsappLink } from "@/lib/whatsapp";

describe("WhatsApp contact", () => {
  it("sends students to the teacher's number 656 305 2299 with Mexico code", () => {
    expect(whatsappLink("hola")).toBe("https://wa.me/526563052299?text=hola");
  });
});
