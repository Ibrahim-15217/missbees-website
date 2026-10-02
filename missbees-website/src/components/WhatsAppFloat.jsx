import restaurant from "../data/restaurant";

function WhatsAppFloat() {
  const url = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
    restaurant.whatsappMessage
  )}`;

  return (
    <a
      className="wa-float"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.7-1.3 1.3-1.8 1.4-.5.1-1.1.1-1.7-.1a10 10 0 0 1-1.5-.6c-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1-1.4-1-2.7s.7-1.9.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.2 0 .4-.1.2-.1.3-.3.5l-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.6.8 1.9.9.3.1.5.2.5.3.1.1.1.7-.1 1.4z" />
      </svg>
    </a>
  );
}

export default WhatsAppFloat;