// Master configuration file for the website

// WhatsApp Configuration
// Format: country code + number without + or spaces
// Example: 6281234567890 for +62 812-3456-7890
export const WHATSAPP_NUMBER = "6281291044619";

// Phone Configuration
export const PHONE_NUMBER = "6287822629619";

// Function to create WhatsApp link with message
export function getWhatsAppLink(message?: string) {
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${encodedMessage}`;
}

// Function to create tel: link
export function getPhoneLink() {
  return `tel:+${PHONE_NUMBER}`;
}

// Function to format WhatsApp number for display
export function formatWhatsAppNumber(number: string = WHATSAPP_NUMBER) {
  // Convert 6281234567890 to +62 812-3456-7890
  return `+${number.slice(0, 2)} ${number.slice(2, 5)}-${number.slice(
    5,
    9
  )}-${number.slice(9)}`;
}
