export function getIconForFeature(iconName: string) {
  // You would replace these with actual SVG icons
  switch (iconName) {
    case "autocomplete":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M7 14l5-5 5 5z" fill="currentColor" />
        </svg>
      );
    case "documentation":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"
            fill="currentColor"
          />
        </svg>
      );
    case "jsdoc":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            fill="currentColor"
          />
        </svg>
      );
    case "sorting":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}
