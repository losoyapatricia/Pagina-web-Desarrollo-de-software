// Teacher's WhatsApp contact (Mexico, country code 52).
export const WHATSAPP_NUMBER = "526563052299";

export function whatsappLink(message = "Hola profe, soy alumno de TI y tengo una duda sobre desarrollo de software.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
