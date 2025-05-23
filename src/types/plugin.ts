export interface PluginData {
  id: number;
  name: string;
  link: string;
  approve: boolean;
  xmlId: string;
  description: string;
  customIdeList: boolean;
  preview: string;
  docText: string;
  email: string;
  cdate: number;
  family: string;
  downloads: number;
  vendor: {
    type: string;
    id: number;
    name: string;
    url: string;
    link: string;
    publicName: string;
    email: string;
    countryCode: string;
    country: string;
    isVerified: boolean;
    isTrader: boolean;
    description: string;
    showEmail: boolean;
  };
  urls: {
    url: string;
    forumUrl: string;
    licenseUrl: string;
    privacyPolicyUrl: string;
    bugtrackerUrl: string;
    docUrl: string;
    sourceCodeUrl: string;
    customContacts: Array<{
      title: string;
      link: string;
    }>;
  };
  tags: Array<{
    id: number;
    name: string;
    privileged: boolean;
    searchable: boolean;
    link: string;
  }>;
  hasUnapprovedUpdate: boolean;
  pricingModel: string;
  screens: Array<{
    url: string;
  }>;
  icon: string;
  semverOnly: boolean;
  isHidden: boolean;
  isMonetizationAvailable: boolean;
  isBlocked: boolean;
  isModificationAllowed: boolean;
}

export interface PluginRating {
  votes: Record<string, number>;
  meanVotes: number;
  meanRating: number;
}

export interface PluginInfo {
  pluginData: PluginData;
  pluginRating: PluginRating;
}
