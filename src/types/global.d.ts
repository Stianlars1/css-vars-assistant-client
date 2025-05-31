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
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      },
    ) => void;
    dataLayer: any[];
  }
}

export {};
