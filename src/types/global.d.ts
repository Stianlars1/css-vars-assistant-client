interface MarketplaceWidgetType {
  setupMarketplaceWidget: (
    type: "card" | "install",
    pluginId: number,
    elementSelector: string | HTMLElement,
  ) => void;
}

declare global {
  interface Window {
    MarketplaceWidget?: MarketplaceWidgetType;
  }
}

export {};
